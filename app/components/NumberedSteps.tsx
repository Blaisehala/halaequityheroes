import Link from "next/link";
import Eyebrow, { logoCycle } from "./Eyebrow";

type Step = { title: string; body: string };

type NumberedStepsProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  steps: Step[];
  link?: { href: string; label: string };
  background?: "white" | "sky";
};

// "Our approach"-style process: centred intro, then numbered steps in amber circles
export default function NumberedSteps({ id, eyebrow, title, intro, steps, link, background = "sky" }: NumberedStepsProps) {
  return (
    <section id={id} className={`scroll-mt-16 py-20 sm:py-24 ${background === "sky" ? "bg-brand-sky-tint" : "bg-white"}`}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          {eyebrow && <Eyebrow align="center">{eyebrow}</Eyebrow>}
          <h2 className="mt-4 font-display text-4xl text-brand-navy sm:text-5xl">{title}</h2>
          {intro && <p className="mt-5 text-lg leading-relaxed text-slate-600">{intro}</p>}
          {link && (
            <Link
              href={link.href}
              className="mt-6 inline-block border-b-2 border-brand-amber pb-0.5 text-sm font-bold uppercase tracking-[0.14em] text-brand-navy transition hover:border-brand-navy"
            >
              {link.label}
            </Link>
          )}
        </div>
        <ol className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
          {steps.map((step, i) => (
            <li key={step.title} className="text-center">
              <span className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full border-4 bg-white text-lg font-extrabold text-brand-navy ${logoCycle[i % logoCycle.length].border}`}>
                {i + 1}
              </span>
              <h3 className="mt-5 text-xl font-extrabold text-brand-navy">{step.title}</h3>
              <p className="mx-auto mt-3 max-w-xs leading-relaxed text-slate-600">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
