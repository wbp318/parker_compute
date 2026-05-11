# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

The operations repo for **Parker AI Works, L.L.C.** — an AI workflow consulting business owned by **William Parker**, based in East Carroll Parish, Louisiana. The repo holds both the marketing site (Next.js) and the *business itself*: founding strategy, pricing playbook, LA LLC formation checklist, service deep-dive, draft contracts, and lead-gen tooling. Not a template, not open source.

## Read these first, in order

1. **`plan.md`** — living status board. Read this before doing anything else. It's the only file that tells you what's done, what's blocked, and what the human should do next.
2. **`README.md`** — repo-level orientation, brand reference, file tree.
3. **`04_services.md`** — canonical source for what each service consists of. **All service descriptions on the website, in the one-pager, in proposals, and in any new doc must derive from this file.** When a service is redefined, update `04_services.md` first, then propagate.
4. **`01_strategy.md` / `02_pricing.md` / `03_llc_checklist.md`** — strategy, pricing methodology, legal entity setup. Reference as needed.

## Commands

```powershell
# Marketing site (Next.js 14 App Router)
npm install                # first time only — commit package-lock.json after
npm run dev                # http://localhost:3000  + /one-pager
npm run build              # production build (Vercel runs this on push)
npm run lint               # next lint

# Lead generation
$env:GOOGLE_PLACES_API_KEY = "AIza..."
python tools/find_leads.py --query "<text>" --no-website-only --out leads.csv
# See tools/README.md for Places API setup and cost notes.
```

There is no test suite, no CI yet. If you add tests, prefer Vitest + Testing Library and document the runner in this file when you do.

## Architecture pattern: canonical Markdown, derived TSX

Content has one source of truth — a Markdown doc — and the website/PDF/contracts derive from it:

| Domain | Source of truth (edit first) | Derives (update after) |
|---|---|---|
| Service definitions | `04_services.md` | `app/page.tsx` `services` array · `app/one-pager/page.tsx` `services` · `01_strategy.md` § 3 |
| Pricing numbers | `02_pricing.md` (current ladder) | `04_services.md` table · `app/page.tsx` services array · `app/one-pager/page.tsx` services · README quick-facts |
| Brand colors / fonts | `tailwind.config.ts` | Everything (never hardcode hex; use `bg-moss`, `text-ink`, etc.) |
| LA formation facts (fees, contacts) | `03_llc_checklist.md` (verify with web search before changing) | `plan.md` quick-references · README mentions |

When you change a number or a service in one place, search the repo for its old value and update everywhere it appeared, or the surfaces will drift.

## What's deployed vs. what isn't

Only `app/`, `components/`, `lib/`, `public/`, and the configs at the root ship to Vercel. The following directories live in the repo but are **not deployed**:

- `contracts/` — client contract templates (DRAFT, requires LA attorney review pass before any real use)
- `tools/` — internal Python scripts
- `*.md` at root — strategy and business docs

The `/one-pager` route at `app/one-pager/` *is* deployed and intentionally `robots: noindex` so it doesn't compete with the home page.

## Printable routes pattern

`app/one-pager/page.tsx` is a server component that renders a US-Letter-sized layout; `app/one-pager/print-button.tsx` is a small client component for `window.print()`. Print CSS lives in `app/globals.css` (`@media print`). When adding more printable docs (proposals, case studies), follow this pattern — server-rendered content + tiny client island for the print trigger. Do not move the entire route to client-only.

## Operating rules (from feedback memory)

These are absolute:

- **The founder's name is William Parker.** Never "Tap." The path `C:\Users\Tap Parker Farms\...` is a Windows account name, not a name preference. If you find "Tap" anywhere in a doc or code, fix it on the spot.
- **Every commit gets pushed in the same turn.** Chain `git commit && git push` — never leave commits sitting local. Rural Louisiana power outages are the stated reason.
- **Contracts in `contracts/` are DRAFT.** Every change keeps the "DRAFT — NOT FOR USE WITHOUT LICENSED LOUISIANA ATTORNEY REVIEW" banner. Don't soften it.

## Style for new code

- Tailwind utility-first; no CSS modules, no styled-components.
- Use the brand tokens from `tailwind.config.ts` (cream / ink / moss / clay). The aesthetic is "calm Southern professional, not SaaS-bro" — no gradients, glow effects, or default dark mode.
- Fonts come from `next/font/google` in `app/layout.tsx` (Inter body, Fraunces display). Use `font-serif` for headings, default sans for body.
- Use `lucide-react` for icons. shadcn/ui primitives in `components/ui/` — only add ones we actually use.

## Working with the human

- Exploratory questions get a short recommendation + the main tradeoff, not a full plan. Wait for confirmation before building.
- William is an intermediate AI hobbyist — explain what's happening at the level of "what does this command do" when introducing new tooling, but skip basic dev concepts.
- The law-firm vertical is **Phase 3 (8–12 months out)**, not Phase 0. Any plan that puts law firms before SMB case studies is wrong by default — push back.
