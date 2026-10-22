import Link from "next/link";

// Closing call to action shared by the inner pages
export default function CtaBand() {
  return (
    <section className="bg-white px-6 py-20 sm:py-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-brand-sky-tint px-8 py-12 sm:px-14 sm:py-14">
        <div aria-hidden className="pointer-events-none absolute -right-12 -top-16 h-56 w-56 rounded-full bg-brand-sky/20 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-20 left-1/3 h-48 w-48 rounded-full bg-brand-amber/30 blur-3xl" />
        <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-brand-navy">
              Ready to make a difference?
            </h2>
            <p className="mt-3 leading-relaxed text-slate-600">
              Every gift and every hour brings quality healthcare closer to the
              families who need it most.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Link
              href="/donate"
              className="rounded-full bg-brand-amber px-7 py-3.5 text-sm font-bold text-brand-navy shadow-md shadow-brand-amber/30 transition hover:bg-brand-amber-dark"
            >
              Donate
            </Link>
            <Link
              href="/volunteer"
              className="rounded-full border-2 border-brand-navy/15 bg-white px-7 py-3 text-sm font-bold text-brand-navy transition hover:border-brand-navy/40"
            >
              Volunteer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
