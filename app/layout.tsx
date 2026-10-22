import type { Metadata } from "next";
import { Instrument_Serif, Nunito } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import SiteFooter from "./components/SiteFooter";
import { defaultOgImage, siteDescription, siteName, siteUrl } from "./lib/seo";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

// Editorial serif for feature section titles (charity: water-style storytelling)
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Healthcare For All: Quality First, Equity Always`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "healthcare equity",
    "charity",
    "community-led charity",
    "volunteer",
    "donate",
    "sickle cell",
    "grassroots",
    "Hala Equity Heroes",
  ],
  openGraph: {
    type: "website",
    siteName,
    locale: "en_GB",
    url: "/",
    title: siteName,
    description: siteDescription,
    images: [{ url: defaultOgImage, alt: siteName }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: [defaultOgImage],
  },
  robots: { index: true, follow: true },
};

// Structured data so search engines understand who the organisation is
const organisationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/images/logo-full.png`,
  description: siteDescription,
  slogan: "Healthcare For All: Quality First, Equity Always",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${instrumentSerif.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationJsonLd) }}
        />
        <Navigation />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
