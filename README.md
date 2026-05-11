# Parker AI Works

Marketing site for Parker AI Works — AI workflow consulting for small businesses.

Stack: Next.js 14 (App Router) · TypeScript · Tailwind CSS · shadcn/ui primitives (Button, Accordion) · Vercel.

## Run locally

```powershell
# one-time
npm install

# dev
npm run dev
# open http://localhost:3000
```

> The first `npm install` generates `package-lock.json`. Commit that lockfile so Vercel builds reproducibly.

## Deploy

Easiest path:

1. Push this repo to GitHub (already done — `wbp318/parker_compute`).
2. Go to https://vercel.com → "Add New… → Project" → import the repo.
3. Vercel auto-detects Next.js. No env vars needed for v0.
4. Hit Deploy. You'll get a `parker-compute.vercel.app` URL in ~60 seconds.
5. Later: buy `parkeraiworks.com` (Cloudflare or Namecheap), then in Vercel → Project Settings → Domains, add it.

## Editing content

Almost everything lives in `app/page.tsx` — services, FAQ, copy, the four-step flow. Edit those arrays at the top of the file.

Color palette and fonts live in `tailwind.config.ts`. Cream / moss-green / charcoal is intentional — calm, Southern, not techy. If you change it, change it on purpose.

## TODOs before launch

- [ ] Replace `BOOKING_HREF` (top of `app/page.tsx`) with a real Calendly URL once you set one up.
- [ ] Drop a real headshot at `public/tap.jpg` and swap the placeholder block in the About section.
- [ ] Set up `hello@parkeraiworks.com` (Google Workspace $7/mo or Cloudflare Email Routing — free).
- [ ] Buy the domain. Confirm `parkeraiworks.com` is available — fall back to `.ai` or `parkeraiwork.com` if not.
- [ ] Add a real privacy/terms page before any contact form goes live (template: termly.io free tier).
- [ ] Once you have client #1, add a Case Studies section between "How it works" and "About."

## What it looks like

One long page, six sections:

1. Hero (name, value prop, MapPin, CTA)
2. Services & pricing (4 productized offerings in a 2×2 grid)
3. Who I work with (industry list)
4. How it works (4-step process)
5. About (photo + 3 paragraphs)
6. FAQ (Radix accordion)
7. Big-moss-green CTA block
8. Footer

All copy is in the file. No CMS. When you want one, swap to MDX or Sanity — but not before that's the actual bottleneck.
