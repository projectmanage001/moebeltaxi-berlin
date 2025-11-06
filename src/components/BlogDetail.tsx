// src/components/BlogDetail.tsx
import Link from "next/link";

export type Post = {
  title: string;
  date: string;        // ISO (2024-01-29)
  humanDate: string;   // 29.1.2024
  excerpt: string;
  image: string;       // /images/blog/blog-1.jpg
  content: string;     // HTML string
  canonical: string;   // /blog/slug
};

export default function BlogDetail({ post }: { post: Post }) {
  const site = "https://moebeltaxiumzug.com";
  const canonicalUrl = post.canonical.startsWith("http")
    ? post.canonical
    : `${site}${post.canonical}`;

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 md:py-16 prose prose-invert prose-headings:scroll-mt-20">
      {/* ── BREADCRUMB: sade, sadece slash; son öge sarı ─────────────── */}
      <nav aria-label="Breadcrumb" className="not-prose mb-6 text-sm">
        <span className="text-white/80 hover:text-white transition-colors">
          <Link href="/">Startseite</Link>
        </span>
        <span className="mx-2 text-white/40">/</span>
        <span className="text-white/80 hover:text-white transition-colors">
          <Link href="/blog">Blog</Link>
        </span>
        <span className="mx-2 text-white/40">/</span>
        <span aria-current="page" className="text-brand-yellow font-semibold">
          {post.title}
        </span>
      </nav>

      {/* Başlık bloğu */}
      <header className="mb-6">
        <time className="text-xs uppercase tracking-wide text-white/70">
          {post.humanDate}
        </time>
        <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
          {post.title}
        </h1>
        <p className="mt-3 text-base md:text-lg text-white/85">{post.excerpt}</p>
      </header>

      {/* Kapak görseli */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={post.image}
        alt={post.title}
        className="w-full rounded-xl border border-white/10 mb-8"
        loading="eager"
      />

      {/* İçerik */}
      <div
        className="blog-content leading-8 text-white/90"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* JSON-LD: BlogPosting */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            datePublished: post.date,
            image: post.image,
            description: post.excerpt,
            author: { "@type": "Organization", name: "Möbel Taxi Umzug Berlin" },
            publisher: {
              "@type": "Organization",
              name: "Möbel Taxi Umzug Berlin",
              logo: { "@type": "ImageObject", url: "/brand-logo.png" },
            },
            mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
          }),
        }}
      />

      {/* JSON-LD: BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Startseite",
                item: `${site}/`,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: `${site}/blog`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: post.title,
                item: canonicalUrl,
              },
            ],
          }),
        }}
      />
    </article>
  );
}