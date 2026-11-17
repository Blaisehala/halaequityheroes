import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "../../components/Eyebrow";

export const metadata: Metadata = {
  title: "Newsletter preferences",
  robots: { index: false, follow: false },
};

const messages = {
  done: {
    title: "You've been unsubscribed",
    body: "You won't receive our community notes any more. Thank you for being part of the Hala Equity Heroes community — you're welcome back any time.",
  },
  invalid: {
    title: "This link isn't valid",
    body: "The unsubscribe link may be incomplete or out of date. Please use the link from your most recent email, or get in touch and we'll remove you.",
  },
  error: {
    title: "Something went wrong",
    body: "We couldn't update your preferences just now. Please try the link again later, or get in touch and we'll remove you.",
  },
};

export default async function UnsubscribedPage({ searchParams }: { searchParams: Promise<{ status?: string }> }) {
  const { status } = await searchParams;
  const message = messages[status as keyof typeof messages] ?? messages.invalid;

  return (
    <main className="bg-brand-sky-tint px-6 pb-24 pt-36">
      <div className="mx-auto max-w-2xl border-t-8 border-brand-navy bg-white p-8 shadow-xl sm:p-12">
        <Eyebrow>Newsletter</Eyebrow>
        <h1 className="mt-4 font-display text-4xl text-brand-navy sm:text-5xl">{message.title}</h1>
        <p className="mt-5 text-lg leading-relaxed text-slate-600">{message.body}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="bg-brand-amber px-6 py-3 text-sm font-bold uppercase tracking-[0.1em] text-brand-navy transition hover:bg-brand-amber-dark">
            Back to the homepage
          </Link>
          {status !== "done" && (
            <Link href="/contact" className="border-2 border-brand-navy px-6 py-[10px] text-sm font-bold uppercase tracking-[0.1em] text-brand-navy transition hover:bg-brand-sky-tint">
              Contact us
            </Link>
          )}
          {status === "done" && (
            <Link href="/newsletter" className="border-2 border-brand-navy px-6 py-[10px] text-sm font-bold uppercase tracking-[0.1em] text-brand-navy transition hover:bg-brand-sky-tint">
              Changed your mind? Subscribe again
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
