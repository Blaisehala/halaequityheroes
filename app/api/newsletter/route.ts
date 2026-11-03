import { NextResponse } from "next/server";
import { addToAudience, clean, isEmail, mailConfigured, sendToInbox } from "../../lib/mailer";

// Receives newsletter sign-ups: adds them to a Resend audience, or emails the charity if no audience is set
export async function POST(request: Request) {
  const data = await request.json().catch(() => null);
  if (!data || typeof data !== "object") return NextResponse.json({ error: "invalid" }, { status: 400 });

  if (clean(data.website)) return NextResponse.json({ ok: true }); // honeypot

  const email = clean(data.email, 254);
  if (!isEmail(email)) return NextResponse.json({ error: "invalid" }, { status: 400 });

  if (!mailConfigured()) return NextResponse.json({ error: "not_configured" }, { status: 503 });

  try {
    if (process.env.RESEND_AUDIENCE_ID) await addToAudience(email);
    else await sendToInbox({ subject: "New newsletter sign-up", text: `${email} signed up for community notes on the website.` });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }
}
