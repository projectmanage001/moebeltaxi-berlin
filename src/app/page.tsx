import type { Metadata } from "next";
import Link from "next/link";
import HeroSwiper from "@/components/HeroSwiper";
import TestimonialsPreview from "@/components/TestimonialsPreview";

export const metadata: Metadata = {
  title:
    "Möbel Taxi Berlin | ab 39€* – Günstiges Möbel Taxi mit Fahrer in Berlin",
  description:
    "Schnelles, zuverlässiges und günstiges Möbeltaxi in Berlin ab 39€*. Möbel, Elektrogeräte & Einkäufe sicher transportiert – mit Fahrer, versichert.",
  alternates: { canonical: "/" },
  openGraph: {
    title:
      "Möbel Taxi Berlin | ab 39€* – Günstiges Möbel Taxi mit Fahrer in Berlin",
    description:
      "Schnelles, zuverlässiges und günstiges Möbeltaxi in Berlin ab 39€*. Möbel, Elektrogeräte & Einkäufe sicher transportiert – mit Fahrer, versichert.",
    url: "/",
    type: "website",
  },
};

type Card = {
  slug: string;
  title: string;
  subtitle: string;
  img: string;
};

// Ana sayfa için hizmet kartları (Leistungen sayfasıyla tutarlı)
const CARDS: Card[] = [
  { slug: "umzug", title: "🏠 Umzüge (Wohnung, WG, Pflegeheim, Büro)", subtitle: "Stressfrei, zuverlässig & preiswert – komplett organisiert.", img: "/images/leistungen/umzug.jpg" },
  { slug: "moebeltransport", title: "🛋️ Möbeltransporte & Mini-Umzüge", subtitle: "Einzelstücke, Mehrstücke oder kleiner Umzug – ab 40 €.", img: "/images/leistungen/moebeltransport.jpg" },
  { slug: "montage", title: "🔧 Möbelmontage & Demontage Service", subtitle: "Schnell, fachgerecht & sauber – IKEA, Poco & mehr.", img: "/images/leistungen/montage.jpg" },
  { slug: "lieferung", title: "🛒 Lieferung & Aufbau Ihrer Einkäufe von IKEA, Poco, Höffner & Co.", subtitle: "Same-Day möglich, sicherer Transport + Verpackungsentsorgung.", img: "/images/leistungen/lieferung.jpg" },
  { slug: "senior-umzug", title: "👵 Senioren Umzug & Hilfe beim Umzug für Ältere", subtitle: "Geduldig, rücksichtsvoll & gut organisiert.", img: "/images/leistungen/senior-umzug.jpg" },
  { slug: "entruempelung", title: "♻️ Entrümpelung & Sperrmüllentsorgung", subtitle: "Wohnung, Keller, Büro – schnell, diskret & fachgerecht.", img: "/images/leistungen/entruempelung.jpg" },
  { slug: "garten", title: "🏡 Gartenarbeiten: Rasenmähen, Laub sammeln, Gartenabfälle entsorgen, Müllentsorgung", subtitle: "Pflege, Grünschnitt & Entsorgung – privat & gewerblich.", img: "/images/leistungen/garten.jpg" },
];

export default function Page() {
  return (
    <main className="m-0 p-0">
      {/* --- SWIPER --- */}
      <section className="m-0 p-0">
        <HeroSwiper />
      </section>

      {/* --- SEO İÇERİK (koyu zemin) --- */}
      <article className="full-bleed bg-brand-black">
        <div className="mx-auto max-w-5xl px-5 py-12 md:py-16">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Möbel Taxi Berlin <span className="text-brand-yellow">| ab 39€*</span> – Günstiges Möbel Taxi mit Fahrer in Berlin
          </h1>
          <p className="mt-3 text-base md:text-lg text-white/80">
            Schnell, zuverlässig und versichert – in Berlin &amp; Umland.
          </p>

          <p className="mt-8 text-[17px] leading-8 text-white/90">
            Suchen Sie ein <strong>Möbeltaxi in Berlin</strong>, das schnell, zuverlässig und günstig ist?
            Dann sind Sie bei <strong>moebeltaxiumzug.com</strong> genau richtig! Wir transportieren Ihre Möbel,
            Elektrogeräte und Einkäufe schon <strong>ab 39€*</strong> quer durch Berlin und das Umland.
            Unser <strong>Möbeltransport Berlin</strong> Service bietet Ihnen faire Preise, erfahrene Fahrer
            und einen versicherten Transport.
          </p>
          <p className="mt-4 text-[17px] leading-8 text-white/90">
            Egal ob Kühlschrank, Couch, Waschmaschine oder Schrank – wir bringen Ihre Möbel sicher und pünktlich ans Ziel.
            <strong> moebeltaxiumzug.com</strong> – Ihr Partner für Möbeltaxi, Kleintransporte und Umzüge in Berlin.
          </p>

          <h2 className="mt-10 text-2xl md:text-3xl font-bold text-white">
            Bordstein zu Bordstein – schnell &amp; unkompliziert
          </h2>
          <p className="mt-3 text-[17px] leading-8 text-white/90">
            Unser beliebter <strong>Bordstein-zu-Bordstein-Service</strong> ist ideal für kurze Möbeltransporte in Berlin,
            etwa für Ebay-Käufe, IKEA-Transporte oder Baumarkt-Einkäufe. Ohne Tragehilfe, dafür schnell, günstig und flexibel.
          </p>

          <h2 className="mt-10 text-2xl md:text-3xl font-bold text-white">
            Mit Tragehelfern – wir übernehmen das Tragen
          </h2>
          <p className="mt-3 text-[17px] leading-8 text-white/90">
            Unsere <strong>Tragehelfer Berlin</strong> übernehmen das Schleppen für Sie! Ob Treppenhaus, Wohnung oder Büro –
            wir kümmern uns um den sicheren Transport Ihrer Möbel.
          </p>

          <h2 className="mt-10 text-2xl md:text-3xl font-bold text-white">
            Umzug &amp; Kleintransporte – mehr als nur Möbeltaxi
          </h2>
          <p className="mt-3 text-[17px] leading-8 text-white/90">
            Mit <strong>moebeltaxiumzug.com</strong> können Sie nicht nur Transporter mit Fahrer mieten,
            sondern auch komplette <strong>Umzugsteams mit LKW und Helfern</strong> buchen.
          </p>

          <h2 className="mt-10 text-2xl md:text-3xl font-bold text-white">
            WhatsApp – 24/7 erreichbar
          </h2>
          <p className="mt-3 text-[17px] leading-8 text-white/90">
            Buchen Sie Ihr <strong>Möbeltaxi Berlin</strong> direkt per WhatsApp unter{" "}
            <a
              className="text-brand-yellow underline underline-offset-4 decoration-brand-yellow"
              href="https://wa.me/4915771677034"
            >
              +49 1577 1677034
            </a>
            . Wir sind rund um die Uhr erreichbar – auch an Wochenenden!
          </p>

          <h2 className="mt-10 text-2xl md:text-3xl font-bold text-white">
            Einkauf-Transport – IKEA, OBI, Poco &amp; Ebay Kleinanzeigen
          </h2>
          <p className="mt-3 text-[17px] leading-8 text-white/90">
            Wir übernehmen den Transport Ihrer Einkäufe. Auf Wunsch zahlen wir auch in Vorleistung,
            wenn Sie uns Ihren Abholschein per WhatsApp senden.
          </p>

          <p className="mt-8 text-sm leading-6 text-white/60">
            *Preis abhängig von Strecke, Größe/Gewicht und Wartezeiten.
          </p>
        </div>
      </article>

      {/* --- HİZMET KARTLARI --- */}
      <section aria-labelledby="home-services-title" className="full-bleed bg-black">
        <div className="mx-auto max-w-6xl px-5 py-10 md:py-14">
          <header className="mb-6 md:mb-8">
            <h2 id="home-services-title" className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Leistungen – direkt auswählen
            </h2>
            <p className="mt-2 text-white/80 max-w-3xl">
              Wählen Sie eine Leistung und erhalten Sie Details, Preise & Kontaktmöglichkeiten.
            </p>
          </header>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CARDS.map((c) => (
              <Link
                key={c.slug}
                href={`/leistungen/${c.slug}`}
                aria-label={c.title}
                className={[
                  "group relative isolate overflow-hidden rounded-2xl",
                  "border border-white/10 bg-black/30",
                  "transition-transform duration-500 will-change-transform hover:-translate-y-1",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow/70",
                  "shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04),_0_8px_28px_rgba(0,0,0,0.35)]",
                ].join(" ")}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="h-48 w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(120%_80%_at_20%_0%,rgba(255,255,255,.06),rgba(255,255,255,0)_60%)]" />
                <div aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_0_1px_rgba(255,255,255,.04)]" />
                <div className="p-5 space-y-2">
                  <h3 className="text-base md:text-lg font-semibold leading-snug text-white">{c.title}</h3>
                  <p className="text-sm text-white/85">{c.subtitle}</p>
                  <span aria-hidden className="mt-3 block h-[2px] w-10 origin-left bg-brand-yellow/80 transition-[width,transform,filter] duration-500 group-hover:w-24 group-hover:scale-x-105" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href="/leistungen"
              className="rounded-full border border-brand-yellow/30 bg-black/40 px-5 py-2.5 text-sm font-semibold text-white shadow hover:border-brand-yellow/60 hover:-translate-y-0.5 hover:shadow-lg transition"
            >
              Alle Leistungen ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS (footer’dan hemen önce) --- */}
      <section className="full-bleed bg-brand-black">
        <TestimonialsPreview theme="dark" compact autoplay intervalMs={4500} gapBottom={0} />
      </section>

      {/* --- ZAHLUNGSARTEN (Ödeme yöntemleri) — testimonial’in HEMEN ALTINDA --- */}
      <section className="full-bleed bg-black/70 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-10 md:py-12">
          <header className="mb-6 md:mb-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Sichere Zahlungsmethoden
            </h2>
            <p className="mt-2 text-white/70">
              Überweisung, Barzahlung oder PayPal – wählen Sie die passende Option.
            </p>
          </header>

          <div className="grid items-center gap-6 sm:grid-cols-3">
            {/* Überweisung */}
            <div className="group relative rounded-2xl border border-white/10 bg-black/40 px-6 py-6 text-center shadow-[0_8px_28px_rgba(0,0,0,.35)] transition hover:-translate-y-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/payments/ueberweisung.jpg"
                alt="Vorkasse / Überweisung"
                loading="lazy"
                className="mx-auto h-16 md:h-20 lg:h-24 w-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <p className="mt-4 text-sm text-white/80">Vorkasse / Überweisung</p>
            </div>

            {/* Barzahlung */}
            <div className="group relative rounded-2xl border border-white/10 bg-black/40 px-6 py-6 text-center shadow-[0_8px_28px_rgba(0,0,0,.35)] transition hover:-translate-y-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/payments/sb-barzahlung.jpg"
                alt="Barzahlung"
                loading="lazy"
                className="mx-auto h-16 md:h-20 lg:h-24 w-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <p className="mt-4 text-sm text-white/80">Barzahlung</p>
            </div>

            {/* PayPal */}
            <div className="group relative rounded-2xl border border-white/10 bg-black/40 px-6 py-6 text-center shadow-[0_8px_28px_rgba(0,0,0,.35)] transition hover:-translate-y-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/payments/sb-paypal.jpg"
                alt="PayPal – Click & Pay"
                loading="lazy"
                className="mx-auto h-16 md:h-20 lg:h-24 w-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <p className="mt-4 text-sm text-white/80">PayPal – Click &amp; Pay</p>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD (SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MovingCompany",
            name: "moebeltaxiumzug.com",
            url: "https://moebeltaxiumzug.com/",
            areaServed: ["Berlin", "Brandenburg", "Deutschland"],
            priceRange: "€€",
            telephone: "+49 1577 1677034",
            description:
              "Günstiges Möbeltaxi mit Fahrer in Berlin ab 39€*. Bordstein-zu-Bordstein, Tragehelfer, Kleintransporte & Umzüge.",
            sameAs: ["https://wa.me/4915771677034"],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Leistungen",
              itemListElement: CARDS.map((c) => ({
                "@type": "Offer",
                name: c.title.replace(/^(\p{Emoji_Presentation}|\p{Extended_Pictographic})\s*/u, ""),
                url: `https://moebeltaxiumzug.com/leistungen/${c.slug}`,
              })),
            },
          }),
        }}
      />
    </main>
  );
}