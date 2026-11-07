import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "../components/PageHero";
import Eyebrow, { logoCycle } from "../components/Eyebrow";
import { pageMetadata } from "../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Our Story",
  description:
    "How Hala Equity Heroes came about — from serving those in need since 2020 to a global family of everyday Heroes working for healthcare equity.",
  path: "/our-story",
});

// The chapters use only what the site already says about Hala Equity Heroes.
// TODO: add the real founding story — who started it, how the name "Hala" was chosen,
// and key milestones since 2020 — then extend or replace these chapters.
const chapters = [
  {
    title: "Where it began",
    lead: "Serving those in need since 2020.",
    body: [
      "Globally, billions still lack access to safe systems of care. Children and families wait for resources that never arrive through traditional philanthropy.",
      "Hala Equity Heroes began with a simple commitment: to show up for the people who are closest to the challenge and furthest from resources.",
    ],
  },
  {
    title: "A different way of helping",
    lead: "Communities lead. Heroes support.",
    body: [
      "Traditional philanthropy often leaves the most impacted people out of the room. We set out to flip the script by moving decisions, resources, and storytelling power into the hands of community organizers, educators, caregivers, and youth leaders.",
      "No gatekeeping. No saviorism. Just people showing up for each other.",
    ],
  },
  {
    title: "Why “Heroes”",
    lead: "You do not need a foundation to change the world. You just need to start.",
    body: [
      "We are carried by a family of volunteers from around the world — from organisers, nurses, and mentors to volunteer teachers, technicians, and those who are just ready to start.",
      "Every one of them is a Hero: someone who gives what they can, when they can.",
    ],
  },
  {
    title: "Where we are going",
    lead: "Healthcare for all.",
    body: [
      "Behind every sickle cell diagnosis is a child with a name, a laugh, and a future still being written. We work so that no child or family faces it alone.",
      "Our promise has not changed: quality first, equity always.",
    ],
  },
];

export default function OurStoryPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our story"
        title="How Hala Equity Heroes came about"
        intro="From a commitment to serve those in need to a global family of everyday Heroes working for healthcare equity."
      />

      {/* Chapters: the big number stays in view beside its text as you scroll */}
      <section className="bg-white px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-6">
            <Image src="/images/logo-mark.png" alt="" width={78} height={62} className="h-14 w-auto" />
            <Eyebrow>Four chapters</Eyebrow>
          </div>

          <ol className="mt-16 space-y-24 sm:space-y-32">
            {chapters.map((chapter, i) => {
              const colour = logoCycle[i % logoCycle.length];
              return (
                <li key={chapter.title} className="grid gap-6 md:grid-cols-[10rem_1fr] md:gap-14">
                  <div className="md:sticky md:top-32 md:self-start">
                    <span className={`block font-display text-8xl leading-none sm:text-9xl ${colour.text}`}>{i + 1}</span>
                    <span className="mt-2 block text-xs font-bold uppercase tracking-[0.22em] text-slate-500">Chapter {i + 1}</span>
                  </div>
                  <div className={`border-l-4 pl-6 sm:pl-10 ${colour.border}`}>
                    <h2 className="font-display text-4xl text-brand-navy sm:text-5xl">{chapter.title}</h2>
                    <p className="mt-5 text-2xl font-extrabold leading-snug text-brand-navy">{chapter.lead}</p>
                    <div className="mt-5 space-y-4 text-lg leading-relaxed text-slate-600">
                      {chapter.body.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Pull quote */}
      <section className="bg-brand-navy px-6 py-20 text-center text-white sm:py-28">
        <Eyebrow tone="dark" align="center">Our promise</Eyebrow>
        <p className="mx-auto mt-6 max-w-4xl font-display text-5xl leading-tight sm:text-7xl">
          Healthcare for all: quality first, equity always.
        </p>
      </section>

      {/* Next steps */}
      <section className="bg-brand-sky-tint px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-3">
          {[
            { href: "/mission", label: "Read our mission", body: "The pillars and values that guide our work." },
            { href: "/stories", label: "See our stories", body: "Where Heroes are showing up right now." },
            { href: "/volunteer", label: "Become a Hero", body: "Find a project team that suits you." },
          ].map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group border-t-4 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${logoCycle[i].border}`}
            >
              <span className="block text-xl font-extrabold text-brand-navy">{link.label} →</span>
              <span className="mt-2 block leading-relaxed text-slate-600">{link.body}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
