import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import ZigZagRows from "../components/ZigZagRows";
import CaptionPhoto from "../components/CaptionPhoto";
import ValueBento from "../components/ValueBento";
import NewsletterSignup from "../components/NewsletterSignup";
import { icons } from "../components/IconChip";
import { pageMetadata } from "../lib/seo";
import { photos } from "../lib/photos";

export const metadata: Metadata = pageMetadata({
  title: "Our Mission",
  description:
    "A community-led charity for real equity work. We center communities closest to the challenge and furthest from resources.",
  path: "/mission",
});

const pillars = [
  {
    eyebrow: "Pillar one",
    title: "Equity first",
    body: "We center communities who are closest to the challenge and furthest from resources.",
    image: photos.colourfulDress,
  },
  {
    eyebrow: "Pillar two",
    title: "Radical transparency",
    body: "From intake to impact, every decision and dollar is traceable.",
    image: photos.portraitPinkShirt,
  },
  {
    eyebrow: "Pillar three",
    title: "Everyday heroes",
    body: "You do not need a foundation to change the world. You just need to start.",
    image: photos.kaftans,
  },
];

const values = [
  { title: "Healthcare for all", body: "Quality care that reaches everyone who needs it, wherever they live.", icon: icons.heart, image: photos.babySmile },
  { title: "Sickle cell support", body: "Helping children and families affected by sickle cell access support, resources, and opportunities to thrive.", icon: icons.shield },
  { title: "Equity in every form", body: "Backing grassroots leaders advancing gender, racial, economic, and educational equity.", icon: icons.scale },
  { title: "Community leadership", body: "Local partners lead on priorities and design — decisions sit with the people closest to the work.", icon: icons.users },
  { title: "A global family", body: "Organisers, nurses, mentors, teachers, and technicians from around the world, volunteering together.", icon: icons.globe },
  { title: "Stories that shift power", body: "Amplifying lived experience and challenging the status quo.", icon: icons.chat, image: photos.brightSky },
];

export default function MissionPage() {
  return (
    <main>
      <PageHero
        variant="statement"
        image={photos.wavingByTree}
        eyebrow="Our mission"
        title="Healthcare for all: quality first, equity always"
        intro="Traditional philanthropy often leaves the most impacted people out of the room. Hala Equity Heroes flips the script by moving decisions, resources, and storytelling power into the hands of community organizers, educators, caregivers, and youth leaders."
      />

      <ZigZagRows eyebrow="What guides us" title="Our three pillars" rows={pillars} />

      <CaptionPhoto
        eyebrow="Why we care"
        title="Every child deserves more than a diagnosis"
        image={photos.portraitByWater}
        tags={["Children", "Families", "Awareness"]}
        link={{ href: "/get-involved", label: "Find your way to help" }}
      >
        <p>
          Behind every sickle cell diagnosis is a child with a name, a laugh,
          and a future still being written.
        </p>
        <p>
          No child should face it alone — we help children and families access
          support, resources, and opportunities to thrive.
        </p>
      </CaptionPhoto>

      <ValueBento
        eyebrow="Our values"
        title="What we stand for"
        intro="The commitments behind everything we do."
        items={values}
      />

      <NewsletterSignup variant="headline" title="Get monthly community notes" />
    </main>
  );
}
