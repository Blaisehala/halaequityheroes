import { NextResponse } from "next/server";
import { clean, isEmail, mailConfigured, sendToInbox } from "../../lib/mailer";

// Receives the contact form and emails it to the charity's inbox
export async function POST(request: Request) {
  const data = await request.json().catch(() => null);
  if (!data || typeof data !== "object") return NextResponse.json({ error: "invalid" }, { status: 400 });

  // Honeypot: real visitors never see or fill the "website" field
  if (clean(data.website)) return NextResponse.json({ ok: true });

  const name = clean(data.name, 120);
  const email = clean(data.email, 254);
  const phone = clean(data.phone, 40);
  const subject = clean(data.subject, 160);
  const message = clean(data.message, 5000);
  if (!name || !subject || !message || !isEmail(email)) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  if (!mailConfigured()) return NextResponse.json({ error: "not_configured" }, { status: 503 });

  try {
    await sendToInbox({
      subject: `Website enquiry: ${subject}`,
      replyTo: email,
      text: [`Name: ${name}`, `Email: ${email}`, phone && `Phone: ${phone}`, "", message].filter((line) => line !== "").join("\n"),
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }
}
