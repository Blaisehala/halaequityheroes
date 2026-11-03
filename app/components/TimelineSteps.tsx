import Image from "next/image";
import type { Photo } from "../lib/photos";

type Step = { title: string; body: string };

// Vertical timeline — a different rhythm from the three-column NumberedSteps
export default function TimelineSteps({ eyebrow, title, steps, image }: { eyebrow: string; title: string; steps: Step[]; image?: Photo }) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-blue">{eyebrow}</p>
          <h2 className="mt-3 font-display text-4xl text-brand-navy sm:text-5xl">{title}</h2>
          {image && (
            <div className="relative mt-10 hidden aspect-[4/5] max-w-sm overflow-hidden lg:block">
              <Image src={image.src} alt={image.alt} fill sizes="24rem" className="object-cover" />
            </div>
          )}
        </div>
        <ol className="relative space-y-12 border-l-2 border-brand-sky-tint-deep pl-10">
          {steps.map((step, i) => (
            <li key={step.title} className="relative">
              <span className="absolute -left-[3.6rem] flex h-11 w-11 items-center justify-center rounded-full bg-brand-navy font-extrabold text-brand-amber ring-8 ring-white">
                {i + 1}
              </span>
              <h3 className="text-2xl font-extrabold text-brand-navy">{step.title}</h3>
              <p className="mt-2 max-w-lg text-lg leading-relaxed text-slate-600">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
