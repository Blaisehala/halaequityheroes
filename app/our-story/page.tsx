import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "../components/PageHero";
import Eyebrow, { logoCycle } from "../components/Eyebrow";
import StoryTemplate, { type FamilyStoryProps } from "../components/StoryTemplate";
import FamilyStorySlider from "../components/FamilyStorySlider";
import { pageMetadata } from "../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Our Story",
  description:
    "How Hala Equity Heroes came about — from serving those in need since 2023 to a global family of everyday Heroes working for healthcare equity.",
  path: "/our-story",
});

// The chapters use only what the site already says about Hala Equity Heroes.
// TODO: add the real founding story — who started it, how the name "Hala" was chosen,
// and key milestones since 2023 — then extend or replace these chapters.
const chapters = [
  {
    title: "Where it began",
    lead: "Serving those in need since 2023.",
    body: [
      "Globally, billions still lack access to safe systems of care. Children and families wait for resources that never arrive through traditional philanthropy.",
      "Hala Equity Heroes began with a simple commitment: to show up for the people who are closest to the challenge and furthest from resources.",
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
];

// Mama Destiny's story, shortened. Told in the first person by the person who met her (consent given).
const mamaDestiny: FamilyStoryProps = {
  label: "A mother's story",
  title: "Mama Destiny",
  lead: "I watched one of her twins die because blood didn't arrive in time.",
  body: [
    "I met Mama Destiny at our monthly sickle cell clinic in Bungoma County. She is raising three children alone, and all three have sickle cell disease.",
    "Last year, she lost the twin of her two-year-old. Blood could only be given after someone donated to replace it, and she couldn't donate because she was anaemic herself. The blood never came in time.",
    "Every time her surviving twin needs another transfusion, that memory returns.",
  ],
  photo: { src: "/images/Mama_Destiny.jpeg", alt: "Mama Destiny" },
  author: "Mama Destiny",
  role: "Bungoma County",
  colourIndex: 2,
};

// PLACEHOLDER STORIES: sample layout for the pitch. The photos are stock images (free-use licence)
// and the text is not from real families. Replace each entry with the client's real story,
// photo and consent before launch, and remove the "Placeholder" label.
const placeholderStories = [
  { src: "/images/pexels-askar-abayev-6190153.jpg", alt: "Stock photo of a woman in a yellow head wrap with her family", title: "Family story 1: title to come" },
  { src: "/images/pexels-chris-wade-ntezicimpa-564856410-29718668.jpg", alt: "Stock photo of a mother holding her baby", title: "Family story 2: title to come" },
  { src: "/images/pexels-greta-hoffman-9705938.jpg", alt: "Stock photo of a mother laughing with her toddler", title: "Family story 3: title to come" },
  { src: "/images/pexels-greta-hoffman-9705671.jpg", alt: "Stock photo of parents kissing their toddler", title: "Family story 4: title to come" },
  { src: "/images/pexels-oluwakoreimage-14197890.jpg", alt: "Stock photo of a family portrait", title: "Family story 5: title to come" },
  { src: "/images/pexels-stewphotography-6645151.jpg", alt: "Stock photo of a grandmother with two granddaughters", title: "Family story 6: title to come" },
];

const extraPhotos = [
  { src: "/images/pexels-earthworks-801523516-39820517.jpg", alt: "Stock photo of a group of women smiling together" },
  { src: "/images/pexels-josiah-matthew-145486517-12909990.jpg", alt: "Stock photo of a group of friends" },
  { src: "/images/pexels-musingapictures-39723486.jpg", alt: "Stock photo of an expecting couple" },
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
            <Eyebrow>Two chapters</Eyebrow>
          </div>

          <ol className="mt-16 space-y-24 sm:space-y-32">
            {chapters.map((chapter, i) => {
              const colour = logoCycle[i % logoCycle.length];
              return (
                <li key={chapter.title} className="grid gap-6 md:grid-cols-[10rem_1fr] md:gap-14">
                  <div className="md:sticky md:top-32 md:self-start">
                    <span className={`block font-display text-6xl leading-none sm:text-7xl ${colour.text}`}>{i + 1}</span>
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

      {/* Families: the parents and carers this work is for */}
      <section className="flex min-h-[100svh] items-center bg-brand-sky-tint px-6 py-10 sm:py-12">
        <FamilyStorySlider
          slides={[
            {
              label: "Introduction",
              node: (
                <div className="mx-auto max-w-5xl">
                  <Eyebrow>The families behind the work</Eyebrow>
                  <h2 className="mt-6 font-display text-4xl leading-tight text-brand-navy sm:text-5xl">
                    Parents who never stop showing up
                  </h2>
                  <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-slate-600">
                    <p>
                      Caring for a child with sickle cell means hospital visits that arrive without warning, medicines that have to
                      be exact, and nights spent watching for signs of pain or infection. Many parents do this while holding down
                      work, looking after other children, and trying to keep their own health together.
                    </p>
                    <p>
                      Often the hardest part is carrying it alone. We want every parent to know that they are not alone, and that
                      the Heroes who stand with them are part of a community that understands what they face.
                    </p>
                  </div>
                </div>
              ),
            },
            { label: "Mama Destiny", node: <StoryTemplate {...mamaDestiny} /> },
            {
              label: "Mama Morris",
              node: (
                <StoryTemplate
                  label="A mother's story"
                  title="Mama Morris"
                  lead="She says she is always tired."
                  body={[
                    "Her son lives with sickle cell. Check-ups and medicine come at a cost, and for a very long time she was not able to provide them for him.",
                    "She was able to tell her child something she knows is a painful thing to say.",
                  ]}
                  photo={{ src: "/images/Mama_Morris.png", alt: "Mama Morris" }}
                  author="Mama Morris"
                  role="Bungoma County"
                  colourIndex={3}
                />
              ),
            },
            ...placeholderStories.slice(0, 2).map((story, i) => ({
              label: `Story ${i + 2}`,
              node: (
                <StoryTemplate
                  title={story.title}
                  label="Placeholder story"
                  lead="Placeholder: a real family's story will appear here."
                  body={["This text is a layout placeholder, not a real account. It will be replaced with the story of a parent or carer, told in their own words and with their consent."]}
                  photo={{ src: story.src, alt: story.alt, caption: "Stock photo, placeholder only" }}
                  author="Name to come"
                  role="Family story"
                  colourIndex={i + 1}
                />
              ),
            })),
          ]}
        />
      </section>

      {/* A family story, told in the Heroes' own words */}
      <section className="bg-white px-6 py-20 sm:py-28">
        <StoryTemplate
          label="A family inheritance"
          title="Why equity is personal"
          lead="For Beatrix, equity is not only a professional value. It is a family inheritance."
          body={[
            "The story starts with a grandfather who, at first, did not think girls should go to school. Her mother refused to let that end her education. She made and sold sisal rope to pay for her own uniform and school supplies, went on to become a teacher, and in time won her father's support for her schooling.",
            "The same question of who gets what, and when, came back in the next generation. Her siblings could not get hydroxyurea, a medicine that helps people with sickle cell, because of where and when they lived. Families all over the world are still making the same choice between medicine and food, based on their income or where they happen to live.",
            "That is why Hala Equity Heroes exists: to close the gap between people who can get care and people who cannot.",
          ]}
          quote="Equity isn't just a professional value for me, it's a family inheritance."
          author="Beatrix A."
          role="Hala Equity Heroes"
          colourIndex={0}
        />
      </section>

      {/* Photo strip */}
      <section className="bg-brand-sky-tint px-6 pb-20 sm:pb-28">
        <div className="mx-auto mt-24 max-w-5xl">
          <Eyebrow>Heroes in community</Eyebrow>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {extraPhotos.map((photo) => (
              <figure key={photo.src}>
                <Image src={photo.src} alt={photo.alt} width={800} height={1000} className="h-auto w-full object-cover shadow-md" />
                <figcaption className="mt-3 text-sm text-slate-500">Stock photo, placeholder only</figcaption>
              </figure>
            ))}
          </div>
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
