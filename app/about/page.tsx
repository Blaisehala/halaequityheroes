import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import RevealCard from "../components/RevealCard";
import NumberedSteps from "../components/NumberedSteps";
import FullBleedSplit from "../components/FullBleedSplit";
import OverlapCard from "../components/OverlapCard";
import QAGrid from "../components/QAGrid";
import NewsletterSignup from "../components/NewsletterSignup";
import { pageMetadata } from "../lib/seo";
import { photos } from "../lib/photos";

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description:
    "Hala Equity Heroes is a community-based charity directing time, skills, and resources to grassroots leaders advancing equity.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main>
      <PageHero
        variant="split"
        image={photos.matchingPrints}
        eyebrow="About us"
        title="People showing up for each other"
        intro="Hala Equity Heroes is a community-based charity that directs time, skills, and resources to grassroots leaders advancing gender, racial, economic, and educational equity."
      />

      <RevealCard
        eyebrow="Our story"
        title="Serving those in need since 1978"
        image={photos.benchRow}
        paragraphs={[
          "Globally, billions still lack access to safe systems of care. Children and families wait for resources that never arrive through traditional philanthropy.",
          "We are carried by a family of volunteers from around the world — from our organisers, nurses, and mentors to our volunteer teachers, technicians, and those who are just ready to start.",
          "Today that family keeps growing, one circle, one partner, and one Hero at a time.",
        ]}
      />

      <NumberedSteps
        id="how-we-work"
        eyebrow="Our approach"
        title="How we work"
        intro="We keep the model simple, transparent, and accountable."
        link={{ href: "/get-involved", label: "Get involved" }}
        steps={[
          { title: "Communities lead", body: "Community partners share what equity work looks like where they live." },
          { title: "Heroes are matched", body: "We match Heroes to the initiatives that need their time, skills, and resources." },
          { title: "Impact is shared", body: "Resources flow directly to partners, with regular updates and impact notes shared back to the community." },
        ]}
      />

      <FullBleedSplit
        eyebrow="What we believe"
        title="No gatekeeping. No saviorism."
        image={photos.hugOutside}
        link={{ href: "/mission", label: "Read our mission" }}
      >
        <p>Just people showing up for each other.</p>
        <p>
          Local partners lead on priorities and design; Heroes provide
          resources, skills, and amplification.
        </p>
      </FullBleedSplit>

      <OverlapCard id="our-community" eyebrow="Who we are" title="Our community" image={photos.blueWall}>
        <p>
          We operate as a community-based charity with a small core team and a
          wide network of volunteer circles.
        </p>
      </OverlapCard>

      <QAGrid />
      <NewsletterSignup variant="letter" title="Stay close to the work" />
    </main>
  );
}
