import Link from "next/link";
import type { Metadata } from "next";
import { PrintButton } from "./print-button";

export const metadata: Metadata = {
  title: "Parker AI Works — Services & Pricing",
  description: "Printable one-pager for prospective clients.",
  robots: { index: false, follow: false },
};

// TODO: when this duplicates with app/page.tsx more than twice, extract
// to lib/content.ts. For now, deliberate duplication so changes to the
// home page can't accidentally mis-shape the sales sheet.
const services = [
  {
    name: "AI Readiness Audit", price: "$750", timeline: "1 week",
    short: "30-minute interview, review of 3–5 of your workflows, written report with prioritized opportunities and tool recommendations. The cheapest way to find out where this pays off.",
    bullets: [
      "Discovery call + intake questionnaire",
      "Screen-share workflow walkthrough",
      "6–10 page written report (PDF)",
      "30-min readout call",
    ],
  },
  {
    name: "Workflow Pack", price: "$2,500", timeline: "2 weeks",
    short: "Build one production-ready workflow your team uses on day one — not a demo. Three documented prompts, one hour of training, and a 30-day fix-it window.",
    bullets: [
      "3 prompts in your existing AI platform",
      "PDF user guide + usage policy",
      "60-min training, up to 4 (recorded)",
      "30-day fix-it window",
    ],
  },
  {
    name: "Team Training Workshop", price: "$1,500", timeline: "Half day",
    short: "Get an entire team productive with AI in a single afternoon. Hands-on with real work, an internal usage policy signed before everyone leaves.",
    bullets: [
      "3–4 hours, up to 8 people",
      "Hands-on with each person's real work",
      "Per-person prompt cheat sheets",
      "Signed usage policy + recording",
    ],
  },
  {
    name: "Monthly Retainer", price: "$2,000/mo", timeline: "3-month minimum",
    short: "One new workflow per month, support for everything I've built before, monthly review call. Capped at four clients so calendar attention stays real.",
    bullets: [
      "New workflow shipped each month",
      "1-business-day support + bug fixes",
      "Monthly review with usage stats",
      "Quarterly health-check",
    ],
  },
];

export default function OnePagerPage() {
  return (
    <main className="bg-cream-200 min-h-screen py-8 print:bg-white print:py-0">
      {/* Screen-only nav — hidden when printing */}
      <div className="container mb-6 flex items-center justify-between print:hidden">
        <Link href="/" className="text-sm text-ink-muted hover:text-ink underline-offset-4 hover:underline">
          ← Back to site
        </Link>
        <PrintButton />
      </div>

      {/* The sheet itself — sized for US Letter */}
      <article className="mx-auto bg-cream print:bg-white shadow-lg print:shadow-none w-full max-w-[8.5in] min-h-[11in] px-10 py-10 print:px-[0.6in] print:py-[0.5in]">
        {/* Letterhead */}
        <header className="flex items-baseline justify-between border-b border-ink/15 pb-5">
          <div>
            <div className="font-serif text-3xl tracking-tight leading-none">
              Parker <span className="text-moss">AI Works</span>
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.18em] text-ink-subtle">
              AI workflow consulting · East Carroll Parish, Louisiana
            </div>
          </div>
          <div className="text-right text-xs text-ink-muted leading-relaxed">
            <div>hello@parkeraiworks.com</div>
            <div>parkeraiworks.com</div>
          </div>
        </header>

        {/* Value prop */}
        <section className="pt-7 pb-6">
          <h1 className="font-serif text-3xl leading-[1.15] tracking-tight max-w-[26ch]">
            AI workflows for small businesses that <em className="text-moss not-italic">actually want them to work.</em>
          </h1>
          <p className="mt-4 text-[0.95rem] text-ink-muted leading-relaxed max-w-[62ch]">
            I'm William Parker. I set up Claude, ChatGPT, and the tools that run alongside them — and I train your team to use them. Fixed scope, fixed price, fixed timeline. No retainer creep. No demo that breaks in a week.
          </p>
        </section>

        {/* Services */}
        <section className="pt-1">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-moss mb-3">Services & pricing</p>
          <div className="divide-y divide-ink/10 border-y border-ink/10">
            {services.map((s) => (
              <div key={s.name} className="py-3">
                <div className="flex items-baseline justify-between gap-6">
                  <div className="font-serif text-lg leading-tight">{s.name}</div>
                  <div className="text-right shrink-0">
                    <div className="font-serif text-base text-moss leading-none">{s.price}</div>
                    <div className="text-[0.62rem] uppercase tracking-wider text-ink-subtle mt-1">{s.timeline}</div>
                  </div>
                </div>
                <div className="text-[0.78rem] text-ink-muted mt-1 leading-snug">{s.short}</div>
                <ul className="mt-1.5 grid grid-cols-2 gap-x-4 text-[0.68rem] text-ink-muted">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-1.5 py-0.5 leading-snug">
                      <span className="text-moss leading-none mt-[0.18rem] shrink-0">·</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="pt-6">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-moss mb-3">How it works</p>
          <ol className="grid grid-cols-4 gap-4 text-[0.82rem] text-ink-muted leading-snug">
            <li>
              <span className="font-serif text-base text-ink block leading-tight">1. Call</span>
              <span className="block mt-1">20 minutes, free, no pitch deck</span>
            </li>
            <li>
              <span className="font-serif text-base text-ink block leading-tight">2. Audit</span>
              <span className="block mt-1">Written report on where AI helps</span>
            </li>
            <li>
              <span className="font-serif text-base text-ink block leading-tight">3. Build</span>
              <span className="block mt-1">Set up, document, hand over</span>
            </li>
            <li>
              <span className="font-serif text-base text-ink block leading-tight">4. Train</span>
              <span className="block mt-1">Your team learns to run it</span>
            </li>
          </ol>
        </section>

        {/* Trust + CTA block */}
        <section className="mt-7 rounded-lg bg-moss px-6 py-5 text-cream flex flex-col sm:flex-row items-baseline justify-between gap-3 print:rounded-md">
          <div>
            <div className="font-serif text-lg leading-tight">Book a free 20-minute call</div>
            <div className="text-[0.82rem] text-cream/80 mt-1">No pitch deck. Honest assessment of whether AI helps you or not.</div>
          </div>
          <div className="text-[0.82rem] text-cream/90 font-medium">hello@parkeraiworks.com</div>
        </section>

        {/* Footer */}
        <footer className="mt-6 pt-4 border-t border-ink/10 text-center text-[0.7rem] text-ink-subtle tracking-wide">
          © {new Date().getFullYear()} Parker AI Works, L.L.C. · East Carroll Parish, Louisiana · Confidentiality and 30-day fix-it window included with every Workflow Pack
        </footer>
      </article>
    </main>
  );
}
