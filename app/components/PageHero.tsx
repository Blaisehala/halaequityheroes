import Image from "next/image";
import type { Photo } from "../lib/photos";

type Variant = "band" | "split" | "statement" | "framed" | "centered" | "widget";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  image?: Photo;
  /**
   * Layout of the page opening, so each page feels different:
   * - band:      navy band with the photo behind a navy overlay (default)
   * - split:     text on sky tint beside a tall portrait photo with an amber outline
   * - statement: full-bleed photo with a large centred serif statement
   * - framed:    magazine cover — inset photo with text overlaid
   * - centered:  centred serif headline with a wide photo underneath
   * - widget:    full-bleed photo with a white card (children) overlaid, like charity: water
   */
  variant?: Variant;
  children?: React.ReactNode;
};

function Eyebrow({ children, className = "text-brand-amber" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] ${className}`}>
      <span aria-hidden className="flex">
        {["bg-logo-pink", "bg-logo-orange", "bg-logo-green", "bg-logo-blue"].map((c) => (
          <span key={c} className={`h-1 w-3 ${c}`} />
        ))}
      </span>
      {children}
    </p>
  );
}

export default function PageHero({ eyebrow, title, intro, image, variant = "band", children }: PageHeroProps) {
  if (image && variant === "split") {
    return (
      <section className="bg-brand-sky-tint pt-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 sm:py-20 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div>
            <Eyebrow className="text-brand-blue">{eyebrow}</Eyebrow>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] text-brand-navy sm:text-6xl">{title}</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">{intro}</p>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            {/* Thin amber outline offset behind the photo */}
            <div aria-hidden className="absolute -bottom-4 -right-4 h-full w-full border-4 border-brand-amber" />
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image src={image.src} alt={image.alt} fill priority sizes="(min-width: 1024px) 45vw, 28rem" className="object-cover object-[center_30%]" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (image && variant === "statement") {
    return (
      <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden bg-brand-navy pt-16 text-white">
        <Image src={image.src} alt={image.alt} fill priority sizes="100vw" className="-z-20 object-cover" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-brand-navy/65" />
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <Eyebrow className="justify-center text-brand-amber">{eyebrow}</Eyebrow>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] sm:text-7xl">{title}</h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/85">{intro}</p>
        </div>
      </section>
    );
  }

  if (image && variant === "framed") {
    return (
      <section className="bg-white px-4 pb-6 pt-20 sm:px-6 sm:pt-24">
        <div className="relative isolate mx-auto flex min-h-[70vh] max-w-7xl items-end overflow-hidden text-white">
          <Image src={image.src} alt={image.alt} fill priority sizes="(min-width: 1280px) 1280px, 100vw" className="-z-20 object-cover" />
          <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-navy via-brand-navy/40 to-transparent" />
          <div className="max-w-3xl p-8 sm:p-14">
            <span className="inline-block bg-brand-amber px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-navy">
              {eyebrow}
            </span>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] sm:text-7xl">{title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">{intro}</p>
          </div>
        </div>
      </section>
    );
  }

  if (image && variant === "centered") {
    return (
      <section className="relative bg-white pt-28 sm:pt-32">
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/4 bg-brand-sky-tint" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Eyebrow className="justify-center text-brand-blue">{eyebrow}</Eyebrow>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] text-brand-navy sm:text-7xl">{title}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">{intro}</p>
        </div>
        <div className="relative mx-auto mt-14 max-w-6xl px-6 pb-16">
          <div className="relative aspect-[16/8] overflow-hidden shadow-2xl">
            <Image src={image.src} alt={image.alt} fill priority sizes="(min-width: 1152px) 1104px, 100vw" className="object-cover" />
          </div>
        </div>
      </section>
    );
  }

  if (image && variant === "widget") {
    return (
      <section className="relative isolate overflow-hidden bg-brand-navy pt-16 text-white">
        <Image src={image.src} alt={image.alt} fill priority sizes="100vw" className="-z-20 object-cover object-right" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-navy/90 via-brand-navy/60 to-transparent" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[1fr_26rem]">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] sm:text-6xl">{title}</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">{intro}</p>
          </div>
          {children}
        </div>
      </section>
    );
  }

  return (
    <section className="relative isolate overflow-hidden bg-brand-navy pt-16 text-white">
      {image ? (
        <>
          <Image src={image.src} alt={image.alt} fill priority sizes="100vw" className="-z-20 object-cover object-center" />
          <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-navy via-brand-navy/85 to-brand-navy/30" />
        </>
      ) : (
        <svg viewBox="0 0 400 300" aria-hidden className="absolute -right-24 top-6 -z-10 h-[130%] w-auto opacity-25 sm:right-0">
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
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">{intro}</p>
      </div>
    </section>
  );
}
