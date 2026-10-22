import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import { slugify } from "../lib/slugify";
import { pageMetadata } from "../lib/seo";
import { photos } from "../lib/photos";

export const metadata: Metadata = pageMetadata({
  title: "Stories",
  description:
    "Stories from the field — impact, community initiatives, and voices from our Heroes and partners.",
  path: "/stories",
});

const initiatives = [
  {
    title: "Community Equity Funds",
    tag: "Funding",
    tagClass: "bg-brand-sky-tint text-brand-blue",
    image: photos.siblingsDressedUp,
    body: "Micro‑grants to grassroots groups led by women, youth, and marginalized communities.",
  },
  {
    title: "Skills for Justice",
    tag: "Mentorship",
    tagClass: "bg-amber-100 text-amber-700",
    image: photos.boysLaughing,
    body: "Designers, engineers, and operators volunteering their craft to power local campaigns.",
  },
  {
    title: "Stories that Shift Power",
    tag: "Storytelling",
    tagClass: "bg-brand-blue/10 text-brand-blue",
    image: photos.brotherSister,
    body: "Storytelling labs that amplify lived experience and challenge the status quo.",
  },
];

export default function StoriesPage() {
  return (
    <main>
      <PageHero
        image={photos.groupOutdoors}
        eyebrow="Stories"
        title="Where Heroes are showing up"
        intro="A few of the live areas where Heroes are making a difference right now — with funding, mentorship, and hands-on builds."
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-3">
          {initiatives.map((item) => (
            <article key={item.title} id={slugify(item.title)} className="scroll-mt-24 group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200/80 transition hover:shadow-lg">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${item.tagClass}`}>{item.tag}</span>
                <h2 className="mt-4 text-xl font-extrabold text-brand-navy">{item.title}</h2>
                <p className="mt-2 leading-relaxed text-slate-600">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-6xl px-6 text-center text-sm text-slate-500">
          New initiatives and stories are added by community partners on a rolling basis.
        </p>
      </section>

      <section className="bg-brand-sky-tint py-20 sm:py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-display text-4xl text-brand-navy sm:text-5xl">Every story helps shift power</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Our storytelling labs amplify lived experience and challenge the
            status quo. If you or your community would like to share a story, we
            would love to hear from you.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block border-b-2 border-brand-amber pb-0.5 text-sm font-bold uppercase tracking-[0.14em] text-brand-navy transition hover:border-brand-navy"
          >
            Share your story
          </Link>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
