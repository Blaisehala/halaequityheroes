"use client";

import { useCallback, useState } from "react";

const SLIDE_COUNT = 5;
const SWIPE_THRESHOLD = 50;

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + SLIDE_COUNT) % SLIDE_COUNT);
  }, []);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % SLIDE_COUNT);
  }, []);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (touchStart === null) return;
      const end = e.changedTouches[0].clientX;
      const delta = touchStart - end;
      if (delta > SWIPE_THRESHOLD) goNext();
      else if (delta < -SWIPE_THRESHOLD) goPrev();
      setTouchStart(null);
    },
    [touchStart, goNext, goPrev]
  );

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Track */}
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {Array.from({ length: SLIDE_COUNT }, (_, i) => (
          <div
            key={i}
            className="flex h-full shrink-0 w-full items-center justify-center px-4 sm:px-8"
          >
            <div className="relative h-full w-full max-w-4xl mx-auto min-h-[200px] overflow-hidden border border-white/20 bg-slate-700/60 shadow-2xl">
              {/* Placeholder: replace with <Image> or <img> when you add real images */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-600/90 to-brand-navy/90 text-white/90">
                <span className="text-sm sm:text-base font-medium tracking-wide">
                  Image placeholder {i + 1}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        type="button"
        onClick={goPrev}
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 border-white/60 bg-brand-navy-deep/40 text-white shadow-lg backdrop-blur-sm transition hover:border-white hover:bg-brand-navy/60 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Previous slide"
      >
        <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        type="button"
        onClick={goNext}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 border-white/60 bg-brand-navy-deep/40 text-white shadow-lg backdrop-blur-sm transition hover:border-white hover:bg-brand-navy/60 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Next slide"
      >
        <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {Array.from({ length: SLIDE_COUNT }, (_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition-colors sm:h-2.5 sm:w-2.5 ${
              i === index ? "bg-white scale-125" : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
