import type { Metadata } from "next";

// Set NEXT_PUBLIC_SITE_URL in Vercel if the site moves to a custom domain
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://halaequityheroes.vercel.app";
export const siteName = "Hala Equity Heroes";
export const siteDescription =
  "Hala Equity Heroes is a community-led charity working for healthcare equity — directing time, skills and resources to grassroots leaders so quality care reaches everyone who needs it.";
export const defaultOgImage = "/images/hero3.jpg";

type PageSeo = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

// Per-page metadata: title, description, canonical URL, and social sharing cards
export function pageMetadata({ title, description, path, image = defaultOgImage }: PageSeo): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName,
      locale: "en_GB",
      url: path,
      title: `${title} | ${siteName}`,
      description,
      images: [{ url: image, alt: siteName }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description,
      images: [image],
    },
  };
}
