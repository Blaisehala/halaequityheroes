'use client'

import { useId, useState } from "react";
import { honeypotProps, submitForm, type FormStatus } from "../lib/submitForm";

type Variant = "split" | "outlined" | "band" | "ticket";

type NewsletterSignupProps = {
  /** Each page uses a different design; all are square-cornered */
  variant: Variant;
  title: string;
  intro?: string;
};

const defaultIntro = "Monthly community notes with new initiatives, impact snapshots, and ways to plug in.";
const smallPrint = "No spam. Just stories and ways to support equity work around the world.";

function SignupForm({ tone, stacked = false }: { tone: "light" | "dark"; stacked?: boolean }) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");
  const id = useId();

  if (status === "sent") {
    return (
      <p role="status" className={`border-l-4 border-brand-amber py-3 pl-4 text-lg font-bold ${tone === "dark" ? "text-white" : "text-brand-navy"}`}>
        Thank you — you&apos;re on the list.
      </p>
    );
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setStatus("sending");
        const result = await submitForm("/api/newsletter", e.currentTarget);
        setStatus(result.status);
        setError(result.message ?? "");
      }}
      className="relative"
    >
      <input {...honeypotProps} />
      <div className={`flex w-full gap-0 ${stacked ? "flex-col gap-3" : "flex-col sm:flex-row"}`}>
        <label htmlFor={`${id}-email`} className="sr-only">
          Email address
        </label>
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.org"
          className={`h-14 min-w-0 ${stacked ? "w-full" : "w-full sm:flex-1"} border-2 px-4 text-base outline-none transition focus:ring-4 ${
            tone === "dark"
              ? "border-white/40 bg-white/10 text-white placeholder:text-white/75 focus:border-brand-amber focus:ring-brand-amber/20"
              : "border-brand-navy bg-white text-brand-navy placeholder:text-slate-500 focus:ring-brand-blue/15"
          }`}
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className={`h-14 shrink-0 bg-brand-amber px-8 text-sm font-bold uppercase tracking-[0.12em] text-brand-navy transition hover:bg-brand-amber-dark disabled:cursor-wait disabled:opacity-70 ${
            stacked ? "" : "border-2 border-brand-amber sm:-ml-0.5"
          }`}
        >
          {status === "sending" ? "Sending…" : "Subscribe"}
        </button>
      </div>
      {status === "error" && (
        <p role="alert" className={`mt-3 border-l-4 border-brand-amber pl-3 text-sm font-semibold ${tone === "dark" ? "text-white" : "text-brand-navy"}`}>
          {error}
        </p>
      )}
    </form>
  );
}

export default function NewsletterSignup({ variant, title, intro = defaultIntro }: NewsletterSignupProps) {
  if (variant === "split") {
    return (
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl px-6 md:grid-cols-2">
          <div className="bg-brand-navy p-10 text-white sm:p-14">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-amber">Newsletter</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">{title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-white/75">{intro}</p>
          </div>
          <div className="flex flex-col justify-center bg-brand-sky-tint p-10 sm:p-14">
            <SignupForm tone="light" stacked />
            <p className="mt-4 text-sm text-slate-500">{smallPrint}</p>
          </div>
        </div>
      </section>
    );
  }

  if (variant === "outlined") {
    return (
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="border-4 border-brand-navy bg-white p-10 text-center shadow-[14px_14px_0_0_var(--color-brand-amber)] sm:p-14">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-blue">Newsletter</p>
            <h2 className="mt-4 font-display text-4xl text-brand-navy sm:text-5xl">{title}</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-600">{intro}</p>
            <div className="mx-auto mt-8 max-w-xl">
              <SignupForm tone="light" />
            </div>
            <p className="mt-4 text-sm text-slate-500">{smallPrint}</p>
          </div>
        </div>
      </section>
    );
  }

  if (variant === "band") {
    return (
      <section className="bg-brand-blue py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl">{title}</h2>
            <p className="mt-4 text-lg leading-relaxed text-white/80">{intro}</p>
          </div>
          <div>
            <SignupForm tone="dark" />
            <p className="mt-3 text-sm text-white/75">{smallPrint}</p>
          </div>
        </div>
      </section>
    );
  }

  // ticket
  return (
    <section className="bg-brand-sky-tint pb-20 sm:pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-8 border-l-[12px] border-brand-amber bg-white p-10 shadow-lg sm:p-14 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-blue">Newsletter</p>
            <h2 className="mt-4 font-display text-4xl text-brand-navy sm:text-5xl">{title}</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">{intro}</p>
          </div>
          <div>
            <SignupForm tone="light" stacked />
            <p className="mt-4 text-sm text-slate-500">{smallPrint}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
