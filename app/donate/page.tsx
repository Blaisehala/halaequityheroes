import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "../components/PageHero";
import StatementBlock from "../components/StatementBlock";
import DonationCard from "../components/DonationCard";
import { pageMetadata } from "../lib/seo";
import { photos } from "../lib/photos";

export const metadata: Metadata = pageMetadata({
  title: "Donate",
  description:
    "Give what you can — 100% of community gifts go to equity initiatives.",
  path: "/donate",
});

const ledger = [
  { label: "Your gift", value: "Once or every month — change or pause at any time" },
  { label: "Grassroots partners", value: "Grants to community-led partners" },
  { label: "Tools for the work", value: "The tools partners need to support their communities" },
  { label: "Keeping it safe", value: "The minimal infrastructure that keeps the network safe and accountable" },
  { label: "Reporting back", value: "A transparent breakdown for every initiative" },
];

export default function DonatePage() {
  return (
    <main>
      <PageHero
        variant="widget"
        image={photos.twoSmiling}
        eyebrow="Donate"
        title="Give what you can, when you can"
        intro="Your donations are the driving force behind our mission, bringing quality healthcare closer to the families who need it most."
      >
        <DonationCard />
      </PageHero>

      <StatementBlock
        eyebrow="Our promise"
        title="Every community gift goes to the work"
        body="Community contributions primarily fund grants to grassroots partners, tools to support their work, and the minimal infrastructure needed to keep the network safe and accountable."
        badge={{
          value: "100%",
          text: (
            <>
              <strong className="text-brand-navy">100% of community gifts go to equity initiatives</strong>, and
              we publish transparent breakdowns for each one.
            </>
          ),
        }}
      />

      {/* Asymmetric photo block: one large photo beside two stacked ones */}
      <section aria-label="Photos of children and families" className="bg-white px-6 pb-20 sm:pb-24">
        <div className="mx-auto grid max-w-6xl gap-3 sm:grid-cols-[1.7fr_1fr]">
          <div className="relative aspect-[4/3] overflow-hidden sm:row-span-2 sm:aspect-auto">
            <Image src={photos.joyfulCrowd.src} alt={photos.joyfulCrowd.alt} fill sizes="(min-width: 640px) 60vw, 100vw" className="object-cover" />
          </div>
          {[photos.foodSupplies, photos.marketStall].map((photo) => (
            <div key={photo.src} className="relative aspect-[4/3] overflow-hidden">
              <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 640px) 35vw, 100vw" className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Receipt-style ledger — a layout used only on this page */}
      <section className="bg-brand-sky-tint px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl border-2 border-brand-navy bg-white">
          <div className="flex flex-wrap items-baseline justify-between gap-2 border-b-2 border-dashed border-brand-navy/30 px-8 py-6 sm:px-12">
            <h2 className="font-display text-4xl text-brand-navy sm:text-5xl">Where your gift goes</h2>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-blue">Your giving receipt</p>
          </div>
          <dl className="px-8 py-4 sm:px-12">
            {ledger.map((row) => (
              <div key={row.label} className="flex flex-col gap-1 border-b border-slate-200 py-5 last:border-b-0 sm:flex-row sm:items-baseline sm:gap-4">
                <dt className="shrink-0 font-extrabold text-brand-navy">{row.label}</dt>
                <span aria-hidden className="hidden flex-1 border-b-2 border-dotted border-slate-300 sm:block" />
                <dd className="text-slate-600 sm:max-w-xs sm:text-right">{row.value}</dd>
              </div>
            ))}
          </dl>
          <div className="flex items-center justify-between gap-4 bg-brand-navy px-8 py-6 text-white sm:px-12">
            <span className="text-sm font-bold uppercase tracking-[0.18em]">Goes to equity initiatives</span>
            <span className="font-display text-5xl text-brand-amber">100%</span>
          </div>
        </div>
      </section>
    </main>
  );
}
