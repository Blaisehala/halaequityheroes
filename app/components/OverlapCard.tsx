import Image from "next/image";
import type { Photo } from "../lib/photos";

// White text card overlapping a large photo
export default function OverlapCard({ id, title, image, children }: { id?: string; title: string; image: Photo; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-16 bg-white py-20 sm:py-24">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="relative ml-auto aspect-[4/3] overflow-hidden lg:w-2/3">
          <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 66vw, 100vw" className="object-cover" />
        </div>
        <div className="relative -mt-20 mx-4 bg-white p-8 text-center shadow-2xl ring-1 ring-slate-200/70 sm:mx-10 sm:p-12 lg:absolute lg:left-6 lg:top-1/2 lg:mx-0 lg:mt-0 lg:w-[30rem] lg:-translate-y-1/2">
          <h2 className="font-display text-4xl text-brand-navy sm:text-5xl">{title}</h2>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-slate-600">{children}</div>
        </div>
      </div>
    </section>
  );
}
