import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leistungen | Möbel Taxi Umzug Berlin",
  description:
    "Umzug, Möbeltransport, Montage, Lieferung, Entrümpelung, Senioren-Umzug und Gartenservice in Berlin. Schnell, zuverlässig & versichert.",
  alternates: { canonical: "/leistungen" },
  openGraph: {
    title: "Leistungen | Möbel Taxi Umzug Berlin",
    description:
      "Umzug, Möbeltransport, Montage, Lieferung, Entrümpelung, Senioren-Umzug und Gartenservice in Berlin.",
    url: "/leistungen",
    type: "website",
  },
};

type Card = {
  slug: string;
  title: string;
  subtitle: string;
  img: string;
};

const CARDS: Card[] = [
  {
    slug: "umzug",
    title: "🏠 Umzüge (Wohnung, WG, Pflegeheim, Büro)",
    subtitle: "Stressfrei, zuverlässig & preiswert – komplett organisiert.",
    img: "/images/leistungen/umzug.jpg",
  },
  {
    slug: "moebeltransport",
    title: "🛋️ Möbeltransporte & Mini-Umzüge",
    subtitle: "Einzelstücke, Mehrstücke oder kleiner Umzug – ab 40 €.",
    img: "/images/leistungen/moebeltransport.jpg",
  },
  {
    slug: "montage",
    title: "🔧 Möbelmontage & Demontage Service",
    subtitle: "Schnell, fachgerecht & sauber – IKEA, Poco & mehr.",
    img: "/images/leistungen/montage.jpg",
  },
  {
    slug: "lieferung",
    title:
      "🛒 Lieferung & Aufbau Ihrer Einkäufe von IKEA, Poco, Höffner & Co.",
    subtitle: "Same-Day möglich, sicherer Transport + Verpackungsentsorgung.",
    img: "/images/leistungen/lieferung.jpg",
  },
  {
    slug: "senior-umzug",
    title: "👵 Senioren Umzug & Hilfe beim Umzug für Ältere",
    subtitle: "Geduldig, rücksichtsvoll & gut organisiert.",
    img: "/images/leistungen/senior-umzug.jpg",
  },
  {
    slug: "entruempelung",
    title: "♻️ Entrümpelung & Sperrmüllentsorgung",
    subtitle: "Wohnung, Keller, Büro – schnell, diskret & fachgerecht.",
    img: "/images/leistungen/entruempelung.jpg",
  },
  {
    slug: "garten",
    title:
      "🏡 Gartenarbeiten: Rasenmähen, Laub sammeln, Gartenabfälle entsorgen, Müllentsorgung",
    subtitle: "Pflege, Grünschnitt & Entsorgung – privat & gewerblich.",
    img: "/images/leistungen/garten.jpg",
  },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:py-16 space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Leistungen – Möbel Taxi Umzug Berlin
        </h1>
        <p className="max-w-3xl text-base md:text-lg opacity-90">
          Umzug, Möbeltransport, Montage, Lieferung/Abholung, Entrümpelung,
          Senioren-Umzug und Gartenservice. Schnell, zuverlässig & versichert –
          in Berlin und deutschlandweit.
        </p>
      </header>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CARDS.map((c) => (
          <Link
            key={c.slug}
            href={`/leistungen/${c.slug}`}
            aria-label={c.title}
            className={[
              "card-hover-smooth",
              "group relative isolate overflow-hidden rounded-2xl",
              "border border-white/10 bg-black/30",
              "transition-transform duration-500 will-change-transform",
              "hover:-translate-y-1",
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

            {/* Vignette + iç kenar (parıltı YOK) */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(120%_80%_at_20%_0%,rgba(255,255,255,.06),rgba(255,255,255,0)_60%)]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_0_1px_rgba(255,255,255,.04)]"
            />

            {/* Metin */}
            <div className="p-5 space-y-2">
              <h2 className="text-base md:text-lg font-semibold leading-snug">
                {c.title}
              </h2>
              <p className="text-sm opacity-85">{c.subtitle}</p>
              <span
                aria-hidden
                className="mt-3 block h-[2px] w-10 origin-left bg-brand-yellow/80 transition-[width,transform,filter] duration-500 group-hover:w-24 group-hover:scale-x-105"
              />
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}