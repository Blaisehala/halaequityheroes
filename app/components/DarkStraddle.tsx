import Link from "next/link";
import Eyebrow from "./Eyebrow";

type DarkStraddleProps = {
  eyebrow?: string;
  title: string;
  intro: string;
  cardTitle: string;
  cta: { href: string; label: string };
  children: React.ReactNode;
};

// Navy band whose white card straddles down into a sky-tint section
export default function DarkStraddle({ eyebrow, title, intro, cardTitle, cta, children }: DarkStraddleProps) {
  return (
    <section className="relative">
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/3 bg-brand-sky-tint" />
      <div className="bg-brand-navy px-6 pb-48 pt-20 text-center text-white sm:pt-24">
        {eyebrow && <Eyebrow align="center" tone="dark">{eyebrow}</Eyebrow>}
        <h2 className="mt-4 mx-auto max-w-3xl font-display text-4xl sm:text-5xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/80">{intro}</p>
      </div>
      <div className="relative mx-auto -mt-36 max-w-4xl px-6 pb-20 sm:pb-24">
        <div className="bg-white p-8 shadow-2xl ring-1 ring-slate-200/70 sm:p-12">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <h3 className="text-2xl font-extrabold text-brand-navy">{cardTitle}</h3>
              <div className="mt-3 space-y-3 text-lg leading-relaxed text-slate-600">{children}</div>
            </div>
            <Link
              href={cta.href}
              className="inline-flex justify-center bg-brand-amber px-8 py-3.5 text-sm font-bold text-brand-navy shadow-md shadow-brand-amber/30 transition hover:bg-brand-amber-dark"
            >
              {cta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
