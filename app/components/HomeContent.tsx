'use client'

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import CurvedCarousel from "./CurvedCarousel";
import ImpactPathways from "./ImpactPathways";
import WhyWeCare from "./WhyWeCare";
import WorldMap from "./WorldMap";
import { photos } from "../lib/photos";
import { stats } from "../lib/stats";
import { faqs } from "../lib/faqs";

const waysToJoin = [
  {
    title: "Donate monthly",
    body: "Give what you can, when you can. 100% of community gifts go to equity initiatives.",
    action: "Start a monthly gift",
    href: "/donate",
    image: photos.hillsideGroup,
  },
  {
    title: "Volunteer your skills",
    body: "Join a project team in product, data, operations, or storytelling.",
    action: "Offer your skills",
    href: "/volunteer",
    image: photos.brightClothes,
  },
  {
    title: "Start a local circle",
    body: "Bring Hala Equity Heroes to your campus, company, or neighborhood.",
    action: "Launch a circle",
    href: "/get-involved#start-a-local-circle",
    image: photos.nightPortrait,
  },
];

export default function HomeContent() {
  return (
    <div className="min-h-screen bg-white text-brand-ink">
      <main className="pt-16">
        {/* Hero with Curved Carousel */}
<section className="relative min-h-[85vh] sm:min-h-[90vh] md:min-h-0 overflow-hidden bg-brand-navy text-white pb-8">
  <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/90 via-transparent to-brand-navy/80 z-20 pointer-events-none md:hidden" />

  <div className="relative z-30 mx-auto max-w-6xl px-4 pt-12 sm:pt-16 md:hidden">
    <div className="bg-brand-navy/70 backdrop-blur-sm p-2">
    <p className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-center mb-6">
      Changing Lives
    </p>
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
    <ul className="flex flex-wrap justify-center gap-4 sm:gap-6">
      {stats.map((stat) => (
        <li
          key={stat.label}
          className="flex items-center gap-4 bg-brand-navy/90 px-6 py-4 shadow-lg ring-1 ring-white/15 backdrop-blur-md md:bg-white/10"
        >
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-amber/15 text-brand-amber">
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d={stat.icon} />
            </svg>
          </span>
          <span>
            <span className="block text-2xl font-extrabold leading-tight text-white sm:text-3xl">{stat.value}</span>
            <span className="block text-sm text-white/80">{stat.label}</span>
          </span>
        </li>
      ))}
    </ul>
  </div>
</section>

        {/* Mission */}
<section id="mission" className="relative mt-0 overflow-hidden bg-white pb-28 pt-10 sm:pb-32 sm:pt-14">
  <div className="pointer-events-none absolute inset-x-0 top-[18%] overflow-hidden" aria-hidden>
    <span className="block select-none pl-[1%] font-semibold leading-none tracking-tight text-brand-sky-tint-deep text-[min(44vw,30rem)]">
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
        <text fill="var(--color-brand-sky)" fontSize="14" fontWeight="600">
          <textPath href="#donate-circle">
            DONATE&nbsp;&nbsp;&nbsp;DONATE&nbsp;&nbsp;&nbsp;DONATE&nbsp;&nbsp;&nbsp;DONATE&nbsp;&nbsp;&nbsp;
          </textPath>
        </text>
      </svg>
      <span className="text-3xl font-light text-brand-amber transition group-hover:scale-110 sm:text-4xl">
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
      <p className="text-sm font-semibold leading-snug text-brand-navy sm:text-[15px]">
        Over 90% of lasting change starts in community. Our
        circles are the best way to reach people in great need.
      </p>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">
        If you want to join a volunteer community to help us offer a
        helping hand, consider making a donation. You can join the rest
        of us that care. Your donation can be given now and in the future.
      </p>
      <div className="mt-5 flex items-center justify-center gap-3">
        <Link
          href="/volunteer"
          className="inline-flex h-10 items-center justify-center border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-800"
        >
          volunteer
        </Link>
        <Link
          href="/donate"
          className="inline-flex h-10 items-center justify-center bg-brand-amber px-7 text-sm font-bold text-brand-navy shadow-sm transition hover:bg-brand-amber-dark"
        >
          donate
        </Link>
      </div>
    </motion.div>
  </div>

  <div className="relative z-10 mt-20 sm:mt-28">
    <div className="bg-brand-blue text-white">
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
              alt="A young boy pointing at the camera beside a smiling friend"
              fill
              className="object-cover"
              sizes="240px"
            />
          </div>
          <div className="absolute -bottom-6 -right-10 h-[72px] w-[72px] overflow-hidden shadow-lg sm:h-20 sm:w-20 lg:-bottom-8 lg:-right-14">
            <Image
              src="/images/hero5.jpg"
              alt="Children smiling and waving from the windows of a school bus"
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

        <WorldMap />

        {/* Join */}
        <section
          id="join"
          className="bg-brand-navy py-16 text-white sm:py-20"
        >
          <div className="mx-auto max-w-5xl px-6">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div className="max-w-2xl space-y-3">
                <h2 className="text-3xl font-extrabold tracking-tight">
                  There is a role for every kind of Hero.
                </h2>
                <p className="text-sm leading-relaxed text-white/75 sm:text-base">
                  Whether you can give 10 minutes a month or launch a full
                  chapter, your contribution matters. Choose the on‑ramp that
                  matches your current capacity.
                </p>
              </div>
              <p className="text-sm text-white/75">
                You can change or pause your involvement at any time.
              </p>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-6">
              {waysToJoin.map((way) => (
                <div
                  key={way.title}
                  className="group flex flex-col justify-between overflow-hidden border border-white/10 bg-white/5"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={way.image.src}
                      alt={way.image.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 space-y-2 p-5 pb-0">
                    <h3 className="text-base font-extrabold tracking-tight text-white">
                      {way.title}
                    </h3>
                    <p className="text-[13px] leading-relaxed text-white/75">
                      {way.body}
                    </p>
                  </div>
                  <Link
                    href={way.href}
                    className="m-5 inline-flex items-center justify-center bg-white px-3 py-2.5 text-xs font-bold text-brand-navy transition hover:bg-brand-sky-tint"
                  >
                    {way.action}
                  </Link>
                </div>
              ))}
            </div>
            <form className="mt-10 max-w-md space-y-3 border border-white/10 bg-white/5 p-6">
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
                  className="h-11 w-full border border-white/25 bg-white/10 px-4 text-sm text-white outline-none placeholder:text-white/70 sm:flex-1 focus:border-brand-sky"
                />
                <button
                  type="submit"
                  className="h-11 bg-brand-amber px-5 text-xs font-bold text-brand-navy transition hover:bg-brand-amber-dark"
                >
                  Get community notes
                </button>
              </div>
              <p className="text-xs text-white/75">
                No spam. Just stories and ways to support equity work around the
                world.
              </p>
            </form>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-brand-sky-tint py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <p className="text-center text-xs font-bold uppercase tracking-[0.22em] text-brand-blue">
              FAQ
            </p>
            <h2 className="mt-3 text-center text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-3 text-center text-slate-600">
              A quick overview of how we operate as a community-based charity.
            </p>
            <div className="mt-10 space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group bg-white px-6 py-5 shadow-sm ring-1 ring-slate-200/80"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-brand-navy [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-sky-tint text-lg text-brand-blue transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 pr-12 leading-relaxed text-slate-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
