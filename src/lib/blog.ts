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
      "Ein Umzug in Berlin muss nicht stressig sein – mit guter Planung und dem richtigen Partner wird er effizient und entspannt.",
    image: "/images/blog/blog-1.jpg",
    keywords: ["Umzug Berlin", "Umzugstipps", "Checkliste Umzug"],
    canonical: "/blog/umzug-in-berlin-10-tipps",
    content: `
      <p>Ein Umzug in Berlin kann schnell zu einer großen Herausforderung werden: volle Straßen, enge Treppenhäuser, Zeitdruck und unzählige Kisten.
      Doch mit einer guten Planung und dem richtigen Partner an Ihrer Seite wird Ihr Umzug stressfrei und effizient.</p>
      <h2>🧳 1. Frühzeitig planen</h2>
      <p>Mindestens 4 Wochen vorher starten. Checkliste anlegen: Kündigung, Ummeldungen, Dienstleister.</p>
      <h2>📦 2. Vorab entrümpeln</h2>
      <p>Altes aussortieren spart Zeit, Geld und Nerven. Bei Bedarf übernehmen wir die Entrümpelung professionell.</p>
      <h2>📅 3. Umzugshelfer rechtzeitig buchen</h2>
      <p>In Berlin oft ausgebucht – früh anfragen. Bei uns schon ab 40 € in Berlin.</p>
      <h2>🪟 4. Halteverbotszone</h2>
      <p>Rechtzeitig beantragen – auf Wunsch übernehmen wir das.</p>
      <h2>💪 5. Richtig packen</h2>
      <p>Stabile Kartons, klar beschriften, schweres nach unten.</p>
      <h2>🛋️ 6. Möbel schützen</h2>
      <p>Decken, Folien und Gurte – unsere Teams arbeiten mit Sorgfalt.</p>
      <h2>🧰 7. Möbelmontage vom Profi</h2>
      <p>Auf- und Abbau sauber, schnell und fachgerecht.</p>
      <h2>⏰ 8. Zeitpuffer</h2>
      <p>Ein Umzug dauert meist länger als gedacht – Puffer einplanen.</p>
      <h2>🧼 9. Reinigung & Übergabe</h2>
      <p>Besenrein übergeben; Entsorgung & Sperrmüll übernehmen wir gern.</p>
      <h2>🏡 10. Entspannt ankommen</h2>
      <p>Mit <strong>Möbel Taxi & Umzug Berlin</strong> wird’s stressfrei – zuverlässig, freundlich, termintreu.</p>
      <p><strong>Kontakt:</strong><br/>
      📞 +49 1577 1677034 · 📧 moebeltaxiumzug@gmail.com · 📸 @mobeltaxiumzug</p>
    `,
  },
  {
    slug: "moebeltransport-berlin-anbieter-finden",
    title: "🇩🇪 Möbeltransport Berlin – So finden Sie den richtigen Anbieter",
    date: "2024-02-12",
    humanDate: "12.02.2024",
    excerpt:
      "Worauf kommt es beim Möbeltransport an? Erfahrung, Schutz, transparente Preise und flexible Termine.",
    image: "/images/blog/blog-2.jpg",
    keywords: ["Möbeltransport Berlin", "Transportservice", "Umzugsfirma"],
    canonical: "/blog/moebeltransport-berlin-anbieter-finden",
    content: `
      <p>Ein Möbeltransport in Berlin kann herausfordernd sein – mit schweren oder empfindlichen Stücken erst recht. Darauf sollten Sie achten:</p>
      <h2>🚚 1. Erfahrung & Professionalität</h2>
      <p>Jahrelange Erfahrung, geschultes Personal – so bleibt alles heil.</p>
      <h2>🏙️ 2. Ortskenntnis</h2>
      <p>Ein lokaler Anbieter kennt enge Straßen, Einbahnstraßen und Parkzonen.</p>
      <h2>💶 3. Transparente Preise</h2>
      <p>Klar, fair, ohne versteckte Kosten – bei uns ab 40 € in Berlin.</p>
      <h2>🛋️ 4. Schutz der Möbel</h2>
      <p>Decken, Folie, Gurte – Schutz ist Standard.</p>
      <h2>📦 5. Umfangreicher Service</h2>
      <ul>
        <li>Ab-/Aufbau Ihrer Möbel</li>
        <li>Lieferung neuer Möbel (IKEA, Poco, Roller)</li>
        <li>Hilfe beim Ein- und Auspacken</li>
      </ul>
      <h2>📅 6. Flexible Termine</h2>
      <p>Auch abends oder am Wochenende – wir richten uns nach Ihnen.</p>
      <p><strong>Fazit:</strong> Mit <strong>Möbel Taxi & Umzug Berlin</strong> kommt Ihr Transport sicher und stressfrei an.</p>
      <p><strong>Kontakt:</strong> 📞 +49 1577 1677034 · 📧 moebeltaxiumzug@gmail.com · 📸 @mobeltaxiumzug</p>
    `,
  },
  {
    slug: "moebeltaxi-berlin-wann-lohnt-sich",
    title: "🇩🇪 Möbeltaxi Berlin – Wann lohnt sich der Service wirklich?",
    date: "2024-03-15",
    humanDate: "15.03.2024",
    excerpt:
      "Perfekt für kleine bis mittlere Transporte, wenn das Auto zu klein ist oder Sicherheit wichtig ist.",
    image: "/images/blog/blog-3.jpg",
    keywords: ["Möbeltaxi Berlin", "Mini Umzug", "Möbel liefern lassen"],
    canonical: "/blog/moebeltaxi-berlin-wann-lohnt-sich",
    content: `
      <p>Unser Team transportiert Möbel professionell und sicher. Polster, Decken und Gurte schützen Ihre Einrichtung vor Kratzern.</p>
      <h2>📦 Zusatzleistungen</h2>
      <ul>
        <li>Ab-/Aufbau Ihrer Möbel</li>
        <li>Lieferung direkt aus dem Möbelhaus</li>
        <li>Tragehilfe und Einpackservice</li>
      </ul>
      <h2>💡 Wann lohnt sich ein Möbeltaxi?</h2>
      <ul>
        <li>Einzelne Stücke schnell transportieren</li>
        <li>Auto zu klein</li>
        <li>Empfindliche Möbel sicher befördern</li>
      </ul>
      <p><strong>Fazit:</strong> Ideal für kleine bis mittlere Transporte – <strong>Möbel Taxi & Umzug</strong> spart Zeit, vermeidet Stress und schützt.</p>
      <p>📞 +49 1577 1677034 · 📧 moebeltaxiumzug@gmail.com · 📸 @mobeltaxiumzug</p>
    `,
  },
  {
    slug: "entruempelung-berlin-zeit-geld-sparen",
    title: "🇩🇪 Entrümpelung leicht gemacht – So sparen Sie Zeit & Geld in Berlin",
    date: "2024-04-02",
    humanDate: "02.04.2024",
    excerpt:
      "Schnell, effizient und umweltgerecht entrümpeln – für Wohnung, Keller oder Büro.",
    image: "/images/blog/blog-4.jpg",
    keywords: ["Entrümpelung Berlin", "Sperrmüll", "Haushaltsauflösung"],
    canonical: "/blog/entruempelung-berlin-zeit-geld-sparen",
    content: `
      <p>Entrümpelungen können Zeit kosten. Wir machen’s effizient und umweltgerecht.</p>
      <h2>🧹 1. Frühzeitig planen</h2>
      <p>Liste erstellen und Ablauf strukturieren.</p>
      <h2>📦 2. Professionelle Hilfe</h2>
      <p>Tragen, Entsorgung, Transport – alles aus einer Hand.</p>
      <h2>🌱 3. Umweltgerecht entsorgen</h2>
      <p>Fachgerecht nach Berliner Vorschriften.</p>
      <h2>💰 4. Kosten sparen</h2>
      <p>Gute Planung vermeidet doppelte Fahrten und Schäden.</p>
      <h2>🏠 5. Für jede Situation</h2>
      <ul>
        <li>Wohnung</li>
        <li>Keller & Dachboden</li>
        <li>Büro & Gewerbe</li>
      </ul>
      <p><strong>Fazit:</strong> Mit <strong>Möbel Taxi & Umzug Berlin</strong> wird’s schnell, effizient und günstig.</p>
      <p>📞 +49 1577 1677034 · 📧 moebeltaxiumzug@gmail.com · 📸 @mobeltaxiumzug</p>
    `,
  },
  {
    slug: "sperrmuell-berlin-bussgelder-erklaert",
    title: "🇩🇪 Sperrmüll richtig entsorgen – Bußgelder in Berlin erklärt",
    date: "2024-04-18",
    humanDate: "18.04.2024",
    excerpt:
      "Illegaler Sperrmüll kann teuer werden. So entsorgen Sie korrekt – und sparen Bußgelder.",
    image: "/images/blog/blog-5.jpg",
    keywords: ["Sperrmüll Berlin", "Bußgelder", "Entsorgung Berlin"],
    canonical: "/blog/sperrmuell-berlin-bussgelder-erklaert",
    content: `
      <p>Sperrmüll einfach abstellen? In Berlin riskant und teuer.</p>
      <h2>🗑️ 1. Anmeldung</h2>
      <p>BSR-Anmeldung oder Abholung direkt über uns.</p>
      <h2>⚠️ 2. Bußgelder vermeiden</h2>
      <p>Illegale Entsorgung kann mehrere hundert Euro kosten.</p>
      <h2>♻️ 3. Umweltgerecht</h2>
      <p>Fachgerechtes Recycling und Entsorgung.</p>
      <h2>💪 4. Vorteile vom Dienstleister</h2>
      <ul>
        <li>Zeitersparnis</li>
        <li>Keine Schlepperei</li>
        <li>Entsorgung von Möbeln & Elektrogeräten</li>
      </ul>
      <p><strong>Fazit:</strong> Mit uns sparen Sie Zeit, vermeiden Bußgelder und handeln umweltbewusst.</p>
      <p>📞 +49 1577 1677034 · 📧 moebeltaxiumzug@gmail.com · 📸 @mobeltaxiumzug</p>
    `,
  },
  {
    slug: "seniorenumzug-berlin-mit-herz",
    title: "🇩🇪 Seniorenumzug in Berlin – Mit Herz und Erfahrung",
    date: "2024-05-10",
    humanDate: "10.05.2024",
    excerpt:
      "Einfühlsamer Umzug für Ältere – mit Planung, Tragehilfe und Komplettservice.",
    image: "/images/blog/blog-6.jpg",
    keywords: ["Seniorenumzug Berlin", "Umzug Hilfe", "Umzugsservice"],
    canonical: "/blog/seniorenumzug-berlin-mit-herz",
    content: `
      <p>Ein Umzug im Alter ist besonders – wir unterstützen mit Geduld und Organisation.</p>
      <h2>💛 1. Einfühlsame Unterstützung</h2>
      <p>Respektvoll, geduldig, zuverlässig.</p>
      <h2>🏠 2. Planung & Organisation</h2>
      <p>Schritt für Schritt stressfrei.</p>
      <h2>🧰 3. Komplettservice</h2>
      <ul>
        <li>Möbeltransport & Montage</li>
        <li>Ein-/Auspacken</li>
        <li>Entsorgung alter Möbel</li>
      </ul>
      <h2>💡 4. Sicherheit & Vertrauen</h2>
      <p>Geschulte, vertrauenswürdige Mitarbeiter.</p>
      <p><strong>Fazit:</strong> Seniorenumzug sicher und angenehm – mit Möbel Taxi & Umzug Berlin.</p>
      <p>📞 +49 1577 1677034 · 📧 moebeltaxiumzug@gmail.com · 📸 @mobeltaxiumzug</p>
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
      <p>Montage kostet Zeit und Nerven – Profis sparen beides.</p>
      <h2>🛠️ 1. Zeitersparnis</h2>
      <p>Routiniert und effizient.</p>
      <h2>🪑 2. Fachgerechter Aufbau</h2>
      <p>Schränke, Betten, Regale, Küchen – korrekt und stabil.</p>
      <h2>📦 3. Demontage & Wiederaufbau</h2>
      <p>Beim Umzug alles aus einer Hand.</p>
      <h2>💡 4. Sicherheit & Schutz</h2>
      <p>Eigenes Werkzeug, Schutzmaterialien – Schäden vermeiden.</p>
      <p><strong>Fazit:</strong> Professionelle Montage spart Zeit, schützt Möbel und Nerven.</p>
      <p>📞 +49 1577 1677034 · 📧 moebeltaxiumzug@gmail.com · 📸 @mobeltaxiumzug</p>
    `,
  },
  {
    slug: "gartenabfaelle-richtig-entsorgen-berlin",
    title: "🇩🇪 Gartenabfälle richtig entsorgen – Ihre Möglichkeiten in Berlin",
    date: "2024-06-20",
    humanDate: "20.06.2024",
    excerpt:
      "Laub, Äste, Grünschnitt – so entsorgen Sie umweltfreundlich und stressfrei.",
    image: "/images/blog/blog-8.jpg",
    keywords: ["Gartenabfälle Berlin", "Grünschnitt Entsorgung", "BSR Grünabfall"],
    canonical: "/blog/gartenabfaelle-richtig-entsorgen-berlin",
    content: `
      <p>Gartenpflege macht Freude – doch wohin mit dem Grünschnitt?</p>
      <h2>🌱 1. Richtig trennen</h2>
      <p>Äste, Laub, Rasenschnitt trennen erleichtert Recycling.</p>
      <h2>🗑️ 2. Offizielle Entsorgung</h2>
      <p>BSR-Sammelstellen nutzen – oder Direktabholung durch uns.</p>
      <h2>💪 3. Profi-Hilfe spart Zeit</h2>
      <p>Transport, Entsorgung, Reinigung – effizient erledigt.</p>
      <p><strong>Fazit:</strong> Mit uns entsorgen Sie umweltfreundlich und stressfrei.</p>
      <p>📞 +49 1577 1677034 · 📧 moebeltaxiumzug@gmail.com · 📸 @mobeltaxiumzug</p>
    `,
  },
  {
    slug: "nachhaltig-umziehen-umweltfreundlich",
    title: "🇩🇪 Nachhaltig umziehen – So funktioniert ein umweltfreundlicher Umzug",
    date: "2024-07-01",
    humanDate: "01.07.2024",
    excerpt:
      "CO₂-Fußabdruck reduzieren: Mehrwegkartons, gebündelte Transporte, Recycling.",
    image: "/images/blog/blog-9.jpg",
    keywords: ["Nachhaltig umziehen", "Umweltfreundlicher Umzug", "Recycling"],
    canonical: "/blog/nachhaltig-umziehen-umweltfreundlich",
    content: `
      <p>Ein Umzug kann nachhaltig sein – mit den richtigen Entscheidungen.</p>
      <h2>🌱 1. Wiederverwendbare Verpackungen</h2>
      <p>Kartons mehrfach nutzen oder Mehrwegbehälter.</p>
      <h2>🚚 2. Routen optimieren</h2>
      <p>Profi-Unternehmen reduziert Fahrten und Emissionen.</p>
      <h2>♻️ 3. Nachhaltige Entsorgung</h2>
      <p>Möbel spenden, Verpackungen recyceln.</p>
      <h2>💡 4. Energie sparen</h2>
      <p>Transporte bündeln – Kosten & Emissionen runter.</p>
      <p><strong>Fazit:</strong> Mit <strong>Möbel Taxi & Umzug Berlin</strong> kombinieren Sie Effizienz und Umweltschutz.</p>
      <p>📞 +49 1577 1677034 · 📧 moebeltaxiumzug@gmail.com · 📸 @mobeltaxiumzug</p>
    `,
  },
];

export function getAllPosts() {
  // tarih yeni → eski
  return [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
}
export function getPostBySlug(slug: string) {
  return POSTS.find((p) => p.slug === slug) ?? null;
}