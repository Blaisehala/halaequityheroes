import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "../components/PageHero";
import TimelineSteps from "../components/TimelineSteps";
import Eyebrow, { logoCycle } from "../components/Eyebrow";
import { icons } from "../components/IconChip";
import { pageMetadata } from "../lib/seo";
import { photos, type Photo } from "../lib/photos";

export const metadata: Metadata = pageMetadata({
  title: "Volunteer",
  description:
    "Offer your skills — join a project team in product, data, operations, or storytelling.",
  path: "/volunteer",
});

const teams = [
  { title: "Product", body: "Shape the tools and services community partners rely on.", icon: icons.bolt },
  { title: "Data", body: "Help partners understand needs and show the difference they make.", icon: icons.eye },
  { title: "Operations", body: "Keep projects running smoothly behind the scenes.", icon: icons.clipboard },
  { title: "Storytelling", body: "Amplify lived experience through words, photos, and film.", icon: icons.chat },
  { title: "Mentoring", body: "Share your experience with grassroots and youth leaders.", icon: icons.academic },
  { title: "Community organising", body: "Bring people together and help start local circles.", icon: icons.users },
];

const pledge = [
  { title: "A commitment to equity", body: "You believe quality care should reach everyone who needs it." },
  { title: "A willingness to learn", body: "We welcome people at every stage of their journey." },
  { title: "Respect for community leadership", body: "Local partners lead on priorities and design — Heroes support them." },
];

type Tile = { kind: "photo"; photo: Photo; className: string } | { kind: "reason"; title: string; body: string; className: string };

// Photos and reasons woven into one mosaic (12-column grid on large screens)
const mosaic: Tile[] = [
  { kind: "photo", photo: photos.caregiverGroup, className: "lg:col-span-5 lg:row-span-2 aspect-[4/3] lg:aspect-auto" },
  { kind: "reason", title: "Flexible commitment", body: "Give 10 minutes a month or launch a full chapter.", className: "lg:col-span-4 bg-brand-navy text-white" },
  { kind: "reason", title: "Pause any time", body: "Change or pause your involvement whenever you need to.", className: "lg:col-span-3 bg-white" },
  { kind: "reason", title: "Every skill counts", body: "Your craft can power local campaigns.", className: "lg:col-span-3 bg-white" },
  { kind: "photo", photo: photos.bestFriends, className: "lg:col-span-4 aspect-[4/3]" },
  { kind: "reason", title: "Community-led", body: "Work alongside local partners who lead on priorities and design.", className: "lg:col-span-4 bg-white" },
  { kind: "reason", title: "Learn as you go", body: "We welcome people at every stage of their journey.", className: "lg:col-span-4 bg-brand-blue text-white" },
  { kind: "photo", photo: photos.redWall, className: "lg:col-span-4 aspect-[4/3]" },
  { kind: "reason", title: "A global family", body: "Join organisers, nurses, mentors, teachers, and technicians from around the world.", className: "sm:col-span-2 lg:col-span-12 bg-white" },
];

function TeamIcon({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d={d} />
    </svg>
  );
}

export default function VolunteerPage() {
  return (
    <main>
      <PageHero
        variant="centered"
        image={photos.laughingCrowd}
        eyebrow="Volunteer"
        title="Your skills have the power to transform lives"
        intro="Join a project team in product, data, operations, or storytelling. We welcome people at every stage of their journey."
      />

      {/* Project teams: one card per team, each with a logo-colour stripe */}
      <section className="bg-brand-sky-tint px-6 pb-20 sm:pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <Eyebrow>Where you can help</Eyebrow>
              <h2 className="mt-4 font-display text-4xl text-brand-navy sm:text-5xl">Find your project team</h2>
            </div>
            <p className="max-w-sm leading-relaxed text-slate-600">
              Tell us which team suits you — we&apos;ll match you with initiatives that align with your values and capacity.
            </p>
          </div>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {teams.map((team, i) => {
              const colour = logoCycle[i % logoCycle.length];
              return (
                <li key={team.title}>
                  <Link
                    href="/contact"
                    className={`group flex h-full flex-col border-t-4 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${colour.border}`}
                  >
                    <span className={colour.text}>
                      <TeamIcon d={team.icon} />
                    </span>
                    <h3 className="mt-5 text-xl font-extrabold text-brand-navy">{team.title}</h3>
                    <p className="mt-2 flex-1 leading-relaxed text-slate-600">{team.body}</p>
                    <span className="mt-6 text-sm font-bold text-brand-blue transition group-hover:translate-x-1">
                      Join this team →
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Why volunteer: photos and reasons woven into one mosaic */}
      <section className="bg-brand-sky-tint-deep px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>Why join</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-4xl text-brand-navy sm:text-5xl">Why volunteer with us</h2>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[minmax(11rem,auto)]">
            {mosaic.map((tile) =>
              tile.kind === "photo" ? (
                <li key={tile.photo.src} className={`relative overflow-hidden ${tile.className}`}>
                  <Image src={tile.photo.src} alt={tile.photo.alt} fill sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                </li>
              ) : (
                <li key={tile.title} className={`flex flex-col justify-end p-7 ${tile.className}`}>
                  <h3 className="font-display text-3xl">{tile.title}</h3>
                  <p className={`mt-2 leading-relaxed ${tile.className.includes("text-white") ? "text-white/80" : "text-slate-600"}`}>{tile.body}</p>
                </li>
              )
            )}
          </ul>
        </div>
      </section>

      {/* The pledge: what we ask of every Hero */}
      <section className="bg-brand-navy px-6 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-6xl">
          <Eyebrow tone="dark">All we ask for</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-4xl sm:text-5xl">The Hero pledge</h2>
          <ol className="mt-12 grid gap-10 md:grid-cols-3">
            {pledge.map((item, i) => (
              <li key={item.title} className={`border-l-4 pl-6 ${logoCycle[i].border}`}>
                <span className="font-display text-6xl leading-none text-white/25">0{i + 1}</span>
                <h3 className="mt-4 text-2xl font-extrabold">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-white/75">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <TimelineSteps
        eyebrow="Step by step"
        title="How volunteering works"
        image={photos.blueTop}
        steps={[
          { title: "Get in touch", body: "Tell us your skills and availability." },
          { title: "Get matched", body: "We match you with initiatives that align with your values and capacity." },
          { title: "Join a project team", body: "Work in product, data, operations, or storytelling alongside community-led partners." },
        ]}
      />

      {/* Closing invitation */}
      <section className="relative isolate overflow-hidden bg-brand-navy text-white">
        <Image src={photos.orangeShirt.src} alt={photos.orangeShirt.alt} fill sizes="100vw" className="-z-20 object-cover object-[center_30%]" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-navy via-brand-navy/85 to-brand-navy/20" />
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <div className="max-w-xl">
            <Eyebrow tone="dark">Ready when you are</Eyebrow>
            <h2 className="mt-4 font-display text-5xl leading-[1.05] sm:text-6xl">Ready to start?</h2>
            <p className="mt-5 text-lg leading-relaxed text-white/85">
              Tell us your skills and availability, and we&apos;ll find the right place for you.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="bg-brand-amber px-8 py-4 text-sm font-bold uppercase tracking-[0.1em] text-brand-navy transition hover:bg-brand-amber-dark"
              >
                Get in touch to volunteer
              </Link>
              <Link
                href="/get-involved"
                className="border-2 border-white/60 px-8 py-[14px] text-sm font-bold uppercase tracking-[0.1em] text-white transition hover:bg-white/10"
              >
                See all ways to help
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
