'use client'

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Photo } from "../lib/photos";

export type StoryTone = "pink" | "amber" | "blue" | "green";

export type StoryCategory = {
  id: string;
  tag: string;
  tone: StoryTone;
  title: string;
  body: string;
  image: Photo;
  cta: { href: string; label: string };
  stories: { title: string; body: string; more: string }[];
};

// Each category has its own colour, echoing the logo
const tones: Record<StoryTone, { tag: string; accent: string; hoverAccent: string; text: string; panel: string }> = {
  pink: { tag: "bg-brand-pink-tint text-brand-pink", accent: "border-logo-pink", hoverAccent: "hover:border-logo-pink", text: "text-logo-pink", panel: "bg-brand-pink-tint" },
  amber: { tag: "bg-brand-amber/30 text-amber-800", accent: "border-brand-amber", hoverAccent: "hover:border-brand-amber", text: "text-amber-700", panel: "bg-brand-amber/15" },
  blue: { tag: "bg-brand-blue/10 text-brand-blue", accent: "border-brand-blue", hoverAccent: "hover:border-brand-blue", text: "text-brand-blue", panel: "bg-brand-sky-tint" },
  green: { tag: "bg-logo-green/15 text-brand-teal", accent: "border-logo-green", hoverAccent: "hover:border-logo-green", text: "text-brand-teal", panel: "bg-logo-green/10" },
};

const flip = "duration-700 ease-[cubic-bezier(.37,.01,0,.98)] motion-reduce:duration-0";

// Four flip cards. Hover (or tap / Enter) turns a card over; its description fades in once the
// flip has finished, with a "Read more" button that opens that category's stories below.
// Everything stays in the HTML (closed panels use the hidden attribute) so it is crawlable.
// Opening /stories#<category-id> (e.g. from the navigation) opens that category's stories.
// Each numbered story opens a pop-up (native <dialog>) with more detail.
export default function StoryExplorer({ categories }: { categories: StoryCategory[] }) {
  const [flipped, setFlipped] = useState<string | null>(null);
  const [open, setOpen] = useState<string | null>(null);
  const [active, setActive] = useState<{ cat: StoryCategory; index: number } | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (active && dialog && !dialog.open) dialog.showModal();
  }, [active]);

  const closeStory = () => {
    dialogRef.current?.close();
  };

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
                <li key={story.title}>
                  <button
                    type="button"
                    aria-haspopup="dialog"
                    onClick={() => setActive({ cat, index: i })}
                    className={`group flex h-full w-full flex-col border-b-4 border-transparent bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-blue/40 ${tone.hoverAccent}`}
                  >
                    <span className={`font-display text-4xl leading-none ${tone.text}`}>0{i + 1}</span>
                    <span className="mt-4 block text-lg font-extrabold text-brand-navy">{story.title}</span>
                    <span className="mt-2 block flex-1 leading-relaxed text-slate-600">{story.body}</span>
                    <span className={`mt-5 text-sm font-bold ${tone.text}`}>
                      Read the story <span aria-hidden className="inline-block transition group-hover:translate-x-1">→</span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
      {/* Story pop-up */}
      <dialog
        ref={dialogRef}
        onClose={() => setActive(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeStory();
        }}
        aria-labelledby="story-dialog-title"
        className="story-dialog m-auto w-[min(40rem,calc(100vw-2rem))] max-h-[calc(100svh-2rem)] overflow-y-auto bg-white p-0 shadow-2xl"
      >
        {active && (() => {
          const tone = tones[active.cat.tone];
          const story = active.cat.stories[active.index];
          return (
            <div className={`border-t-8 p-8 sm:p-10 ${tone.accent}`}>
              <div className="flex items-start justify-between gap-6">
                <span className={`inline-block px-3 py-1 text-xs font-bold ${tone.tag}`}>
                  {active.cat.tag} · {String(active.index + 1).padStart(2, "0")}
                </span>
                <button
                  type="button"
                  onClick={closeStory}
                  aria-label="Close story"
                  className="-mr-2 -mt-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-2xl text-slate-500 transition hover:bg-slate-100 hover:text-brand-navy"
                >
                  ×
                </button>
              </div>
              <h3 id="story-dialog-title" className="mt-5 font-display text-4xl text-brand-navy">{story.title}</h3>
              <p className="mt-4 text-lg font-bold leading-relaxed text-brand-navy">{story.body}</p>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">{story.more}</p>
              <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-slate-200 pt-6">
                <Link
                  href={active.cat.cta.href}
                  className="bg-brand-amber px-6 py-3 text-sm font-bold uppercase tracking-[0.1em] text-brand-navy transition hover:bg-brand-amber-dark"
                >
                  {active.cat.cta.label}
                </Link>
                {active.index < active.cat.stories.length - 1 && (
                  <button
                    type="button"
                    onClick={() => setActive({ cat: active.cat, index: active.index + 1 })}
                    className={`text-sm font-bold ${tone.text}`}
                  >
                    Next story →
                  </button>
                )}
              </div>
            </div>
          );
        })()}
      </dialog>
    </div>
  );
}
