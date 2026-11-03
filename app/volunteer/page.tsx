import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "../components/PageHero";
import IconGrid from "../components/IconGrid";
import TimelineSteps from "../components/TimelineSteps";
import IconChip, { icons } from "../components/IconChip";
import { pageMetadata } from "../lib/seo";
import { photos } from "../lib/photos";

export const metadata: Metadata = pageMetadata({
  title: "Volunteer",
  description:
    "Offer your skills — join a project team in product, data, operations, or storytelling.",
  path: "/volunteer",
});

const roles = ["Product", "Data", "Operations", "Storytelling", "Mentoring", "Community organising"];

const requirements = [
  "A commitment to equity",
  "A willingness to learn",
  "Respect for community leadership",
];

const reasons = [
  { title: "Flexible commitment", body: "Give 10 minutes a month or launch a full chapter.", icon: icons.clipboard },
  { title: "Pause any time", body: "Change or pause your involvement whenever you need to.", icon: icons.pause },
  { title: "Community-led", body: "Work alongside local partners who lead on priorities and design.", icon: icons.users },
  { title: "Every skill counts", body: "Product, data, operations, storytelling — your craft can power local campaigns.", icon: icons.bolt },
  { title: "Learn as you go", body: "We welcome people at every stage of their journey.", icon: icons.academic },
  { title: "A global family", body: "Join organisers, nurses, mentors, teachers, and technicians from around the world.", icon: icons.globe },
];

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

      <section className="bg-brand-sky-tint pb-20 sm:pb-24">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-blue">Where you can help</p>
            <h2 className="mt-3 font-display text-4xl text-brand-navy sm:text-5xl">Project teams</h2>
            <ul className="mt-8 flex flex-wrap gap-3">
              {roles.map((r) => (
                <li key={r} className="bg-white px-5 py-2.5 text-sm font-bold text-brand-navy ring-1 ring-brand-sky-tint-deep">
                  {r}
                </li>
              ))}
            </ul>

            <h3 className="mt-12 text-xl font-extrabold text-brand-navy">All we ask for</h3>
            <ul className="mt-5 space-y-4">
              {requirements.map((req) => (
                <li key={req} className="flex items-center gap-3 text-slate-600">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-green/15 text-xs font-bold text-brand-teal">✓</span>
                  {req}
                </li>
              ))}
            </ul>
          </div>

          <aside className="overflow-hidden bg-brand-navy text-white">
            <div className="relative aspect-[4/3]">
              <Image src={photos.orangeShirt.src} alt={photos.orangeShirt.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover object-[center_30%]" />
            </div>
            <div className="p-8 sm:p-10">
            <IconChip d={icons.bolt} tone="amber" />
            <h2 className="mt-6 text-2xl font-extrabold">Offer your skills</h2>
            <p className="mt-3 leading-relaxed text-white/80">
              Tell us your skills and availability. We&apos;ll match you with
              initiatives that align with your values and capacity.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex bg-brand-amber px-7 py-3.5 text-sm font-bold text-brand-navy shadow-md shadow-brand-amber/30 transition hover:bg-brand-amber-dark"
            >
              Get in touch to volunteer
            </Link>
            </div>
          </aside>
        </div>
      </section>

      <IconGrid title="Why volunteer with us" items={reasons} background="white" />

      {/* Staggered photo trio — offset heights, used only on this page */}
      <section className="bg-brand-sky-tint px-6 pb-28 pt-20 sm:pb-36 sm:pt-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="max-w-xl font-display text-4xl text-brand-navy sm:text-5xl">People at every stage of their journey</h2>
          <ul className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
            {[photos.caregiverGroup, photos.bestFriends, photos.redWall].map((photo, i) => (
              <li
                key={photo.src}
                className={`relative aspect-[3/4] overflow-hidden ${i === 1 ? "md:translate-y-16" : ""} ${i === 2 ? "col-span-2 aspect-[16/10] md:col-span-1 md:aspect-[3/4]" : ""}`}
              >
                <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 768px) 33vw, 50vw" className="object-cover" />
              </li>
            ))}
          </ul>
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
    </main>
  );
}
