import { Helmet } from "react-helmet-async";
import heroImage from "@/assets/sales-sync/hero-office-new.jpg";
import shivaamiLogo from "@/assets/sales-sync/shivaami-logo.png";
import googleCloudLogo from "@/assets/sales-sync/google-cloud-logo.png";
import {
  Check,
  TrendingUp,
  Clock,
  ShieldAlert,
  Database,
  Search,
  MessageSquare,
  Calendar,
  Video,
  BarChart3,
  UserPlus,
  Cog,
  Award,
  Network,
} from "lucide-react";

const FORM_URL =
  "https://forms.zohopublic.in/shivaami5231/form/GeminiEnterpriseWorkshopBuildYourAgenticWorkforce1/formperma/0mzmPIZGJ6hH7VX0ZNA0yfPWhlss4oMF8IPJW-24htc";

const brandStyle = {
  ["--brand-navy" as never]: "#0C4594",
  ["--brand-blue" as never]: "#38B6FF",
  ["--brand-red" as never]: "#e2231a",
} as React.CSSProperties;

export default function SalesSync() {
  return (
    <div className="min-h-screen bg-white text-foreground font-sans" style={brandStyle}>
      <Helmet>
        <title>Gemini Enterprise + Salesforce | Shivaami</title>
        <meta
          name="description"
          content="Turn Salesforce into a revenue engine with Gemini Enterprise AI agents. Delivered by Shivaami, Premier Google Cloud Partner."
        />
        <link rel="canonical" href="https://www.shivaami.com/sales-sync" />
        <meta property="og:title" content="Gemini Enterprise + Salesforce | Shivaami" />
        <meta
          property="og:description"
          content="Connect Gemini Enterprise agents directly into Salesforce for forecast precision, seller capacity and pipeline risk."
        />
        <meta property="og:url" content="https://www.shivaami.com/sales-sync" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
        />
      </Helmet>
      <Header />
      <Hero />
      <CapabilityMatrix />
      <BlindSpots />
      <KnowledgeBase />
      <TeamBenefits />
      <ShivaamiPillars />
      <AboutShivaami />
      <LeadForm />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="flex w-full items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-12">
        <a href="#top" className="flex items-center">
          <img src={shivaamiLogo} alt="Shivaami" className="h-8 w-auto sm:h-10" />
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-[color:var(--brand-navy)] md:flex">
          <a href="#knowledge-base" className="transition-colors hover:text-[color:var(--brand-blue)]">
            Knowledge Base Advantage
          </a>
          <a href="#team-benefits" className="transition-colors hover:text-[color:var(--brand-blue)]">
            See How Teams Benefit
          </a>
          <a href="#capability-matrix" className="transition-colors hover:text-[color:var(--brand-blue)]">
            Capability Matrix
          </a>
        </nav>
        <a href="#top" className="flex items-center">
          <img src={googleCloudLogo} alt="Google Cloud" className="h-6 w-auto sm:h-8" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-[color:var(--brand-navy)]">
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        width={1920}
        height={1080}
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(12,69,148,0.92) 0%, rgba(12,69,148,0.78) 55%, rgba(21,101,192,0.55) 100%)",
        }}
      />
      <div className="relative w-full px-4 py-20 sm:px-6 sm:py-28 lg:px-12 lg:py-36">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            Turn Salesforce into a Revenue Engine with{" "}
            <span className="text-[#7ed4ff]">Gemini Enterprise</span> AI Agents
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            Connect Gemini Enterprise agents directly into Salesforce to turn your system of
            record into an autonomous execution engine for forecast precision, seller capacity
            and pipeline risk.
          </p>

          <ul className="mt-7 space-y-3">
            {[
              "Forecast accuracy improves to 95%",
              "Active selling time increases by 30%",
              "Sales cycle leaks reduce by 25%",
            ].map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30">
                  <Check className="h-4 w-4 text-white" />
                </span>
                <span className="text-base font-medium text-white">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-[color:var(--brand-red)] px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-black/20 transition hover:bg-[color:var(--brand-red)]/90 hover:shadow-xl"
            >
              Request a 15 min briefing
            </a>
          </div>

          <p className="mt-6 text-xs font-medium uppercase tracking-wider text-white/70">
            Premier Google Cloud Partner · Google Workspace Diamond Partner
          </p>
        </div>
      </div>
    </section>
  );
}

function CapabilityMatrix() {
  return <div id="capability-matrix" className="-mt-1" />;
}

function BlindSpots() {
  const cards = [
    {
      icon: TrendingUp,
      tag: "Forecast Accuracy",
      problem:
        "Reps update Salesforce manually from memory. Pipeline data is lagging and subjective.",
      solutionTitle: "Forecast you can stand behind.",
      solutionBody:
        "Agents read live emails, meetings and calendar invites, then update Salesforce on hard buyer signals.",
    },
    {
      icon: Clock,
      tag: "Revenue Velocity",
      problem:
        "70% of a rep's day is admin and app-switching. Selling time gets squeezed.",
      solutionTitle: "More hours, more pipeline.",
      solutionBody:
        "An in-workflow co-pilot writes follow-ups, logs activity and surfaces the next best action where reps already work.",
    },
    {
      icon: ShieldAlert,
      tag: "Pipeline Leakage",
      problem:
        "Enterprise deals collapse late because risk signals went unseen until the renewal.",
      solutionTitle: "Protected revenue, end to end.",
      solutionBody:
        "Agents flag missing CFO, Security and Legal stakeholders, plus at-risk accounts, weeks before they slip.",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-[color:var(--brand-navy)] sm:text-4xl lg:text-5xl">
            Three blind spots costing you every quarter
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Gemini Enterprise agents inside Salesforce unlock measurable gains in accuracy,
            productivity and retention.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.tag}
                className="flex flex-col rounded-2xl border border-border bg-white p-7 shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--brand-red)]/10">
                  <Icon className="h-6 w-6 text-[color:var(--brand-red)]" />
                </div>
                <p className="mt-5 text-xs font-bold uppercase tracking-wider text-[color:var(--brand-blue)]">
                  {c.tag}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.problem}</p>
                <div className="mt-5 border-t border-border pt-5">
                  <h3 className="text-lg font-bold text-[color:var(--brand-navy)]">
                    {c.solutionTitle}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                    {c.solutionBody}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function KnowledgeBase() {
  const cards = [
    {
      icon: Database,
      title: "Unifies every revenue signal",
      body:
        "Indexes Salesforce, Gmail, Outlook, Calendar, Slack, Zoom, Gong, Outreach, HubSpot, ZoomInfo and LinkedIn Sales Navigator into one searchable knowledge layer.",
    },
    {
      icon: Search,
      title: "Grounded in your own data",
      body:
        "Answers, summaries and forecasts come only from your connected systems, with citations back to the source.",
    },
    {
      icon: MessageSquare,
      title: "Ask anything, get an answer",
      body:
        "Query in plain English: deal status, stakeholder maps, similar wins, objection patterns and methodology gaps.",
    },
  ];

  return (
    <section id="knowledge-base" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-[color:var(--brand-blue)]">
            Gemini Enterprise Knowledge Base
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[color:var(--brand-navy)] sm:text-4xl lg:text-5xl">
            How Gemini Enterprise agents build your revenue knowledge base
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            One agent layer across Salesforce, inbox, calendar and your prospecting stack.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="group rounded-2xl border border-border bg-gradient-to-b from-[#f4fbff] to-white p-7 transition hover:border-[color:var(--brand-blue)]/40 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--brand-blue)]/10 text-[color:var(--brand-blue)]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-[color:var(--brand-navy)]">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/80">{c.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TeamBenefits() {
  const items = [
    {
      icon: Calendar,
      title: "Before every meeting",
      body:
        "A complete account brief from Salesforce, email and meetings, ready in seconds.",
    },
    {
      icon: Video,
      title: "After every online meeting",
      body: "Zero-touch CRM updates and follow-up emails drafted automatically.",
    },
    {
      icon: BarChart3,
      title: "Before forecast reviews",
      body: "Deals interrogated against real buyer engagement, not rep stage moves.",
    },
    {
      icon: MessageSquare,
      title: "In coaching sessions",
      body:
        "Specific moments from specific online meetings surfaced for managers. Evidence-backed coaching.",
    },
    {
      icon: UserPlus,
      title: "When a new rep joins",
      body:
        "Day-one access to plays, patterns and proof points your top reps built over years.",
    },
  ];

  return (
    <section id="team-benefits" className="bg-[#f4fbff] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12">
        <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight text-[color:var(--brand-navy)] sm:text-4xl lg:text-5xl">
          How you and your sales team benefit
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <div
                key={it.title}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-border transition hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[color:var(--brand-red)]/10 text-[color:var(--brand-red)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-[color:var(--brand-navy)]">
                    {it.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">{it.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ShivaamiPillars() {
  const pillars = [
    {
      icon: Cog,
      title: "Custom agents and connectors",
      body:
        "We engineer AI agents and API connectors around your data schema and revenue workflows, not generic templates.",
    },
    {
      icon: Award,
      title: "Google-funded pilots",
      body:
        "As a Premier Google Cloud and Diamond Workspace Partner, we unlock funding to subsidize workshops and pilots.",
    },
    {
      icon: Network,
      title: "Unified multi-stack sync",
      body:
        "Salesforce coordinated with your inbox, calendar and prospecting tools into one execution layer.",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12">
        <h2 className="max-w-4xl text-3xl font-extrabold tracking-tight text-[color:var(--brand-navy)] sm:text-4xl lg:text-5xl">
          Your autonomous revenue engine, operationalized by Google's Premier Cloud Partner
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="rounded-2xl border-2 border-border bg-white p-7 transition hover:border-[color:var(--brand-red)]/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--brand-navy)] text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-[color:var(--brand-navy)]">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/80">{p.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AboutShivaami() {
  const badges = [
    "Google Cloud Partner - Services",
    "Google Cloud Partner - Co-Sell Ready",
    "Google Workspace Diamond Partner",
  ];
  return (
    <section className="bg-[color:var(--brand-navy)] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12">
        <p className="text-xs font-bold uppercase tracking-widest text-[color:var(--brand-blue)]">
          About Shivaami
        </p>
        <p className="mt-4 text-lg leading-relaxed text-white/90 sm:text-xl">
          Shivaami is a Premier Google Cloud Partner with a team of experts trained by Google.
          With 22 years of experience, Shivaami has served 20,000+ customers across diverse
          industries, empowering organizations to make their IT ecosystem smarter, safer and
          smoother through secure Cloud and AI solutions. Learn more at{" "}
          <a
            href="https://www.shivaami.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[color:var(--brand-blue)] underline-offset-4 hover:underline"
          >
            www.shivaami.com
          </a>
          .
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {badges.map((b) => (
            <span
              key={b}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white"
            >
              <Award className="h-4 w-4 text-[color:var(--brand-blue)]" />
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadForm() {
  const items = [
    "Get a 30-minute live tutorial of Gemini Enterprise inside Salesforce",
    "Start a 30-day free Gemini Enterprise trial",
    "Receive a custom Salesforce connector configured for your org",
    "Custom connectors for Slack, HubSpot, Outreach, LinkedIn Sales Navigator, Zoom and ZoomInfo on request",
  ];
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12">
        <div className="overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-[#f4fbff] via-white to-[#fff4f3] p-8 shadow-xl sm:p-12">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-[color:var(--brand-navy)] sm:text-4xl">
                Request a 15 min briefing
              </h2>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                A focused session for revenue leaders. Walk away with a working trial and a clear
                path to scale predictable revenue.
              </p>
              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center justify-center rounded-lg bg-[color:var(--brand-red)] px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-[color:var(--brand-red)]/20 transition hover:bg-[color:var(--brand-red)]/90"
              >
                Request a 15 min briefing
              </a>
            </div>
            <div className="rounded-2xl bg-white p-6 ring-1 ring-border sm:p-7">
              <p className="text-xs font-bold uppercase tracking-widest text-[color:var(--brand-blue)]">
                What you get
              </p>
              <ul className="mt-4 space-y-3">
                {items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[color:var(--brand-blue)]/15">
                      <Check className="h-3.5 w-3.5 text-[color:var(--brand-blue)]" />
                    </span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const socials = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/shivaami/",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "X",
      href: "https://twitter.com/shivaami",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/shivaamicloudservices",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/shivaamicloudservices/",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/channel/UC_OaXTk92jPn_u1ewMA5Frg",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="border-t border-border bg-white py-10">
      <div className="flex w-full flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-12">
        <img src={shivaamiLogo} alt="Shivaami" className="h-9 w-auto" />
        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--brand-navy)]/10 text-[color:var(--brand-navy)] transition hover:bg-[color:var(--brand-navy)] hover:text-white"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}