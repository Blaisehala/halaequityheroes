import Image from "next/image";
import type { Photo } from "../lib/photos";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  image?: Photo;
};

// Shared header for inner pages: navy band, white type, and either a photo
// (behind a navy overlay so the text stays readable) or faint low-poly facets
export default function PageHero({ eyebrow, title, intro, image }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-navy pt-16 text-white">
      {image ? (
        <>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover object-center"
          />
          <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-navy via-brand-navy/85 to-brand-navy/30" />
        </>
      ) : (
        <svg
          viewBox="0 0 400 300"
          aria-hidden
          className="absolute -right-24 top-6 -z-10 h-[130%] w-auto opacity-25 sm:right-0"
        >
          <polygon points="200,60 290,20 330,110" fill="#5ec8f0" />
          <polygon points="290,20 380,70 330,110" fill="#fbbf24" />
          <polygon points="380,70 360,170 330,110" fill="#fde68a" />
          <polygon points="330,110 360,170 270,230" fill="#7dd3fc" />
          <polygon points="200,60 330,110 270,230" fill="#1b5580" />
          <polygon points="200,60 270,230 200,290" fill="#14406a" />
          <polygon points="110,20 200,60 70,110" fill="#3b82c4" />
        </svg>
      )}
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-amber">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">{intro}</p>
      </div>
    </section>
  );
}
