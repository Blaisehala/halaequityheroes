'use client'

import { useId, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Eyebrow, { logoCycle } from "./Eyebrow";
import { honeypotProps, submitForm, type FormStatus } from "../lib/submitForm";

// Each page gets a structurally different design (all square-cornered):
//   letter   — About: a signed letter from the team on a sheet of paper
//   headline — Mission: oversized headline with a minimal underline field
//   benefits — Get Involved: steel-blue band listing what you'll receive
//   stub     — Stories: a pink ticket stub with a perforated edge
type Variant = "letter" | "headline" | "benefits" | "stub";

type NewsletterSignupProps = {
  variant: Variant;
  title: string;
  intro?: string;
};

const defaultIntro = "Monthly community notes with new initiatives, impact snapshots, and ways to plug in.";
const smallPrint = "No spam. Just stories and ways to support equity work around the world.";

type FormLook = "box" | "stacked" | "line" | "dark";

export function SignupForm({ look }: { look: FormLook }) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");
  const id = useId();
  const dark = look === "dark";

  if (status === "sent") {
    return (
      <p role="status" className={`border-l-4 border-brand-amber py-3 pl-4 text-lg font-bold ${dark ? "text-white" : "text-brand-navy"}`}>
        Thank you — you&apos;re on the list.
      </p>
    );
  }

  const input = {
    box: "h-14 w-full border-2 border-brand-navy bg-white px-4 text-brand-navy placeholder:text-slate-500 focus:ring-4 focus:ring-brand-blue/15 sm:flex-1",
    stacked: "h-14 w-full border-2 border-brand-navy bg-white px-4 text-brand-navy placeholder:text-slate-500 focus:ring-4 focus:ring-brand-blue/15",
    line: "h-14 w-full border-0 border-b-4 border-brand-navy bg-transparent px-0 text-xl text-brand-navy placeholder:text-slate-500 focus:border-logo-pink",
    dark: "h-14 w-full border-2 border-white/40 bg-white/10 px-4 text-white placeholder:text-white/75 focus:border-brand-amber focus:ring-4 focus:ring-brand-amber/20 sm:flex-1",
  }[look];

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
      <div className={`flex w-full ${look === "stacked" || look === "line" ? "flex-col gap-4" : "flex-col sm:flex-row"}`}>
        <label htmlFor={`${id}-email`} className="sr-only">
          Email address
        </label>
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder={look === "line" ? "Your email address" : "you@example.org"}
          className={`min-w-0 text-base outline-none transition ${input}`}
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className={`h-14 shrink-0 bg-brand-amber px-8 text-sm font-bold uppercase tracking-[0.12em] text-brand-navy transition hover:bg-brand-amber-dark disabled:cursor-wait disabled:opacity-70 ${
            look === "line" ? "self-start" : ""
          }`}
        >
          {status === "sending" ? "Sending…" : look === "line" ? "Subscribe →" : "Subscribe"}
        </button>
      </div>
      {status === "error" && (
        <p role="alert" className={`mt-3 border-l-4 border-brand-amber pl-3 text-sm font-semibold ${dark ? "text-white" : "text-brand-navy"}`}>
          {error}
        </p>
      )}
      <p className={`mt-3 text-xs ${dark ? "text-white/75" : "text-slate-500"}`}>
        By subscribing, you agree to our{" "}
        <Link href="/privacy" className="underline underline-offset-2 hover:opacity-80">Privacy Policy</Link>. Unsubscribe any time.
      </p>
    </form>
  );
}

export default function NewsletterSignup({ variant, title, intro = defaultIntro }: NewsletterSignupProps) {
  if (variant === "letter") {
    return (
      <section className="bg-brand-sky-tint px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-2xl bg-white shadow-xl">
          <div aria-hidden className="flex h-2">
            {logoCycle.map((c) => (
              <span key={c.border} className={`flex-1 ${c.border.replace("border-", "bg-")}`} />
            ))}
          </div>
          <div className="p-8 sm:p-14">
            <div className="flex items-center justify-between gap-4">
              <Eyebrow>Newsletter</Eyebrow>
              <Image src="/images/logo-mark.png" alt="" width={52} height={41} className="h-10 w-auto" />
            </div>
            <h2 className="mt-8 font-display text-4xl text-brand-navy sm:text-5xl">{title}</h2>
            <p className="mt-6 font-display text-2xl italic text-brand-navy">Dear friend,</p>
            <p className="mt-3 text-lg leading-relaxed text-slate-600">
              Once a month we&apos;ll write to you with community notes: new
              initiatives, impact snapshots, and ways to plug in.
            </p>
            <p className="mt-6 text-slate-600">
              With gratitude,
              <br />
              <span className="font-bold text-brand-navy">The Hala Equity Heroes team</span>
            </p>
            <div className="mt-10 border-t-2 border-dashed border-slate-300 pt-8">
              <SignupForm look="box" />
              <p className="mt-4 text-sm text-slate-500">{smallPrint}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === "headline") {
    return (
      <section className="bg-white px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-end lg:gap-20">
          <div>
            <Eyebrow>Newsletter</Eyebrow>
            <h2 className="mt-5 font-display text-5xl leading-[1.02] text-brand-navy sm:text-7xl">{title}</h2>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-slate-600">{intro}</p>
            <div className="mt-8">
              <SignupForm look="line" />
            </div>
            <p className="mt-4 text-sm text-slate-500">{smallPrint}</p>
          </div>
        </div>
      </section>
    );
  }

  if (variant === "benefits") {
    const benefits = [
      { title: "New initiatives", body: "Be first to hear where Heroes are needed next." },
      { title: "Impact snapshots", body: "See what your time and gifts are making possible." },
      { title: "Ways to plug in", body: "Simple, practical ways to take part each month." },
    ];
    return (
      <section className="bg-brand-blue px-6 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-end gap-8 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <Eyebrow tone="dark">Newsletter</Eyebrow>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl">{title}</h2>
            </div>
            <div>
              <SignupForm look="dark" />
              <p className="mt-3 text-sm text-white/75">{smallPrint}</p>
            </div>
          </div>
          <ul className="mt-12 grid gap-px bg-white/15 sm:grid-cols-3">
            {benefits.map((b, i) => (
              <li key={b.title} className="bg-brand-blue p-6 sm:pr-10">
                <span className={`block h-1 w-10 ${logoCycle[i].border.replace("border-", "bg-")}`} />
                <h3 className="mt-4 text-lg font-extrabold">{b.title}</h3>
                <p className="mt-1 leading-relaxed text-white/80">{b.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  // stub
  return (
    <section className="bg-white px-6 py-20 sm:py-24">
      <div className="mx-auto grid max-w-5xl shadow-xl md:grid-cols-[0.8fr_1.2fr]">
        <div className="relative bg-brand-pink p-10 text-white sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/90">Newsletter · Admit one</p>
          <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">{title}</h2>
          {/* Perforated edge between the stub and the ticket */}
          <span aria-hidden className="absolute -right-3 top-0 hidden h-full w-6 flex-col justify-around md:flex">
            {Array.from({ length: 9 }).map((_, i) => (
              <span key={i} className="h-6 w-6 rounded-full bg-white" />
            ))}
          </span>
        </div>
        <div className="border-2 border-l-0 border-dashed border-brand-pink bg-white p-10 sm:p-12 md:border-l-0">
          <p className="text-lg leading-relaxed text-slate-600">{intro}</p>
          <div className="mt-8">
            <SignupForm look="stacked" />
          </div>
          <p className="mt-4 text-sm text-slate-500">{smallPrint}</p>
        </div>
      </div>
    </section>
  );
}
