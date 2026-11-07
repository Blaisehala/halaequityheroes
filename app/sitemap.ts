import type { MetadataRoute } from "next";
import { siteUrl } from "./lib/seo";

const routes = [
  { path: "", priority: 1 },
  { path: "/about", priority: 0.8 },
  { path: "/mission", priority: 0.8 },
  { path: "/our-story", priority: 0.7 },
  { path: "/get-involved", priority: 0.8 },
  { path: "/donate", priority: 0.9 },
  { path: "/volunteer", priority: 0.8 },
  { path: "/stories", priority: 0.7 },
  { path: "/newsletter", priority: 0.5 },
  { path: "/contact", priority: 0.6 },
  { path: "/privacy", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: "monthly",
    priority,
  }));
}
