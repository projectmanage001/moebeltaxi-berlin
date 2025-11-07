// src/lib/blog.ts
export type Post = {
  slug: string;
  title: string;
  date: string;       // ISO yyyy-mm-dd
  humanDate: string;  // "29.01.2024" gibi
  excerpt: string;
  image: string;
  keywords: string[];
  canonical: string;
  content: string;    // Güvenli HTML
};

export const POSTS: Post[] = [
  // 1) UMZUG
  {
    slug: "umzug-in-berlin-10-tipps",
    title: "🇩🇪 Umzug in Berlin – 10 Tipps für einen stressfreien Umzug",
    date: "2024-01-29",
    humanDate: "29.01.2024",
    excerpt:
      "Ein Umzug in Berlin muss nicht stressig sein – mit guter Planung, Checklisten und dem richtigen Partner bleibt alles planbar.",
    image: "/images/blog/blog-1.jpg",
    keywords: [
      "Umzug Berlin",
      "Umzugsservice Berlin",
      "Umzug günstig Berlin",
      "Umzug Checkliste",
      "Halteverbotszone Berlin",
      "Möbel Taxi & Umzug Berlin",
    ],
    canonical: "/blog/umzug-in-berlin-10-tipps",
    content: `
      <p>Ein <strong>Umzug in Berlin</strong> kann schnell zu einer großen Herausforderung werden: volle Straßen, enge Treppenhäuser, Zeitdruck und unzählige Kisten. 
      Doch mit einer guten Planung und dem richtigen Partner an Ihrer Seite wird Ihr Umzug stressfrei und effizient. 
      <strong>Möbel Taxi &amp; Umzug Berlin</strong> hat für Sie die besten Tipps zusammengestellt, damit alles reibungslos läuft.</p>

      <h2>🧳 1. Frühzeitig planen</h2>
      <p>Beginnen Sie mindestens 4–6 Wochen vor Ihrem Umzug mit der Planung. Erstellen Sie eine Checkliste, damit Sie nichts vergessen – von der Kündigung des alten Mietvertrags bis zum Ummelden beim Einwohnermeldeamt.</p>

      <h2>📦 2. Entrümpeln Sie vor dem Umzug</h2>
      <p>Nutzen Sie die Gelegenheit, alte oder ungenutzte Gegenstände auszusortieren. Das spart Platz, Zeit und Geld. 
      Unser Team unterstützt Sie gerne mit einer professionellen <a href="/leistungen/entruempelung">Entrümpelung</a> in Berlin.</p>

      <h2>📅 3. Rechtzeitig Umzugshelfer buchen</h2>
      <p>Gerade in Berlin sind gute Umzugsunternehmen oft ausgebucht. Buchen Sie Ihren <a href="/leistungen/umzug">Umzug</a> daher frühzeitig – bei uns planbar, versichert und transparent.</p>

      <h2>🪧 4. Parkverbotszone (HVZ) beantragen</h2>
      <p>Damit der Umzugswagen direkt vor Ihrer Tür halten kann, beantragen Sie rechtzeitig eine Halteverbotszone. Auf Wunsch übernehmen wir das für Sie.</p>

      <h2>💪 5. Richtig packen</h2>
      <ul>
        <li>Stabile Kartons verwenden und deutlich beschriften (Zimmer + Inhalt)</li>
        <li>Schwere Gegenstände wie Bücher nach unten, leichte nach oben</li>
        <li>Elektronik und Glas separat polstern</li>
      </ul>

      <h2>🛋️ 6. Möbel sicher transportieren</h2>
      <p>Schützen Sie empfindliche Möbel mit Decken und Folie. Unsere erfahrenen Mitarbeiter transportieren Ihre Möbel mit größter Sorgfalt – schnell, sicher und zuverlässig.</p>

      <h2>🧰 7. Möbelmontage vom Profi</h2>
      <p>Nach dem Transport übernehmen wir gerne den Auf- und Abbau Ihrer Möbel – sauber, schnell und fachgerecht. 
      Mehr dazu unter <a href="/leistungen/montage">Möbelmontage</a>.</p>

      <h2>⏰ 8. Zeitpuffer einplanen</h2>
      <p>Ein Umzug dauert oft länger als gedacht. Planen Sie daher ausreichend Zeit ein und vermeiden Sie unnötigen Stress.</p>

      <h2>🧼 9. Reinigung & Übergabe</h2>
      <p>Nach dem Auszug sollte Ihre alte Wohnung besenrein übergeben werden. Wir helfen Ihnen auf Wunsch auch bei der Entsorgung alter Möbel oder Sperrmüll.</p>

      <h2>🏡 10. Entspannt ankommen</h2>
      <p>Mit einem zuverlässigen Umzugsservice wie <strong>Möbel Taxi &amp; Umzug Berlin</strong> können Sie sich entspannt zurücklehnen. Wir kümmern uns um den Rest – professionell, freundlich und termintreu.</p>

      <h2>❓ FAQ: Umzug in Berlin</h2>
      <h3>Wie viel kostet ein Umzug in Berlin?</h3>
      <p>Das hängt von Volumen, Strecke, Etagen und Zusatzleistungen ab. Holen Sie ein <a href="/kontakt">kostenloses Angebot</a>.</p>
      <h3>Bieten Sie Tragehelfer an?</h3>
      <p>Ja, mit oder ohne Bordsteinservice – Sie entscheiden.</p>
      <h3>Können Sie am Wochenende umziehen?</h3>
      <p>Ja, nach Absprache – auch Abendslots sind möglich.</p>

      <h2>📞 Kontakt & Angebot</h2>
      <p>Telefon &amp; WhatsApp: <a href="https://wa.me/4915771677034" target="_blank" rel="noopener">+49 1577 1677034</a><br />
      E-Mail: <a href="mailto:moebeltaxiumzug@gmail.com">moebeltaxiumzug@gmail.com</a><br />
      Instagram: <a href="https://www.instagram.com/mobeltaxiumzug/" target="_blank" rel="noopener">@mobeltaxiumzug</a></p>
    `,
  },

  // 2) MÖBELTRANSPORT
  {
    slug: "moebeltransport-berlin-anbieter-finden",
    title: "🇩🇪 Möbeltransport Berlin – So finden Sie den richtigen Anbieter",
    date: "2024-02-12",
    humanDate: "12.02.2024",
    excerpt:
      "Worauf kommt es beim Möbeltransport an? Erfahrung, Schutz, Versicherung, transparente Preise und flexible Termine.",
    image: "/images/blog/blog-2.jpg",
    keywords: [
      "Möbeltransport Berlin",
      "Möbeltransport ab 40€",
      "Möbeltransport Anbieter",
      "Transportservice Berlin",
      "Möbel sicher transportieren",
      "Möbel Taxi Berlin",
    ],
    canonical: "/blog/moebeltransport-berlin-anbieter-finden",
    content: `
      <p>Ein <strong>Möbeltransport in Berlin</strong> kann eine große Herausforderung sein – besonders bei schweren Möbeln oder empfindlichen Gegenständen. 
      Die Wahl des richtigen Anbieters ist entscheidend, um Ihre Möbel sicher, schnell und zuverlässig zu transportieren. 
      <strong>Möbel Taxi &amp; Umzug Berlin</strong> erklärt, worauf Sie achten sollten.</p>

      <h2>🚚 1. Erfahrung & Professionalität</h2>
      <p>Achten Sie auf jahrelange Erfahrung und geschulte Teams. Professionelle Mitarbeiter garantieren, dass Ihre Möbel unbeschädigt ans Ziel gelangen. 
      Unser <a href="/leistungen/moebeltransport">Möbeltransport</a> deckt Einzelstücke, Sets und Mini-Umzüge ab.</p>

      <h2>🏙️ 2. Ortskenntnis in Berlin</h2>
      <p>Berlin hat enge Straßen, Einbahnstraßen und vollen Parkraum. Lokale Ortskenntnis spart Zeit und Nerven.</p>

      <h2>💶 3. Transparente Preise</h2>
      <p>Seriöse Anbieter nennen klare Preise ohne versteckte Kosten. Für kleine Transporte starten wir bereits <em>ab 40 €</em> (abhängig von Strecke, Etagen, Aufwand).</p>

      <h2>🛋️ 4. Schutz Ihrer Möbel</h2>
      <p>Decken, Folien und Gurte sind Pflicht. Zudem ist transparenter Versicherungsschutz wichtig – Fragen Sie nach!</p>

      <h2>📦 5. Umfangreicher Service</h2>
      <ul>
        <li>Ab-/Aufbau Ihrer Möbel (<a href="/leistungen/montage">Montage</a>)</li>
        <li>Lieferung neuer Möbel (IKEA, Poco, Höffner)</li>
        <li>Unterstützung beim Einpacken und Auspacken</li>
      </ul>

      <h2>📅 6. Flexible Terminplanung</h2>
      <p>Auch abends oder am Wochenende – wir richten uns nach Ihnen. Häufig sind kurzfristige Termine möglich.</p>

      <h2>❓ FAQ: Möbeltransport</h2>
      <h3>Was kostet ein einzelnes Möbelstück?</h3>
      <p>Abhängig von Größe, Etagen und Strecke. <a href="/kontakt">Anfragen</a> lohnt sich immer.</p>
      <h3>Können Sie am selben Tag liefern?</h3>
      <p>Oft ja – je nach Auslastung.</p>

      <h2>📞 Kontakt & Angebot</h2>
      <p>Telefon &amp; WhatsApp: <a href="https://wa.me/4915771677034" target="_blank" rel="noopener">+49 1577 1677034</a> · 
      E-Mail: <a href="mailto:moebeltaxiumzug@gmail.com">moebeltaxiumzug@gmail.com</a></p>
    `,
  },

  // 3) MÖBELTAXI
  {
    slug: "moebeltaxi-berlin-wann-lohnt-sich",
    title: "🇩🇪 Möbeltaxi Berlin – Wann lohnt sich der Service wirklich?",
    date: "2024-03-15",
    humanDate: "15.03.2024",
    excerpt:
      "Perfekt für kleine bis mittlere Transporte, Ebay-Käufe und Lieferungen aus Möbelhäusern – schnell, sicher, flexibel.",
    image: "/images/blog/blog-3.jpg",
    keywords: [
      "Möbeltaxi Berlin",
      "Möbeltransport Berlin günstig",
      "Mini Umzug",
      "Möbel liefern lassen",
      "Lieferung IKEA Berlin",
    ],
    canonical: "/blog/moebeltaxi-berlin-wann-lohnt-sich",
    content: `
      <p>Der Transport von Möbeln kann in Berlin schnell kompliziert werden – enge Straßen, Parkplatzprobleme, schwere Einzelstücke. 
      Ein <strong>Möbeltaxi</strong> ist die ideale Lösung, um Möbel sicher, schnell und unkompliziert zu transportieren.</p>

      <h2>🚚 1. Kleine Transporte & Einzelmöbel</h2>
      <p>Für einzelne Stücke von IKEA, Poco oder Höffner ist ein Möbeltaxi oft die günstigste und schnellste Lösung. 
      Unser Service beginnt häufig <em>ab 40 €</em> (abhängig von Strecke & Aufwand).</p>

      <h2>🏢 2. Flexible Lieferung</h2>
      <p>Kurzfristig, abends oder am Wochenende – wir finden Termine, die zu Ihnen passen.</p>

      <h2>🛋️ 3. Schutz der Möbel</h2>
      <p>Polsterungen, Decken und Gurte schützen Ihre Einrichtung. Tragehilfe bis in die Wohnung ist möglich.</p>

      <h2>📦 4. Zusatzleistungen</h2>
      <ul>
        <li>Ab- und Aufbau (<a href="/leistungen/montage">Möbelmontage</a>)</li>
        <li>Direktlieferung aus dem Möbelhaus</li>
        <li>Unterstützung beim Tragen und Einpacken</li>
      </ul>

      <h2>💡 5. Wann lohnt sich ein Möbeltaxi?</h2>
      <ul>
        <li>Einzelne Möbel schnell nach Hause bringen</li>
        <li>Auto zu klein / keine Transportmöglichkeit</li>
        <li>Professionelle Sicherheit für empfindliche Stücke</li>
      </ul>

      <h2>❓ FAQ: Möbeltaxi</h2>
      <h3>Ist Bordstein-zu-Bordstein am günstigsten?</h3>
      <p>Ja, wenn keine Tragehilfe benötigt wird.</p>
      <h3>Können Sie auch montieren?</h3>
      <p>Ja – siehe <a href="/leistungen/montage">Montage-Service</a>.</p>

      <h2>📞 Kontakt & Angebot</h2>
      <p>Telefon &amp; WhatsApp: <a href="https://wa.me/4915771677034" target="_blank" rel="noopener">+49 1577 1677034</a> · 
      E-Mail: <a href="mailto:moebeltaxiumzug@gmail.com">moebeltaxiumzug@gmail.com</a></p>
    `,
  },

  // 4) ENTRÜMPELUNG
  {
    slug: "entruempelung-berlin-zeit-geld-sparen",
    title: "🇩🇪 Entrümpelung leicht gemacht – So sparen Sie Zeit & Geld in Berlin",
    date: "2024-04-02",
    humanDate: "02.04.2024",
    excerpt:
      "Wohnung, Keller oder Büro entrümpeln – fachgerecht, diskret und effizient. So planen Sie richtig und vermeiden Bußgelder.",
    image: "/images/blog/blog-4.jpg",
    keywords: [
      "Entrümpelung Berlin",
      "Haushaltsauflösung Berlin",
      "Sperrmüll entsorgen Berlin",
      "Entrümpelungsservice Berlin",
    ],
    canonical: "/blog/entruempelung-berlin-zeit-geld-sparen",
    content: `
      <p><strong>Entrümpelungen in Berlin</strong> können zeitaufwendig und stressig sein – besonders bei vielen alten Möbeln, Kartons oder Sperrmüll. 
      <strong>Möbel Taxi &amp; Umzug Berlin</strong> hilft Ihnen, Ihre Räume schnell, effizient und umweltgerecht zu entrümpeln.</p>

      <h2>🧹 1. Frühzeitig planen</h2>
      <p>Liste erstellen, Gegenstände klassifizieren (behalten/verkaufen/entsorgen). Zugänge, Laufwege und Parken prüfen – HVZ bei Bedarf einplanen.</p>

      <h2>📦 2. Professionelle Hilfe nutzen</h2>
      <p>Selbst entrümpeln ist anstrengend. Unser Team übernimmt Tragen, Transport und <a href="/leistungen/entruempelung">fachgerechte Entsorgung</a>.</p>

      <h2>🌱 3. Umweltgerechte Entsorgung</h2>
      <p>Recycling nach Berliner Vorschriften (Holz/Metall/Elektronik getrennt). Auf Wunsch besenreine Übergabe.</p>

      <h2>💰 4. Kosten sparen</h2>
      <p>Gezielte Planung, Fotobewertung und Fixpreise vermeiden Überraschungen. Doppel-Fahrten und Schäden werden minimiert.</p>

      <h2>🏠 5. Für jede Situation</h2>
      <ul>
        <li>Wohnungsentrümpelung</li>
        <li>Keller &amp; Dachboden</li>
        <li>Büro &amp; Gewerbe</li>
        <li>Nach Renovierung oder Umzug</li>
      </ul>

      <h2>❓ FAQ: Entrümpelung</h2>
      <h3>Wie kalkulieren sich die Kosten?</h3>
      <p>Nach Volumen, Etagen, Laufwegen und Entsorgungsaufwand. Wir erstellen Fixpreise nach Besichtigung oder Fotos.</p>
      <h3>Übernehmen Sie auch Kleinteile?</h3>
      <p>Ja – inklusive Sortierung und Recycling.</p>

      <h2>📞 Kontakt & Angebot</h2>
      <p>Telefon &amp; WhatsApp: <a href="https://wa.me/4915771677034" target="_blank" rel="noopener">+49 1577 1677034</a> · 
      E-Mail: <a href="mailto:moebeltaxiumzug@gmail.com">moebeltaxiumzug@gmail.com</a></p>
    `,
  },

  // 5) SPERRMÜLL
  {
    slug: "sperrmuell-berlin-bussgelder-erklaert",
    title: "🇩🇪 Sperrmüll richtig entsorgen – Bußgelder in Berlin erklärt",
    date: "2024-04-18",
    humanDate: "18.04.2024",
    excerpt:
      "Illegaler Sperrmüll ist teuer. So entsorgen Sie korrekt – schnell, legal und umweltgerecht in Berlin.",
    image: "/images/blog/blog-5.jpg",
    keywords: [
      "Sperrmüll Berlin",
      "Sperrmüll entsorgen Berlin",
      "BSR Berlin",
      "Sperrmüll Abholung Berlin",
      "Bußgelder Sperrmüll",
    ],
    canonical: "/blog/sperrmuell-berlin-bussgelder-erklaert",
    content: `
      <p>In Berlin einfach Sperrmüll auf die Straße zu stellen, kann teuer werden. Das Ordnungsamt kontrolliert regelmäßig; falsch entsorgter Sperrmüll führt zu Bußgeldern. 
      <strong>Möbel Taxi &amp; Umzug Berlin</strong> zeigt, wie Sie Sperrmüll korrekt und stressfrei entsorgen.</p>

      <h2>🗑️ 1. Sperrmüll anmelden</h2>
      <p>BSR-Termin vereinbaren oder die Abholung direkt über uns organisieren – inklusive Tragen ab Wohnung oder Keller.</p>

      <h2>⚠️ 2. Bußgelder vermeiden</h2>
      <p>Illegale Entsorgung kann mehrere hundert Euro kosten. Mit professioneller Abholung sind Sie rechtlich auf der sicheren Seite.</p>

      <h2>♻️ 3. Umweltgerechte Entsorgung</h2>
      <p>Wir trennen verwertbare Materialien und recyceln fachgerecht. Elektrogeräte werden separat behandelt.</p>

      <h2>💪 4. Vorteile eines Dienstleisters</h2>
      <ul>
        <li>Zeitersparnis – kein Schleppen, kein Warten</li>
        <li>Saubere Übergabe – auch besenrein möglich</li>
        <li>Flexible Termine – auf Wunsch kurzfristig</li>
      </ul>

      <h2>❓ FAQ: Sperrmüll</h2>
      <h3>Wie schnell geht die Abholung?</h3>
      <p>Meist innerhalb weniger Tage – kleine Mengen oft schneller.</p>
      <h3>Können Sie vorab per Foto kalkulieren?</h3>
      <p>Ja – per WhatsApp oder E-Mail, wir schicken ein Angebot.</p>

      <h2>📞 Kontakt & Angebot</h2>
      <p>Telefon &amp; WhatsApp: <a href="https://wa.me/4915771677034" target="_blank" rel="noopener">+49 1577 1677034</a> · 
      E-Mail: <a href="mailto:moebeltaxiumzug@gmail.com">moebeltaxiumzug@gmail.com</a></p>
    `,
  },

  // 6) SENIORENUMZUG
  {
    slug: "seniorenumzug-berlin-mit-herz",
    title: "🇩🇪 Seniorenumzug in Berlin – Mit Herz und Erfahrung",
    date: "2024-05-10",
    humanDate: "10.05.2024",
    excerpt:
      "Einfühlsamer Umzug für Ältere – mit Planung, Tragehilfe, Montage und kompletter Organisation.",
    image: "/images/blog/blog-6.jpg",
    keywords: [
      "Seniorenumzug Berlin",
      "Umzugshilfe Senioren",
      "Senioren Umzug Berlin",
      "Einfühlsamer Umzug",
    ],
    canonical: "/blog/seniorenumzug-berlin-mit-herz",
    content: `
      <p>Ein Umzug im Alter ist eine besondere Herausforderung. Ältere Menschen benötigen oft mehr Zeit, Unterstützung und Sorgfalt. 
      <strong>Möbel Taxi &amp; Umzug Berlin</strong> bietet einen einfühlsamen, professionellen <a href="/leistungen/senior-umzug">Seniorenumzug</a> – sicher, organisiert und respektvoll.</p>

      <h2>💛 1. Einfühlsame Unterstützung</h2>
      <p>Unser Team geht geduldig vor, hilft beim Packen/Tragen und achtet auf verständliche Abläufe.</p>

      <h2>🏠 2. Planung & Organisation</h2>
      <p>Schritt für Schritt: alter Wohnort, Transport, neue Wohnung – alles mit klaren Zeitfenstern.</p>

      <h2>🧰 3. Komplettservice</h2>
      <ul>
        <li>Möbeltransport &amp; <a href="/leistungen/montage">Montage</a></li>
        <li>Ein- &amp; Auspacken</li>
        <li>Entsorgung alter Möbel &amp; Sperrmüll</li>
        <li>Unterstützung bei der Einrichtung</li>
      </ul>

      <h2>🔒 4. Sicherheit & Vertrauen</h2>
      <p>Versicherte Leistungen, geschulte Mitarbeiter, transparente Kommunikation – für Senioren und Angehörige.</p>

      <h2>❓ FAQ: Seniorenumzug</h2>
      <h3>Unterstützen Sie bei Halteverbotszonen?</h3>
      <p>Ja – inkl. Beantragung und Beschilderung.</p>
      <h3>Können Angehörige einbezogen werden?</h3>
      <p>Selbstverständlich – wir koordinieren gemeinsam.</p>

      <h2>📞 Kontakt & Angebot</h2>
      <p>Telefon &amp; WhatsApp: <a href="https://wa.me/4915771677034" target="_blank" rel="noopener">+49 1577 1677034</a> · 
      E-Mail: <a href="mailto:moebeltaxiumzug@gmail.com">moebeltaxiumzug@gmail.com</a></p>
    `,
  },

  // 7) MÖBELMONTAGE
  {
    slug: "moebelmontage-berlin-profis",
    title: "🇩🇪 Möbelmontage in Berlin – Warum Sie Profis beauftragen sollten",
    date: "2024-06-02",
    humanDate: "02.06.2024",
    excerpt:
      "Zeit sparen, Schäden vermeiden: Fachgerechte Montage für Schränke, Betten, Regale & Küchen.",
    image: "/images/blog/blog-7.jpg",
    keywords: [
      "Möbelmontage Berlin",
      "Möbelaufbau Berlin",
      "IKEA Montage Berlin",
      "Montageservice Berlin",
      "Küchenmontage Berlin",
    ],
    canonical: "/blog/moebelmontage-berlin-profis",
    content: `
      <p>Die <strong>Möbelmontage</strong> kann zeitaufwendig und kompliziert sein – vor allem bei großen oder komplexen Möbelstücken. 
      Mit <strong>Möbel Taxi &amp; Umzug Berlin</strong> sind Ihre Möbel schnell, fachgerecht und ohne Schäden aufgebaut. 
      Mehr zu unseren Leistungen: <a href="/leistungen/montage">Montage-Service</a>.</p>

      <h2>🛠️ 1. Zeitersparnis</h2>
      <p>Routiniertes Arbeiten, passende Werkzeuge, klare Abfolge – Sie sparen Stunden.</p>

      <h2>🪑 2. Fachgerechter Aufbau</h2>
      <p>Schränke, Betten, Regale, Küchen – stabile Verbindungen, korrekte Ausrichtung, lange Lebensdauer.</p>

      <h2>📦 3. Demontage & Wiederaufbau</h2>
      <p>Beim Umzug markieren, demontieren, transportieren, sauber wieder aufbauen – alles aus einer Hand.</p>

      <h2>💡 4. Sicherheit & Schutz</h2>
      <p>Eigenes Werkzeug, Schutzmaterialien, Bodenschutz – Schäden werden vermieden.</p>

      <h2>❓ FAQ: Möbelmontage</h2>
      <h3>Bauen Sie IKEA/POCO/Höffner-Möbel auf?</h3>
      <p>Ja, täglich – bitte Serien/Modelle nennen.</p>
      <h3>Montieren Sie auch Küchen?</h3>
      <p>Ja – nach Absprache und Plan.</p>

      <h2>📞 Kontakt & Angebot</h2>
      <p>Telefon &amp; WhatsApp: <a href="https://wa.me/4915771677034" target="_blank" rel="noopener">+49 1577 1677034</a> · 
      E-Mail: <a href="mailto:moebeltaxiumzug@gmail.com">moebeltaxiumzug@gmail.com</a></p>
    `,
  },

  // 8) GARTENABFÄLLE
  {
    slug: "gartenabfaelle-richtig-entsorgen-berlin",
    title: "🇩🇪 Gartenabfälle richtig entsorgen – Ihre Möglichkeiten in Berlin",
    date: "2024-06-20",
    humanDate: "20.06.2024",
    excerpt:
      "Laub, Äste, Grünschnitt – so entsorgen Sie umweltfreundlich und stressfrei. Auf Wunsch übernehmen wir Transport & Recycling.",
    image: "/images/blog/blog-8.jpg",
    keywords: [
      "Gartenabfälle Berlin",
      "Grünschnitt Entsorgung Berlin",
      "BSR Grünabfall",
      "Gartenservice Berlin",
      "Gartenabfall abholen",
    ],
    canonical: "/blog/gartenabfaelle-richtig-entsorgen-berlin",
    content: `
      <p>Gartenpflege macht Freude – aber wohin mit Laub, Ästen und Grünschnitt? 
      <strong>Möbel Taxi &amp; Umzug Berlin</strong> zeigt, wie Sie <strong>Gartenabfälle in Berlin</strong> korrekt und umweltfreundlich entsorgen können.</p>

      <h2>🌱 1. Grünschnitt richtig trennen</h2>
      <p>Äste, Laub und Rasenschnitt getrennt sammeln erleichtert Recycling und spart Gebühren.</p>

      <h2>🗑️ 2. Offizielle Entsorgung</h2>
      <p>BSR-Grünabfall-Sammelstellen nutzen oder die <a href="/leistungen/garten">Direktabholung</a> durch uns beauftragen.</p>

      <h2>💪 3. Professionelle Hilfe spart Zeit</h2>
      <p>Wir übernehmen Laden, Transport, Entsorgung und hinterlassen alles sauber – ideal für Privat und Gewerbe.</p>

      <h2>🏡 4. Unser Service</h2>
      <ul>
        <li>Abholung von Grünschnitt, Laub, Ästen &amp; Sträuchern</li>
        <li>Entsorgung gemäß Berliner Vorschriften</li>
        <li>Aufräumarbeiten &amp; flexible Termine</li>
      </ul>

      <h2>❓ FAQ: Gartenabfälle</h2>
      <h3>Abholung auch aus Kleingärten?</h3>
      <p>Ja – bitte Zugang/Parken vorab klären.</p>

      <h2>📞 Kontakt & Angebot</h2>
      <p>Telefon &amp; WhatsApp: <a href="https://wa.me/4915771677034" target="_blank" rel="noopener">+49 1577 1677034</a> · 
      E-Mail: <a href="mailto:moebeltaxiumzug@gmail.com">moebeltaxiumzug@gmail.com</a></p>
    `,
  },

  // 9) NACHHALTIG UMZIEHEN
  {
    slug: "nachhaltig-umziehen-umweltfreundlich",
    title: "🇩🇪 Nachhaltig umziehen – So funktioniert ein umweltfreundlicher Umzug",
    date: "2024-07-01",
    humanDate: "01.07.2024",
    excerpt:
      "CO₂-Fußabdruck reduzieren: Mehrwegkartons, gebündelte Transporte, Recycling – effizient und klimafreundlich umziehen.",
    image: "/images/blog/blog-9.jpg",
    keywords: [
      "Nachhaltiger Umzug Berlin",
      "Umweltfreundlich umziehen Berlin",
      "Recycling Umzug",
      "Mehrwegkartons",
      "Grüner Umzug",
    ],
    canonical: "/blog/nachhaltig-umziehen-umweltfreundlich",
    content: `
      <p>Ein Umzug muss nicht nur stressfrei, sondern auch umweltfreundlich sein. 
      Mit den richtigen Maßnahmen sparen Sie Ressourcen, reduzieren Müll und minimieren den CO₂-Fußabdruck. 
      <strong>Möbel Taxi &amp; Umzug Berlin</strong> zeigt, wie ein <strong>nachhaltiger Umzug</strong> funktioniert.</p>

      <h2>🌱 1. Wiederverwendbare Verpackungen</h2>
      <p>Stabile Kartons mehrfach nutzen oder auf Mehrwegbehälter setzen – spart Material, Kosten und Abfall.</p>

      <h2>📦 2. Möbel clever verpacken</h2>
      <p>Decken und Schutzfolien mehrfach nutzen, Glas/Elektronik separat sichern. Effizientes Packen reduziert Volumen und Fahrten.</p>

      <h2>🚚 3. Profi-Unternehmen wählen</h2>
      <p>Erfahrene Anbieter optimieren <em>Routen &amp; Bündelung</em>. Wir planen Transporte effizient – weniger Fahrzeuge, weniger Emissionen.</p>

      <h2>♻️ 4. Entsorgung nachhaltig gestalten</h2>
      <p>Nicht mehr benötigte Möbel spenden oder recyceln. Wir unterstützen bei Transport und Koordination.</p>

      <h2>💡 5. Energie sparen</h2>
      <p>Transporte bündeln, unnötige Fahrten vermeiden, Aufzüge sinnvoll nutzen – das schont Umwelt und Budget.</p>

      <h2>❓ FAQ: Nachhaltiger Umzug</h2>
      <h3>Wird es dadurch teurer?</h3>
      <p>Nicht zwingend – durch Planung und Bündelung gleichen sich Kosten oft aus.</p>

      <h2>📞 Kontakt & Angebot</h2>
      <p>Telefon &amp; WhatsApp: <a href="https://wa.me/4915771677034" target="_blank" rel="noopener">+49 1577 1677034</a> · 
      E-Mail: <a href="mailto:moebeltaxiumzug@gmail.com">moebeltaxiumzug@gmail.com</a></p>
    `,
  },
];

export function getAllPosts() {
  // En yeni tarih en üstte
  return [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string) {
  return POSTS.find((p) => p.slug === slug) ?? null;
}