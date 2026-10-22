import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "../components/PageHero";
import NumberedSteps from "../components/NumberedSteps";
import QAGrid from "../components/QAGrid";
import CtaBand from "../components/CtaBand";
import IconChip, { icons, type Tone } from "../components/IconChip";
import { slugify } from "../lib/slugify";
import { pageMetadata } from "../lib/seo";
import { photos, type Photo } from "../lib/photos";

export const metadata: Metadata = pageMetadata({
  title: "Get Involved",
  description:
    "Donate, volunteer, or start a local circle. There is a role for every kind of Hero.",
  path: "/get-involved",
});

const waysToJoin: { title: string; body: string; href: string; cta: string; icon: string; tone: Tone; image: Photo }[] = [
  {
    title: "Donate monthly",
    body: "Give what you can, when you can. 100% of community gifts go to equity initiatives.",
    href: "/donate",
    cta: "Start a monthly gift",
    icon: icons.gift,
    tone: "sky",
    image: photos.framingFace,
  },
  {
    title: "Volunteer your skills",
    body: "Join a project team in product, data, operations, or storytelling.",
    href: "/volunteer",
    cta: "Offer your skills",
    icon: icons.bolt,
    tone: "amber",
    image: photos.friendsSitting,
  },
  {
    title: "Start a local circle",
    body: "Bring Hala Equity Heroes to your campus, company, or neighborhood.",
    href: "/contact",
    cta: "Launch a circle",
    icon: icons.users,
    tone: "blue",
    image: photos.schoolBackpacks,
  },
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

      <section className="bg-brand-sky-tint py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-3">
          {waysToJoin.map((way) => (
            <article key={way.title} id={slugify(way.title)} className="group scroll-mt-24 flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200/80">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={way.image.src}
                  alt={way.image.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <IconChip d={way.icon} tone={way.tone} />
                <h2 className="mt-6 text-xl font-extrabold text-brand-navy">{way.title}</h2>
                <p className="mt-3 flex-1 leading-relaxed text-slate-600">{way.body}</p>
                <Link
                  href={way.href}
                  className="mt-8 inline-flex justify-center rounded-full bg-brand-amber px-6 py-3 text-sm font-bold text-brand-navy transition hover:bg-brand-amber-dark"
                >
                  {way.cta}
                </Link>
              </div>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-6xl px-6 text-center text-sm text-slate-500">
          You can change or pause your involvement at any time.
        </p>
      </section>

      <NumberedSteps
        title="How to get started"
        intro="Three simple steps from first click to making a difference."
        background="white"
        steps={[
          { title: "Choose your on-ramp", body: "Donate, volunteer your skills, or start a local circle — whatever matches your capacity." },
          { title: "Get in touch", body: "Tell us about your skills, your availability, or your community." },
          { title: "Make a difference", body: "We match you with initiatives that align with your values and capacity." },
        ]}
      />

      <QAGrid />
      <CtaBand />
    </main>
  );
}
