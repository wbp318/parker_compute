import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowUpRight, MapPin } from "lucide-react";

// TODO: replace with real booking link once Calendly is set up
const BOOKING_HREF = "mailto:hello@parkeraiworks.com?subject=Discovery%20call";

const services = [
  {
    name: "AI Readiness Audit",
    price: "$750",
    timeline: "1 week",
    body: "A 30-minute interview, a review of three to five workflows you actually run, and a written report with prioritized opportunities and tool recommendations. The cheapest way to find out where this pays off for you.",
  },
  {
    name: "Workflow Pack",
    price: "$2,500",
    timeline: "2 weeks",
    body: "Three documented prompts, Claude Projects, or Custom GPTs built around one workflow you pick — proposals, customer email, listing copy, intake, whatever the biggest pain is. Includes one hour of training and a 30-day fix-it window.",
  },
  {
    name: "Team Training Workshop",
    price: "$1,500",
    timeline: "Half day",
    body: "Up to eight people, in-person or remote. Tools overview, hands-on with your real work, and an internal usage policy template your team can sign on day one. The fastest way to get everyone on the same page.",
  },
  {
    name: "Monthly Retainer",
    price: "$2,000/mo",
    timeline: "3-month minimum",
    body: "One new workflow built per month, ongoing email and Slack support, and a monthly review call. Capped at four clients at a time so the calendar stays real.",
  },
];

const verticals = [
  "Real estate",
  "Accounting & bookkeeping",
  "Healthcare admin",
  "Marketing agencies",
  "Farms & ag operations",
  "Legal (planned 2027)",
];

const steps = [
  {
    n: "01",
    title: "Free 20-minute call",
    body: "We talk about your business and where time goes. No pitch deck. If it's not a fit I'll tell you and point you somewhere better.",
  },
  {
    n: "02",
    title: "Audit",
    body: "I look at the work that actually piles up — emails, drafts, reports, research — and write a short report on what's worth automating and what isn't.",
  },
  {
    n: "03",
    title: "Build",
    body: "I set up the tools and prompts on the platforms you already pay for. Nothing custom-coded unless it has to be. Everything documented in plain English.",
  },
  {
    n: "04",
    title: "Train",
    body: "Your team learns to run it. You keep the documentation. If something breaks in the first 30 days, I fix it.",
  },
];

const faqs = [
  {
    q: "Will my company's data stay private?",
    a: "Yes. I set you up on enterprise plans — Claude for Work, ChatGPT Enterprise, or Microsoft Copilot — which don't train on your data and give you control over retention. For especially sensitive work I'll use local-only tools instead. Before we start anything, we sign a mutual confidentiality agreement.",
  },
  {
    q: "What tools do you actually use?",
    a: "Mainly Claude (Anthropic) and ChatGPT (OpenAI). Alongside those, whatever you already run in — Microsoft 365, Google Workspace, Zapier, Make, n8n, your CRM. I pick what fits, not what's trendy. If something already works for you, I don't rip it out.",
  },
  {
    q: "What if it doesn't work?",
    a: "Every Workflow Pack comes with a 30-day fix-it window where I rework anything that isn't doing its job. If after that you don't see value, I refund half the project fee. I'd rather you tell three friends I was fair than wave a contract.",
  },
  {
    q: "Do I need to know anything about AI?",
    a: "No. If you can write an email, you can use what I build. The whole point is to make this stuff useful to people who don't have time to read whitepapers.",
  },
  {
    q: "How do you handle confidential customer or patient information?",
    a: "Carefully. For regulated industries — healthcare, finance, eventually legal — I use enterprise tools with BAA-equivalent agreements and never paste raw client data into consumer chat tools. If your industry has rules, we work them out on the first call before any work starts.",
  },
  {
    q: "Where are you based? Do you travel?",
    a: "East Carroll Parish, Louisiana — about thirty miles from the Mississippi River. I work remotely with clients anywhere in the U.S. For in-person workshops I drive within a three-hour radius (Monroe, Shreveport, Jackson MS, Vicksburg, Little Rock). Further than that, we figure travel into the price.",
  },
];

export default function Page() {
  return (
    <main className="bg-cream text-ink">
      {/* nav */}
      <header className="border-b border-ink/5">
        <div className="container flex items-center justify-between py-5">
          <Link href="/" className="font-serif text-xl tracking-tight">
            Parker <span className="text-moss">AI Works</span>
          </Link>
          <nav className="hidden gap-8 text-sm text-ink-muted md:flex">
            <a href="#services" className="hover:text-ink">Services</a>
            <a href="#how" className="hover:text-ink">How it works</a>
            <a href="#about" className="hover:text-ink">About</a>
            <a href="#faq" className="hover:text-ink">FAQ</a>
          </nav>
          <Button asChild size="sm">
            <a href={BOOKING_HREF}>Book a call</a>
          </Button>
        </div>
      </header>

      {/* hero */}
      <section className="container pt-20 pb-24 md:pt-32 md:pb-36">
        <div className="flex items-center gap-2 text-sm text-ink-muted mb-8">
          <MapPin className="h-4 w-4" />
          <span>East Carroll Parish, Louisiana</span>
        </div>
        <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-balance md:text-7xl max-w-[18ch]">
          AI workflows for small businesses that <em className="text-moss not-italic">actually want them to work.</em>
        </h1>
        <p className="mt-8 max-w-[58ch] text-lg leading-relaxed text-ink-muted md:text-xl">
          I'm Tap Parker. I set up Claude, ChatGPT, and the tools that run alongside them — and I train your team to use them. No hype, no jargon, no demo that breaks in a week.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button asChild size="lg">
            <a href={BOOKING_HREF}>
              Book a free 20-minute call
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <a href="#services" className="text-sm text-ink-muted underline-offset-4 hover:text-ink hover:underline">
            See services & pricing
          </a>
        </div>
      </section>

      {/* services */}
      <section id="services" className="border-t border-ink/10 bg-cream-50">
        <div className="container py-24 md:py-32">
          <div className="mb-16 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.18em] text-moss">Services</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              Fixed scope, fixed price, fixed timeline.
            </h2>
            <p className="mt-5 text-lg text-ink-muted leading-relaxed">
              Four ways to work together. Pricing is the same whether you're in Lake Providence or Los Angeles. Hourly rates exist when scope is unclear — I prefer to make scope clear.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-xl bg-ink/10 md:grid-cols-2">
            {services.map((s) => (
              <article key={s.name} className="bg-cream p-8 md:p-10">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-2xl md:text-3xl">{s.name}</h3>
                  <div className="text-right">
                    <div className="font-serif text-xl text-moss">{s.price}</div>
                    <div className="text-xs uppercase tracking-wider text-ink-subtle">{s.timeline}</div>
                  </div>
                </div>
                <p className="mt-5 text-base leading-relaxed text-ink-muted">{s.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-12">
            <Button asChild variant="outline">
              <a href={BOOKING_HREF}>Talk about which one fits</a>
            </Button>
          </div>
        </div>
      </section>

      {/* who we serve */}
      <section className="border-t border-ink/10">
        <div className="container py-20 md:py-24">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-20">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-moss">Who I work with</p>
              <h2 className="mt-4 font-serif text-3xl leading-tight md:text-4xl">
                Small and mid-sized businesses across the South.
              </h2>
            </div>
            <div>
              <p className="text-lg text-ink-muted leading-relaxed max-w-[55ch]">
                If you have 2 to 50 employees and you spend more than ten hours a week on writing, email, research, or admin that feels like it should be faster, we should talk. The industries I've spent the most time in:
              </p>
              <ul className="mt-8 grid grid-cols-2 gap-x-8 gap-y-3 text-base">
                {verticals.map((v) => (
                  <li key={v} className="border-b border-ink/10 pb-3 text-ink">
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* how it works */}
      <section id="how" className="border-t border-ink/10 bg-cream-50">
        <div className="container py-24 md:py-32">
          <div className="mb-16 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.18em] text-moss">How it works</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              Four steps. No surprises.
            </h2>
          </div>
          <ol className="grid gap-12 md:grid-cols-2 md:gap-16">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-6">
                <span className="font-serif text-3xl text-moss/60 tabular-nums">{s.n}</span>
                <div>
                  <h3 className="font-serif text-2xl">{s.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-ink-muted max-w-[42ch]">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* about */}
      <section id="about" className="border-t border-ink/10">
        <div className="container py-24 md:py-32">
          <div className="grid gap-16 md:grid-cols-[1fr_1.4fr] md:gap-24">
            <div>
              <div className="aspect-[4/5] w-full max-w-sm rounded-xl bg-cream-200 border border-ink/10 flex items-center justify-center">
                {/* TODO: replace with real photo at /public/tap.jpg */}
                <span className="text-xs uppercase tracking-widest text-ink-subtle">Photo of Tap</span>
              </div>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-moss">About</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
                I'm Tap. I run Parker AI Works out of northeast Louisiana.
              </h2>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-muted max-w-[55ch]">
                <p>
                  I started using AI tools the way most business owners do: to handle the work that piles up after hours. Email drafts, marketing copy, research, vendor follow-ups, the things that eat a Saturday.
                </p>
                <p>
                  After a year of doing it for myself, I realized two things. The tools work better than most owners think. And almost nobody has the time to figure out <em>which</em> tools, <em>which</em> prompts, and <em>how</em> to keep them from going off the rails.
                </p>
                <p>
                  That's the job. I do it for you, write down how it works, and train your team so it sticks after I'm gone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* faq */}
      <section id="faq" className="border-t border-ink/10 bg-cream-50">
        <div className="container py-24 md:py-32">
          <div className="grid gap-16 md:grid-cols-[1fr_1.4fr] md:gap-24">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-moss">FAQ</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
                Questions worth asking before you hire anyone.
              </h2>
              <p className="mt-6 text-base text-ink-muted leading-relaxed max-w-[40ch]">
                If yours isn't here, ask on the call. I'd rather you have hard questions than vague ones.
              </p>
            </div>
            <div>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger>{f.q}</AccordionTrigger>
                    <AccordionContent>{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-ink/10 bg-moss text-cream">
        <div className="container py-24 md:py-32 text-center">
          <h2 className="font-serif text-4xl leading-tight md:text-6xl max-w-[24ch] mx-auto text-balance">
            Twenty minutes. No pitch deck.
          </h2>
          <p className="mt-6 text-lg text-cream/80 max-w-[50ch] mx-auto">
            Tell me what work piles up in your business. I'll tell you honestly whether AI can help — and if it can't, I'll say so.
          </p>
          <div className="mt-10">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-cream/30 bg-transparent text-cream hover:bg-cream hover:text-moss"
            >
              <a href={BOOKING_HREF}>
                Book a call
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="border-t border-ink/10 bg-cream">
        <div className="container py-12 flex flex-col gap-4 text-sm text-ink-subtle md:flex-row md:justify-between md:items-center">
          <div>
            <div className="font-serif text-lg text-ink">
              Parker <span className="text-moss">AI Works</span>
            </div>
            <div className="mt-1">East Carroll Parish, Louisiana</div>
          </div>
          <div className="flex flex-col gap-1 md:items-end">
            <a href={BOOKING_HREF} className="text-ink hover:text-moss">
              hello@parkeraiworks.com
            </a>
            <div>© {new Date().getFullYear()} Parker AI Works LLC</div>
          </div>
        </div>
      </footer>
    </main>
  );
}
