import ContactForm from "@/components/ContactForm";

export default function SiteWideContact() {
  return (
    <section className="full-bleed bg-brand-black">
      <div className="mx-auto max-w-5xl px-5 pt-10 md:pt-14 pb-2">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Kontakt – Möbel Taxi Umzug Berlin
        </h2>
        <p className="mt-2 text-white/80">
          Schreiben Sie uns oder rufen Sie direkt an – wir melden uns schnell zurück.
        </p>
      </div>

      {/* Form (EmailJS kullanan bileşenin) */}
      <ContactForm />

      {/* Schema.org (site genelinde güvenli) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MovingCompany",
            name: "Möbel Taxi Umzug Berlin",
            url: "https://moebeltaxiumzug.com/",
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
    </section>
  );
}