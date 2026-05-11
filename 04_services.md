# Services — Deep Breakdown

**For:** Parker AI Works clients and prospects
**Drafted:** 2026-05-11
**Source of truth** for what each service actually consists of. The website, one-pager, and contracts all reference this document.

---

## At a glance

| # | Service | Price | Timeline | Best for |
|---|---|---|---|---|
| 1 | AI Readiness Audit | **$750** | 1 week | "I don't know where to start" |
| 2 | Workflow Pack | **$2,500** | 2 weeks | "I know what's slow — fix it" |
| 3 | Team Training Workshop | **$1,500** | Half day | "My team needs to use this too" |
| 4 | Monthly Retainer | **$2,000/mo** | 3-month min | "Build me a new one every month" |

Founder-rate slots (first 3 clients only): 50% off each — see [`02_pricing.md`](./02_pricing.md).

---

## 1. AI Readiness Audit — $750

A structured diagnostic that maps where AI helps a *specific* business — and where it doesn't. The output is a written report the client can act on with or without me.

### What this is

Most AI consulting offers are dressed-up sales pitches. This is not. The audit's job is to give you an honest, prioritized list of opportunities ranked by ROI, with tool recommendations and a 90-day roadmap. About 30–50% of audit clients convert to a Workflow Pack — that's a fair conversion, not a forced one. If the audit concludes AI doesn't help your business yet, the report says that.

### Phases

**Phase 1 — Intake (Days 1–2)**
- 30-minute discovery call: business overview, biggest time sinks, current tool stack, who works on what
- Asynchronous intake questionnaire (~20 questions): industry, size, current tool stack, regulatory constraints (HIPAA, attorney-client, PCI, etc.), past AI experimentation, budget signals, decision-making structure

**Phase 2 — Workflow walkthrough (Days 3–4)**
- 60–90 minute screen-share where you walk me through your 3–5 most time-consuming workflows in real context
- I take notes on inputs, decision points, outputs, frequency, who does it, what they hate, what they wish was automatic

**Phase 3 — Analysis (Days 4–5)**
- Each workflow is scored on three axes:
  - **Time saved per execution** (minutes/hours)
  - **Frequency** (daily / weekly / monthly)
  - **Risk if AI gets it wrong** (low / medium / high)
- Composite ROI = time saved × frequency ÷ risk
- Tool match per workflow: Claude, ChatGPT, Custom GPT, Claude for Work, M365 Copilot, automation platform (Zapier/Make/n8n), or off-the-shelf vertical AI tool

**Phase 4 — Report + readout (Days 5–7)**
- 6–10 page written report delivered as PDF
- 30-minute readout call to walk you through findings

### What you receive

- 30-minute discovery call + structured intake questionnaire
- 60–90 minute workflow walkthrough on screen-share
- Workflow-by-workflow scoring (time × frequency ÷ risk)
- 6–10 page written report containing:
  - Executive summary (top 3 recommendations)
  - Current state assessment
  - Workflow-by-workflow analysis with priority score
  - Tool recommendations with monthly cost estimates
  - 90-day roadmap with rough effort estimates
  - "Quick wins" you can implement yourself vs. things that need help
  - Risks and what to avoid
- 30-minute readout call

### What success looks like

- You leave with a clear, prioritized list within 7 days
- You can act on at least 2 of the recommendations without further help
- If you convert to a Workflow Pack, scope is already 80% defined

### What this is NOT

- A sales pitch dressed up as an audit
- A canned slide deck of "best practices"
- A demo of ChatGPT
- A commitment to build anything

### Choose this when

You haven't yet committed to a specific AI workflow but you know your team is wasting hours. Cheapest way to get clarity before spending more.

---

## 2. Workflow Pack — $2,500

Build one production-ready workflow your team uses on day one — not a demo, not an experiment.

### What this is

The fastest path from "AI sounds useful" to "AI is saving us five hours a week." Three documented prompts, one training session, and a 30-day fix-it window so you're not on your own when something needs tuning.

### Phases

**Phase 1 — Discovery (Days 1–3)**
- Kickoff call to align on scope (which workflow, success criteria, who'll use it)
- I collect 5–10 real examples of input + ideal output from your past work
- I map the workflow: trigger → steps → output → who reviews
- We agree on acceptance criteria: how do we know it's working?

**Phase 2 — Build (Days 4–9)**
- Set up in your existing AI platform — Claude for Work, ChatGPT Enterprise, or M365 Copilot. **Never consumer ChatGPT** for business data.
- Three prompts / Claude Projects / Custom GPTs built and tuned:
  - Primary task (e.g., draft the email)
  - Quality-check variant (e.g., review the draft for missing pieces)
  - Edge-case handler (e.g., what to do with unusual inputs)
- Iteration against your real examples until output matches your "ideal"
- Guardrails: structure requirements, refusal patterns for off-task inputs, citation/source requirements where relevant

**Phase 3 — Documentation (Days 10–11)**
- 5-page PDF user guide:
  - When to use each prompt
  - Step-by-step usage instructions
  - How to verify the output before relying on it
  - What to do when the output is wrong
  - Common pitfalls and how to avoid them
- 1-page internal usage policy: what data is OK to input, retention rules, attribution

**Phase 4 — Training (Day 12)**
- 60-minute training session for up to 4 team members
- We run the workflow with real cases together
- Session is recorded for future reference / new hires
- Q&A

**Phase 5 — Fix-it window (Days 13–43)**
- 30-day window where I rework anything that isn't doing its job
- Two proactive check-ins (Day 14 and Day 30): "how's it going, anything to tune?"
- Real fixes, not "have you tried turning it off and on"

### What you receive

- Working workflow shipped in your existing tools (no platform lock-in to me)
- Three prompts/Projects/GPTs: primary, quality-check, edge-case
- 5-page PDF user guide
- 1-page internal AI usage policy template
- 60-minute training session for up to 4 people (recorded)
- 30-day fix-it window with two proactive check-ins

### What success looks like

- Workflow is run 10+ times by your team in the first 2 weeks after training
- Time savings of 50% or more on the chosen task
- At least 2 of 3 trained team members can run it without me in the room

### What this is NOT

- Custom code, API integrations, or RAG pipelines (separate engagement, not yet offered)
- A chatbot on your website (separate engagement, not yet offered)
- Anything requiring direct access to your database
- A free-for-all "build me anything" — scope is locked at one workflow

### Choose this when

You have one specific painful workflow and you want it fixed. If you have three painful workflows, pick the worst one — get it working — then decide whether to do another Workflow Pack or a Retainer.

---

## 3. Team Training Workshop — $1,500

Get an entire team productive with AI in a single afternoon.

### What this is

A hands-on workshop that takes a team from "I've heard of ChatGPT" to "I'm using it confidently on my actual work" in 3–4 hours. Each person leaves with a personal cheat sheet, the team leaves with a signed internal AI usage policy.

### Phases

**Pre-workshop (1–2 days before)**
- 15-minute scoping call with the workshop sponsor: team composition, current tools, 2–3 real work examples per person
- Pre-read sent to all attendees: 2-page intro to capabilities and risks (~20 minutes of homework)

**Workshop (3–4 hours)**

| Block | Duration | What happens |
|---|---|---|
| 1. Tools and capabilities | 45 min | What Claude / ChatGPT / Copilot actually do (and don't). The hallucination problem and how to spot it. Cost and tier comparison. Live demos. |
| 2. Hands-on with real work | 60 min | Each person works one of their real tasks with AI. I circulate and coach. We capture what worked and what didn't on a shared doc. |
| 3. Patterns and prompts library | 45 min | 10–15 reusable prompt patterns for your team's work. Each person leaves with a personal cheat sheet. |
| 4. Policy and rollout | 30 min | Walk through internal usage policy template, discuss data rules, sign the policy. |
| 5. Q&A and next steps | 15 min | Open questions and per-person commitments. |

### What you receive

- 15-minute pre-workshop scoping call
- 2-page pre-read for attendees
- 3–4 hour workshop for up to 8 team members
- Full workshop recording (for future hires)
- Per-person prompt cheat sheets (PDF)
- Signed internal AI usage policy
- 1-page follow-up email summarizing what was covered and per-person commitments

### What success looks like

- All trained team members are using AI on at least one task within 1 week
- Policy is signed and posted internally
- Your team has a shared vocabulary for talking about AI work going forward

### What this is NOT

- A canned generic deck (every workshop is customized to your team's actual work)
- A lecture (it's mostly hands-on)
- 1-on-1 training (group dynamics are part of the value)

### Format

- **Remote** — Zoom or Meet with breakout rooms for hands-on practice
- **In-person** — travel within 3 hours of Lake Providence at no extra cost (Monroe, Shreveport, Jackson MS, Vicksburg, Little Rock); beyond that, travel billed at cost with prior approval

### Choose this when

Your team is bigger than 3 people and you want everyone aligned, not just one person ahead. Also: when you want a written policy on AI use before things get messy.

---

## 4. Monthly Retainer — $2,000/mo (3-month minimum)

Ongoing partnership: one new workflow per month plus operational support of everything I've built for you before.

### What this is

The Workflow Pack relationship, stretched. Each month you get a new workflow shipped at the same quality standard, plus I keep the lights on for everything we've shipped before. Capped at four clients at a time so calendar attention stays real.

### Monthly cadence

| Week | What happens |
|---|---|
| 1 | **Scoping call** — pick next month's workflow, define acceptance criteria, gather examples |
| 2 | **Build** — same standard as a Workflow Pack but lower friction since we share context |
| 3 | **Build** — iterate against your real cases |
| 4 | **Review call** — walk through what shipped, plan next month, review usage stats on prior work |

### Ongoing across all weeks

- Email and Slack support, response within 1 business day
- Bug fixes to any prior workflow, no separate billing
- "Is this an AI problem?" triage to keep your team from wasting an hour debugging Claude when it's a connectivity issue
- Quarterly health-check of all deployed workflows: usage, what's getting used, what isn't, what needs tuning

### What you receive

- One new workflow built and shipped per month (same quality bar as Workflow Pack)
- Monthly scoping and review calls
- Email and Slack support (1 business day response)
- Bug fixes to any prior workflow at no separate charge
- Quarterly review of all deployed workflows
- "Is this an AI problem?" triage for the team

### What success looks like

Two equally good outcomes:
- After 12 months, your team can identify and prototype workflows on their own, and you cancel. You graduated.
- After 12 months, you renew and refer two more clients to me. You've made the math work.

### What this is NOT

- Major platform rollouts (custom code, RAG pipelines, agents) — those are separate SOWs at separate pricing
- New-hire training (use the workshop recordings I made you)
- After-hours emergency work — available at **$200/hour** if requested

### Why 3-month minimum

- Month 1 is ramp-up — context-sharing, learning your business
- Month 2 establishes rhythm
- Month 3 is where compounding starts — each new workflow is faster because context is shared

1-month trials don't actually demonstrate the value of the partnership.

### Why capped at 4 clients

- 4 clients × $2k/mo = $8k MRR floor with margin to take 1–2 Workflow Packs alongside
- Real attention requires real time. A 20-retainer firm pretending to give each client attention is not a thing I'm building.

### Choose this when

You've completed at least one Workflow Pack and you want to keep going without the friction of re-scoping a new contract each time. Or: you have so many workflows you want to systematically work through them.

---

## How to pick

- **No idea where to start →** AI Readiness Audit
- **Know exactly which workflow is slow →** Workflow Pack
- **Team needs to be on the same page →** Training Workshop
- **You want me on speed dial →** Retainer

Most clients start with Audit → Workflow Pack → Retainer in that order over 6–9 months. The Audit qualifies the engagement; the Pack proves the work; the Retainer compounds it.

Some clients combine: an Audit *and* a Training Workshop in the first month is a common pairing for teams of 5+ — covers both the strategy and the team alignment at once.

---

## Bundles (optional)

- **Get Started** — Audit + Workflow Pack: $3,000 (save $250)
- **Team Foundation** — Audit + Training: $2,000 (save $250)
- **Full Onboarding** — Audit + Workflow Pack + Training: $4,250 (save $500)

Bundles are only offered when scoped on the discovery call. Don't list them on the public website.

---

## Out of scope (across all services)

These are not currently offered. Some will become services in Phase 2 (months 5–9); some may never be:

- Custom AI agents in production
- RAG pipelines integrated with client databases
- Building or modifying client-side software
- Anything requiring access to a client's source code repository
- Legal, medical, financial, or other licensed-profession advice
- Compliance certifications (SOC 2, HIPAA, etc. — I help you use compliant tools, I don't certify your systems)
- Trial periods or free pilots — the Audit serves that purpose at $750

---

## A note on the law-firm vertical

Working with law firms is a **Phase 3 target** (8–12 months out). Until then, conversations with attorneys are *informational only* — no engagement, no scope, no proposal. The reasons are in [`01_strategy.md`](./01_strategy.md) § 5; the prerequisites are:

1. Three SMB case studies live
2. E&O insurance with cyber liability rider
3. A documented eval process for prompts
4. (Ideally) an attorney or paralegal as an advisor or co-author of the legal-vertical SOPs

If a law firm asks for work today, the correct response is: "I'd love to do this work, and I will. Today I'd be a worse choice than a firm that already specializes here — let me earn it. Here's what I'm doing to get there, and here's what I'd love to learn from you about how attorneys actually use AI today."
