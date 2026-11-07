'use client'

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { honeypotProps, submitForm, type FormStatus } from "../lib/submitForm";
import Eyebrow from "./Eyebrow";

const inputClass =
  "w-full border border-transparent bg-brand-sky-tint px-4 py-3.5 text-sm text-brand-ink outline-none transition placeholder:text-slate-500 focus:border-brand-blue focus:bg-white focus:ring-4 focus:ring-brand-blue/10";

export default function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");

  return (
    <div>
      <Eyebrow>Write to us</Eyebrow>
      <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
        Send us an email
      </h2>

      <AnimatePresence mode="wait" initial={false}>
        {status === "sent" ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            role="status"
            className="mt-6 bg-brand-sky-tint p-10 text-center"
          >
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-amber text-2xl text-brand-navy">
              ✓
            </span>
            <h3 className="mt-5 text-xl font-bold text-brand-navy">Thank you for reaching out!</h3>
            <p className="mt-2 text-slate-600">We&apos;ll get back to you as soon as we can.</p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-6 text-sm font-semibold text-brand-blue underline-offset-4 hover:underline"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={async (e) => {
              e.preventDefault();
              setStatus("sending");
              const result = await submitForm("/api/contact", e.currentTarget);
              setStatus(result.status);
              setError(result.message ?? "");
            }}
            className="relative mt-6 space-y-4"
          >
            <input {...honeypotProps} />
            <div className="grid gap-4 sm:grid-cols-2">
              <input name="name" aria-label="Name" type="text" required autoComplete="name" placeholder="Name" className={inputClass} />
              <input name="email" aria-label="Email" type="email" required autoComplete="email" placeholder="Email" className={inputClass} />
            </div>
            <input name="phone" aria-label="Phone" type="tel" autoComplete="tel" placeholder="Phone (optional)" className={inputClass} />
            <input name="subject" aria-label="Subject" type="text" required placeholder="Subject" className={inputClass} />
            <textarea name="message" aria-label="Message" rows={5} required placeholder="Message" className={inputClass} />
            {status === "error" && (
              <p role="alert" className="border-l-4 border-brand-amber bg-brand-sky-tint px-4 py-3 text-sm font-semibold text-brand-navy">
                {error}
              </p>
            )}
            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-brand-amber px-8 py-3.5 text-sm font-bold text-brand-navy shadow-md shadow-brand-amber/30 transition hover:bg-brand-amber-dark disabled:cursor-wait disabled:opacity-70"
            >
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>
            <p className="text-xs text-slate-500">
              We&apos;ll only use your details to reply to you. See our <Link href="/privacy" className="underline underline-offset-2 hover:text-brand-blue">Privacy Policy</Link>.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
