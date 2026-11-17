// Server-only helpers for email and newsletter contacts through Resend's REST API
// (https://resend.com/docs/api-reference). Configure in Vercel → Project → Settings →
// Environment Variables (see .env.example for the full list):
//   RESEND_API_KEY      API key from resend.com (required for the contact and newsletter forms)
//   CONTACT_TO_EMAIL    inbox that receives contact form messages
//   CONTACT_FROM_EMAIL  sender on a domain verified in Resend, e.g. "Hala Equity Heroes <hello@yourdomain.org>"
//                       (needed for the newsletter welcome email to reach subscribers)
//   RESEND_SEGMENT_ID   optional: Resend segment that newsletter subscribers are added to
//   NEWSLETTER_REPLY_TO optional: inbox that receives replies to newsletter emails
//   NEWSLETTER_SECRET   long random string used to sign unsubscribe links

import { createHmac, timingSafeEqual } from "node:crypto";

export const mailConfigured = () => Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL);
export const newsletterConfigured = () => Boolean(process.env.RESEND_API_KEY);
const canEmailSubscribers = () => Boolean(process.env.CONTACT_FROM_EMAIL && process.env.NEWSLETTER_SECRET);

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const isEmail = (value: unknown): value is string =>
  typeof value === "string" && value.length <= 254 && emailPattern.test(value);

/** Trims a form value and caps its length; returns "" for anything that isn't a string. */
export const clean = (value: unknown, max = 2000) => (typeof value === "string" ? value.trim().slice(0, max) : "");

async function resend(path: string, body: unknown, method: "POST" | "PATCH" = "POST") {
  const res = await fetch(`https://api.resend.com${path}`, {
    method,
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Resend ${method} ${path} failed with ${res.status}`);
  return res;
}

const sender = () => process.env.CONTACT_FROM_EMAIL ?? "Hala Equity Heroes website <onboarding@resend.dev>";

/** Sends a plain-text email to the charity's inbox (plain text, so nothing a visitor types is rendered as HTML). */
export async function sendToInbox({ subject, text, replyTo }: { subject: string; text: string; replyTo?: string }) {
  await resend("/emails", {
    from: sender(),
    to: [process.env.CONTACT_TO_EMAIL],
    subject,
    text,
    ...(replyTo ? { reply_to: replyTo } : {}),
  });
}

/**
 * Saves a newsletter subscriber as a Resend contact (optionally in RESEND_SEGMENT_ID).
 * Returns "new" for a fresh sign-up, or "existing" when the address was already a contact —
 * in which case it is re-subscribed, but no second welcome email is sent.
 */
export async function subscribeContact(email: string): Promise<"new" | "existing"> {
  const segment = process.env.RESEND_SEGMENT_ID;
  try {
    await resend("/contacts", { email, unsubscribed: false, ...(segment ? { segments: [{ id: segment }] } : {}) });
    return "new";
  } catch {
    // Most likely the contact already exists: make sure it is subscribed again
    await resend(`/contacts/${encodeURIComponent(email)}`, { unsubscribed: false }, "PATCH");
    return "existing";
  }
}

export async function unsubscribeContact(email: string) {
  await resend(`/contacts/${encodeURIComponent(email)}`, { unsubscribed: true }, "PATCH");
}

// Unsubscribe links carry an HMAC of the address, so only the real recipient can use them
export function unsubscribeToken(email: string) {
  return createHmac("sha256", process.env.NEWSLETTER_SECRET ?? "").update(email.toLowerCase()).digest("base64url");
}

export function validUnsubscribeToken(email: string, token: string) {
  if (!process.env.NEWSLETTER_SECRET || !token) return false;
  const expected = Buffer.from(unsubscribeToken(email));
  const given = Buffer.from(token);
  return expected.length === given.length && timingSafeEqual(expected, given);
}

/** Sends the branded welcome email; skipped (returns false) until a sender and secret are configured. */
export async function sendWelcome(email: string, message: { subject: string; html: string; text: string }, unsubscribeUrl: string) {
  if (!canEmailSubscribers()) return false;
  await resend("/emails", {
    from: sender(),
    to: [email],
    subject: message.subject,
    html: message.html,
    text: message.text,
    ...(process.env.NEWSLETTER_REPLY_TO ? { reply_to: process.env.NEWSLETTER_REPLY_TO } : {}),
    headers: {
      "List-Unsubscribe": `<${unsubscribeUrl}>`,
      "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
    },
  });
  return true;
}
