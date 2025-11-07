// src/lib/blog.ts
export type Post = {
  slug: string;
  title: string;
  date: string; // ISO yyyy-mm-dd
  humanDate: string; // "29.01.2024" gibi
  excerpt: string;
  image: string;
  keywords: string[];
  canonical: string;
  content: string; // HTML (güvenilir, biz yazdık)
};

export const POSTS: Post[] = [
  {
    slug: "umzug-in-berlin-10-tipps",
    title: "🇩🇪 Umzug in Berlin – 10 Tipps für einen stressfreien Umzug",
    date: "2024-01-29",
    humanDate: "29.01.2024",
    excerpt:
      "Ein Umzug in Berlin muss nicht stressig sein – mit guter Planung, Checklisten und einem zuverlässigen Partner bleibt alles planbar.",
    image: "/images/blog/blog-1.jpg",
    keywords: [
      "Umzug Berlin",
      "Umzugstipps",
      "Umzugsfirma Berlin",
      "Halteverbotszone",
      "Umzug Checkliste",
    ],
    canonical: "/blog/umzug-in-berlin-10-tipps",
    content: `
      <p>Ein <strong>Umzug in Berlin</strong> bedeutet Organisation: Altbau, enge Treppen, Halteverbotszonen und Zeitdruck.
      Mit den richtigen Schritten wird Ihr Umzug effizient, sicher und stressfrei. Unsere Teams unterstützen Sie von der Planung bis zur Übergabe – transparent, freundlich und pünktlich.</p>

      <h2>🧳 1. Frühzeitig planen & Checkliste führen</h2>
      <p>Starten Sie mindestens 4–6 Wochen vorher: Kündigungen, Ummeldungen, Internet/Versorger, Parkzone. Eine klare Checkliste spart Nerven.</p>

      <h2>📦 2. Vorab entrümpeln</h2>
      <p>Weniger Volumen = weniger Kosten. Wir übernehmen auf Wunsch die <a href="/leistungen/entruempelung">Entrümpelung</a> inkl. Entsorgung.</p>

      <h2>🚚 3. Die richtige Umzugsfirma wählen</h2>
      <p>Achten Sie auf Versicherung, transparentes Angebot, Bewertungen und Erreichbarkeit. Unser <a href="/leistungen/umzug">Umzugsservice in Berlin</a> ist planbar und versichert.</p>

      <h2>🪧 4. Halteverbotszone beantragen</h2>
      <p>Ohne HVZ riskieren Sie unnötige Wege und Verzögerungen. Wir organisieren die <em>Halteverbotszone</em> auf Wunsch komplett.</p>

      <h2>🧰 5. Sicher packen</h2>
      <ul>
        <li>Schwere Gegenstände nach unten, fragile nach oben</li>
        <li>Kartons beschriften (Zimmer + Inhalt)</li>
        <li>Elektronik und Glas separat polstern</li>
      </ul>

      <h2>🛋️ 6. Möbel schützen</h2>
      <p>Decken, Stretchfolien, Kantenschoner – Standard bei uns. Für Schränke & Betten empfehlen wir <a href="/leistungen/montage">Montage/ Demontage</a>.</p>

      <h2>👨‍🔧 7. Möbelmontage vom Profi</h2>
      <p>Korrekte Demontage spart Zeit beim Wiederaufbau und vermeidet Schäden.</p>

      <h2>⏰ 8. Zeitpuffer einplanen</h2>
      <p>Fahrstühle, Treppenhäuser, Laufwege – kalkulieren Sie realistisch.</p>

      <h2>🧼 9. Reinigung & Übergabe</h2>
      <p>Besensauger, Mülltrennung, Sperrmüll – wir helfen gerne.</p>

      <h2>🏡 10. Entspannt ankommen</h2>
      <p>Mit <strong>Möbel Taxi & Umzug Berlin</strong> ziehen Sie effizient um – auch <a href="/leistungen/senior-umzug">Seniorenumzüge</a> mit besonderer Sorgfalt.</p>

      <h2>❓ FAQ: Umzug in Berlin</h2>
      <h3>Wie viel kostet ein Umzug in Berlin?</h3>
      <p>Das hängt von Volumen, Strecke, Stockwerken und Zusatzleistungen ab. Eine 2-Zimmer-Wohnung liegt typischerweise im mittleren dreistelligen Bereich. Holen Sie ein <a href="/kontakt">kostenloses Angebot</a>.</p>
      <h3>Bieten Sie Tragehelfer an?</h3>
      <p>Ja, mit oder ohne Bordsteinservice. Sie entscheiden.</p>
      <h3>Können Sie am Wochenende umziehen?</h3>
      <p>Ja, nach Absprache – inklusive Abendslots.</p>

      <p><strong>Kontakt:</strong> 📞 +49 1577 1677034 · 📧 moebeltaxiumzug@gmail.com · <a href="https://www.instagram.com/mobeltaxiumzug/" target="_blank" rel="noopener">Instagram</a></p>
    `,
  },
  {
    slug: "moebeltransport-berlin-anbieter-finden",
    title: "🇩🇪 Möbeltransport Berlin – So finden Sie den richtigen Anbieter",
    date: "2024-02-12",
    humanDate: "12.02.2024",
    excerpt:
      "Worauf kommt es beim Möbeltransport an? Erfahrung, Schutzmaterial, Versicherung, klare Preise und Termine.",
    image: "/images/blog/blog-2.jpg",
    keywords: [
      "Möbeltransport Berlin",
      "Transportservice Berlin",
      "Möbellieferung",
      "Möbel Spedition",
    ],
    canonical: "/blog/moebeltransport-berlin-anbieter-finden",
    content: `
      <p>Ein <strong>Möbeltransport in Berlin</strong> braucht Fingerspitzengefühl: enge Höfe, Altbauten, empfindliche Oberflächen. So wählen Sie richtig:</p>

      <h2>🚚 Erfahrung & Professionalität</h2>
      <p>Geschulte Teams, Schutzmaterial, klare Abläufe. Unser <a href="/leistungen/moebeltransport">Möbeltransport</a> ist auf Einzelstücke, Sets und Mini-Umzüge spezialisiert.</p>

      <h2>🛡️ Versicherung & Schutz</h2>
      <p>Möbeldecken, Stretchfolie, Kantenschutz. Transparenter Versicherungsschutz ist Pflicht.</p>

      <h2>🏙️ Ortskenntnis</h2>
      <p>Lokale Anbieter sparen Zeit durch Routen-Know-how, Ladezonen und Halteverbotszonen.</p>

      <h2>💶 Transparente Preise</h2>
      <p>Fix- oder Stundenpreise ohne versteckte Kosten. Wir nennen Kosten vorab – fair und nachvollziehbar.</p>

      <h2>📅 Flexible Terminwahl</h2>
      <p>Auch Same-Day in Berlin möglich, abhängig von Auslastung.</p>

      <h2>🔧 Zusatzleistungen</h2>
      <ul>
        <li><a href="/leistungen/montage">Montage & Demontage</a></li>
        <li>Tragehilfe bis in die Wohnung</li>
        <li>Entsorgung & Recycling auf Wunsch</li>
      </ul>

      <h2>❓ FAQ: Möbeltransport</h2>
      <h3>Was kostet ein einzelnes Möbelstück?</h3>
      <p>Abhängig von Größe, Etagen, Strecke. Abholung z. B. von IKEA/Poco möglich. <a href="/kontakt">Anfragen</a> lohnt sich immer.</p>
      <h3>Können Sie am selben Tag liefern?</h3>
      <p>Häufig ja – bei frühzeitiger Kontaktaufnahme.</p>

      <p><strong>Kontakt:</strong> 📞 +49 1577 1677034 · 📧 moebeltaxiumzug@gmail.com</p>
    `,
  },
  {
    slug: "moebeltaxi-berlin-wann-lohnt-sich",
    title: "🇩🇪 Möbeltaxi Berlin – Wann lohnt sich der Service wirklich?",
    date: "2024-03-15",
    humanDate: "15.03.2024",
    excerpt:
      "Ideal für kleine bis mittlere Transporte, Ebay-Käufe, Abholungen aus Möbelhäusern – schnell, sicher, günstig.",
    image: "/images/blog/blog-3.jpg",
    keywords: ["Möbeltaxi Berlin", "Mini Umzug", "Möbel liefern lassen"],
    canonical: "/blog/moebeltaxi-berlin-wann-lohnt-sich",
    content: `
      <p>Ein <strong>Möbeltaxi</strong> schließt die Lücke zwischen Lieferdienst und kompletter Umzugscrew. Wenn das Auto zu klein ist oder Sicherheit wichtig ist, ist unser <a href="/leistungen/lieferung">Liefer- & Aufbau-Service</a> perfekt.</p>

      <h2>💡 Typische Anwendungsfälle</h2>
      <ul>
        <li>Ebay Kleinanzeigen-Abholungen</li>
        <li>IKEA/POCO/Höffner-Einkäufe</li>
        <li>Einzelstücke & Mini-Umzüge</li>
      </ul>

      <h2>🛡️ Schutz & Handling</h2>
      <p>Wir sichern mit Decken, Folien, Gurten. Auf Wunsch inklusive Tragehilfe bis in die Wohnung.</p>

      <h2>⏱️ Flexibel & Schnell</h2>
      <p>Kurze Vorlaufzeit, häufig noch am selben Tag. Klare Kommunikation via WhatsApp.</p>

      <h2>❓ FAQ: Möbeltaxi</h2>
      <h3>Lohnt sich das bei kurzen Strecken?</h3>
      <p>Ja, besonders in Berlin. Bordstein-zu-Bordstein ist die günstigste Variante.</p>
      <h3>Montage möglich?</h3>
      <p>Ja, über unseren <a href="/leistungen/montage">Montageservice</a>.</p>

      <p><strong>Kontakt:</strong> 📞 +49 1577 1677034 · 📧 moebeltaxiumzug@gmail.com</p>
    `,
  },
  {
    slug: "entruempelung-berlin-zeit-geld-sparen",
    title: "🇩🇪 Entrümpelung leicht gemacht – So sparen Sie Zeit & Geld in Berlin",
    date: "2024-04-02",
    humanDate: "02.04.2024",
    excerpt:
      "Wohnung, Keller oder Büro entrümpeln – fachgerecht, diskret und effizient. So planen Sie richtig.",
    image: "/images/blog/blog-4.jpg",
    keywords: ["Entrümpelung Berlin", "Sperrmüll", "Haushaltsauflösung"],
    canonical: "/blog/entruempelung-berlin-zeit-geld-sparen",
    content: `
      <p><strong>Entrümpelung in Berlin</strong> ist oft dringlich: Wohnungsübergabe, Keller voll, Büroauflösung. Mit unserem <a href="/leistungen/entruempelung">Entrümpelungsservice</a> sparen Sie Zeit und vermeiden Bußgelder.</p>

      <h2>🧹 Planung & Checkliste</h2>
      <ul>
        <li>Räume priorisieren, wertige Stücke separieren</li>
        <li>Gefahrstoffe/Elektronik kennzeichnen</li>
        <li>Zugang & Parken klären (HVZ bei Bedarf)</li>
      </ul>

      <h2>♻️ Fachgerechte Entsorgung</h2>
      <p>Recycling nach Berliner Vorgaben, Trennung von Holz/Metall/Elektronik. Auf Wunsch Besenreine Übergabe.</p>

      <h2>🔒 Diskretion & Tempo</h2>
      <p>Schnelle Termine, transparente Preise, feste Ansprechpartner.</p>

      <h2>❓ FAQ: Entrümpelung</h2>
      <h3>Wie kalkulieren sich die Kosten?</h3>
      <p>Nach Volumen, Laufwegen, Etagen, Entsorgungsaufwand. Wir erstellen Fixpreise nach Besichtigung oder Fotobewertung.</p>
      <h3>Übernehmen Sie Keller & Dachboden?</h3>
      <p>Ja, inklusive Abtransport und Entsorgung.</p>

      <p><strong>Kontakt:</strong> 📞 +49 1577 1677034 · 📧 moebeltaxiumzug@gmail.com</p>
    `,
  },
  {
    slug: "sperrmuell-berlin-bussgelder-erklaert",
    title: "🇩🇪 Sperrmüll richtig entsorgen – Bußgelder in Berlin erklärt",
    date: "2024-04-18",
    humanDate: "18.04.2024",
    excerpt:
      "Illegales Abstellen ist teuer. So entsorgen Sie Sperrmüll korrekt – schnell und umweltgerecht.",
    image: "/images/blog/blog-5.jpg",
    keywords: ["Sperrmüll Berlin", "Bußgelder", "Entsorgung Berlin"],
    canonical: "/blog/sperrmuell-berlin-bussgelder-erklaert",
    content: `
      <p><strong>Sperrmüll in Berlin</strong> gehört nicht auf den Gehweg. Illegale Entsorgung kann teuer werden. Wir übernehmen Abholung, Sortierung und <a href="/leistungen/entruempelung">fachgerechte Entsorgung</a>.</p>

      <h2>🗑️ Was zählt als Sperrmüll?</h2>
      <p>Möbel, Matratzen, Teppiche, Großgeräte. Elektronik separat!</p>

      <h2>⚠️ Bußgelder vermeiden</h2>
      <p>Falsch abgestellte Gegenstände führen zu empfindlichen Strafen. Besser: Termin vereinbaren, ordnungsgemäß abholen lassen.</p>

      <h2>🚚 Direkte Abholung</h2>
      <p>Wir holen ab Wohnung/Keller ab, tragen und entsorgen – transparent und schnell.</p>

      <h2>❓ FAQ: Sperrmüll</h2>
      <h3>Wie schnell geht eine Abholung?</h3>
      <p>In der Regel innerhalb weniger Tage, häufig schneller bei kleinen Mengen.</p>
      <h3>Kann ich Fotos zur Kalkulation schicken?</h3>
      <p>Ja, per WhatsApp/E-Mail – Sie erhalten ein Angebot.</p>

      <p><strong>Kontakt:</strong> 📞 +49 1577 1677034 · 📧 moebeltaxiumzug@gmail.com</p>
    `,
  },
  {
    slug: "seniorenumzug-berlin-mit-herz",
    title: "🇩🇪 Seniorenumzug in Berlin – Mit Herz und Erfahrung",
    date: "2024-05-10",
    humanDate: "10.05.2024",
    excerpt:
      "Geduldig, rücksichtsvoll & gut organisiert – Seniorenumzüge mit Komplettservice in Berlin.",
    image: "/images/blog/blog-6.jpg",
    keywords: ["Seniorenumzug Berlin", "Umzug Hilfe", "Umzugsservice"],
    canonical: "/blog/seniorenumzug-berlin-mit-herz",
    content: `
      <p><strong>Seniorenumzüge</strong> erfordern Einfühlungsvermögen. Wir kombinieren Planung, Tragehilfe, <a href="/leistungen/montage">Montage</a> und Entsorgung – respektvoll und strukturiert.</p>

      <h2>💛 Einfühlsame Unterstützung</h2>
      <p>Feste Ansprechpersonen, klare Zeitfenster, ruhige Abläufe.</p>

      <h2>🧰 Komplettservice</h2>
      <ul>
        <li>Packen/Entpacken</li>
        <li>Möbelmontage</li>
        <li>Entsorgung alter Möbel</li>
      </ul>

      <h2>🔒 Sicherheit & Vertrauen</h2>
      <p>Versicherte Leistungen, geschulte Teams, Foto-Dokumentation auf Wunsch.</p>

      <h2>❓ FAQ: Seniorenumzug</h2>
      <h3>Planen Sie auch Behördengänge (HVZ)?</h3>
      <p>Ja, wir unterstützen bei Halteverbotszonen und Koordination.</p>

      <p><strong>Kontakt:</strong> 📞 +49 1577 1677034 · 📧 moebeltaxiumzug@gmail.com</p>
    `,
  },
  {
    slug: "moebelmontage-berlin-profis",
    title: "🇩🇪 Möbelmontage in Berlin – Warum Sie Profis beauftragen sollten",
    date: "2024-06-02",
    humanDate: "02.06.2024",
    excerpt:
      "Zeit sparen, Schäden vermeiden: Fachgerechte Montage für Schränke, Betten, Regale & Küchen.",
    image: "/images/blog/blog-7.jpg",
    keywords: ["Möbelmontage Berlin", "Montageservice", "Aufbau Service"],
    canonical: "/blog/moebelmontage-berlin-profis",
    content: `
      <p><strong>Möbelmontage</strong> ist Präzisionsarbeit. Unsere <a href="/leistungen/montage">Montage-Teams</a> arbeiten schnell, sauber und mit geeigneten Werkzeugen – vom Kleiderschrank bis zur komplexen Küchenzeile.</p>

      <h2>🛠️ Vorteile vom Profi</h2>
      <ul>
        <li>Passgenauer Aufbau ohne Beschädigungen</li>
        <li>Stabile Verbindungen, korrekte Ausrichtung</li>
        <li>Zeitersparnis & Garantie</li>
      </ul>

      <h2>🧩 Demontage & Wiederaufbau</h2>
      <p>Beim Umzug alles aus einer Hand – markieren, demontieren, transportieren, wieder aufbauen.</p>

      <h2>❓ FAQ: Montage</h2>
      <h3>Bauen Sie IKEA/POCO/Höffner-Möbel auf?</h3>
      <p>Ja, täglich. Bitte Serien/Modelle nennen.</p>

      <p><strong>Kontakt:</strong> 📞 +49 1577 1677034 · 📧 moebeltaxiumzug@gmail.com</p>
    `,
  },
  {
    slug: "gartenabfaelle-richtig-entsorgen-berlin",
    title: "🇩🇪 Gartenabfälle richtig entsorgen – Ihre Möglichkeiten in Berlin",
    date: "2024-06-20",
    humanDate: "20.06.2024",
    excerpt:
      "Laub, Äste, Grünschnitt – so entsorgen Sie umweltfreundlich und ohne Stress. Auf Wunsch übernehmen wir Transport & Recycling.",
    image: "/images/blog/blog-8.jpg",
    keywords: ["Gartenabfälle Berlin", "Grünschnitt Entsorgung", "BSR Grünabfall"],
    canonical: "/blog/gartenabfaelle-richtig-entsorgen-berlin",
    content: `
      <p>Gartenarbeit macht Spaß – der <strong>Grünschnitt</strong> weniger. Wir helfen bei Transport und Entsorgung, umweltgerecht und zügig.</p>

      <h2>🌱 Richtig trennen</h2>
      <p>Laub, Äste, Wurzeln – getrennt sammeln erleichtert Recycling.</p>

      <h2>🗑️ Offizielle Entsorgung</h2>
      <p>BSR-Sammelstellen, Container oder <a href="/leistungen/garten">Direktabholung</a> durch uns.</p>

      <h2>🧹 Sauberkeit & Zeitersparnis</h2>
      <p>Wir laden, transportieren, entsorgen – und hinterlassen alles sauber.</p>

      <h2>❓ FAQ: Gartenabfälle</h2>
      <h3>Abholung auch aus Kleingärten?</h3>
      <p>Ja, bitte Zugang und Parken vorab klären.</p>

      <p><strong>Kontakt:</strong> 📞 +49 1577 1677034 · 📧 moebeltaxiumzug@gmail.com</p>
    `,
  },
  {
    slug: "nachhaltig-umziehen-umweltfreundlich",
    title: "🇩🇪 Nachhaltig umziehen – So funktioniert ein umweltfreundlicher Umzug",
    date: "2024-07-01",
    humanDate: "01.07.2024",
    excerpt:
      "CO₂-Fußabdruck senken: Mehrwegkartons, gebündelte Transporte, Recycling – effizient und klimafreundlich umziehen.",
    image: "/images/blog/blog-9.jpg",
    keywords: [
      "Nachhaltig umziehen",
      "Umweltfreundlicher Umzug",
      "Umzug Berlin nachhaltig",
    ],
    canonical: "/blog/nachhaltig-umziehen-umweltfreundlich",
    content: `
      <p><strong>Nachhaltiges Umziehen</strong> ist möglich: Weniger Fahrten, Recycling, Mehrwegmaterialien – ohne Abstriche bei Sicherheit und Tempo.</p>

      <h2>♻️ Verpackung & Material</h2>
      <ul>
        <li>Mehrwegkisten statt Einwegkartons</li>
        <li>Recyclingpapier, wiederverwendbare Decken</li>
        <li>Sortenreines Trennen nach dem Umzug</li>
      </ul>

      <h2>🚚 Routen & Bündelung</h2>
      <p>Optimierte Touren, gemeinsames Ausliefern – spart Emissionen und Kosten.</p>

      <h2>🎯 Spenden & Weiterverwendung</h2>
      <p>Möbel spenden statt entsorgen; wir unterstützen bei Transport & Koordination.</p>

      <h2>❓ FAQ: Nachhaltiger Umzug</h2>
      <h3>Wird es dadurch teurer?</h3>
      <p>Nicht zwingend – durch Planung und Bündelung gleichen sich Kosten oft aus.</p>

      <p><strong>Kontakt:</strong> 📞 +49 1577 1677034 · 📧 moebeltaxiumzug@gmail.com</p>
    `,
  },
];

export function getAllPosts() {
  return [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
}
export function getPostBySlug(slug: string) {
  return POSTS.find((p) => p.slug === slug) ?? null;
}