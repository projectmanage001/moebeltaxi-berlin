// src/app/blog/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "../../lib/blog";

export const metadata: Metadata = {
  title: "Blog | Möbel Taxi Umzug Berlin",
  description:
    "Tipps & Ratgeber: Umzug, Möbeltransport, Entrümpelung, Montage, Senioren-Umzug und nachhaltige Lösungen in Berlin.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Möbel Taxi Umzug Berlin",
    description:
      "Ratgeber rund um Umzug, Möbeltransport, Entrümpelung & mehr in Berlin.",
    url: "/blog",
    type: "website",
  },
};

export default function Page() {
  const posts = getAllPosts();
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <header className="mb-8 space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Blog – Tipps, Ratgeber & Updates
        </h1>
        <p className="max-w-3xl text-base md:text-lg opacity-90">
          Praktische Hinweise für Ihren Umzug, Möbeltransport und Entrümpelung in Berlin.
        </p>
      </header>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/30 transition hover:-translate-y-0.5 hover:border-brand-yellow/40"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={p.image}
              alt={p.title}
              className="h-44 w-full object-cover transition duration-700 group-hover:scale-[1.04]"
              loading="lazy"
            />
            <div className="p-5 space-y-2">
              <time className="text-xs uppercase tracking-wide text-white/70">
                {p.humanDate}
              </time>
              <h2 className="text-base md:text-lg font-semibold leading-snug">
                {p.title}
              </h2>
              <p className="text-sm opacity-85">{p.excerpt}</p>
              <span
                className="mt-3 block h-[2px] w-10 origin-left scale-x-100 bg-brand-yellow/80 transition-[width,transform] duration-500 group-hover:w-24 group-hover:scale-x-105"
                aria-hidden
              />
            </div>
            <div aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_0_1px_rgba(255,255,255,.04)]" />
          </Link>
        ))}
      </section>
    </main>
  );
}