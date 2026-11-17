import { NextResponse } from "next/server";
import { clean, isEmail, newsletterConfigured, unsubscribeContact, validUnsubscribeToken } from "../../../lib/mailer";

// Unsubscribe links from newsletter emails. GET is the link a reader clicks (then redirected to a
// confirmation page); POST is the "one-click" unsubscribe that email apps send (RFC 8058).
async function handle(request: Request) {
  const url = new URL(request.url);
  const email = clean(url.searchParams.get("email"), 254).toLowerCase();
  const token = clean(url.searchParams.get("token"), 200);

  if (!isEmail(email) || !validUnsubscribeToken(email, token)) return "invalid" as const;
  if (!newsletterConfigured()) return "error" as const;
  try {
    await unsubscribeContact(email);
    return "done" as const;
  } catch {
    return "error" as const;
  }
}

export async function GET(request: Request) {
  const status = await handle(request);
  return NextResponse.redirect(new URL(`/newsletter/unsubscribed?status=${status}`, request.url), 303);
}

export async function POST(request: Request) {
  const status = await handle(request);
  return NextResponse.json({ status }, { status: status === "done" ? 200 : status === "invalid" ? 400 : 502 });
}
