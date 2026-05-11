"""
find_leads.py — Find local businesses (optionally: without websites) via
the Google Places API (New).

Why this script exists
----------------------
Two use cases for Parker AI Works:
  1. "Starter Site" prospecting — businesses without a website are
     candidates for a $750-1500 simple site build.
  2. AI Workflow Pack prospecting — any local SMB in a target category
     is a candidate for an audit.

We use the *official* Google Places API (New) — not SERP scraping.
SERP scraping is against Google's ToS, gets your IP banned, and breaks
every time Google ships a layout change. Places API costs money past
the free tier but is stable, legal, and structured.

Setup (one time)
----------------
  1. Go to https://console.cloud.google.com
  2. Create a project (e.g. "parker-ai-works-leads")
  3. APIs & Services → Library → enable "Places API (New)"
  4. APIs & Services → Credentials → Create Credentials → API Key
  5. Restrict the key to "Places API (New)" only
  6. Set the env var:
        $env:GOOGLE_PLACES_API_KEY = "AIza..."   (PowerShell)
        export GOOGLE_PLACES_API_KEY=AIza...      (bash)

Cost
----
  Free tier: $200/month credit (~5,000 Text Search (Pro) calls)
  Each run of this script makes 1–3 API calls per `--max-pages`.
  For prospecting NE Louisiana you will not approach the free tier.

Example runs
------------
  # Businesses without websites within 80km of Lake Providence
  python find_leads.py \\
      --query "small business" \\
      --lat 32.8084 --lng -91.1731 --radius-m 80000 \\
      --no-website-only --out leads_lake_providence.csv

  # Farms in northeast Louisiana that don't have websites
  python find_leads.py \\
      --query "farm in northeast Louisiana" \\
      --no-website-only --out farms_ne_la.csv

  # Specific category in a specific town
  python find_leads.py \\
      --query "auto repair in Tallulah Louisiana" \\
      --no-website-only --out auto_tallulah.csv

Output
------
  CSV with columns: name, address, phone, website, rating, reviews,
  types, status, place_id, maps_url.
"""

import argparse
import csv
import json
import os
import sys
import time
from typing import Iterator, Optional

import requests


PLACES_API_URL = "https://places.googleapis.com/v1/places:searchText"

# Field mask — we only pay for the fields we ask for. Order is irrelevant.
# Including websiteUri + phoneNumber puts us in the "Pro" SKU (~$32/1000 calls
# after the free $200/mo credit).
FIELD_MASK = ",".join([
    "places.id",
    "places.displayName",
    "places.formattedAddress",
    "places.nationalPhoneNumber",
    "places.websiteUri",
    "places.googleMapsUri",
    "places.businessStatus",
    "places.types",
    "places.rating",
    "places.userRatingCount",
    "nextPageToken",
])


def text_search(
    api_key: str,
    query: str,
    location_bias: Optional[dict] = None,
    page_token: Optional[str] = None,
    page_size: int = 20,
) -> dict:
    """Single call to places:searchText. Returns the parsed JSON response."""
    headers = {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": api_key,
        "X-Goog-FieldMask": FIELD_MASK,
    }
    body: dict = {"textQuery": query, "pageSize": page_size}
    if location_bias:
        body["locationBias"] = location_bias
    if page_token:
        body["pageToken"] = page_token

    response = requests.post(PLACES_API_URL, headers=headers, json=body, timeout=20)
    if response.status_code != 200:
        sys.stderr.write(
            f"\nAPI error {response.status_code}:\n{response.text}\n"
        )
        response.raise_for_status()
    return response.json()


def iter_places(
    api_key: str,
    query: str,
    location_bias: Optional[dict] = None,
    max_pages: int = 3,
) -> Iterator[dict]:
    """Yield place dicts across up to max_pages of paginated results."""
    token: Optional[str] = None
    for page_num in range(max_pages):
        data = text_search(api_key, query, location_bias, token)
        places = data.get("places", []) or []
        for place in places:
            yield place
        token = data.get("nextPageToken")
        if not token:
            return
        # Google requires a short delay before the page token activates.
        time.sleep(2)


def place_to_row(place: dict) -> dict:
    return {
        "name": (place.get("displayName") or {}).get("text", ""),
        "address": place.get("formattedAddress", ""),
        "phone": place.get("nationalPhoneNumber", ""),
        "website": place.get("websiteUri", ""),
        "rating": place.get("rating", ""),
        "reviews": place.get("userRatingCount", ""),
        "types": "|".join(place.get("types", []) or []),
        "status": place.get("businessStatus", ""),
        "place_id": place.get("id", ""),
        "maps_url": place.get("googleMapsUri", ""),
    }


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Find local businesses via the Google Places API (New)."
    )
    parser.add_argument(
        "--query", required=True,
        help='Text query, e.g. "auto repair in Tallulah Louisiana"',
    )
    parser.add_argument("--lat", type=float, help="Bias center latitude")
    parser.add_argument("--lng", type=float, help="Bias center longitude")
    parser.add_argument(
        "--radius-m", type=int, default=50000,
        help="Bias radius in meters (default 50000 = 50km)",
    )
    parser.add_argument(
        "--no-website-only", action="store_true",
        help="Filter to businesses whose Places listing has no website URI",
    )
    parser.add_argument(
        "--max-pages", type=int, default=3,
        help="Pages of results to pull (each ~20 results, max 3 per Google)",
    )
    parser.add_argument(
        "--out", default="leads.csv",
        help="Output CSV path (default: leads.csv)",
    )
    parser.add_argument(
        "--json-out", default=None,
        help="Optional: also write raw JSON to this path",
    )
    args = parser.parse_args()

    api_key = os.environ.get("GOOGLE_PLACES_API_KEY")
    if not api_key:
        sys.stderr.write(
            "ERROR: set GOOGLE_PLACES_API_KEY in your environment.\n"
            "  PowerShell:  $env:GOOGLE_PLACES_API_KEY = \"AIza...\"\n"
            "  Bash:        export GOOGLE_PLACES_API_KEY=AIza...\n"
        )
        return 1

    location_bias: Optional[dict] = None
    if args.lat is not None and args.lng is not None:
        location_bias = {
            "circle": {
                "center": {"latitude": args.lat, "longitude": args.lng},
                "radius": args.radius_m,
            }
        }

    rows: list[dict] = []
    raw: list[dict] = []
    for place in iter_places(api_key, args.query, location_bias, args.max_pages):
        if args.no_website_only and place.get("websiteUri"):
            continue
        rows.append(place_to_row(place))
        raw.append(place)

    fieldnames = [
        "name", "address", "phone", "website", "rating", "reviews",
        "types", "status", "place_id", "maps_url",
    ]
    with open(args.out, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)

    if args.json_out:
        with open(args.json_out, "w", encoding="utf-8") as f:
            json.dump(raw, f, indent=2)

    print(f"Wrote {len(rows)} leads to {args.out}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
