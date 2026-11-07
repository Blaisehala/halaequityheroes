'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Photo } from "../lib/photos";
import Eyebrow from "./Eyebrow";

type Fit = { option: string; title: string; body: string; href: string; cta: string; image: Photo };

// "How much time do you have?" chooser. Every answer stays in the HTML (toggled
// with the hidden attribute) so all of it remains crawlable.
export default function FitFinder({ fits }: { fits: Fit[] }) {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-brand-sky-tint">
      <div className="grid lg:grid-cols-[1.2fr_1fr]">
        <div className="px-6 py-16 sm:py-24 lg:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] lg:pr-16">
          <Eyebrow>Find your fit</Eyebrow>
          <h2 className="mt-4 font-display text-4xl text-brand-navy sm:text-5xl">How much time do you have?</h2>
          <ul className="mt-10 border-t-2 border-brand-navy">
            {fits.map((fit, i) => (
              <li key={fit.option} className="border-b-2 border-brand-navy">
                <button
                  type="button"
                  aria-pressed={active === i}
                  onClick={() => setActive(i)}
                  className={`flex w-full items-center justify-between gap-6 py-6 text-left font-display text-3xl transition sm:text-5xl ${
                    active === i ? "text-brand-navy" : "text-brand-navy/40 hover:text-brand-navy"
                  }`}
                >
                  {fit.option}
                  <span aria-hidden className={`text-2xl transition ${active === i ? "text-brand-blue" : "opacity-0"}`}>
                    →
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-brand-navy px-8 py-16 text-white sm:px-12 lg:flex lg:items-center">
          {fits.map((fit, i) => (
            <div key={fit.title} hidden={active !== i} aria-live="polite" className="w-full">
              <div className="relative mb-8 aspect-[16/10] overflow-hidden">
                <Image src={fit.image.src} alt={fit.image.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
              </div>
              <Eyebrow tone="dark">Your best fit</Eyebrow>
              <h3 className="mt-4 text-3xl font-extrabold sm:text-4xl">{fit.title}</h3>
              <p className="mt-4 text-lg leading-relaxed text-white/80">{fit.body}</p>
              <Link
                href={fit.href}
                className="mt-8 inline-flex bg-brand-amber px-7 py-4 text-sm font-bold uppercase tracking-[0.1em] text-brand-navy transition hover:bg-brand-amber-dark"
              >
                {fit.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
