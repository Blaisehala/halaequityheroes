'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import type { Photo } from "../lib/photos";

export type StoryTone = "pink" | "amber" | "blue" | "green";

export type StoryCategory = {
  id: string;
  tag: string;
  tone: StoryTone;
  title: string;
  body: string;
  image: Photo;
  stories: { title: string; body: string }[];
};

// Each category has its own colour, echoing the logo
const tones: Record<StoryTone, { tag: string; accent: string; text: string; panel: string }> = {
  pink: { tag: "bg-brand-pink-tint text-brand-pink", accent: "border-logo-pink", text: "text-logo-pink", panel: "bg-brand-pink-tint" },
  amber: { tag: "bg-brand-amber/30 text-amber-800", accent: "border-brand-amber", text: "text-amber-700", panel: "bg-brand-amber/15" },
  blue: { tag: "bg-brand-blue/10 text-brand-blue", accent: "border-brand-blue", text: "text-brand-blue", panel: "bg-brand-sky-tint" },
  green: { tag: "bg-logo-green/15 text-brand-teal", accent: "border-logo-green", text: "text-brand-teal", panel: "bg-logo-green/10" },
};

const flip = "duration-700 ease-[cubic-bezier(.37,.01,0,.98)] motion-reduce:duration-0";

// Four flip cards. Hover (or tap / Enter) turns a card over; its description fades in once the
// flip has finished, with a "Read more" button that opens that category's stories below.
// Everything stays in the HTML (closed panels use the hidden attribute) so it is crawlable.
// Opening /stories#<category-id> (e.g. from the navigation) opens that category's stories.
export default function StoryExplorer({ categories }: { categories: StoryCategory[] }) {
  const [flipped, setFlipped] = useState<string | null>(null);
  const [open, setOpen] = useState<string | null>(null);

  useEffect(() => {
    const fromHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (categories.some((c) => c.id === id)) {
        setOpen(id);
        setFlipped(id);
      }
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [categories]);

  return (
    <div>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((cat) => {
          const tone = tones[cat.tone];
          const isFlipped = flipped === cat.id;
          const toggle = () => setFlipped(isFlipped ? null : cat.id);
          return (
            <li key={cat.id} id={cat.id} className="scroll-mt-24 [perspective:1400px]">
              <div
                tabIndex={0}
                data-flipped={isFlipped}
                onClick={toggle}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggle();
                  }
                }}
                className={`group relative h-[27rem] cursor-pointer outline-none [transform-style:preserve-3d] transition-transform ${flip} focus-visible:ring-4 focus-visible:ring-brand-blue/40 lg:hover:[transform:rotateY(180deg)] data-[flipped=true]:[transform:rotateY(180deg)]`}
              >
                {/* Front: photo, coloured tag, title */}
                <div className={`absolute inset-0 flex flex-col border-t-4 bg-white shadow-sm ring-1 ring-slate-200 [backface-visibility:hidden] ${tone.accent}`}>
                  <div className="relative flex-1 overflow-hidden">
                    <Image src={cat.image.src} alt={cat.image.alt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                  </div>
                  <div className="p-6">
                    <span className={`inline-block px-3 py-1 text-xs font-bold ${tone.tag}`}>{cat.tag}</span>
                    <h3 className="mt-3 text-xl font-extrabold text-brand-navy">{cat.title}</h3>
                  </div>
                </div>

                {/* Back: description fades in after the flip, then Read more */}
                <div className={`absolute inset-0 flex flex-col border-t-4 bg-white p-7 shadow-lg ring-1 ring-slate-200 [backface-visibility:hidden] [transform:rotateY(180deg)] ${tone.accent}`}>
                  <span className={`self-start px-3 py-1 text-xs font-bold ${tone.tag}`}>{cat.tag}</span>
                  <p className="mt-4 text-xl font-extrabold text-brand-navy">{cat.title}</p>
                  <div className="mt-4 flex flex-1 flex-col opacity-0 transition-opacity duration-300 group-data-[flipped=true]:opacity-100 group-data-[flipped=true]:delay-500 lg:group-hover:opacity-100 lg:group-hover:delay-500 motion-reduce:delay-0">
                    <p className="flex-1 leading-relaxed text-slate-600">{cat.body}</p>
                    <button
                      type="button"
                      aria-expanded={open === cat.id}
                      aria-controls={`${cat.id}-stories`}
                      tabIndex={isFlipped ? 0 : -1}
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpen(open === cat.id ? null : cat.id);
                        if (open !== cat.id) {
                          requestAnimationFrame(() =>
                            document.getElementById(`${cat.id}-stories`)?.scrollIntoView({ behavior: "smooth", block: "nearest" })
                          );
                        }
                      }}
                      className="mt-6 self-start bg-brand-amber px-6 py-3 text-sm font-bold uppercase tracking-[0.1em] text-brand-navy transition hover:bg-brand-amber-dark"
                    >
                      {open === cat.id ? "Close" : "Read more"}
                    </button>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {categories.map((cat) => {
        const tone = tones[cat.tone];
        return (
          <section
            key={cat.id}
            id={`${cat.id}-stories`}
            hidden={open !== cat.id}
            aria-label={`${cat.title} stories`}
            className={`mt-8 scroll-mt-24 border-l-8 p-6 sm:p-10 ${tone.accent} ${tone.panel}`}
          >
            <p className={`text-xs font-bold uppercase tracking-[0.22em] ${tone.text}`}>{cat.tag} stories</p>
            <h3 className="mt-2 font-display text-3xl text-brand-navy sm:text-4xl">{cat.title}</h3>
            <ul className="mt-8 grid gap-5 md:grid-cols-3">
              {cat.stories.map((story, i) => (
                <li key={story.title} className="bg-white p-6 shadow-sm">
                  <span className={`font-display text-4xl leading-none ${tone.text}`}>0{i + 1}</span>
                  <h4 className="mt-4 text-lg font-extrabold text-brand-navy">{story.title}</h4>
                  <p className="mt-2 leading-relaxed text-slate-600">{story.body}</p>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
