import type { MetadataRoute } from "next";

const BASE = "https://nuevosc.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  // The site is a SPA on "/", but we expose the canonical hash routes as
  // separate entries so crawlers aware of them can index page intent.
  const routes = [
    "",
    "#/services",
    "#/industries",
    "#/technology",
    "#/network",
    "#/about",
    "#/careers",
    "#/insights",
    "#/contact",
  ];

  return routes.map((r) => ({
    url: `${BASE}/${r}`,
    lastModified: now,
    changeFrequency: r === "" ? "weekly" : "monthly",
    priority: r === "" ? 1 : r === "#/contact" || r === "#/careers" ? 0.8 : 0.7,
  }));
}
