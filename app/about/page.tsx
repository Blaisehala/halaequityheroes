import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import IntroLead from "../components/IntroLead";
import NumberedSteps from "../components/NumberedSteps";
import FullBleedSplit from "../components/FullBleedSplit";
import OverlapCard from "../components/OverlapCard";
import QAGrid from "../components/QAGrid";
import CtaBand from "../components/CtaBand";
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
        image={photos.caregiverGroup}
        eyebrow="About us"
        title="People showing up for each other"
        intro="Hala Equity Heroes is a community-based charity that directs time, skills, and resources to grassroots leaders advancing gender, racial, economic, and educational equity."
      />

      <IntroLead title="Serving those in need since 1978" image={photos.benchRow}>
        <p>
          Globally, billions still lack access to safe systems of care. Children
          and families wait for resources that never arrive through traditional
          philanthropy.
        </p>
        <p>
          We are carried by a family of volunteers from around the world — from
          our organisers, nurses, and mentors to our volunteer teachers,
          technicians, and those who are just ready to start.
        </p>
      </IntroLead>

      <NumberedSteps
        id="how-we-work"
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

      <OverlapCard id="our-community" title="Our community" image={photos.blueWall}>
        <p>
          We operate as a community-based charity with a small core team and a
          wide network of volunteer circles.
        </p>
      </OverlapCard>

      <QAGrid />
      <CtaBand />
    </main>
  );
}
