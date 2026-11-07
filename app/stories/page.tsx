import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "../components/PageHero";
import DarkStraddle from "../components/DarkStraddle";
import NewsletterSignup from "../components/NewsletterSignup";
import StoryExplorer, { type StoryCategory } from "../components/StoryExplorer";
import { slugify } from "../lib/slugify";
import { pageMetadata } from "../lib/seo";
import { photos } from "../lib/photos";
import Eyebrow from "../components/Eyebrow";

export const metadata: Metadata = pageMetadata({
  title: "Stories",
  description:
    "Stories from the field — impact, community initiatives, and voices from our Heroes and partners.",
  path: "/stories",
});

// Story copy draws on what the site already says about each area of work.
// TODO: replace or extend with real stories from community partners (with permission).
const categories: StoryCategory[] = [
  {
    tag: "Funding",
    tone: "pink" as const,
    title: "Community Equity Funds",
    body: "Micro‑grants to grassroots groups led by women, youth, and marginalized communities.",
    image: photos.siblingsDressedUp,
    stories: [
      { title: "Women-led groups", body: "Micro-grants that put resources directly in the hands of women leading change in their communities." },
      { title: "Youth-led projects", body: "Backing young leaders with the funding to turn their ideas for equity into action." },
      { title: "Marginalized communities", body: "Directing resources to communities closest to the challenge and furthest from support." },
    ],
  },
  {
    tag: "Mentorship",
    tone: "amber" as const,
    title: "Skills for Justice",
    body: "Designers, engineers, and operators volunteering their craft to power local campaigns.",
    image: photos.boysLaughing,
    stories: [
      { title: "Design for change", body: "Volunteer designers helping local campaigns tell their story clearly and powerfully." },
      { title: "Tools that work", body: "Engineers building the simple tools community partners need to support their work." },
      { title: "Running smoothly", body: "Operators lending their experience so partners can focus on the people they serve." },
    ],
  },
  {
    tag: "Storytelling",
    tone: "blue" as const,
    title: "Stories that Shift Power",
    body: "Storytelling labs that amplify lived experience and challenge the status quo.",
    image: photos.brotherSister,
    stories: [
      { title: "Storytelling labs", body: "Spaces where community members shape and share their own stories, in their own words." },
      { title: "Amplifying lived experience", body: "Putting the voices of people closest to the challenge at the centre of the conversation." },
      { title: "Challenging the status quo", body: "Stories that question how things are done — and point to how they could be better." },
    ],
  },
  {
    tag: "Health & Care",
    tone: "green" as const,
    title: "Care for Every Child",
    body: "Behind every sickle cell diagnosis is a child with a name, a laugh, and a future still being written.",
    image: photos.playingFriends,
    stories: [
      { title: "Supporting a child", body: "Helping create moments of comfort, care, and opportunity for children living with sickle cell." },
      { title: "Supporting a family", body: "Helping families navigate the challenges that come with sickle cell — so no one faces it alone." },
      { title: "Learning & advocacy", body: "Creating greater understanding around sickle cell, so schools and communities know how to help." },
    ],
  },
].map((cat) => ({ ...cat, id: slugify(cat.title) }));

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
          <Eyebrow>Our work, in stories</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-4xl text-brand-navy sm:text-5xl">Choose a story to explore</h2>
          <div className="mt-10">
            <StoryExplorer categories={categories} />
          </div>
          <p className="mt-12 text-center text-sm text-slate-500">
            New initiatives and stories are added by community partners on a rolling basis.
          </p>
        </div>
      </section>

      {/* Gallery strip: mixed shapes aligned along the bottom edge */}
      <section className="bg-white px-6 pb-20 sm:pb-24">
        <div className="mx-auto max-w-6xl border-t-2 border-brand-pink pt-10">
          <Eyebrow>Gallery</Eyebrow>
          <h2 className="mt-4 font-display text-4xl text-brand-navy sm:text-5xl">From our communities</h2>
          <ul className="mt-10 grid items-end gap-4 sm:grid-cols-[1.6fr_1fr] md:gap-6">
            {[
              { photo: photos.traditionalDress, shape: "aspect-[4/3]" },
              { photo: photos.sistersDoorway, shape: "aspect-[3/4]" },
            ].map(({ photo, shape }) => (
              <li key={photo.src} className={`relative overflow-hidden ${shape}`}>
                <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 768px) 38vw, 50vw" className="object-cover" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <DarkStraddle
        eyebrow="Storytelling labs"
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

      <NewsletterSignup variant="stub" title="Stories, straight to your inbox" />
    </main>
  );
}
