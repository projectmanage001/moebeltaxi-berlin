// src/app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
        disallow: [
          "/api/",
          "/_next/",          // Next.js iç dosyalar
          "/static/",         // varsa statik derleme çıktıları
          "/private/",        // ileride iç sayfalar için yer
          "/draft/",          // taslak içerikler
        ],
      },
    ],
    sitemap: "https://moebeltaxiumzug.com/sitemap.xml",
    host: "https://moebeltaxiumzug.com",
  };
}