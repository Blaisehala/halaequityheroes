'use client'

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const inputClass =
  "w-full rounded-md border border-transparent bg-brand-sky-tint px-4 py-3.5 text-sm text-brand-ink outline-none transition placeholder:text-slate-400 focus:border-brand-blue focus:bg-white focus:ring-4 focus:ring-brand-blue/10";

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  return (
    <div>
      <h2 className="text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
        Send us an email
      </h2>

      <AnimatePresence mode="wait" initial={false}>
        {sent ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-6 rounded-2xl bg-brand-sky-tint p-10 text-center"
          >
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-amber text-2xl text-brand-navy">
              ✓
            </span>
            <h3 className="mt-5 text-xl font-bold text-brand-navy">Thank you for reaching out!</h3>
            <p className="mt-2 text-slate-600">We&apos;ll get back to you as soon as we can.</p>
            <button
              type="button"
              onClick={() => setSent(false)}
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
            // TODO: connect to an email service or API route to actually deliver messages
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="mt-6 space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input aria-label="Name" type="text" required placeholder="Name" className={inputClass} />
              <input aria-label="Email" type="email" required placeholder="Email" className={inputClass} />
            </div>
            <input aria-label="Phone" type="tel" placeholder="Phone" className={inputClass} />
            <input aria-label="Subject" type="text" required placeholder="Subject" className={inputClass} />
            <textarea aria-label="Message" rows={5} required placeholder="Message" className={inputClass} />
            <button
              type="submit"
              className="rounded-full bg-brand-amber px-8 py-3.5 text-sm font-bold text-brand-navy shadow-md shadow-brand-amber/30 transition hover:bg-brand-amber-dark"
            >
              Send Message
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
