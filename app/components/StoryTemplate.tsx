import Image from "next/image";
import Eyebrow, { logoCycle } from "./Eyebrow";

// Template for Heroes' family stories. Every story uses the same parts, in the same order:
// a short label, a title, one lead sentence, the story itself, an optional pull quote,
// an optional photo, and who is telling it.
export type FamilyStoryProps = {
  label: string;
  title: string;
  lead: string;
  body: string[];
  quote?: string;
  photo?: { src: string; alt: string; caption?: string };
  author: string;
  role?: string;
  colourIndex?: number;
};

export default function StoryTemplate({ label, title, lead, body, quote, photo, author, role, colourIndex = 0 }: FamilyStoryProps) {
  const colour = logoCycle[colourIndex % logoCycle.length];
  return (
    <article className="mx-auto max-w-5xl">
      <Eyebrow>{label}</Eyebrow>
      <h2 className="mt-6 font-display text-4xl leading-tight text-brand-navy sm:text-5xl">{title}</h2>
      <div className={`mt-8 grid gap-10 ${photo ? "md:grid-cols-[1fr_1.1fr] md:items-start" : ""}`}>
        {photo && (
          <figure>
            <div className="relative h-[38vh] min-h-[220px] w-full overflow-hidden shadow-md">
              <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
            </div>
            {photo.caption && <figcaption className="mt-3 text-sm text-slate-500">{photo.caption}</figcaption>}
          </figure>
        )}
        <div className={`border-l-4 pl-6 sm:pl-10 ${colour.border}`}>
          <p className="text-2xl font-extrabold leading-snug text-brand-navy">{lead}</p>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-slate-600">
            {body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          {quote && (
            <blockquote className={`mt-8 border-t-4 pt-6 font-display text-3xl leading-snug text-brand-navy ${colour.border}`}>
              &ldquo;{quote}&rdquo;
            </blockquote>
          )}
          <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
            {author}
            {role ? <span className="font-normal normal-case tracking-normal"> · {role}</span> : null}
          </p>
        </div>
      </div>
    </article>
  );
}
