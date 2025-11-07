import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Möbel Taxi Umzug Berlin",
  description:
    "Informationen zum Datenschutz gemäß DSGVO für die Website Möbel Taxi Umzug Berlin.",
  alternates: { canonical: "/datenschutz" },
};

export default function DatenschutzPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-gray-100">
      <h1 className="text-3xl font-extrabold text-brand-yellow mb-6">
        📜 Datenschutzerklärung
      </h1>
      <p className="text-sm text-gray-400 mb-8">
        Letzte Aktualisierung: Oktober 2025
      </p>

      <section className="space-y-6 leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold text-brand-yellow mb-2">
            1. Verantwortlicher
          </h2>
          <p>
            Verantwortlich im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
            <br />
            <strong>MöbelTaxi Umzug & Berlin</strong>
            <br />
            Adresse: Zeppelinstraße 75, 13583 Berlin
            <br />
            E-Mail: moebeltaxiumzug@gmail.com
            <br />
            Telefon: +49 1577 1677034
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-brand-yellow mb-2">
            2. Erhebung und Speicherung personenbezogener Daten & Zweck
          </h2>
          <p>
            Beim Besuch der Website werden automatisch Informationen generiert –
            z. B. IP-Adresse, Browsertyp, Betriebssystem, Referrer-URL und Uhrzeit
            der Anfrage. Diese Daten sind technisch notwendig zur Anzeige der
            Website (Server-Logfiles) und werden nicht mit anderen Datenquellen
            zusammengeführt.
          </p>
          <p className="mt-3">
            Wenn Sie unser Kontaktformular verwenden, verarbeiten wir zusätzlich
            folgende Daten von Ihnen:
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Vorname, Nachname</li>
            <li>E-Mail-Adresse</li>
            <li>Telefonnummer</li>
            <li>Adresse (Abhol- und Lieferadresse)</li>
            <li>Details zur Dienstleistung, Nachricht</li>
          </ul>
          <p className="mt-3">
            Zweck: Bearbeitung Ihrer Anfrage, Angebotserstellung und
            Kommunikation.
            <br />
            Rechtsgrundlage: Art. 6 Abs. 1 lit. a (Einwilligung) DSGVO.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-brand-yellow mb-2">
            3. Weitergabe von Daten / Drittanbieter
          </h2>
          <p>
            Für die Versendung der Nachrichten nutzen wir den Dienst{" "}
            <strong>EmailJS</strong>. Ihre Daten werden über diesen Dienst
            verarbeitet. Es kann sein, dass Daten dabei auch in ein Drittland
            (z. B. USA) übermittelt werden. Wir haben mit EmailJS einen Vertrag
            zur Auftragsverarbeitung abgeschlossen, um sicherzustellen, dass
            Ihre Daten geschützt sind.
          </p>
          <p className="mt-3">
            Weitere Dienste (sofern zutreffend): Google Maps, Google Analytics
            usw.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-brand-yellow mb-2">
            4. Speicherdauer
          </h2>
          <p>
            Personenbezogene Daten werden nur so lange gespeichert, wie es nötig
            ist, um die beschriebenen Zwecke zu erfüllen oder gesetzliche
            Aufbewahrungsfristen bestehen. Danach werden sie gelöscht oder
            anonymisiert.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-brand-yellow mb-2">
            5. Ihre Rechte als betroffene Person
          </h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
            <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
            <li>Recht auf Löschung (Art. 17 DSGVO)</li>
            <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Recht auf Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
            <li>Recht auf Beschwerde bei einer Aufsichtsbehörde</li>
          </ul>
          <p className="mt-3">
            Kontaktieren Sie uns, wenn Sie eines dieser Rechte ausüben möchten:{" "}
            <strong>moebeltaxiumzug@gmail.com</strong>
          </p>
        </div>

        <div className="pt-10 text-sm">
          <a
            href="/kontakt"
            className="text-brand-yellow hover:underline"
          >
            ← Zurück zum Kontaktformular
          </a>
        </div>
      </section>
    </main>
  );
}