'use client'

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import WheelCarousel from "./WheelCarousel";
import ImpactPathways from "./ImpactPathways";
import WhyWeCare from "./WhyWeCare";
import WorldMap from "./WorldMap";
import { photos } from "../lib/photos";
import { stats } from "../lib/stats";
import { faqs } from "../lib/faqs";
import Eyebrow from "./Eyebrow";

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
        {/* Hero: heading only on top, the turning photo wheel rising out of the blue,
            then the details below the wheel */}
<section className="relative overflow-hidden bg-brand-navy text-white">
  <div className="relative z-20 mx-auto max-w-4xl px-6 pt-12 text-center sm:pt-16">
    <h1 className="whitespace-nowrap text-[clamp(1.3rem,5.6vw,3.75rem)] font-extrabold leading-tight tracking-tight">
      Quality First, Equity Always
    </h1>
  </div>

  <div className="relative mt-8 h-[370px] overflow-hidden sm:h-[480px] md:h-[600px]">
    <WheelCarousel />
  </div>

  <div className="relative z-20 mx-auto max-w-4xl px-6 pb-16 text-center sm:pb-20">
    <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
      In regions where resources are scarce, our community-powered
      initiatives are among the most effective ways to deliver care and
      equity to those who need it most.
    </p>
  </div>
</section>

{/* Impact numbers straddle the dark blue banner and the white section below it */}
<div className="bg-[linear-gradient(to_bottom,var(--color-brand-navy)_50%,#ffffff_50%)] px-6 pb-2">
    <ul className="flex flex-wrap justify-center gap-5 sm:gap-8">
      {stats.map((stat) => (
        <li
          key={stat.label}
          className="flex w-full max-w-sm items-center gap-5 bg-white px-8 py-7 shadow-2xl ring-1 ring-brand-navy/10 sm:w-auto sm:min-w-[19rem]"
        >
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-brand-amber/20 text-brand-navy">
            <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d={stat.icon} />
            </svg>
          </span>
          <span>
            <span className="block text-3xl font-extrabold leading-tight text-brand-navy sm:text-4xl">{stat.value}</span>
            <span className="block text-base text-slate-600">{stat.label}</span>
          </span>
        </li>
      ))}
    </ul>
</div>

        {/* Mission — layout modelled on mercyships.org: huge "1978" watermark, edge-pinned
            rotating Donate badge, and a blue band that runs to the right edge with photos
            hanging below it */}
<section id="mission" className="relative overflow-hidden bg-white pb-16 pt-14 sm:pb-24 sm:pt-20">
  <div className="pointer-events-none absolute inset-x-0 top-[24%] overflow-hidden sm:top-[22%]" aria-hidden>
    <span className="block select-none text-center font-bold leading-none tracking-tight text-brand-sky-tint text-[34vw] lg:text-[min(36vw,36rem)]">
      1978
    </span>
  </div>

  {/* Rotating badge pinned to the left edge, partly off-screen */}
  <Link
    href="/donate"
    aria-label="Donate"
    className="group absolute -left-14 top-[30%] z-10 hidden h-48 w-48 items-center justify-center md:flex lg:h-56 lg:w-56"
  >
    <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full animate-[spin_22s_linear_infinite]" aria-hidden>
      <defs>
        <path id="donate-circle" d="M 100,100 m -70,0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0" />
      </defs>
      <text fill="var(--color-brand-blue)" fontSize="24" fontWeight="700" letterSpacing="2">
        <textPath href="#donate-circle">DONATE · DONATE · DONATE ·</textPath>
      </text>
    </svg>
    <span className="text-6xl font-light text-brand-amber transition group-hover:scale-110">+</span>
  </Link>

  <div className="relative z-10 mx-auto max-w-7xl px-6">
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-md md:ml-[45%]"
    >
      <p className="text-lg font-bold leading-snug text-brand-navy sm:text-xl">
        Over 90% of lasting change starts in community. Our circles are
        the best way to reach people in great need.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-600">
        If you want to join a volunteer community to help us offer a
        helping hand, consider making a donation. You can join the rest
        of us that care. Your donation can be given now and in the future.
      </p>
      <div className="mt-6 flex items-center gap-3">
        <Link
          href="/volunteer"
          className="inline-flex h-10 items-center justify-center border-2 border-brand-navy bg-white px-7 text-sm font-bold text-brand-navy transition hover:bg-brand-sky-tint"
        >
          Volunteer
        </Link>
        <Link
          href="/donate"
          className="inline-flex h-10 items-center justify-center bg-brand-amber px-8 text-sm font-bold text-brand-navy transition hover:bg-brand-amber-dark"
        >
          Donate
        </Link>
      </div>
    </motion.div>
  </div>

  {/* Blue band from about a quarter in to the right edge */}
  <div className="relative z-10 mt-24 sm:mt-40 md:ml-[22%]">
    <div className="bg-brand-blue px-6 pb-10 pt-10 text-white sm:px-10 md:pb-12">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14">
        <div>
          <h2 className="text-xl font-extrabold tracking-tight sm:text-2xl">
            Serving those in need since 1978
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/85">
            Globally, billions still lack access to safe systems of care.
            Children and families wait for resources that never arrive
            through traditional philanthropy.
          </p>
        </div>
        <div>
          <p className="text-sm leading-relaxed text-white/85 lg:pt-11">
            We are carried by a family of volunteers from around the world,
            from our organizers, nurses, and mentors to our volunteer
            teachers, technicians, and those who are just ready to start.
            Join us as a volunteer and help bring equity and care to people
            in communities far from resources.
          </p>
          <Link href="/mission" className="group mt-5 inline-flex items-center gap-3 text-sm font-bold text-brand-amber">
            See our mission
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-amber text-brand-navy transition group-hover:translate-x-1" aria-hidden>
              →
            </span>
          </Link>
        </div>
      </div>
    </div>

    {/* Photos hanging below the band, with the 1978 showing behind them */}
    <div className="relative flex items-end gap-5 px-6 sm:px-10">
      <div className="relative -mt-6 aspect-[4/3] w-[62%] max-w-[22rem] overflow-hidden shadow-xl sm:-mt-10">
        <Image
          src="/images/hero2.jpg"
          alt="A young boy pointing at the camera beside a smiling friend"
          fill
          className="object-cover"
          sizes="(min-width: 640px) 22rem, 62vw"
        />
      </div>
      <div className="relative mt-6 aspect-square w-[28%] max-w-[8rem] overflow-hidden shadow-lg">
        <Image
          src="/images/hero5.jpg"
          alt="Children smiling and waving from the windows of a school bus"
          fill
          className="object-cover"
          sizes="8rem"
        />
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
                <Eyebrow tone="dark">Get involved</Eyebrow>
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
            <Eyebrow align="center">
              FAQ
            </Eyebrow>
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
