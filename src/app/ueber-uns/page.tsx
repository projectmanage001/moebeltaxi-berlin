import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über uns | Möbel Taxi Umzug Berlin – Umzugsservice & Entrümpelung",
  description:
    "Möbel Taxi Umzug: Zuverlässiger Umzugsservice, Entrümpelung, Sperrmüll und Montage in Berlin & deutschlandweit. Erfahrene Umzugshelfer, transparente Preise.",
  alternates: { canonical: "/ueber-uns" },
  openGraph: {
    title: "Über uns | Möbel Taxi Umzug Berlin",
    description:
      "Ihr Partner für Umzug, Entrümpelung & Kleintransporte in Berlin und ganz Deutschland.",
    url: "/ueber-uns",
    type: "website",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: "Möbel Taxi Umzug",
    areaServed: ["Berlin", "Deutschland"],
    url: "https://moebeltaxiumzug.com/ueber-uns",
    sameAs: [
      "https://moebeltaxiumzug.com",
    ],
    serviceOffered: [
      "Umzug",
      "Entrümpelung",
      "Sperrmüllabholung",
      "Möbelmontage",
      "Kleintransporte",
      "Gartenpflege",
      "Entsorgung",
    ],
  };

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 md:py-12">
      {/* JSON-LD (SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="mb-8 md:mb-10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Über Uns
        </h1>
        <p className="mt-3 text-base md:text-lg opacity-90">
          Ihr zuverlässiger Umzugs- und Entrümpelungsservice in Berlin & ganz Deutschland
        </p>
      </header>

      <article className="prose prose-invert max-w-none leading-relaxed">
        <section className="space-y-4">
          <p>
            Willkommen bei <strong>Möbel Taxi Umzug</strong> – Ihrem professionellen Partner
            für <strong>Umzüge, Entrümpelung, Sperrmüll, Gartenpflege und Entsorgung</strong> in
            Berlin und in ganz Deutschland.
          </p>
          <p>
            Unser erfahrenes Team besteht aus qualifizierten Umzugshelfern, Tragekräften und
            erfahrenen Monteuren, die seit vielen Jahren in der Branche tätig sind. Wir legen
            großen Wert auf <strong>Zuverlässigkeit</strong>, <strong>Sorgfalt</strong> und{" "}
            <strong>Kundenzufriedenheit</strong> – denn Ihr Umzug soll für Sie so stressfrei wie
            möglich ablaufen.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Was wir übernehmen</h2>
          <p>
            Egal ob <strong>Privatumzug</strong>, <strong>Firmenumzug</strong> oder{" "}
            <strong>Senioren-Umzug</strong> – wir kümmern uns um die komplette Organisation, den
            sicheren Transport sowie die fachgerechte Montage Ihrer Möbel. Auch bei{" "}
            <strong>Entrümpelungen</strong>, <strong>Sperrmüllabholungen</strong> und der{" "}
            <strong>Gartenpflege</strong> stehen wir Ihnen mit Rat und Tat zur Seite.
          </p>
          <ul className="list-disc pl-5">
            <li>Planung & Organisation Ihres Umzugs</li>
            <li>Sicherer Transport & versichertes Handling</li>
            <li>Fachgerechte Möbelmontage & Demontage</li>
            <li>Entrümpelung & Sperrmüllabholung</li>
            <li>Gartenpflege & umweltgerechte Entsorgung</li>
          </ul>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Warum Möbel Taxi Umzug?</h2>
          <p>
            Dank unserer langjährigen Erfahrung und unserem professionellen Service haben wir uns
            in Berlin und deutschlandweit einen Namen als zuverlässiges Umzugsunternehmen
            gemacht. Vertrauen Sie auf <strong>Möbel Taxi Umzug</strong> – schnell,
            professionell und preiswert.
          </p>
        </section>

        <section className="mt-10">
          <div className="rounded-xl border border-brand-yellow/25 bg-black/40 p-5 md:p-6">
            <h2 className="text-xl md:text-2xl font-semibold">
              Unverbindliches Angebot anfragen
            </h2>
            <p className="mt-2 opacity-90">
              Kontaktieren Sie uns noch heute – wir beraten Sie persönlich und erstellen
              ein faires, transparentes Angebot.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="/kontakt"
                className="inline-flex items-center justify-center px-5 py-2 text-sm font-semibold bg-brand-yellow text-black transition hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(245,196,0,.25)] focus:outline-none focus:ring-2 focus:ring-brand-yellow/70"
                style={{ borderRadius: 0 }}
              >
                Kontaktformular
              </a>
              <a
                href="https://wa.me/4915771677034"
                className="inline-flex items-center justify-center px-5 py-2 text-sm font-semibold border border-brand-yellow/40 text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-brand-yellow/50"
                style={{ borderRadius: 0 }}
              >
                WhatsApp (+49 1577 1677034)
              </a>
            </div>
          </div>
        </section>
      </article>

      {/* Dezentes Lesbarkeits-padding unten */}
      <div className="h-6 md:h-8" />
    </main>
  );
}