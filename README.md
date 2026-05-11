# Parker AI Works

> AI workflow consulting for small businesses. Set up, trained, and documented in plain English. Based in East Carroll Parish, Louisiana — working remotely with clients across the U.S.

This repo is the **operating system** for Parker AI Works, LLC. It holds the marketing site, the founding strategy, pricing playbook, Louisiana LLC formation checklist, and internal business tooling (lead generation, etc.). Treat it as both the company's source of truth and the company's source of code.

---

## Table of contents

- [What's in this repo](#whats-in-this-repo)
- [The business — quick facts](#the-business--quick-facts)
- [Strategy docs](#strategy-docs)
- [Marketing site](#marketing-site)
  - [Stack](#stack)
  - [Run locally](#run-locally)
  - [Deploy to Vercel](#deploy-to-vercel)
  - [Editing content](#editing-content)
  - [Brand reference](#brand-reference)
- [Tools](#tools)
  - [find_leads.py — Google Places lead generator](#find_leadspy--google-places-lead-generator)
- [Roadmap](#roadmap)
- [Pre-launch checklist](#pre-launch-checklist)
- [Contact](#contact)

---

## What's in this repo

```
parker_compute/
├── 01_strategy.md          # Positioning, services, 90-day plan
├── 02_pricing.md           # How to price, friends-rate, scope creep rules
├── 03_llc_checklist.md     # Step-by-step LA LLC formation (with current fees)
├── README.md               # You are here
│
├── app/                    # Next.js 14 App Router — marketing site source
│   ├── layout.tsx          # Root layout + Google Fonts (Inter + Fraunces)
│   ├── page.tsx            # All site content (hero, services, FAQ, etc.)
│   └── globals.css         # Tailwind base + body styles
│
├── components/
│   └── ui/                 # shadcn/ui primitives (only what we actually use)
│       ├── accordion.tsx   # FAQ
│       └── button.tsx      # CTAs
│
├── lib/
│   └── utils.ts            # cn() — Tailwind class merger
│
├── tools/                  # Internal business tooling — NOT deployed
│   ├── README.md           # Setup + usage for each tool
│   └── find_leads.py       # Google Places lead generator (CSV output)
│
├── package.json            # Site dependencies (Next, React, Tailwind, Radix)
├── tailwind.config.ts      # Brand palette (cream / moss / ink) + fonts
├── tsconfig.json
├── next.config.mjs
├── postcss.config.mjs
├── .gitignore              # Standard Node + lead CSVs (privacy)
└── .gitattributes          # Linguist hints — all languages counted
```

---

## The business — quick facts

| | |
|---|---|
| **Legal name** | Parker AI Works, L.L.C. (pending) |
| **Founder** | Tap Parker |
| **HQ** | East Carroll Parish, Louisiana |
| **Reach** | Remote U.S.-wide; in-person workshops within ~3 hours of Lake Providence |
| **Phase 0 services** | AI Readiness Audit ($750), Workflow Pack ($2,500), Team Training ($1,500), Retainer ($2,000/mo) |
| **Phase 0 lead price** | $375 audit, $1,250 pack (founder-discount, first 3 clients only, in exchange for testimonial + case study) |
| **Target verticals (now)** | Real estate, accounting, healthcare admin, marketing agencies, farms/ag |
| **Target verticals (Phase 3, 8–12 mo out)** | Legal — after case studies + E&O + cyber insurance are in place |

For the full strategic picture, read [`01_strategy.md`](./01_strategy.md). For pricing reasoning and the friends-rate playbook, read [`02_pricing.md`](./02_pricing.md). For the legal entity setup with verified Louisiana fees, read [`03_llc_checklist.md`](./03_llc_checklist.md).

---

## Strategy docs

These are the three documents that define how the business is run. Read them in order.

### 1. [`01_strategy.md`](./01_strategy.md) — Founding strategy
Positioning, name, service productization, Louisiana LLC formation overview, sales collateral plan, working-with-law-firms cautions, a realistic 90-day milestone plan, and red-flag behaviors to watch for in yourself.

### 2. [`02_pricing.md`](./02_pricing.md) — Pricing from zero
How to think about price (cost-plus vs market vs value), what the AI consulting market actually pays in 2026, the first-ten-clients rule, the 3-phase price ladder, when hourly is a trap, and a scope-creep playbook (SOW deliverables + change orders).

### 3. [`03_llc_checklist.md`](./03_llc_checklist.md) — Louisiana LLC formation
10-step checklist with current SOS fees ($105 online), the East Carroll Parish Police Jury contact for the occupational license (318-559-1618), Operating Agreement template, EIN application, bank account setup, E&O insurance, and a Year-1 budget summary (~$1,200–$2,000 out of pocket).

---

## Marketing site

Single-page Next.js app. Live URL: _(set after first Vercel deploy)_. Source URL: `app/page.tsx` — almost everything lives in one file.

### Stack

- **Framework:** [Next.js 14 (App Router)](https://nextjs.org/docs)
- **Language:** TypeScript (strict mode)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **Components:** [Radix UI](https://www.radix-ui.com) primitives via shadcn/ui pattern (we use Button + Accordion only)
- **Icons:** [Lucide](https://lucide.dev)
- **Fonts:** Inter (body) + Fraunces (display) — loaded via `next/font/google`
- **Hosting:** Vercel (free tier — Hobby plan covers everything until ~100k requests/month)
- **Domain:** TBD — buy `parkeraiworks.com` (Cloudflare or Namecheap, ~$12/yr)

### Run locally

```powershell
# Windows PowerShell — first time
npm install
# day to day
npm run dev
```

Open http://localhost:3000.

> **Note for first install:** `npm install` will generate `package-lock.json`. **Commit that lockfile** — Vercel and any future contributor depend on it for reproducible builds.

### Deploy to Vercel

1. Go to https://vercel.com and sign in with GitHub
2. **Add New → Project** → import `wbp318/parker_compute`
3. Vercel detects Next.js. Defaults are correct. No env vars needed.
4. **Deploy** — you'll have a `parker-compute-*.vercel.app` URL in ~60 seconds
5. **Custom domain:** Project Settings → Domains → add `parkeraiworks.com` (after you buy it). Update DNS at your registrar to point at Vercel.

Every push to `main` re-deploys automatically. Every push to a non-`main` branch gets a preview URL (great for trying a redesign before merging).

### Editing content

All content lives in `app/page.tsx`. Edit the constants at the top:

| Edit this constant | Section it controls |
|---|---|
| `BOOKING_HREF` | The "Book a call" link target — swap for Calendly when ready |
| `services` | The four service cards (name, price, timeline, body) |
| `verticals` | Industry list under "Who I work with" |
| `steps` | The four-step process |
| `faqs` | FAQ accordion (q + a pairs) |

For more involved changes (new section, different layout), the JSX is sectioned with HTML comments — search for `{/* services */}`, `{/* about */}`, etc.

**Photo of Tap:** drop a real image at `public/tap.jpg` (any aspect ratio works; CSS handles cropping) and update the placeholder block in the About section to use `<Image src="/tap.jpg" .../>`.

### Brand reference

Defined in `tailwind.config.ts` — change in one place, propagates everywhere.

| Token | Hex | Use |
|---|---|---|
| `cream` | `#FAF7F2` | Default background |
| `cream-50` | `#FDFCFA` | Section backgrounds (alternating) |
| `cream-200` | `#F1ECE0` | Subtle fills, buttons hover |
| `cream-300` | `#E5E0D5` | Dividers |
| `ink` | `#1B1B1F` | Headings, primary text |
| `ink-muted` | `#4A4A52` | Body copy |
| `ink-subtle` | `#6B6B72` | Captions, footer |
| `moss` | `#3F5C3A` | Accent — buttons, links, eyebrows |
| `moss-dark` | `#2E4429` | Button hover |
| `moss-light` | `#5A7A55` | (reserved) |
| `clay` | `#A8654B` | (reserved — Phase 2 niche color if needed) |

| Type | Font | Where |
|---|---|---|
| Display | Fraunces (Google) | All headings |
| Body | Inter (Google) | Everything else |

Aesthetic direction: **calm Southern professional, not SaaS-bro.** No gradients, no glow effects, no dark mode for v1. The site should feel like a well-made small-town shop's storefront — confident, grounded, easy to enter.

---

## Tools

Internal scripts for running the business. Not deployed. Not part of the marketing site.

### `find_leads.py` — Google Places lead generator

Pulls a CSV of local businesses from the official Google Places API (New), optionally filtered to those without a `websiteUri` on their Google listing. Two use cases:

1. **Starter Site prospects** — businesses with no website → pitch a $750–$1,500 simple site build
2. **Workflow Pack prospects** — any SMB in a target category in your region

**Why API, not SERP scraping:** Google's ToS prohibit automated scraping of search results, and any scraper breaks the moment Google changes its layout. The Places API is the supported, paid path — and the first $200/month of Maps Platform usage is free, which covers ~5,000 Text Search calls. You will not approach that cap.

**Setup, cost, and usage:** see [`tools/README.md`](./tools/README.md).

**Quick example** (PowerShell):
```powershell
$env:GOOGLE_PLACES_API_KEY = "AIza..."

# Farms in NE Louisiana with no website on their Google listing
python tools/find_leads.py `
    --query "farm in northeast Louisiana" `
    --no-website-only --out farms_ne_la.csv
```

Output: `farms_ne_la.csv` with columns name, address, phone, website, rating, reviews, types, status, place_id, maps_url.

### Tools coming later (not built yet)

- `draft_cold_email.py` — feed in a lead CSV + an offer, get back a personalized cold email per row (uses Claude)
- `qualify_leads.py` — score each lead on Starter-Site fit vs. Workflow-Pack fit
- `track_outreach.py` — local SQLite or CSV to record sent / replied / booked state so you never message the same person twice

---

## Roadmap

### Now — Pre-launch
- [x] Strategy doc
- [x] Pricing doc
- [x] LLC checklist (with verified LA fees)
- [x] Marketing site v1 (Next.js)
- [x] Lead generator (Google Places API)
- [x] `.gitattributes` + `.gitignore` configured

### Next 2 weeks
- [ ] File LA Articles of Organization ($105)
- [ ] Get EIN (free)
- [ ] Call East Carroll Parish Police Jury for occupational license details
- [ ] Buy domain `parkeraiworks.com`
- [ ] Deploy site to Vercel
- [ ] Set up `hello@parkeraiworks.com` (Cloudflare Email Routing — free)
- [ ] Get E&O insurance quote (Hiscox / Next / Thimble)
- [ ] Identify 2 founder-rate prospects (1 law firm = informational only, 1+ farms = real pitch)

### Month 1
- [ ] Land first founder-rate client at $375 audit
- [ ] Replace `BOOKING_HREF` with real Calendly link
- [ ] Add real headshot to About section
- [ ] Draft MSA + SOW templates (then get LA attorney to review — $500)

### Month 2–3
- [ ] Deliver client #1, secure testimonial + case study permission
- [ ] Land founder-rate clients #2 and #3
- [ ] Write first anonymized case study, add Case Studies section to site
- [ ] Move to list-price ($750 / $2,500 / $1,500 / $2,000-mo)

### Month 3–6
- [ ] First list-price clients
- [ ] Build `draft_cold_email.py` and `qualify_leads.py`
- [ ] Identify the vertical your case studies are clustering in
- [ ] Get cyber liability insurance quote (needed before any healthcare or pre-legal work)

### Month 6+
- [ ] 2× prices to "real" rate ($1,500 / $5,000 / $3,000 / $3,500-mo)
- [ ] Consider rebrand around chosen vertical
- [ ] Begin legal vertical outreach (only after E&O + cyber are locked, and 3+ case studies exist)

---

## Pre-launch checklist

The order to actually work through this:

1. **This week:** name search, GeauxBiz account, buy domain, call East Carroll Parish Police Jury
2. **Next week:** file Articles of Organization, apply for EIN, open business bank account
3. **Within 14 days of LLC formation:** get E&O insurance quote, sign Operating Agreement
4. **Before client #1 signs anything:** attorney reviews your MSA + SOW templates
5. **Before client #1 starts:** Vercel deploy is live, `hello@` email works, Calendly is set up

Don't skip step 4. The $500 attorney review is the cheapest insurance you'll buy.

---

## Contact

- **Email:** hello@parkeraiworks.com _(to be set up — currently route email to `bp3746@icloud.com` via Cloudflare)_
- **Site:** _(after Vercel deploy)_
- **GitHub:** [wbp318/parker_compute](https://github.com/wbp318/parker_compute)

---

## License

Private. All rights reserved. Code in this repo is not licensed for reuse — it powers a real business and is not a template.
