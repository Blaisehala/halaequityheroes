// Server-only helpers for sending email through Resend's REST API (https://resend.com/docs/api-reference).
// Configure in Vercel → Project → Settings → Environment Variables:
//   RESEND_API_KEY      API key from resend.com (required for the contact and newsletter forms)
//   CONTACT_TO_EMAIL    inbox that receives contact messages and sign-up notices
//   CONTACT_FROM_EMAIL  sender on a domain verified in Resend, e.g. "Hala Equity Heroes <hello@yourdomain.org>"
//   RESEND_AUDIENCE_ID  optional: add newsletter sign-ups to this Resend audience instead of emailing you

export const mailConfigured = () => Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL);

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const isEmail = (value: unknown): value is string =>
  typeof value === "string" && value.length <= 254 && emailPattern.test(value);

/** Trims a form value and caps its length; returns "" for anything that isn't a string. */
export const clean = (value: unknown, max = 2000) => (typeof value === "string" ? value.trim().slice(0, max) : "");

async function resend(path: string, body: unknown) {
  const res = await fetch(`https://api.resend.com${path}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Resend ${path} failed with ${res.status}`);
}

/** Sends a plain-text email to the charity's inbox (plain text, so nothing a visitor types is rendered as HTML). */
export function sendToInbox({ subject, text, replyTo }: { subject: string; text: string; replyTo?: string }) {
  return resend("/emails", {
    from: process.env.CONTACT_FROM_EMAIL ?? "Hala Equity Heroes website <onboarding@resend.dev>",
    to: [process.env.CONTACT_TO_EMAIL],
    subject,
    text,
    ...(replyTo ? { reply_to: replyTo } : {}),
  });
}

export function addToAudience(email: string) {
  return resend(`/audiences/${process.env.RESEND_AUDIENCE_ID}/contacts`, { email, unsubscribed: false });
}
