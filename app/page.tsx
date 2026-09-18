'use client'

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import CurvedCarousel from "./components/CurvedCarousel";
import ImpactPathways from "./components/ImpactPathways";
import WhyWeCare from "./components/WhyWeCare";

const stats = [
  { label: "Local chapters", value: "24+" },
  { label: "Volunteer hours", value: "18K+" },
  { label: "Funds directed", value: "$1.2M" },
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
    <div className="min-h-screen bg-gradient-to-b from-[#0c2340] via-[#E6F3FF] to-[#15162b] text-slate-900">
      <main className="pt-16">
        {/* Hero with Curved Carousel */}
<section className="relative min-h-[85vh] sm:min-h-[90vh] overflow-hidden bg-[#0c2340] text-white pb-8">
  <div className="absolute inset-0 bg-gradient-to-b from-[#0c2340]/90 via-transparent to-[#0c2340]/80 z-20 pointer-events-none md:hidden" />

  <div className="relative z-30 mx-auto max-w-6xl px-4 pt-12 sm:pt-16 md:hidden">
    <div className="bg-[#0c2340]/70 backdrop-blur-sm rounded-2xl p-2">
    <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-center mb-6">
      Changing Lives
    </h1>
      <p className="mt-4 text-sm leading-relaxed text-white/95 sm:text-base">
        In regions where resources are scarce, our community-powered
        initiatives are among the most effective ways to deliver care and
        equity to those who need it most.
      </p>
    </div>
  </div>

  <div className="absolute inset-0 pt-[240px] sm:pt-[200px] md:pt-8 lg:pt-4">
    <CurvedCarousel />
  </div>

  <div className="relative z-30 mx-auto max-w-6xl px-4 pt-[400px] sm:pt-[380px] md:pt-[380px] lg:pt-[360px] hidden md:block">
    <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-center mb-6">
      Changing Lives
    </h1>
    <p className="text-base md:text-lg leading-relaxed text-white/95 max-w-3xl mx-auto text-center">
      In regions where resources are scarce, our community-powered
      initiatives are among the most effective ways to deliver care and
      equity to those who need it most.
    </p>
  </div>

  <div className="relative z-30 mx-auto max-w-6xl px-4 sm:px-6 mt-[520px] sm:mt-[460px] md:mt-12">
    <div className="flex flex-wrap gap-4 sm:gap-6 text-xs justify-center md:justify-start">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-[#0c2340]/90 backdrop-blur-md rounded-lg px-4 py-3 md:bg-white/10 shadow-lg">
          <p className="text-base sm:text-lg font-semibold text-white">
            {stat.value}
          </p>
          <p className="text-white/90">{stat.label}</p>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* Mission */}
<section id="mission" className="relative mt-0 overflow-hidden bg-white pb-28 pt-10 sm:pb-32 sm:pt-14">
  <div className="pointer-events-none absolute inset-x-0 top-[18%] overflow-hidden" aria-hidden>
    <span className="block select-none pl-[1%] font-semibold leading-none tracking-tight text-[#d4e1eb] text-[min(44vw,30rem)]">
      1978
    </span>
  </div>

  <div className="relative z-10 mx-auto flex max-w-6xl items-start gap-4 px-4 sm:px-8">
    <Link
      href="/donate"
      aria-label="Donate"
      className="group relative mt-2 flex h-28 w-28 shrink-0 items-center justify-center sm:h-32 sm:w-32 lg:h-36 lg:w-36"
    >
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full animate-[spin_22s_linear_infinite]"
      >
        <defs>
          <path
            id="donate-circle"
            d="M 100,100 m -72,0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0"
          />
        </defs>
        <text fill="#5ec8f0" fontSize="14" fontWeight="600">
          <textPath href="#donate-circle">
            DONATE&nbsp;&nbsp;&nbsp;DONATE&nbsp;&nbsp;&nbsp;DONATE&nbsp;&nbsp;&nbsp;DONATE&nbsp;&nbsp;&nbsp;
          </textPath>
        </text>
      </svg>
      <span className="text-3xl font-light text-amber-400 transition group-hover:scale-110 sm:text-4xl">
        +
      </span>
    </Link>

    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-md pt-2 text-center sm:pt-4"
    >
      <p className="text-sm font-semibold leading-snug text-[#0c2340] sm:text-[15px]">
        Over 90% of lasting change starts in community. Our
        circles are the best way to reach people in great need.
      </p>
      <p className="mt-3 text-[11px] leading-relaxed text-slate-500 sm:text-xs">
        If you want to join a volunteer community to help us offer a
        helping hand, consider making a donation. You can join the rest
        of us that care. Your donation can be given now and in the future.
      </p>
      <div className="mt-5 flex items-center justify-center gap-3">
        <Link
          href="/volunteer"
          className="inline-flex h-8 items-center justify-center rounded-full border border-slate-300 bg-white px-5 text-[11px] font-medium text-slate-600 transition hover:border-slate-400 hover:text-slate-800"
        >
          volunteer
        </Link>
        <Link
          href="/donate"
          className="inline-flex h-8 items-center justify-center rounded-full bg-amber-500 px-6 text-[11px] font-semibold text-white shadow-sm transition hover:bg-amber-400"
        >
          donate
        </Link>
      </div>
    </motion.div>
  </div>

  <div className="relative z-10 mt-20 sm:mt-28">
    <div className="bg-[#1B5580] text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 py-8 sm:px-10 lg:grid-cols-[minmax(0,1fr)_240px_minmax(0,1.35fr)] lg:gap-10 lg:py-9">
        <div>
          <h2 className="text-lg font-semibold leading-snug tracking-tight sm:text-xl">
            Serving those in need since 1978
          </h2>
          <p className="mt-3 text-xs leading-relaxed text-white/80">
            Globally, billions still lack access to safe systems of care.
            Children and families wait for resources that never arrive
            through traditional philanthropy.
          </p>
        </div>

        <div className="relative mx-auto w-[220px] lg:w-[240px]">
          <div className="relative aspect-[3/4] w-full overflow-hidden shadow-2xl lg:-mb-20 lg:-mt-14">
            <Image
              src="/images/hero2.jpg"
              alt="Caregiver with a child"
              fill
              className="object-cover"
              sizes="240px"
            />
          </div>
          <div className="absolute -bottom-6 -right-10 h-[72px] w-[72px] overflow-hidden shadow-lg sm:h-20 sm:w-20 lg:-bottom-8 lg:-right-14">
            <Image
              src="/images/hero5.jpg"
              alt="Community member"
              fill
              className="object-cover"
              sizes="80px"
            />
          </div>
        </div>

        <div>
          <p className="text-xs leading-relaxed text-white/90 sm:text-[13px]">
            We are carried by a family of volunteers from around the world,
            from our organizers, nurses, and mentors to our volunteer
            teachers, technicians, and those who are just ready to start.
            Join us as a volunteer and help bring equity and care to people
            in communities far from resources.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

        <ImpactPathways />

        <WhyWeCare />

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
