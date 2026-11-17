import { NextResponse } from "next/server";
import { clean, isEmail, newsletterConfigured, sendWelcome, subscribeContact, unsubscribeToken } from "../../lib/mailer";
import { welcomeEmail } from "../../lib/welcomeEmail";
import { siteUrl } from "../../lib/seo";

// Newsletter sign-ups (single opt-in): save the address as a Resend contact, then send a
// welcome email with a signed unsubscribe link. Repeat sign-ups don't get a second welcome.
export async function POST(request: Request) {
  const data = await request.json().catch(() => null);
  if (!data || typeof data !== "object") return NextResponse.json({ error: "invalid" }, { status: 400 });

  if (clean(data.website)) return NextResponse.json({ ok: true }); // honeypot

  const email = clean(data.email, 254).toLowerCase();
  if (!isEmail(email)) return NextResponse.json({ error: "invalid" }, { status: 400 });

  if (!newsletterConfigured()) return NextResponse.json({ error: "not_configured" }, { status: 503 });

  try {
    const result = await subscribeContact(email);
    if (result === "new") {
      const unsubscribeUrl = `${siteUrl}/api/newsletter/unsubscribe?email=${encodeURIComponent(email)}&token=${unsubscribeToken(email)}`;
      // The subscriber is saved even if the welcome email can't be sent
      await sendWelcome(email, welcomeEmail(unsubscribeUrl), unsubscribeUrl).catch(() => false);
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }
}
