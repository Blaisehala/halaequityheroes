import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "../components/PageHero";
import DarkStraddle from "../components/DarkStraddle";
import NewsletterSignup from "../components/NewsletterSignup";
import { slugify } from "../lib/slugify";
import { pageMetadata } from "../lib/seo";
import { photos } from "../lib/photos";

export const metadata: Metadata = pageMetadata({
  title: "Stories",
  description:
    "Stories from the field — impact, community initiatives, and voices from our Heroes and partners.",
  path: "/stories",
});

const [featured, ...more] = [
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
        variant="framed"
        image={photos.groupOutdoors}
        eyebrow="Stories"
        title="Where Heroes are showing up"
        intro="A few of the live areas where Heroes are making a difference right now — with funding, mentorship, and hands-on builds."
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          {/* Featured story: wide, magazine-style */}
          <article id={slugify(featured.title)} className="group grid scroll-mt-24 overflow-hidden bg-brand-navy text-white lg:grid-cols-[1.3fr_1fr]">
            <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[26rem]">
              <Image src={featured.image.src} alt={featured.image.alt} fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-amber">Featured · {featured.tag}</p>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl">{featured.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-white/80">{featured.body}</p>
            </div>
          </article>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {more.map((item) => (
              <article key={item.title} id={slugify(item.title)} className="group scroll-mt-24">
                <div className="relative aspect-[16/10] overflow-hidden ">
                  <Image src={item.image.src} alt={item.image.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <span className={`mt-6 inline-block px-3 py-1 text-xs font-bold ${item.tagClass}`}>{item.tag}</span>
                <h2 className="mt-3 text-2xl font-extrabold text-brand-navy">{item.title}</h2>
                <p className="mt-2 text-lg leading-relaxed text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>

          <p className="mt-12 text-center text-sm text-slate-500">
            New initiatives and stories are added by community partners on a rolling basis.
          </p>
        </div>
      </section>

      {/* Gallery strip: mixed shapes aligned along the bottom edge */}
      <section className="bg-white px-6 pb-20 sm:pb-24">
        <div className="mx-auto max-w-6xl border-t-2 border-brand-navy pt-10">
          <h2 className="font-display text-4xl text-brand-navy sm:text-5xl">From our communities</h2>
          <ul className="mt-10 grid grid-cols-2 items-end gap-4 md:grid-cols-[1.4fr_1fr_1.4fr] md:gap-6">
            {[
              { photo: photos.traditionalDress, shape: "col-span-2 aspect-[4/3] md:col-span-1" },
              { photo: photos.sistersDoorway, shape: "aspect-[3/4]" },
              { photo: photos.playingFriends, shape: "aspect-[3/4] md:aspect-[4/3]" },
            ].map(({ photo, shape }) => (
              <li key={photo.src} className={`relative overflow-hidden ${shape}`}>
                <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 768px) 38vw, 50vw" className="object-cover" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <DarkStraddle
        title="Every story helps shift power"
        intro="Our storytelling labs amplify lived experience and challenge the status quo."
        cardTitle="Share your story"
        cta={{ href: "/contact", label: "Get in touch" }}
      >
        <p>
          If you or your community would like to share a story, we would love
          to hear from you.
        </p>
      </DarkStraddle>

      <NewsletterSignup variant="ticket" title="Stories, straight to your inbox" />
    </main>
  );
}
