// src/app/sitemap.ts
import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

const base = "https://moebeltaxiumzug.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModAll = new Date().toISOString();

  const staticRoutes: { path: string; priority: number }[] = [
    { path: "", priority: 1.0 },
    { path: "/ueber-uns", priority: 0.6 },
    { path: "/leistungen", priority: 0.9 },
    { path: "/leistungen/umzug", priority: 0.9 },
    { path: "/leistungen/moebeltransport", priority: 0.9 },
    { path: "/leistungen/montage", priority: 0.9 },
    { path: "/leistungen/lieferung", priority: 0.9 },
    { path: "/leistungen/senior-umzug", priority: 0.9 },
    { path: "/leistungen/entruempelung", priority: 0.9 },
    { path: "/leistungen/garten", priority: 0.9 },
    { path: "/blog", priority: 0.7 },
    { path: "/kontakt", priority: 0.6 },
    { path: "/impressum", priority: 0.5 },
    { path: "/datenschutz", priority: 0.5 },
  ];

  const statics = staticRoutes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: lastModAll,
    changeFrequency: "yearly" as const,
    priority: r.priority,
  }));

  const posts = getAllPosts();
  const blogEntries = posts.map((p) => {
    const url = `${base}${p.canonical || `/blog/${p.slug}`}`;
    // p.date zaten "YYYY-MM-DD" geliyor; yine de güvene alalım
    const dt = new Date(p.date);
    const lastModified = isNaN(dt.getTime()) ? lastModAll : dt.toISOString();
    return {
      url,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.65,
    };
  });

  return [...statics, ...blogEntries];
}