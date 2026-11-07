'use client'

import { useState } from "react";
import Image from "next/image";
import type { Photo } from "../lib/photos";
import Eyebrow from "./Eyebrow";

type RevealCardProps = {
  eyebrow?: string;
  title: string;
  image: Photo;
  paragraphs: string[];
};

const ease = "duration-500 ease-[cubic-bezier(.37,.01,0,.98)] motion-reduce:transition-none";

// Photo card: hovering, tapping, or keyboard focus fades a white text panel in over the
// photo — timing and easing match charity: water's explore cards. The text panel sets the card's height and is always in the HTML.
export default function RevealCard({ eyebrow, title, image, paragraphs }: RevealCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-white px-6 py-20 sm:py-24">
      <div
        data-open={open}
        tabIndex={0}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen((o) => !o);
          }
        }}
        className="group relative mx-auto max-w-5xl cursor-pointer overflow-hidden border-2 border-slate-200 shadow-xl outline-none focus-visible:ring-4 focus-visible:ring-brand-blue/40"
      >
        {/* Photo layer */}
        <div className="absolute inset-0 flex flex-col">
          <div className="relative flex-1 overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 64rem, 100vw"
              className={`object-cover transition-transform ${ease} group-hover:scale-105 group-data-[open=true]:scale-105`}
            />
          </div>
        </div>

        {/* Text panel: fades in over the photo */}
        <div
          className={`relative min-h-[26rem] bg-white px-8 py-12 opacity-0 transition-opacity ${ease} group-focus-within:opacity-100 group-hover:opacity-100 group-data-[open=true]:opacity-100 sm:min-h-[30rem] sm:px-14 sm:py-14`}
        >
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h2 className="mt-4 font-display text-3xl text-brand-navy sm:text-5xl">{title}</h2>
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-slate-700 sm:text-lg">
            {paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
