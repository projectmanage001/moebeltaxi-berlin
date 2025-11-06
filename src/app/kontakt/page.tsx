import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt | Möbel Taxi Umzug Berlin",
  description:
    "Kontakt zu Möbel Taxi & Umzug Berlin: Telefon, WhatsApp, E-Mail und Kontaktformular. Schnelle Rückmeldung, zuverlässiger Service.",
  alternates: { canonical: "/kontakt" },
  openGraph: {
    title: "Kontakt | Möbel Taxi Umzug Berlin",
    description:
      "Schnell erreichbar per Telefon, WhatsApp & Kontaktformular. Zuverlässige Antworten, faire Preise.",
    url: "/kontakt",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="m-0 p-0">
      {/* Arka planı koyu tut */}
      <section className="full-bleed bg-brand-black">
        <div className="mx-auto max-w-5xl px-5 pt-10 md:pt-14 pb-2">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Kontakt – Möbel Taxi Umzug Berlin
          </h1>
          <p className="mt-2 text-white/80">
            Schreiben Sie uns oder rufen Sie direkt an – wir melden uns schnell zurück.
          </p>
        </div>
        <ContactForm />
      </section>

      {/* JSON-LD: LocalBusiness/MovingCompany */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MovingCompany",
            name: "Möbel Taxi Umzug Berlin",
            url: "https://moebeltaxiumzug.com/kontakt",
            telephone: "+49 1577 1677034",
            email: "moebeltaxiumzug@gmail.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Zeppelinstraße 75",
              postalCode: "13583",
              addressLocality: "Berlin",
              addressCountry: "DE",
            },
            areaServed: ["Berlin", "Deutschland"],
            sameAs: ["https://wa.me/4915771677034"],
          }),
        }}
      />
    </main>
  );
}