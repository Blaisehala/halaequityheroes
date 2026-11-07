import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "../components/Eyebrow";
import { contact } from "../components/SiteFooter";
import { pageMetadata } from "../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Hala Equity Heroes collects, uses, and protects your personal information, and the choices you have.",
  path: "/privacy",
});

// DRAFT — have this reviewed by someone familiar with your data protection obligations
// before relying on it. TODO: fill in the details below.
const policy = {
  organisation: "Hala Equity Heroes", // TODO: registered legal name, if different
  registeredIn: "", // TODO: country of registration, e.g. "Kenya"
  privacyEmail: contact.email, // TODO: a dedicated privacy contact email, if you have one
  lastUpdated: "November 2026",
};

const sections = [
  { id: "who-we-are", title: "Who we are" },
  { id: "what-we-collect", title: "What we collect" },
  { id: "how-we-use-it", title: "How we use it" },
  { id: "who-we-share-it-with", title: "Who we share it with" },
  { id: "cookies", title: "Cookies" },
  { id: "how-long-we-keep-it", title: "How long we keep it" },
  { id: "your-rights", title: "Your rights" },
  { id: "keeping-it-safe", title: "Keeping it safe" },
  { id: "changes", title: "Changes to this policy" },
  { id: "contact-us", title: "Contact us" },
];

const collected = [
  { where: "Contact form", what: "Your name, email address, phone number (optional), and your message.", why: "To reply to you." },
  { where: "Newsletter sign-up", what: "Your email address.", why: "To send you our monthly community notes." },
  { where: "Donations", what: "Your email address and the amount and frequency you choose. Card or payment details are entered on our payment provider's secure page — we never see or store them.", why: "To process your gift and send your receipt." },
  { where: "Visiting the website", what: "Standard technical information such as your IP address and browser type, recorded by our hosting provider.", why: "To keep the website running securely." },
];

function ContactLine() {
  return policy.privacyEmail ? (
    <>
      email us at <span className="font-bold text-brand-navy">{policy.privacyEmail}</span> or use our{" "}
      <Link href="/contact" className="font-bold text-brand-blue underline underline-offset-4">contact form</Link>
    </>
  ) : (
    <>
      use our <Link href="/contact" className="font-bold text-brand-blue underline underline-offset-4">contact form</Link>
    </>
  );
}

const h2 = "scroll-mt-28 font-display text-3xl text-brand-navy sm:text-4xl";
const prose = "mt-4 space-y-4 text-lg leading-relaxed text-slate-600";

export default function PrivacyPage() {
  return (
    <main>
      <section className="border-b border-slate-200 bg-brand-sky-tint px-6 pb-14 pt-32 sm:pt-36">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>Legal</Eyebrow>
          <h1 className="mt-4 font-display text-5xl text-brand-navy sm:text-6xl">Privacy Policy</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            We collect as little personal information as we can, use it only for the reasons
            explained here, and never sell it.
          </p>
          <p className="mt-4 text-sm font-bold text-slate-500">Last updated: {policy.lastUpdated}</p>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[15rem_1fr] lg:gap-16 sm:py-20">
        {/* Contents: stays in view on large screens */}
        <nav aria-label="Contents" className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">Contents</p>
          <ol className="mt-4 space-y-2 border-l-2 border-slate-200">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="-ml-0.5 block border-l-2 border-transparent py-1 pl-4 text-sm text-slate-600 transition hover:border-brand-blue hover:text-brand-navy">
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <article className="max-w-3xl space-y-14">
          <section>
            <h2 id="who-we-are" className={h2}>Who we are</h2>
            <div className={prose}>
              <p>
                {policy.organisation} is a community-led charity working for healthcare equity
                {policy.registeredIn ? `, registered in ${policy.registeredIn}` : ""}. In this policy,
                &ldquo;we&rdquo; and &ldquo;us&rdquo; mean {policy.organisation}. We are responsible for the
                personal information you share with us through this website.
              </p>
            </div>
          </section>

          <section>
            <h2 id="what-we-collect" className={h2}>What we collect</h2>
            <p className={prose}>We only collect information you choose to give us, plus basic technical data needed to run the website.</p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[34rem] border-collapse text-left">
                <thead>
                  <tr className="border-b-2 border-brand-navy text-sm uppercase tracking-[0.1em] text-brand-navy">
                    <th className="py-3 pr-4">Where</th>
                    <th className="py-3 pr-4">What</th>
                    <th className="py-3">Why</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  {collected.map((row) => (
                    <tr key={row.where} className="border-b border-slate-200 align-top">
                      <th scope="row" className="py-4 pr-4 font-bold text-brand-navy">{row.where}</th>
                      <td className="py-4 pr-4 leading-relaxed">{row.what}</td>
                      <td className="py-4 leading-relaxed">{row.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 id="how-we-use-it" className={h2}>How we use it</h2>
            <div className={prose}>
              <p>We use your information only to:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>reply to your messages and requests;</li>
                <li>send the newsletter you signed up for;</li>
                <li>process donations and send receipts;</li>
                <li>keep the website secure and working properly.</li>
              </ul>
              <p>We never sell your personal information, and we do not use it for advertising.</p>
            </div>
          </section>

          <section>
            <h2 id="who-we-share-it-with" className={h2}>Who we share it with</h2>
            <div className={prose}>
              <p>We share information only with trusted services that help us run the website, and only what they need:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li><strong className="text-brand-navy">Resend</strong> — delivers our emails, including contact form messages and newsletter sign-ups.</li>
                <li><strong className="text-brand-navy">Our payment provider</strong> — processes donations on its own secure page, under its own privacy policy.</li>
                <li><strong className="text-brand-navy">Vercel</strong> — hosts this website.</li>
              </ul>
              <p>We may also share information if the law requires us to.</p>
            </div>
          </section>

          <section>
            <h2 id="cookies" className={h2}>Cookies</h2>
            <div className={prose}>
              <p>
                This website does not use advertising or analytics cookies, and does not track you
                across other websites. If that ever changes, we will update this policy and ask for
                your consent first where required.
              </p>
            </div>
          </section>

          <section>
            <h2 id="how-long-we-keep-it" className={h2}>How long we keep it</h2>
            <div className={prose}>
              <p>
                We keep your information only as long as we need it: messages until your enquiry is
                resolved, newsletter details until you unsubscribe, and donation records for as long
                as the law requires for financial and tax purposes.
              </p>
            </div>
          </section>

          <section>
            <h2 id="your-rights" className={h2}>Your rights</h2>
            <div className={prose}>
              <p>You can ask us at any time to:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>see the personal information we hold about you;</li>
                <li>correct anything that is wrong;</li>
                <li>delete your information;</li>
                <li>stop using your information, including unsubscribing from our newsletter — every newsletter email has an unsubscribe link.</li>
              </ul>
              <p>To make a request, <ContactLine />. We will respond as quickly as we can.</p>
            </div>
          </section>

          <section>
            <h2 id="keeping-it-safe" className={h2}>Keeping it safe</h2>
            <div className={prose}>
              <p>
                This website uses a secure (HTTPS) connection, and we limit access to personal
                information to the people who need it to do their work.
              </p>
            </div>
          </section>

          <section>
            <h2 id="changes" className={h2}>Changes to this policy</h2>
            <div className={prose}>
              <p>
                We may update this policy from time to time. The date at the top of this page shows
                when it last changed.
              </p>
            </div>
          </section>

          <section>
            <h2 id="contact-us" className={h2}>Contact us</h2>
            <div className={prose}>
              <p>If you have any questions about this policy or your information, <ContactLine />.</p>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
