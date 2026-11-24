"use client";

import { useState, type ReactNode } from "react";

// Slider for the families section. The first slide is the introduction; the rest are stories.
// Previous/Next buttons and dots move between slides.
export type SliderSlide = { label: string; node: ReactNode };

export default function FamilyStorySlider({ slides }: { slides: SliderSlide[] }) {
  const [current, setCurrent] = useState(0);
  const last = slides.length - 1;
  const go = (i: number) => setCurrent(Math.min(Math.max(i, 0), last));

  return (
    <div className="mx-auto w-full max-w-5xl">
      {slides[current].node}

      <div className="mt-8 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => go(current - 1)}
          disabled={current === 0}
          className="rounded-full border-2 border-brand-navy px-5 py-2 text-sm font-bold text-brand-navy transition hover:bg-brand-navy hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          &larr; Previous
        </button>
        <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Families section">
          {slides.map((s, i) => (
            <button
              key={`${s.label}-${i}`}
              type="button"
              role="tab"
              aria-selected={i === current}
              aria-label={`Show ${s.label}`}
              onClick={() => go(i)}
              className={`h-3.5 w-3.5 rounded-full border-2 border-brand-navy transition ${i === current ? "bg-brand-navy" : "bg-transparent"}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(current + 1)}
          disabled={current === last}
          className="rounded-full border-2 border-brand-navy px-5 py-2 text-sm font-bold text-brand-navy transition hover:bg-brand-navy hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          Next &rarr;
        </button>
      </div>
      <p className="mt-4 text-center text-sm text-slate-600">
        {current + 1} of {slides.length}
      </p>
    </div>
  );
}
