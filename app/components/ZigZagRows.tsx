import Image from "next/image";
import type { Photo } from "../lib/photos";
import Eyebrow, { logoCycle } from "./Eyebrow";

type Row = { eyebrow: string; title: string; body: string; image: Photo };

// Alternating photo/text rows — large pictures that tell the story one idea at a time
export default function ZigZagRows({ eyebrow, title, rows }: { eyebrow?: string; title: string; rows: Row[] }) {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {eyebrow && <Eyebrow align="center">{eyebrow}</Eyebrow>}
        <h2 className="mt-4 text-center font-display text-4xl text-brand-navy sm:text-5xl">{title}</h2>
        <div className="mt-16 space-y-20 sm:space-y-28">
          {rows.map((row, i) => (
            <article key={row.title} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
              <div className={`relative aspect-[4/3] overflow-hidden ${i % 2 ? "lg:order-2" : ""}`}>
                <Image src={row.image.src} alt={row.image.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
              <div>
                <p className={`font-display text-7xl leading-none ${logoCycle[i % logoCycle.length].text}`}>0{i + 1}</p>
                <Eyebrow className="mt-4">{row.eyebrow}</Eyebrow>
                <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-navy">{row.title}</h3>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-slate-600">{row.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
