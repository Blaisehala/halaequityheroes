import type { Metadata } from "next";
import Image from "next/image";
import ContactSection from "../components/ContactSection";
import { contact } from "../components/SiteFooter";
import { pageMetadata } from "../lib/seo";
import { photos } from "../lib/photos";
import Eyebrow from "../components/Eyebrow";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Contact Hala Equity Heroes — ask a question, request support, volunteer or partner with us. We'd love to hear from you.",
  path: "/contact",
});

const details = [
  { label: "Address", value: contact.location, icon: "M12 21s-7-6.2-7-11.5a7 7 0 1114 0C19 14.8 12 21 12 21zm0-9a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" },
  { label: "Phone", value: contact.phone, icon: "M5 4h3.5l1.5 4.5-2 1.5a11 11 0 006 6l1.5-2 4.5 1.5V19a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" },
  { label: "Mail Us", value: contact.email, icon: "M3.5 6.5h17v11h-17zM3.5 7l8.5 6.5L20.5 7" },
];

function Sparkle({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path fill="currentColor" d="M12 2c.6 4.8 2.2 6.4 7 7-4.8.6-6.4 2.2-7 7-.6-4.8-2.2-6.4-7-7 4.8-.6 6.4-2.2 7-7z" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-brand-ink">
      <main className="pt-16">
        {/* Playful banner */}
        <section aria-hidden className="relative h-40 overflow-hidden bg-brand-sky-tint-deep sm:h-48">
          <svg viewBox="0 0 200 180" className="absolute left-1/2 top-[-70px] h-56 w-56 -translate-x-1/2 text-brand-sky/30 sm:h-64 sm:w-64">
            <path
              fill="currentColor"
              stroke="var(--color-brand-navy)"
              strokeOpacity="0.55"
              strokeWidth="3"
              d="M100 170S15 115 15 60a42 42 0 0185-12 42 42 0 0185 12c0 55-85 110-85 110z"
            />
          </svg>
          <Sparkle className="absolute left-[22%] top-10 h-5 w-5 text-brand-amber" />
          <Sparkle className="absolute left-[14%] top-24 h-4 w-4 text-brand-blue/70" />
          <Sparkle className="absolute right-[20%] top-16 h-6 w-6 text-brand-amber-dark" />
          <Sparkle className="absolute right-[9%] top-8 h-4 w-4 text-brand-green" />
          <span className="absolute left-[4%] top-20 h-3 w-3 rounded-full bg-brand-amber" />
          <span className="absolute right-[38%] top-20 h-3 w-3 rounded-full bg-brand-sky/50" />
          <span className="absolute left-[38%] top-8 h-2 w-2 rounded-full bg-brand-teal/60" />
          <span className="absolute right-[4%] top-28 h-3 w-3 rounded-full bg-brand-blue/40" />
          {/* Wavy edge into the page */}
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-10 w-full text-white sm:h-14">
            <path
              fill="currentColor"
              d="M0 60V30c40 0 40-25 80-25s40 25 80 25 40-20 80-20 40 20 80 20 40-28 80-28 40 28 80 28 40-18 80-18 40 18 80 18 40-25 80-25 40 25 80 25 40-20 80-20 40 20 80 20 40-28 80-28 40 28 80 28 40-18 80-18 40 18 80 18 40-25 80-25 40 25 80 25 40-20 80-20 40 20 80 20v30z"
            />
          </svg>
        </section>

        {/* Queries + form */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto grid max-w-6xl items-start gap-14 px-6 lg:grid-cols-2 lg:gap-16">
            <div className="lg:pt-10">
              <Eyebrow>Contact us</Eyebrow>
              <h1 className="mt-4 text-5xl font-extrabold leading-[1.05] tracking-tight text-brand-navy sm:text-6xl">
                Got Any
                <br />
                <span className="relative isolate inline-block">
                  Queries?
                  <span aria-hidden className="absolute inset-x-0 bottom-1 -z-10 h-3 bg-gradient-to-r from-brand-amber to-brand-amber-dark sm:h-4"/>
                </span>
              </h1>
              <p className="mt-6 max-w-md leading-relaxed text-slate-600">
                Together, we can give every family something every community
                deserves: quality healthcare for all. Let&apos;s talk.
              </p>
              <ul className="mt-8 space-y-5">
                {details.filter((d) => d.value).map((d) => (
                  <li key={d.label} className="flex items-center gap-4">
                    <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0 text-brand-blue" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinejoin="round" aria-label={d.label}>
                      <path d={d.icon} />
                    </svg>
                    <span className="text-lg font-medium text-brand-ink">{d.value}</span>
                  </li>
                ))}
              </ul>
              <div className="relative mt-10 aspect-[4/5] max-w-sm overflow-hidden">
                <Image src={photos.yellowFeather.src} alt={photos.yellowFeather.alt} fill sizes="24rem" className="object-cover" />
              </div>
            </div>

            <ContactSection />
          </div>
        </section>
      </main>
    </div>
  );
}
