import Link from "next/link";
import Eyebrow from "./Eyebrow";

type StatementBlockProps = {
  eyebrow?: string;
  title: string;
  body: string;
  cta?: { href: string; label: string };
  badge?: { value: string; text: React.ReactNode };
};

// Big centred statement with a call to action and a "100%"-style badge box underneath
export default function StatementBlock({ eyebrow, title, body, cta, badge }: StatementBlockProps) {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        {eyebrow && <Eyebrow align="center">{eyebrow}</Eyebrow>}
        <h2 className="mt-4 font-display text-4xl leading-tight text-brand-navy sm:text-6xl">{title}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">{body}</p>
        {cta && (
          <Link
            href={cta.href}
            className="mt-8 inline-flex bg-brand-amber px-8 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-brand-navy shadow-md shadow-brand-amber/30 transition hover:bg-brand-amber-dark"
          >
            {cta.label}
          </Link>
        )}
        {badge && (
          <div className="mx-auto mt-14 flex max-w-xl flex-col items-center gap-5 bg-brand-sky-tint p-6 text-left ring-1 ring-brand-sky-tint-deep sm:flex-row">
            <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-2 border-brand-navy bg-white font-display text-3xl text-brand-navy">
              {badge.value}
            </span>
            <p className="leading-relaxed text-slate-700">{badge.text}</p>
          </div>
        )}
      </div>
    </section>
  );
}
