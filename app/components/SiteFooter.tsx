import Image from "next/image";
import Link from "next/link";

// TODO: fill in your real contact details. Empty values are hidden everywhere
// (footer and contact page), so nothing fake is ever shown.
export const contact = {
  location: "",
  phone: "",
  email: "",
};

export const contactRows = [
  { label: "Address", value: contact.location },
  { label: "Phone", value: contact.phone },
  { label: "Email", value: contact.email },
].filter((row) => row.value);

// TODO: add your real social media profile URLs; icons with an empty href are hidden
const socials = [
  { label: "Facebook", href: "", icon: <path fill="currentColor" d="M14 8h2.5V4.5H14c-2.5 0-4 1.6-4 4.2V11H7.5v3.5H10V21h3.5v-6.5H16l.5-3.5h-3V9c0-.6.4-1 1-1z" /> },
  { label: "X", href: "", icon: <path stroke="currentColor" strokeWidth={2} strokeLinecap="round" d="M5 5l14 14M19 5L5 19" /> },
  {
    label: "Instagram",
    href: "",
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth={2}>
        <rect x="4" y="4" width="16" height="16" rx="4.5" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="17" cy="7" r="0.6" fill="currentColor" />
      </g>
    ),
  },
  {
    label: "YouTube",
    href: "",
    icon: (
      <g>
        <rect x="2.5" y="5.5" width="19" height="13" rx="4" fill="currentColor" />
        <path d="M10 9.2v5.6l5-2.8z" fill="white" />
      </g>
    ),
  },
];

const liveSocials = socials.filter((s) => s.href);

const linkGroups = [
  {
    title: "Explore",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/mission", label: "Our Mission" },
      { href: "/stories", label: "Stories" },
    ],
  },
  {
    title: "Take part",
    links: [
      { href: "/get-involved", label: "Get Involved" },
      { href: "/volunteer", label: "Volunteer" },
      { href: "/donate", label: "Donate" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div className="max-w-xs">
          <Image src="/images/logo-full.png" alt="Hala Equity Heroes" width={180} height={127} className="h-auto w-40" />
          <p className="mt-5 text-sm leading-relaxed text-slate-600">
            A community-led charity working for healthcare equity, so that
            quality care reaches everyone who needs it.
          </p>
          {liveSocials.length > 0 && (
          <div className="mt-6 flex gap-2.5">
            {liveSocials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-sky-tint text-brand-navy transition hover:bg-brand-blue hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4">{s.icon}</svg>
              </a>
            ))}
          </div>
          )}
        </div>

        {linkGroups.map((group) => (
          <div key={group.title}>
            <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-brand-navy">{group.title}</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {group.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-slate-600 transition hover:text-brand-blue">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-brand-navy">
            <Link href="/contact" className="transition hover:text-brand-blue">Contact Us</Link>
          </h2>
          {contactRows.length > 0 ? (
            <dl className="mt-5 space-y-3 text-sm">
              {contactRows.map((d) => (
                <div key={d.label}>
                  <dt className="font-semibold text-brand-navy">{d.label}</dt>
                  <dd className="mt-0.5 break-words text-slate-600">{d.value}</dd>
                </div>
              ))}
            </dl>
          ) : (
            <p className="mt-5 text-sm leading-relaxed text-slate-600">
              Questions, ideas or partnerships?{" "}
              <Link href="/contact" className="font-semibold text-brand-blue underline-offset-4 hover:underline">
                Send us a message
              </Link>
            </p>
          )}
        </div>
      </div>

      {/* Low-poly strip echoing the logo heart */}
      <svg viewBox="0 0 1440 48" preserveAspectRatio="none" className="block h-8 w-full sm:h-10" aria-hidden>
        <polygon points="0,48 0,22 160,36 260,8 260,48" fill="#5ec8f0" />
        <polygon points="160,36 260,8 260,48 90,48" fill="#3b82c4" />
        <polygon points="260,8 420,30 520,6 520,48 260,48" fill="#1b5580" />
        <polygon points="420,30 520,6 520,48 360,48" fill="#14406a" />
        <polygon points="520,6 680,28 780,4 780,48 520,48" fill="#2a6fa3" />
        <polygon points="680,28 780,4 780,48 620,48" fill="#7dd3fc" />
        <polygon points="780,4 940,26 1040,10 1040,48 780,48" fill="#fde68a" />
        <polygon points="940,26 1040,10 1040,48 880,48" fill="#fbbf24" />
        <polygon points="1040,10 1200,32 1300,6 1300,48 1040,48" fill="#f59e0b" />
        <polygon points="1200,32 1300,6 1300,48 1140,48" fill="#5ec8f0" />
        <polygon points="1300,6 1440,24 1440,48 1300,48" fill="#1b5580" />
      </svg>
      <div className="bg-brand-navy px-6 py-4 text-center text-xs text-white/70">
        © {new Date().getFullYear()} Hala Equity Heroes. All rights reserved.
      </div>
    </footer>
  );
}
