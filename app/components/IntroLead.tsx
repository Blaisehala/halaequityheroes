import Image from "next/image";
import type { Photo } from "../lib/photos";

// Centred lead paragraph over a wide photo that bridges two background colours
export default function IntroLead({ title, image, children }: { title: string; image: Photo; children: React.ReactNode }) {
  return (
    <section className="relative bg-white pt-20 sm:pt-24">
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/3 bg-brand-sky-tint" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display text-4xl text-brand-navy sm:text-5xl">{title}</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">{children}</div>
      </div>
      <div className="relative mx-auto mt-14 max-w-6xl px-6 pb-20 sm:pb-24">
        <div className="relative aspect-[16/9] overflow-hidden shadow-xl">
          <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1152px) 1104px, 100vw" className="object-cover" />
        </div>
      </div>
    </section>
  );
}
