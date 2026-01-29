import Image from "next/image";

const stats = [
  { label: "Local chapters", value: "24+" },
  { label: "Volunteer hours", value: "18K+" },
  { label: "Funds directed", value: "$1.2M" },
];

const pillars = [
  {
    title: "Equity first",
    body: "We center communities who are closest to the challenge and furthest from resources.",
  },
  {
    title: "Radical transparency",
    body: "From intake to impact, every decision and dollar is traceable.",
  },
  {
    title: "Everyday heroes",
    body: "You do not need a foundation to change the world. You just need to start.",
  },
];

const initiatives = [
  {
    icon: "/globe.svg",
    title: "Community Equity Funds",
    body: "Micro‑grants to grassroots groups led by women, youth, and marginalized communities.",
  },
  {
    icon: "/window.svg",
    title: "Skills for Justice",
    body: "Designers, engineers, and operators volunteering their craft to power local campaigns.",
  },
  {
    icon: "/file.svg",
    title: "Stories that Shift Power",
    body: "Storytelling labs that amplify lived experience and challenge the status quo.",
  },
];

const waysToJoin = [
  {
    title: "Donate monthly",
    body: "Give what you can, when you can. 100% of community gifts go to equity initiatives.",
    action: "Start a monthly gift",
  },
  {
    title: "Volunteer your skills",
    body: "Join a project team in product, data, operations, or storytelling.",
    action: "Offer your skills",
  },
  {
    title: "Start a local circle",
    body: "Bring Hala Equity Heroes to your campus, company, or neighborhood.",
    action: "Launch a circle",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF8EE] via-[#E6F3FF] to-[#15162b] text-slate-900">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#FFF8EE]/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400/10 text-sm font-semibold text-emerald-300 ring-1 ring-emerald-400/40">
              HE
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-tight">
                Hala Equity Heroes
              </p>
              <p className="text-xs text-zinc-400">
                A community of everyday changemakers
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-zinc-300 sm:flex">
            <a href="#mission" className="hover:text-emerald-300">
              Mission
            </a>
            <a href="#initiatives" className="hover:text-emerald-300">
              Initiatives
            </a>
            <a href="#join" className="hover:text-emerald-300">
              Get involved
            </a>
            <a href="#faq" className="hover:text-emerald-300">
              FAQ
            </a>
          </nav>
          <a
            href="#join"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-zinc-900 shadow-sm shadow-emerald-500/40 transition hover:bg-emerald-300"
          >
            Join as a Hero
          </a>
        </div>
      </header>

      <main className="pb-16 pt-10 sm:pt-16">
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-6 pb-14 pt-8">
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 px-3 py-1 text-xs font-medium text-emerald-700">
              Community-powered • Equity-focused • Transparent
            </p>
            <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Fuel local equity work,
              <span className="text-emerald-600"> together.</span>
            </h1>
            <p className="max-w-xl text-pretty text-sm leading-relaxed text-slate-700 sm:text-base">
              Hala Equity Heroes is a community-based charity that directs time,
              skills, and resources to grassroots leaders advancing gender,
              racial, economic, and educational equity. No gatekeeping. No
              saviorism. Just people showing up for each other.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#join"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-emerald-500/40 transition hover:bg-emerald-400"
              >
                Get involved today
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-emerald-500/30 px-5 py-2.5 text-sm font-medium text-emerald-700 transition hover:border-emerald-500 hover:text-emerald-800"
              >
                See how it works
              </a>
            </div>
            <div className="mt-4 flex flex-wrap gap-6 text-xs text-slate-600">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-sm font-semibold text-emerald-600">
                    {stat.value}
                  </p>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section id="mission" className="mt-10 bg-[#E6F3FF]/80 py-14 sm:py-16">
          <div className="mx-auto max-w-5xl px-6">
            <div className="max-w-3xl space-y-3">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                A community-led charity for real equity work.
              </h2>
              <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
                Traditional philanthropy often leaves the most impacted people
                out of the room. Hala Equity Heroes flips the script by moving
                decisions, resources, and storytelling power into the hands of
                community organizers, educators, caregivers, and youth leaders.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-2xl border border-sky-100 bg-white/80 p-3 shadow-sm shadow-sky-200/60"
                >
                  <h3 className="text-[13px] font-semibold tracking-tight text-slate-900">
                    {pillar.title}
                  </h3>
                  <p className="mt-1 text-[11px] leading-relaxed text-slate-700">
                    {pillar.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section
          id="how-it-works"
          className="mt-10 bg-gradient-to-b from-[#E6F3FF] via-[#DBEAFE] to-[#C7D2FE] py-14 sm:py-16"
        >
          <div className="mx-auto max-w-5xl px-6">
            <div className="max-w-3xl space-y-3">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                How Hala Equity Heroes works.
              </h2>
              <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
                We keep the model simple, transparent, and accountable, so you
                always know how your contribution is moving the needle.
              </p>
            </div>
            <ol className="mt-6 space-y-4 text-sm text-slate-900">
              <li className="flex gap-4">
                <span className="mt-1 h-7 w-7 shrink-0 rounded-full bg-emerald-400 text-center text-sm font-semibold text-zinc-900">
                  1
                </span>
                <div>
                  <p className="font-semibold">Listen to local priorities.</p>
                  <p className="mt-1 text-xs text-slate-700">
                    Community partners share what equity work looks like where
                    they live – from mutual aid to legal clinics to
                    storytelling collectives.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="mt-1 h-7 w-7 shrink-0 rounded-full bg-emerald-400 text-center text-sm font-semibold text-zinc-900">
                  2
                </span>
                <div>
                  <p className="font-semibold">Match heroes to initiatives.</p>
                  <p className="mt-1 text-xs text-slate-700">
                    Volunteers, donors, and circles choose projects that align
                    with their values, capacity, and skills.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="mt-1 h-7 w-7 shrink-0 rounded-full bg-emerald-400 text-center text-sm font-semibold text-zinc-900">
                  3
                </span>
                <div>
                  <p className="font-semibold">Fund, build, and report back.</p>
                  <p className="mt-1 text-xs text-slate-700">
                    Resources flow directly to partners, with regular updates,
                    impact notes, and space for reflection shared back to the
                    community.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* Initiatives */}
        <section
          id="initiatives"
          className="mt-10 bg-gradient-to-b from-[#C7D2FE] via-[#6366F1] to-[#312E81] py-14 text-slate-50 shadow-[0_20px_80px_rgba(15,23,42,0.6)] sm:py-16"
        >
          <div className="mx-auto max-w-5xl px-6">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div className="max-w-2xl space-y-3">
                <h2 className="text-2xl font-semibold tracking-tight">
                  Current community initiatives.
                </h2>
                <p className="text-sm leading-relaxed text-indigo-100 sm:text-base">
                  These are a few of the live areas where Heroes are currently
                  showing up — with funding, mentorship, and hands-on builds.
                </p>
              </div>
              <p className="text-xs text-indigo-100/80">
                New initiatives are proposed by community partners on a rolling
                basis.
              </p>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-6">
              {initiatives.map((item) => (
                <article
                  key={item.title}
                  className="flex flex-col gap-2 rounded-2xl border border-indigo-200/40 bg-indigo-900/50 p-3 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400/15 ring-1 ring-emerald-300/70">
                      <Image
                        src={item.icon}
                        alt=""
                        width={16}
                        height={16}
                        className="opacity-95"
                      />
                    </div>
                    <h3 className="text-[13px] font-semibold tracking-tight text-slate-50">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[11px] leading-relaxed text-indigo-100">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Join */}
        <section
          id="join"
          className="mt-10 bg-gradient-to-b from-[#1E1B4B] via-[#020617] to-[#020617] py-14 text-slate-50 shadow-[0_25px_80px_rgba(15,23,42,0.85)] sm:py-16"
        >
          <div className="mx-auto max-w-5xl px-6">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div className="max-w-2xl space-y-3">
                <h2 className="text-2xl font-semibold tracking-tight">
                  There is a role for every kind of Hero.
                </h2>
                <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
                  Whether you can give 10 minutes a month or launch a full
                  chapter, your contribution matters. Choose the on‑ramp that
                  matches your current capacity.
                </p>
              </div>
              <p className="text-xs text-slate-400">
                You can change or pause your involvement at any time.
              </p>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-6">
              {waysToJoin.map((way) => (
                <div
                  key={way.title}
                  className="flex flex-col justify-between rounded-2xl border border-indigo-500/40 bg-indigo-900/40 p-3 backdrop-blur-sm"
                >
                  <div className="space-y-2">
                    <h3 className="text-[13px] font-semibold tracking-tight text-slate-50">
                      {way.title}
                    </h3>
                    <p className="text-[11px] leading-relaxed text-indigo-100">
                      {way.body}
                    </p>
                  </div>
                  <button className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-emerald-400/95 px-3 py-1.5 text-[11px] font-semibold text-slate-950 shadow-sm shadow-emerald-500/60 transition hover:bg-emerald-300">
                    {way.action}
                  </button>
                </div>
              ))}
            </div>
            <form className="mt-8 max-w-md space-y-3 rounded-2xl border border-indigo-500/40 bg-slate-950/70 p-4 backdrop-blur">
              <p className="text-sm font-medium text-zinc-50">
                Stay close to the work.
              </p>
              <p className="text-xs text-slate-300">
                Monthly community notes with new initiatives, impact snapshots,
                and ways to plug in.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <input
                  type="email"
                  required
                  placeholder="you@example.org"
                  className="h-10 flex-1 rounded-full border border-indigo-500/50 bg-slate-900 px-3 text-xs text-slate-100 outline-none placeholder:text-slate-500 focus:border-emerald-400"
                />
                <button
                  type="submit"
                  className="h-10 rounded-full bg-emerald-400 px-4 text-xs font-semibold text-slate-950 shadow-sm shadow-emerald-500/60 transition hover:bg-emerald-300"
                >
                  Get community notes
                </button>
              </div>
              <p className="text-[10px] text-slate-500">
                No spam. Just stories and ways to support equity work around the
                world.
              </p>
            </form>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="mt-10 bg-slate-950/80 py-14 text-slate-50 shadow-[0_25px_80px_rgba(15,23,42,0.9)] sm:py-16"
        >
          <div className="mx-auto max-w-5xl px-6">
            <div className="max-w-2xl space-y-3">
              <h2 className="text-2xl font-semibold tracking-tight">
                Frequently asked questions.
              </h2>
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                A quick overview of how we operate as a community-based charity.
              </p>
            </div>
            <div className="mt-6 space-y-4 text-sm">
              <details className="group rounded-2xl border border-slate-700 bg-slate-900/60 p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-zinc-50">
                  How is Hala Equity Heroes structured?
                  <span className="ml-4 text-xs text-zinc-400 group-open:hidden">
                    +
                  </span>
                  <span className="ml-4 hidden text-xs text-zinc-400 group-open:inline">
                    −
                  </span>
                </summary>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  We operate as a community-based charity with a small core team
                  and a wide network of volunteer circles. Local partners lead
                  on priorities and design, while Heroes provide resources,
                  skills, and amplification.
                </p>
              </details>
              <details className="group rounded-2xl border border-slate-700 bg-slate-900/60 p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-zinc-50">
                  Where does my contribution go?
                  <span className="ml-4 text-xs text-zinc-400 group-open:hidden">
                    +
                  </span>
                  <span className="ml-4 hidden text-xs text-zinc-400 group-open:inline">
                    −
                  </span>
                </summary>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Community contributions primarily fund grants to grassroots
                  partners, tools to support their work, and the minimal
                  infrastructure needed to keep the network safe and
                  accountable. We publish transparent breakdowns for each
                  initiative.
                </p>
              </details>
              <details className="group rounded-2xl border border-slate-700 bg-slate-900/60 p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-zinc-50">
                  Do I need prior experience in social impact work?
                  <span className="ml-4 text-xs text-zinc-400 group-open:hidden">
                    +
                  </span>
                  <span className="ml-4 hidden text-xs text-zinc-400 group-open:inline">
                    −
                  </span>
                </summary>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Not at all. We welcome people at every stage of their journey.
                  The only requirements are a commitment to equity, a
                  willingness to learn, and respect for community leadership.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950 py-6">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-3 px-6 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Hala Equity Heroes. Community-based,
            transparency-led charity.
          </p>
          <p className="text-[11px]">
            Built with care for organizers, dreamers, and everyday heroes
            everywhere.
          </p>
        </div>
      </footer>
    </div>
  );
}
