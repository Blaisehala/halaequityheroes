import Image from "next/image";
import Link from "next/link";
import type { Photo } from "../lib/photos";

type CaptionPhotoProps = {
  eyebrow: string;
  title: string;
  image: Photo;
  tags?: string[];
  link?: { href: string; label: string };
  children: React.ReactNode;
};

// Large photo with topic pills across the top and a white caption card in the corner
export default function CaptionPhoto({ eyebrow, title, image, tags, link, children }: CaptionPhotoProps) {
  return (
    <section className="bg-brand-sky-tint py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-blue">{eyebrow}</p>
          <h2 className="mt-3 font-display text-4xl text-brand-navy sm:text-5xl">{title}</h2>
        </div>
        <div className="relative mt-12 aspect-[4/5] overflow-hidden sm:aspect-[16/9]">
          <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1152px) 1104px, 100vw" className="object-cover" />
          {tags && (
            <ul className="absolute inset-x-0 top-6 flex flex-wrap justify-center gap-2 px-4">
              {tags.map((tag, i) => (
                <li
                  key={tag}
                  className={`px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] ${i === 0 ? "bg-brand-navy text-white" : "bg-white text-brand-navy"}`}
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}
          <div className="absolute bottom-4 left-4 right-4 bg-white p-6 text-brand-navy shadow-xl sm:bottom-8 sm:left-auto sm:right-8 sm:max-w-sm sm:p-8">
            <div className="space-y-3 leading-relaxed text-slate-700">{children}</div>
            {link && (
              <Link
                href={link.href}
                className="mt-5 inline-block border-b-2 border-brand-amber pb-0.5 text-xs font-bold uppercase tracking-[0.14em] text-brand-navy transition hover:border-brand-navy"
              >
                {link.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
