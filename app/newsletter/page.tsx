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

const sections = [
  { title: "New initiatives", body: "Be first to hear where Heroes are needed next." },
  { title: "Impact snapshots", body: "See what your time and gifts are making possible." },
  { title: "Ways to plug in", body: "Simple, practical ways to take part each month." },
];

const promises = [
  { title: "Once a month", body: "One email, never a flood." },
  { title: "No spam", body: "Just stories and ways to support equity work around the world." },
  { title: "Leave any time", body: "Every email has an unsubscribe link." },
];

// TODO: when issues start going out, list them here (title, date, link) instead of the empty state
const pastIssues: { title: string; date: string; href: string }[] = [];

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

      {/* What's inside, shown as a preview of the email */}
      <section className="bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>What&apos;s inside</Eyebrow>
          <h2 className="mt-4 font-display text-4xl text-brand-navy sm:text-5xl">A look at each issue</h2>
          <div className="mx-auto mt-12 max-w-3xl border border-slate-200 shadow-xl">
            <div className="flex items-center gap-4 border-b border-slate-200 bg-slate-50 px-6 py-4">
              <Image src="/images/logo-mark.png" alt="" width={52} height={41} className="h-8 w-auto" />
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-brand-navy">Hala Equity Heroes</p>
                <p className="truncate text-sm text-slate-500">Your monthly community notes</p>
              </div>
            </div>
            <div aria-hidden className="flex h-1.5">
              {logoCycle.map((c) => (
                <span key={c.border} className={`flex-1 ${c.border.replace("border-", "bg-")}`} />
              ))}
            </div>
            <ol className="divide-y divide-slate-200 bg-white">
              {sections.map((s, i) => (
                <li key={s.title} className="flex gap-5 px-6 py-7 sm:px-10">
                  <span className={`font-display text-4xl leading-none ${logoCycle[i].text}`}>0{i + 1}</span>
                  <div>
                    <h3 className="text-lg font-extrabold text-brand-navy">{s.title}</h3>
                    <p className="mt-1 leading-relaxed text-slate-600">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
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

      {/* Past issues */}
      <section className="bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>Archive</Eyebrow>
          <h2 className="mt-4 font-display text-4xl text-brand-navy sm:text-5xl">Past issues</h2>
          {pastIssues.length > 0 ? (
            <ul className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
              {pastIssues.map((issue) => (
                <li key={issue.href} className="flex flex-wrap items-baseline justify-between gap-2 py-5">
                  <a href={issue.href} className="text-lg font-bold text-brand-navy hover:text-brand-blue">
                    {issue.title}
                  </a>
                  <span className="text-sm text-slate-500">{issue.date}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-10 border-2 border-dashed border-slate-300 px-8 py-12 text-center">
              <p className="text-lg font-bold text-brand-navy">Our first issues are on their way.</p>
              <p className="mt-2 text-slate-600">Subscribe above and they&apos;ll arrive in your inbox — past issues will be listed here.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
