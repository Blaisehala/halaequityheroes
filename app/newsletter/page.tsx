import type { Metadata } from "next";
import Image from "next/image";
import Eyebrow, { logoCycle } from "../components/Eyebrow";
import { SignupForm } from "../components/NewsletterSignup";
import { pageMetadata } from "../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Newsletter",
  description:
    "Get monthly community notes from Hala Equity Heroes — new initiatives, impact snapshots, and ways to plug in.",
  path: "/newsletter",
});

const promises = [
  { title: "Once a month", body: "One email, never a flood." },
  { title: "No spam", body: "Just stories and ways to support equity work around the world." },
  { title: "Leave any time", body: "Every email has an unsubscribe link." },
];

const newsletterUrl = "https://www.linkedin.com/newsletters/no-one-left-behind-7477989624964079616/";

// Images for each edition, in the same order as pastIssues (the charity's existing site photos).
const issueImages: ({ src: string; alt: string } | null)[] = [
  { src: "/images/people.jpeg", alt: "People from the Hala Equity Heroes community" },
  { src: "/images/Congregation.jpeg", alt: "Congregation at a Hala Equity Heroes event" },
  { src: "/images/hero4.jpg", alt: "Hala Equity Heroes community photo" },
  { src: "/images/hero5.jpg", alt: "Hala Equity Heroes community photo" },
];

// Editions of the "No One Left Behind" LinkedIn newsletter (monthly), newest first.
const pastIssues: { title: string; date: string; href: string }[] = [
  {
    title: "What September Taught Us - And What Still Needs to Change",
    date: "23 Oct 2026",
    href: "https://www.linkedin.com/pulse/what-september-taught-us-still-needs-change-atieno-md-mph-pmp-aoplf",
  },
  {
    title: "Beyond Diagnosis: Why Screening Alone Is Not Enough",
    date: "11 Sep 2026",
    href: "https://www.linkedin.com/pulse/beyond-diagnosis-why-screening-alone-enough-atieno-md-mph-pmp-qdrpf",
  },
  {
    title: "When the Doctor Is Also the Patient",
    date: "3 Aug 2026",
    href: "https://www.linkedin.com/pulse/when-doctor-also-patient-beatrix-atieno-md-mph-pmp-d5apf",
  },
  {
    title: "Scientific Breakthroughs and the Equity Gap:",
    date: "1 Jul 2026",
    href: "https://www.linkedin.com/pulse/newsletter-issue-1-july-2025-beatrix-atieno-md-mph-pmp-pikpf",
  },
];

export default function NewsletterPage() {
  return (
    <main>
      {/* Opening: headline with a large signup box */}
      <section className="bg-brand-sky-tint px-6 pb-20 pt-32 sm:pb-24 sm:pt-36">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <Eyebrow>Newsletter</Eyebrow>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] text-brand-navy sm:text-7xl">Community notes</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              Monthly community notes with new initiatives, impact snapshots, and
              ways to plug in — straight to your inbox.
            </p>
          </div>
          <div className="border-t-8 border-brand-navy bg-white p-8 shadow-xl sm:p-10">
            <h2 className="text-2xl font-extrabold text-brand-navy">Subscribe for free</h2>
            <p className="mt-2 text-slate-600">Join the Heroes who hear from us every month.</p>
            <div className="mt-6">
              <SignupForm look="stacked" />
            </div>
          </div>
        </div>
      </section>

      {/* Each No One Left Behind edition as a box: image, then what the issue was about */}
      <section className="bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>What&apos;s inside</Eyebrow>
          <h2 className="mt-4 font-display text-4xl text-brand-navy sm:text-5xl">A look at each issue</h2>
          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pastIssues.map((issue, i) => {
              const colour = logoCycle[i % logoCycle.length];
              const photo = issueImages[i];
              return (
                <li key={issue.href} className={`flex flex-col border-t-8 bg-white shadow-lg ${colour.border}`}>
                  <div className="relative aspect-[4/3] w-full bg-slate-100">
                    {photo ? (
                      <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                    ) : (
                      <div className="flex h-full items-center justify-center text-sm font-bold text-slate-500">Image to come</div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{issue.date}</span>
                    <h3 className="mt-2 text-lg font-extrabold leading-snug text-brand-navy">{issue.title}</h3>
                    <p className="mt-3 flex-1 leading-relaxed text-slate-600">Summary to come.</p>
                    <a
                      href={issue.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 text-sm font-bold text-brand-blue hover:underline"
                    >
                      Read on LinkedIn &rarr;
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* What to expect */}
      <section className="bg-brand-navy px-6 py-16 text-white sm:py-20">
        <ul className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-3">
          {promises.map((p, i) => (
            <li key={p.title} className={`border-l-4 pl-6 ${logoCycle[i].border}`}>
              <h3 className="text-2xl font-extrabold">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-white/80">{p.body}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* No One Left Behind: the LinkedIn newsletter's editions */}
      <section className="bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>No One Left Behind</Eyebrow>
          <h2 className="mt-4 font-display text-4xl text-brand-navy sm:text-5xl">Past issues on LinkedIn</h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
            A doctor, a sickle cell trait carrier, and an advocate. We go deeper on sickle cell and the people holding it
            together. Published monthly.
          </p>
          <ul className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
            {pastIssues.map((issue) => (
              <li key={issue.href} className="flex flex-wrap items-baseline justify-between gap-2 py-5">
                <a
                  href={issue.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold text-brand-navy hover:text-brand-blue"
                >
                  {issue.title}
                </a>
                <span className="text-sm text-slate-500">{issue.date}</span>
              </li>
            ))}
          </ul>
          <a
            href={newsletterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block bg-brand-navy px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-brand-blue"
          >
            Follow the newsletter on LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}
