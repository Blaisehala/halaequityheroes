import { siteUrl } from "./seo";

// Branded welcome email for new newsletter subscribers. Email clients ignore most modern CSS,
// so this uses tables and inline styles; colours match the site (navy, amber, logo-heart stripe).
const navy = "#0c2340";
const amber = "#fbbf24";
const ink = "#334155";
const stripe = ["#e41860", "#e8692e", "#00a862", "#3c549c"];

const highlights = [
  { title: "New initiatives", body: "Be first to hear where Heroes are needed next." },
  { title: "Impact snapshots", body: "See what your time and gifts are making possible." },
  { title: "Ways to plug in", body: "Simple, practical ways to take part each month." },
];

export function welcomeEmail(unsubscribeUrl: string) {
  const subject = "Welcome to Hala Equity Heroes community notes";

  const html = `<!doctype html>
<html lang="en">
<body style="margin:0;padding:0;background:#e6f3ff;font-family:Arial,Helvetica,sans-serif;color:${ink};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#e6f3ff;padding:32px 12px;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;">
        <tr>${stripe.map((c) => `<td style="height:6px;background:${c};font-size:0;line-height:0;">&nbsp;</td>`).join("")}</tr>
        <tr><td colspan="4" style="padding:32px 36px 8px;">
          <img src="${siteUrl}/images/logo-full.png" width="140" alt="Hala Equity Heroes" style="display:block;border:0;width:140px;height:auto;">
        </td></tr>
        <tr><td colspan="4" style="padding:16px 36px 0;">
          <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-weight:normal;font-size:32px;line-height:1.2;color:${navy};">Welcome, Hero.</h1>
          <p style="margin:16px 0 0;font-size:16px;line-height:1.6;">
            Thank you for joining our community notes. Once a month, we&rsquo;ll write to you with
            what&rsquo;s happening across Hala Equity Heroes &mdash; and how you can be part of it.
          </p>
        </td></tr>
        <tr><td colspan="4" style="padding:24px 36px 0;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${highlights
              .map(
                (h, i) => `<tr><td style="padding:12px 0;border-top:1px solid #e2e8f0;">
              <span style="font-family:Georgia,serif;font-size:22px;color:${stripe[i]};">0${i + 1}</span>
              <strong style="display:block;margin-top:4px;font-size:16px;color:${navy};">${h.title}</strong>
              <span style="font-size:15px;line-height:1.5;">${h.body}</span>
            </td></tr>`
              )
              .join("")}
          </table>
        </td></tr>
        <tr><td colspan="4" style="padding:24px 36px 8px;">
          <p style="margin:0;font-size:16px;line-height:1.6;">While you wait for your first issue, see where Heroes are showing up right now.</p>
          <p style="margin:20px 0 0;">
            <a href="${siteUrl}/stories" style="display:inline-block;background:${amber};color:${navy};font-weight:bold;font-size:14px;letter-spacing:1px;text-transform:uppercase;text-decoration:none;padding:14px 24px;">Read our stories</a>
          </p>
        </td></tr>
        <tr><td colspan="4" style="padding:24px 36px 32px;">
          <p style="margin:0;font-size:16px;line-height:1.6;">With gratitude,<br><strong style="color:${navy};">The Hala Equity Heroes team</strong></p>
        </td></tr>
        <tr><td colspan="4" style="background:${navy};padding:20px 36px;font-size:12px;line-height:1.6;color:#cbd5e1;">
          You&rsquo;re receiving this because this address was used to sign up at
          <a href="${siteUrl}" style="color:#ffffff;">${siteUrl.replace(/^https?:\/\//, "")}</a>.
          Not you, or changed your mind? <a href="${unsubscribeUrl}" style="color:#ffffff;">Unsubscribe</a> &middot;
          <a href="${siteUrl}/privacy" style="color:#ffffff;">Privacy Policy</a>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  const text = `Welcome, Hero.

Thank you for joining Hala Equity Heroes community notes. Once a month, we'll write to you with what's happening across Hala Equity Heroes — and how you can be part of it.

${highlights.map((h, i) => `0${i + 1} ${h.title} — ${h.body}`).join("\n")}

While you wait for your first issue, read our stories: ${siteUrl}/stories

With gratitude,
The Hala Equity Heroes team

You're receiving this because this address was used to sign up at ${siteUrl}.
Unsubscribe: ${unsubscribeUrl}
Privacy Policy: ${siteUrl}/privacy`;

  return { subject, html, text };
}
