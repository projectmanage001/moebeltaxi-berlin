"use client";

import Link from "next/link";
import { SERVICE_CONTENT, ServiceKey } from "@/lib/services";

export default function ServiceDetail({ service }: { service: ServiceKey }) {
  const s = SERVICE_CONTENT[service];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.metaTitle,
    description: s.lead,
    serviceType: s.metaTitle,
    areaServed: ["Berlin", "Deutschland"],
    provider: { "@type": "MovingCompany", name: "Möbel Taxi Umzug" },
    url: `https://moebeltaxiumzug.com${s.canonical}`,
    image: s.og,
    keywords: s.keywords.join(", "),
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: "40",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 md:py-14 space-y-10">
      <nav aria-label="Breadcrumb" className="text-sm text-gray-300">
        <Link className="hover:underline" href="/">Startseite</Link>
        <span className="mx-2 opacity-60">/</span>
        <Link className="hover:underline" href="/leistungen">Leistungen</Link>
        <span className="mx-2 opacity-60">/</span>
        <span className="text-brand-yellow">{s.metaTitle}</span>
      </nav>

      <header className="space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/10 px-3 py-1 text-sm text-brand-yellow border border-brand-yellow/20">
          {s.heroBadge}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">{s.h1}</h1>
        <p className="text-base md:text-lg opacity-90">{s.lead}</p>
      </header>

      {s.og && (
        <div className="overflow-hidden rounded-xl border border-white/10 bg-black/30">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={s.og}
            alt={s.metaTitle}
            className="w-full h-[220px] md:h-[320px] object-cover"
            loading="lazy"
          />
        </div>
      )}

      <section className="grid gap-8">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold">{s.bulletsTitle}</h2>
          <ul className="mt-3 grid gap-2">
            {s.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand-yellow shadow-[0_0_0_3px_rgba(245,196,0,.15)]" />
                <span className="opacity-95">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-semibold">{s.servicesTitle}</h2>
          <ul className="mt-3 grid gap-2">
            {s.services.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand-yellow shadow-[0_0_0_3px_rgba(245,196,0,.15)]" />
                <span className="opacity-95">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-white/10 bg-black/30 p-5">
          <h2 className="text-lg md:text-xl font-semibold">Kontakt</h2>
          <div className="mt-2 grid gap-1 text-sm md:text-base">
            <p>📞 Telefon &amp; WhatsApp: <a className="underline decoration-brand-yellow underline-offset-4" href="tel:+4915771677034">+49 1577 1677034</a></p>
            <p>📧 E-Mail: <a className="underline decoration-brand-yellow underline-offset-4" href="mailto:moebeltaxiumzug@gmail.com">moebeltaxiumzug@gmail.com</a></p>
            <p>📸 Instagram: <a className="underline decoration-brand-yellow underline-offset-4" href="https://instagram.com/mobeltaxiumzug" target="_blank">@mobeltaxiumzug</a></p>
          </div>
        </div>
      </section>

      <section className="pt-2">
        <Link
          href="/kontakt"
          className="inline-block rounded-lg bg-brand-yellow px-5 py-3 font-semibold text-black shadow-[0_10px_28px_rgba(245,196,0,.25)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(245,196,0,.35)] focus:outline-none focus:ring-2 focus:ring-brand-yellow/70"
        >
          Jetzt Kontakt
        </Link>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}