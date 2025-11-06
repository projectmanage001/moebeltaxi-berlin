import type { MetadataRoute } from "next";

const base = "https://moebeltaxiumzug.com";

const routes = [
  "",
  "/ueber-uns",
  "/leistungen",
  "/leistungen/umzug",
  "/leistungen/moebeltransport",
  "/leistungen/montage",
  "/leistungen/lieferung",
  "/leistungen/senior-umzug",
  "/leistungen/entruempelung",
  "/leistungen/garten",
  "/blog",
  "/kontakt",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  return routes.map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: p.startsWith("/leistungen") ? "weekly" : "monthly",
    priority: p === "" ? 1 : p.startsWith("/leistungen") ? 0.9 : 0.7,
  }));
}