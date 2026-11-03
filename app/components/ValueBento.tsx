import Image from "next/image";
import type { Photo } from "../lib/photos";

type Value = { title: string; body: string; icon: string; image?: Photo };

// Navy grid of equal-size cards; the first and last are highlighted (with a photo when one is given)
export default function ValueBento({ title, intro, items }: { title: string; intro?: string; items: Value[] }) {
  return (
    <section className="bg-brand-navy py-20 text-white sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl sm:text-5xl">{title}</h2>
          {intro && <p className="mt-5 text-lg leading-relaxed text-white/75">{intro}</p>}
        </div>
        <ul className="mt-14 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const highlight = i === 0 || i === items.length - 1;
            return (
              <li
                key={item.title}
                className={`relative isolate flex flex-col overflow-hidden p-8 ${highlight ? "bg-brand-blue" : "bg-white/5 ring-1 ring-white/10"}`}
              >
                {item.image && (
                  <>
                    <Image src={item.image.src} alt={item.image.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="-z-20 object-cover" />
                    <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-navy via-brand-navy/70 to-brand-navy/30" />
                  </>
                )}
                <span className="flex h-12 w-12 items-center justify-center bg-brand-amber text-brand-navy">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d={item.icon} />
                  </svg>
                </span>
                <h3 className="mt-8 font-display text-3xl">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-white/75">{item.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
