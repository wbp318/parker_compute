# tools/ — business tooling

Internal scripts for running Parker AI Works. Not part of the marketing site, not deployed anywhere.

## `find_leads.py` — lead generation via Google Places API

Pulls a CSV of local businesses, optionally filtered to ones without a website on their Google listing.

### Setup (once)

1. Install Python 3.10+ (if not already): https://www.python.org/downloads/
2. Install the one dependency:
   ```powershell
   pip install requests
   ```
3. Create a Google Cloud project and enable Places API (New):
   - Go to https://console.cloud.google.com
   - Create a project called e.g. `parker-ai-works-leads`
   - **APIs & Services → Library** → search "Places API (New)" → **Enable**
   - **APIs & Services → Credentials** → **Create Credentials → API Key**
   - Click **Edit** on the key → **Restrict key** → API restrictions → "Places API (New)"
   - Copy the key (starts with `AIza...`)
4. Set the env var in PowerShell:
   ```powershell
   $env:GOOGLE_PLACES_API_KEY = "AIza..."
   ```
   (For permanence, use System Properties → Environment Variables, or put it in your PowerShell profile.)

### Cost

Google gives every account **$200/month free credit** on Maps Platform. Text Search (Pro) calls — which is what this script uses — run about **$32 per 1,000 calls**. Each run of the script makes 1–3 API calls.

You will not approach the free tier prospecting northeast Louisiana. You'd have to run ~6,000 searches/month to spend a dollar.

### Usage examples

```powershell
# Businesses (any) within 80km of Lake Providence that have no website
python find_leads.py `
    --query "small business" `
    --lat 32.8084 --lng -91.1731 --radius-m 80000 `
    --no-website-only --out leads_lake_providence.csv

# Farms in northeast Louisiana without websites
python find_leads.py `
    --query "farm in northeast Louisiana" `
    --no-website-only --out farms_ne_la.csv

# Specific category in a specific town
python find_leads.py `
    --query "auto repair in Tallulah Louisiana" `
    --no-website-only --out auto_tallulah.csv

# Without the website filter — all matching businesses
python find_leads.py `
    --query "law firm in Monroe Louisiana" `
    --out law_firms_monroe.csv
```

### Reading the output

Columns:

| Column | What it is |
|---|---|
| `name` | Business name |
| `address` | Full formatted address |
| `phone` | National-format phone (often blank for small biz) |
| `website` | URL — **empty when filtered with `--no-website-only`** |
| `rating` | Google star rating, 1.0–5.0 |
| `reviews` | Number of Google reviews — a good proxy for "is this business real and active" |
| `types` | Google's category tags, pipe-separated |
| `status` | `OPERATIONAL`, `CLOSED_TEMPORARILY`, `CLOSED_PERMANENTLY` |
| `place_id` | Stable Google ID, useful for re-querying later |
| `maps_url` | Direct link to the Google Maps listing |

### How to actually use this for outreach

Don't just blast the CSV. Triage in three passes:

1. **Filter out the noise** — drop anything `CLOSED_PERMANENTLY`, anything with `0` reviews (probably not a real operation), and anything whose `types` makes no sense for your offer.
2. **Sort by reviews descending** — businesses with 30+ Google reviews are real, active, and likely have *something* worth working with. Start there.
3. **Look each one up.** Spend 60 seconds on each prospect: Google their name, check Facebook, see if they have *any* web presence. A "no website" lead with a healthy Facebook page is a different pitch ("you have customers — let's give them a real home") than one with nothing at all ("I bet you're losing calls").

### What NOT to do with this list

- **Don't cold-call from a robocall script.** It will burn the lead and your reputation in a tiny market.
- **Don't email blast.** Louisiana doesn't have its own anti-spam law but CAN-SPAM applies, and cold-blasting 200 small-business owners is the surest way to be remembered badly.
- **Don't sell the list.** Selling scraped contact data is its own legal hazard and torches your credibility.
- **Do use it as a personal outreach list** — drive over for a real visit, mention by name, point to one specific thing you noticed about their business.

### When this won't work

- Some small businesses don't have *any* Google listing. The script can't find them. Drive your county and write names down.
- The "no website" filter is "no website *on the Google listing*." A few businesses have a site but never updated their Google listing. False positives ~10-15%. Verify before pitching.

### Other tools that might land here later

- `draft_cold_email.py` — Claude-powered email drafter that reads the CSV and writes personalized intros
- `qualify_leads.py` — score each lead on Starter-Site fit vs Workflow-Pack fit
- `track_outreach.py` — append send/reply state so we don't message the same person twice
