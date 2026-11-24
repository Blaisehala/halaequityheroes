"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// A floating Volunteer button that appears once the visitor has scrolled past the hero,
// plus a one-time pop-up invitation as they near the bottom of the page.
// The pop-up is dismissed for the session (sessionStorage), and both are hidden on /volunteer.
const POPUP_KEY = "hala-volunteer-prompt-dismissed";

export default function VolunteerPrompt() {
  const pathname = usePathname();
  const [showButton, setShowButton] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [dismissed, setDismissed] = useState(true); // assume dismissed until we've checked storage

  useEffect(() => {
    try {
      setDismissed(sessionStorage.getItem(POPUP_KEY) === "1");
    } catch {
      setDismissed(false);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setShowButton(y > 600);
      if (!dismissed && max > 0 && y / max >= 0.35) setShowPopup(true);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  if (pathname?.startsWith("/volunteer")) return null;

  const close = () => {
    setShowPopup(false);
    setDismissed(true);
    try {
      sessionStorage.setItem(POPUP_KEY, "1");
    } catch {
      /* storage unavailable: the pop-up simply closes for this page view */
    }
  };

  return (
    <>
      {showButton && (
        <Link
          href="/volunteer"
          className="fixed bottom-5 right-5 z-40 rounded-full bg-brand-amber px-5 py-3 text-sm font-extrabold uppercase tracking-wide text-brand-navy shadow-lg transition hover:-translate-y-0.5 hover:bg-brand-amber-dark"
        >
          Volunteer
        </Link>
      )}

      {showPopup && (
        <div
          role="dialog"
          aria-modal="false"
          aria-labelledby="volunteer-prompt-title"
          className="fixed inset-x-4 bottom-5 z-50 mx-auto max-w-md border-t-4 border-brand-amber bg-brand-navy p-6 text-white shadow-2xl sm:inset-x-auto sm:right-5"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-3 top-3 text-2xl leading-none text-white/70 hover:text-white"
          >
            &times;
          </button>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-amber">Join us</p>
          <h2 id="volunteer-prompt-title" className="mt-2 font-display text-3xl leading-tight">
            Become a Hero
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/85">
            Offer your skills to a project team, or give 10 minutes a month. Every skill counts.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/volunteer"
              onClick={close}
              className="rounded-full bg-brand-amber px-5 py-2.5 text-sm font-extrabold uppercase tracking-wide text-brand-navy hover:bg-brand-amber-dark"
            >
              Volunteer
            </Link>
            <button
              type="button"
              onClick={close}
              className="rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              Not now
            </button>
          </div>
        </div>
      )}
    </>
  );
}
