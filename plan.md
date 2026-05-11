# Plan — where we are, what's next

**Living doc.** Updated as work moves. Last touched 2026-05-11. Source of truth for "what should I do next" when picking the project back up.

---

## What's shipped (and pushed to GitHub)

Repo: https://github.com/wbp318/parker_compute

| | Artifact | Status |
|---|---|---|
| ✅ | `01_strategy.md` — founding strategy + positioning + 90-day plan | Live |
| ✅ | `02_pricing.md` — pricing primer, founder-rate playbook, scope-creep rules | Live |
| ✅ | `03_llc_checklist.md` — 10-step LA LLC formation with verified fees | Live |
| ✅ | `04_services.md` — canonical phase-by-phase service breakdown | Live |
| ✅ | Marketing site (Next.js 14 + Tailwind) — hero, services, FAQ, About | Source on GitHub; not deployed yet |
| ✅ | `/one-pager` route — printable sales sheet (US Letter) | Source on GitHub; not deployed yet |
| ✅ | `contracts/MSA_template.md` + `contracts/SOW_template.md` | DRAFT — needs LA attorney pass |
| ✅ | `tools/find_leads.py` — Google Places API lead generator | Needs API key to run |
| ✅ | `.gitignore`, `.gitattributes`, README | Live |

---

## Decisions blocking LLC filing

These three answers unlock filing the Articles of Organization. About 30 minutes of decision-making, then 30 minutes on GeauxBiz.

- [ ] **Registered agent:** be your own (free, home address public on SOS record) OR pay a service (~$125/year, private). Recommendation in `03_llc_checklist.md`: pay the service for year 1, switch later if cash gets tight.
- [ ] **Business address on public record:** home address, registered agent's address, or PO Box / virtual mailbox.
- [ ] **Domain available?** Check `parkeraiworks.com` at Cloudflare or Namecheap. Fallback ranking: `.ai`, `parker-aiworks.com`, rename if both gone.

---

## Queued / TODO

In rough priority order. Anything blocking client #1 is starred.

### Legal & entity (★ blocking client #1)
- [ ] File Articles of Organization at GeauxBiz ($105 online)
- [ ] Apply for EIN at irs.gov/ein (free, online, ~10 min)
- [ ] Call East Carroll Parish Police Jury at **318-559-1618** for occupational license details
- [ ] Open business bank account (Mercury or Relay if online, local bank if relationship)
- [ ] Sign Operating Agreement (template in `03_llc_checklist.md` § 10)
- [ ] ★ Get **MSA + SOW templates reviewed by a Louisiana attorney** ($500–$1,500 budget)
- [ ] ★ Get **E&O insurance** quote from Hiscox / Next / Thimble; bind before client #1 signs

### Web presence (★ blocking client #1)
- [ ] Buy `parkeraiworks.com` (Cloudflare or Namecheap, ~$12)
- [ ] Run `npm install` locally; commit the generated `package-lock.json`
- [ ] Deploy to Vercel: vercel.com → Import Project → `wbp318/parker_compute` → Deploy
- [ ] Add custom domain in Vercel project settings → update DNS at registrar
- [ ] Set up `hello@parkeraiworks.com` — Cloudflare Email Routing (free) routes to `bp3746@icloud.com`
- [ ] Replace `BOOKING_HREF` in `app/page.tsx` and `app/one-pager/page.tsx` with a real Calendly URL
- [ ] Drop real headshot at `public/william.jpg` and swap the About-section placeholder

### Sales & prospects
- [ ] Get a Google Places API key (Google Cloud Console → Places API New → free $200/mo credit)
- [ ] Run `tools/find_leads.py` for NE LA — generate first prospect CSV
- [ ] Identify 2 founder-rate prospects: 1 farm contact (warm), 1 other warm intro
- [ ] **For the law-firm contact: informational meeting only — no proposal, no pricing.** Reasons in `01_strategy.md` § 5 and `04_services.md` "A note on the law-firm vertical"
- [ ] Send first outreach email to founder-rate prospects: "I have 3 founder-discount slots at 50% off list price ($375 audit) in exchange for a written testimonial and an anonymized case study. Want one?"

### After client #1 lands
- [ ] Deliver well; capture testimonial + case study
- [ ] Add a Case Studies section to `app/page.tsx`
- [ ] Move to list-price ($750 / $2,500 / $1,500 / $2,000-mo) — no exceptions
- [ ] Build `tools/draft_cold_email.py` (Claude-powered email drafter for the lead CSV)

---

## Suggested order when you pick this back up

The shortest path from "no business" to "first client signed":

1. **30 minutes today.** Pick registered agent + address. Check domain. Buy domain if available.
2. **Day 1 (~1 hour total).** File Articles at GeauxBiz. Apply for EIN. Call East Carroll Parish Police Jury.
3. **Day 2 (~2 hours).** Open business bank account. Get E&O insurance quote. Run `npm install` and commit the lockfile.
4. **Day 3 (~3 hours).** Deploy to Vercel. Set up Calendly. Set up `hello@` email. Replace `BOOKING_HREF` in code and push.
5. **Days 4–7.** Get attorney to review MSA + SOW. Schedule the call now; the review is async on their side.
6. **Day 7.** Get Places API key. Run `find_leads.py` for 3 categories (farms, X, Y). Generate prospect CSV.
7. **Day 8.** Identify 2 specific warm-intro prospects. Draft personalized outreach emails. Send.
8. **Days 9–21.** Follow up. Book discovery calls. Send proposals (= SOW filled in). Sign first client at $375.

If you only have one hour right now: do step 1.

---

## Quick references

| | |
|---|---|
| **East Carroll Parish Police Jury** | **318-559-1618** · 409 2nd St., Suite 6, Lake Providence, LA 71254 |
| **LA SOS GeauxBiz** | https://geauxbiz.sos.la.gov |
| **EIN application** | https://www.irs.gov/ein |
| **LA SOS Fee Schedule** | https://www.sos.la.gov/BusinessServices/PublishedDocuments/332FeeSchedule.pdf |
| **Articles fee** | $105 online via GeauxBiz |
| **Annual report fee** | $30 online, due on formation anniversary |
| **Year-1 budget estimate** | $1,200–$2,000 out of pocket |
| **GitHub repo** | https://github.com/wbp318/parker_compute |

---

## Updating this doc

When you finish something, mark the checkbox and commit:
```powershell
git add plan.md
git commit -m "plan: completed <thing>"
git push
```

When new TODOs come up, add them in the right section. When priorities shift, re-order the "Suggested order" list. Treat this as the project status board — if Claude (or future-you) opens this repo cold, this should be the first file read.
