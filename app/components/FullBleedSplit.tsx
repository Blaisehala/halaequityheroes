import Image from "next/image";
import Link from "next/link";
import type { Photo } from "../lib/photos";

type FullBleedSplitProps = {
  title: string;
  image: Photo;
  link?: { href: string; label: string };
  reverse?: boolean;
  children: React.ReactNode;
};

// Edge-to-edge half photo, half navy text panel
export default function FullBleedSplit({ title, image, link, reverse = false, children }: FullBleedSplitProps) {
  return (
    <section className="grid bg-brand-navy text-white lg:grid-cols-2">
      <div className={`relative min-h-[22rem] lg:min-h-[32rem] ${reverse ? "lg:order-2" : ""}`}>
        <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
      </div>
      <div className="flex items-center px-6 py-16 sm:px-12 lg:px-16 xl:px-24">
        <div className="max-w-lg">
          <h2 className="font-display text-4xl sm:text-5xl">{title}</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-white/80">{children}</div>
          {link && (
            <Link
              href={link.href}
              className="mt-8 inline-block border-b-2 border-brand-amber pb-0.5 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:border-white"
            >
              {link.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
