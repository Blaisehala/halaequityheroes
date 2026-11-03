import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-brand-navy backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-white">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-white/80 text-sm font-bold">
            HE
          </span>
          <span className="text-lg font-semibold tracking-tight">
            Hala Equity Heroes
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-white/90 md:flex">
          <Link href="/mission" className="hover:text-white transition">
            Our Mission
          </Link>
          <Link href="/about" className="hover:text-white transition">
            About Us
          </Link>
          <Link href="/get-involved" className="hover:text-white transition">
            Get Involved
          </Link>
          <Link href="/stories" className="hover:text-white transition">
            Stories
          </Link>
          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/volunteer"
            className="inline-flex items-center justify-center border-2 border-white bg-transparent px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Volunteer
          </Link>
          <Link
            href="/donate"
            className="inline-flex items-center justify-center bg-brand-sky px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-blue/30 transition hover:bg-brand-blue"
          >
            Donate
          </Link>
        </div>
      </div>
    </header>
  );
}
