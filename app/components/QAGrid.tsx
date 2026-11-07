import { faqs } from "../lib/faqs";
import Eyebrow from "./Eyebrow";

// Questions and answers laid out in open columns (no accordions), so every answer is visible and indexable
export default function QAGrid({ eyebrow = "Questions", title = "Common questions", background = "sky" }: { eyebrow?: string; title?: string; background?: "sky" | "white" }) {
  return (
    <section className={`${background === "sky" ? "bg-brand-sky-tint" : "bg-white"} py-20 sm:py-24`}>
      <div className="mx-auto max-w-6xl px-6">
        {eyebrow && <Eyebrow align="center">{eyebrow}</Eyebrow>}
        <h2 className="mt-4 text-center font-display text-4xl text-brand-navy sm:text-5xl">{title}</h2>
        <dl className="mt-14 grid gap-10 md:grid-cols-3">
          {faqs.map((faq) => (
            <div key={faq.q}>
              <dt className="text-lg font-extrabold text-brand-navy">{faq.q}</dt>
              <dd className="mt-3 leading-relaxed text-slate-600">{faq.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
