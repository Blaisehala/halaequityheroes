import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "../components/PageHero";
import FitFinder from "../components/FitFinder";
import NewsletterSignup from "../components/NewsletterSignup";
import { faqs } from "../lib/faqs";
import { slugify } from "../lib/slugify";
import { pageMetadata } from "../lib/seo";
import { photos } from "../lib/photos";

export const metadata: Metadata = pageMetadata({
  title: "Get Involved",
  description:
    "Donate, volunteer, or start a local circle. There is a role for every kind of Hero.",
  path: "/get-involved",
});

const waysToJoin = [
  {
    title: "Donate monthly",
    body: "Give what you can, when you can. 100% of community gifts go to equity initiatives.",
    href: "/donate",
    cta: "Start a monthly gift",
    image: photos.framingFace,
  },
  {
    title: "Volunteer your skills",
    body: "Join a project team in product, data, operations, or storytelling.",
    href: "/volunteer",
    cta: "Offer your skills",
    image: photos.friendsSitting,
  },
  {
    title: "Start a local circle",
    body: "Bring Hala Equity Heroes to your campus, company, or neighborhood.",
    href: "/contact",
    cta: "Launch a circle",
    image: photos.schoolBackpacks,
  },
];

const fits = [
  { option: "A few minutes", ...waysToJoin[0], image: photos.patternedShirt },
  { option: "A few hours", ...waysToJoin[1], image: photos.peaceSigns },
  { option: "I want to lead", ...waysToJoin[2], image: photos.threeGirls },
];

const steps = [
  { title: "Choose your on-ramp", body: "Donate, volunteer your skills, or start a local circle." },
  { title: "Get in touch", body: "Tell us about your skills, your availability, or your community." },
  { title: "Make a difference", body: "We match you with initiatives that align with your values and capacity." },
];

const stepStyles = [
  "bg-brand-navy text-white",
  "bg-brand-blue text-white",
  "bg-brand-sky text-brand-navy",
];

export default function GetInvolvedPage() {
  return (
    <main>
      <PageHero
        image={photos.cheeringField}
        eyebrow="Get involved"
        title="There is a role for every kind of Hero"
        intro="Whether you can give 10 minutes a month or launch a full chapter, your contribution matters. Choose the on-ramp that matches your current capacity."
      />

      {/* Edge-to-edge triptych: panels sit flush and widen on hover */}
      <section aria-label="Ways to get involved" className="flex flex-col lg:h-[38rem] lg:flex-row">
        {waysToJoin.map((way) => (
          <Link
            key={way.title}
            id={slugify(way.title)}
            href={way.href}
            className="group relative flex min-h-[26rem] scroll-mt-16 items-end overflow-hidden text-white transition-[flex-grow] duration-500 lg:min-h-0 lg:flex-1 lg:hover:flex-[1.7] lg:focus-visible:flex-[1.7]"
          >
            <Image src={way.image.src} alt={way.image.alt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/35 to-transparent" />
            <div className="relative w-full p-8 lg:p-10">
              <h2 className="font-display text-4xl lg:text-5xl">{way.title}</h2>
              <p className="mt-3 max-w-md leading-relaxed text-white/85">{way.body}</p>
              <span className="mt-5 inline-block bg-brand-amber px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-brand-navy">
                {way.cta}
              </span>
            </div>
          </Link>
        ))}
      </section>

      <FitFinder fits={fits} />

      {/* Slanted band */}
      <section className="bg-brand-blue py-32 [clip-path:polygon(0_0,100%_12%,100%_100%,0_88%)] sm:py-44">
        <p className="mx-auto max-w-5xl px-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
          You can change or pause your involvement at any time.
        </p>
      </section>

      {/* Connected arrow blocks */}
      <section className="bg-white px-6 py-20 sm:py-24" aria-labelledby="getting-started">
        <div className="mx-auto max-w-7xl">
          <h2 id="getting-started" className="font-display text-4xl text-brand-navy sm:text-5xl">
            From first click to making a difference
          </h2>
          <ol className="mt-12 flex flex-col gap-2 lg:flex-row lg:gap-0">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className={`flex-1 px-8 py-10 lg:-mr-6 lg:pl-14 lg:pr-16 lg:[clip-path:polygon(0_0,calc(100%-2.5rem)_0,100%_50%,calc(100%-2.5rem)_100%,0_100%,2.5rem_50%)] lg:first:pl-8 lg:first:[clip-path:polygon(0_0,calc(100%-2.5rem)_0,100%_50%,calc(100%-2.5rem)_100%,0_100%)] ${stepStyles[i]}`}
              >
                <p className="text-xs font-bold uppercase tracking-[0.22em] opacity-80">Step {i + 1}</p>
                <h3 className="mt-3 text-2xl font-extrabold">{step.title}</h3>
                <p className="mt-2 leading-relaxed opacity-90">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Ruled, table-style questions */}
      <section className="bg-brand-sky-tint px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-4xl text-brand-navy sm:text-5xl">Before you join</h2>
          <dl className="mt-12 border-b-2 border-brand-navy">
            {faqs.map((faq) => (
              <div key={faq.q} className="grid gap-3 border-t-2 border-brand-navy py-8 md:grid-cols-[1fr_1.4fr] md:gap-16">
                <dt className="text-xl font-extrabold text-brand-navy">{faq.q}</dt>
                <dd className="text-lg leading-relaxed text-slate-600">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <NewsletterSignup variant="band" title="Never miss a way to help" />
    </main>
  );
}
