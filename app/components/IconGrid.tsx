type IconGridItem = { title: string; body: string; icon: string };

// Grid of outlined line icons with short descriptions
export default function IconGrid({
  title,
  intro,
  items,
  background = "sky",
}: {
  title: string;
  intro?: string;
  items: IconGridItem[];
  background?: "sky" | "white";
}) {
  return (
    <section className={`${background === "sky" ? "bg-brand-sky-tint" : "bg-white"} py-20 sm:py-24`}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl text-brand-navy sm:text-5xl">{title}</h2>
          {intro && <p className="mt-5 text-lg leading-relaxed text-slate-600">{intro}</p>}
        </div>
        <ul className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.title} className="flex gap-5">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-brand-navy text-brand-navy">
                <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d={item.icon} />
                </svg>
              </span>
              <div>
                <h3 className="text-lg font-extrabold text-brand-navy">{item.title}</h3>
                <p className="mt-1.5 leading-relaxed text-slate-600">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
