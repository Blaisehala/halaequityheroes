'use client'

import { useState } from "react";
import Link from "next/link";

// Hosted donation pages (Stripe Payment Link, Donorbox, PayPal Giving Fund, …), set in Vercel:
//   NEXT_PUBLIC_DONATION_URL          one-off gifts (also used for monthly if the next one is unset)
//   NEXT_PUBLIC_MONTHLY_DONATION_URL  optional separate page for monthly gifts
const onceUrl = process.env.NEXT_PUBLIC_DONATION_URL ?? "";
const monthlyUrl = process.env.NEXT_PUBLIC_MONTHLY_DONATION_URL || onceUrl;

const amounts = ["10", "25", "50", "100", "250"];

const pill =
  "flex items-center justify-center border-2 border-slate-200 font-extrabold text-brand-navy transition hover:border-brand-blue/50 peer-checked:border-brand-blue peer-checked:bg-brand-sky-tint peer-checked:text-brand-blue peer-focus-visible:ring-4 peer-focus-visible:ring-brand-blue/20";

// Donation form shown on top of the Donate hero photo. Sends the donor to the hosted
// payment page with their choices; until one is configured it says so plainly.
export default function DonationCard() {
  const [redirecting, setRedirecting] = useState(false);
  const live = Boolean(onceUrl);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const monthly = data.get("frequency") === "Monthly";
        const url = new URL(monthly ? monthlyUrl : onceUrl);
        const amount = String(data.get("amount") ?? "");
        const email = String(data.get("email") ?? "");
        // Common prefill parameters; payment pages ignore the ones they don't support
        if (amount && amount !== "other") url.searchParams.set("amount", amount);
        if (email) {
          url.searchParams.set("email", email);
          url.searchParams.set("prefilled_email", email);
        }
        setRedirecting(true);
        window.location.assign(url.toString());
      }}
      className="bg-white p-6 text-brand-navy shadow-2xl sm:p-8"
    >
      <fieldset>
        <legend className="sr-only">How often</legend>
        <div className="grid grid-cols-2 gap-2 bg-brand-sky-tint p-1">
          {["Monthly", "Give once"].map((label, i) => (
            <label key={label} className="cursor-pointer">
              <input type="radio" name="frequency" value={label} defaultChecked={i === 0} className="peer sr-only" />
              <span className="block py-2 text-center text-sm font-bold text-slate-600 transition peer-checked:bg-brand-amber peer-checked:text-brand-navy">
                {label}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-6">
        <legend className="text-sm font-bold">Choose an amount</legend>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {amounts.map((a, i) => (
            <label key={a} className="cursor-pointer">
              <input type="radio" name="amount" value={a} defaultChecked={i === 2} className="peer sr-only" />
              <span className={`${pill} h-12 text-base`}>${a}</span>
            </label>
          ))}
          <label className="cursor-pointer">
            <input type="radio" name="amount" value="other" className="peer sr-only" />
            <span className={`${pill} h-12 text-sm`}>Other</span>
          </label>
        </div>
      </fieldset>

      <label htmlFor="donate-email" className="mt-5 block text-sm font-bold">
        Email for your receipt
      </label>
      <input
        id="donate-email"
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder="you@example.org"
        className="mt-2 w-full border border-slate-200 px-4 py-3 text-brand-ink outline-none transition placeholder:text-slate-500 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10"
      />

      {live ? (
        <>
          <button
            type="submit"
            disabled={redirecting}
            className="mt-6 w-full bg-brand-amber px-6 py-4 text-base font-bold uppercase tracking-[0.1em] text-brand-navy shadow-md shadow-brand-amber/30 transition hover:bg-brand-amber-dark disabled:cursor-wait disabled:opacity-70"
          >
            {redirecting ? "Opening secure checkout…" : "Donate now"}
          </button>
          <p className="mt-4 text-center text-xs text-slate-600">You&apos;ll finish on our secure payment page. Change or pause your giving at any time. See our <Link href="/privacy" className="underline underline-offset-2 hover:text-brand-blue">Privacy Policy</Link>.</p>
        </>
      ) : (
        <div role="status" className="mt-6 border-l-4 border-brand-amber bg-brand-sky-tint px-4 py-3 text-sm text-brand-navy">
          <p className="font-bold">Online giving is opening soon.</p>
          <p className="mt-1">
            In the meantime,{" "}
            <Link href="/contact" className="font-bold text-brand-blue underline underline-offset-4">
              get in touch
            </Link>{" "}
            and we&apos;ll help you give.
          </p>
        </div>
      )}
    </form>
  );
}
