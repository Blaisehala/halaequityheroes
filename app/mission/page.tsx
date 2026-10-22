import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "../components/PageHero";
import FullBleedSplit from "../components/FullBleedSplit";
import IconGrid from "../components/IconGrid";
import CtaBand from "../components/CtaBand";
import IconChip, { icons, type Tone } from "../components/IconChip";
import { pageMetadata } from "../lib/seo";
import { photos, type Photo } from "../lib/photos";

export const metadata: Metadata = pageMetadata({
  title: "Our Mission",
  description:
    "A community-led charity for real equity work. We center communities closest to the challenge and furthest from resources.",
  path: "/mission",
});

const pillars: { title: string; body: string; icon: string; tone: Tone; image: Photo }[] = [
  {
    title: "Equity first",
    body: "We center communities who are closest to the challenge and furthest from resources.",
    icon: icons.heart,
    tone: "sky",
    image: photos.colourfulDress,
  },
  {
    title: "Radical transparency",
    body: "From intake to impact, every decision and dollar is traceable.",
    icon: icons.eye,
    tone: "amber",
    image: photos.portraitPinkShirt,
  },
  {
    title: "Everyday heroes",
    body: "You do not need a foundation to change the world. You just need to start.",
    icon: icons.star,
    tone: "green",
    image: photos.kaftans,
  },
];

const values = [
  { title: "Healthcare for all", body: "Quality care that reaches everyone who needs it, wherever they live.", icon: icons.heart },
  { title: "Sickle cell support", body: "Helping children and families affected by sickle cell access support, resources, and opportunities to thrive.", icon: icons.shield },
  { title: "Equity in every form", body: "Backing grassroots leaders advancing gender, racial, economic, and educational equity.", icon: icons.scale },
  { title: "Community leadership", body: "Local partners lead on priorities and design — decisions sit with the people closest to the work.", icon: icons.users },
  { title: "A global family", body: "Organisers, nurses, mentors, teachers, and technicians from around the world, volunteering together.", icon: icons.globe },
  { title: "Stories that shift power", body: "Amplifying lived experience and challenging the status quo.", icon: icons.chat },
];

export default function MissionPage() {
  return (
    <main>
      <PageHero
        image={photos.wavingByTree}
        eyebrow="Our mission"
        title="Healthcare for all: quality first, equity always"
        intro="Traditional philanthropy often leaves the most impacted people out of the room. Hala Equity Heroes flips the script by moving decisions, resources, and storytelling power into the hands of community organizers, educators, caregivers, and youth leaders."
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center font-display text-4xl text-brand-navy sm:text-5xl">Our three pillars</h2>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {pillars.map((p) => (
              <article key={p.title} className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200/80">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={p.image.src}
                    alt={p.image.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <IconChip d={p.icon} tone={p.tone} />
                  <h3 className="mt-6 text-xl font-extrabold text-brand-navy">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{p.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FullBleedSplit
        title="Every child deserves more than a diagnosis"
        image={photos.portraitByWater}
        link={{ href: "/get-involved", label: "Find your way to help" }}
        reverse
      >
        <p>
          Behind every sickle cell diagnosis is a child with a name, a laugh,
          and a future still being written.
        </p>
        <p>
          Living with sickle cell should never mean a child has to face it
          alone. We help children and families access support, resources, and
          opportunities to thrive.
        </p>
      </FullBleedSplit>

      <IconGrid
        title="What we stand for"
        intro="The commitments behind everything we do."
        items={values}
      />

      <CtaBand />
    </main>
  );
}
