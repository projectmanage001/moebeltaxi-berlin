// src/lib/services.ts

export type ServiceKey =
  | "umzug"
  | "moebeltransport"
  | "montage"
  | "lieferung"
  | "senior-umzug"
  | "entruempelung"
  | "garten";

type ServiceContent = {
  metaTitle: string;
  h1: string;
  heroBadge: string;
  lead: string;
  og: string; // public yolundan başlayan görsel
  bulletsTitle: string;
  bullets: string[];
  servicesTitle: string;
  services: string[];
  contact: { phone: string; email: string; instagram: string };
  keywords: string[];
  canonical: string; // /leistungen/... ile başlayan kesin yol
};

export const SERVICE_CONTENT: Record<ServiceKey, ServiceContent> = {
  umzug: {
    metaTitle: "Umzug Berlin",
    h1: "🇩🇪 Umzug in Berlin – Stressfrei & Zuverlässig",
    heroBadge: "🏠 Umzüge (Wohnung, WG, Pflegeheim, Büro)",
    lead:
      "Ein Umzug in Berlin kann anstrengend sein – mit Möbel Taxi & Umzug wird er unkompliziert! Wir planen, tragen, transportieren und montieren – Sie entspannen. Unsere erfahrenen Umzugshelfer arbeiten zuverlässig, sorgfältig und pünktlich.",
    og: "/images/leistungen/umzug.jpg",
    bulletsTitle: "Vorteile",
    bullets: [
      "Professionelle Umzugshelfer mit Erfahrung",
      "Umzug ab 40 € in Berlin",
      "Versicherung inklusive",
      "Kostenlose Beratung & Angebot",
    ],
    servicesTitle: "Unser Service",
    services: [
      "Privatumzüge & Firmenumzüge",
      "Studentenumzüge & Mini-Umzüge",
      "Verpackungsservice & Montagehilfe",
      "Transporte deutschlandweit",
    ],
    contact: {
      phone: "+49 1577 1677034",
      email: "moebeltaxiumzug@gmail.com",
      instagram: "@mobeltaxiumzug",
    },
    keywords: ["Umzug Berlin", "Umzugsfirma Berlin", "Umzugshelfer", "Mini-Umzug"],
    canonical: "/leistungen/umzug",
  },

  moebeltransport: {
    metaTitle: "Möbeltransport Berlin",
    h1: "🇩🇪 Möbeltransporte in Berlin – Schnell, Sicher & Günstig",
    heroBadge: "🛋️ Möbeltransporte & Mini-Umzüge",
    lead:
      "Ein Umzug oder Möbeltransport muss nicht stressig sein. Mit Möbel Taxi & Umzug Berlin haben Sie einen zuverlässigen Partner an Ihrer Seite. Unser erfahrenes Team transportiert Ihre Möbel sicher, schnell und professionell – egal ob innerhalb Berlins oder deutschlandweit.",
    og: "/images/leistungen/moebeltransport.jpg",
    bulletsTitle: "Vorteile",
    bullets: [
      "Zuverlässiger & erfahrener Transportservice",
      "Geschulte Mitarbeiter mit Sorgfalt im Umgang mit Möbeln",
      "Schnelle Termine & flexible Einsatzzeiten",
      "Versicherungsschutz für alle Transporte",
      "Faire Preise ohne versteckte Kosten",
    ],
    servicesTitle: "Unser Service",
    services: [
      "Möbeltransporte für Privat- und Geschäftskunden",
      "Abholung & Lieferung (z. B. IKEA, Poco, Roller)",
      "Transport einzelner Möbel oder kompletter Haushalte",
      "Demontage & Montage auf Wunsch",
      "Innerhalb Berlins & deutschlandweit",
    ],
    contact: {
      phone: "+49 1577 1677034",
      email: "moebeltaxiumzug@gmail.com",
      instagram: "@mobeltaxiumzug",
    },
    keywords: ["Möbeltransport Berlin", "Möbeltaxi Berlin", "Mini-Umzug"],
    canonical: "/leistungen/moebeltransport",
  },

  montage: {
    metaTitle: "Möbelmontage Berlin",
    h1: "🇩🇪 Möbelmontage in Berlin – Professionell & Präzise",
    heroBadge: "🔧 Möbelmontage & Demontage Service",
    lead:
      "Möbelmontage kann Zeit und Nerven kosten. Unser erfahrenes Team übernimmt den Aufbau Ihrer Möbel schnell und fachgerecht – ob IKEA, Poco oder andere Marken.",
    og: "/images/leistungen/montage.jpg",
    bulletsTitle: "Vorteile",
    bullets: [
      "Fachgerechte Montage aller Möbeltypen",
      "Auch Demontage & Wiederaufbau möglich",
      "Werkzeug & Material immer dabei",
      "Pünktlich, sauber & zuverlässig",
    ],
    servicesTitle: "Unser Service",
    services: [
      "Aufbau von Schränken, Betten, Küchen & Regalen",
      "Möbelmontage nach Umzügen",
      "Hilfe bei Neuanschaffungen oder Umbauten",
    ],
    contact: {
      phone: "+49 1577 1677034",
      email: "moebeltaxiumzug@gmail.com",
      instagram: "@mobeltaxiumzug",
    },
    keywords: ["Möbelmontage Berlin", "Küchenmontage", "IKEA Aufbau"],
    canonical: "/leistungen/montage",
  },

  lieferung: {
    metaTitle: "IKEA & Poco Lieferung Berlin",
    h1: "🇩🇪 Möbel Taxi – IKEA, Poco & Co. Lieferungen in Berlin",
    heroBadge: "🛒 Lieferung & Aufbau Ihrer Einkäufe von IKEA, Poco, Höffner & Co.",
    lead:
      "Keine Lust, schwere Möbel selbst zu transportieren? Mit unserem Möbel Taxi Berlin liefern wir Ihre Einkäufe direkt von IKEA, Poco oder Roller sicher zu Ihnen nach Hause – ab 40 €!",
    og: "/images/leistungen/lieferung.jpg",
    bulletsTitle: "Vorteile",
    bullets: [
      "Schnelle Lieferung am selben Tag möglich",
      "Sicherer Transport Ihrer neuen Möbel",
      "Auf Wunsch inkl. Aufbau & Verpackungsentsorgung",
      "Flexible Termine – auch abends oder am Wochenende",
    ],
    servicesTitle: "Unser Service",
    services: [
      "Abholung direkt aus dem Markt oder Lager",
      "Zustellung bis Bordstein/Tür oder inklusive Aufbau",
      "Sichere Ladungssicherung & Decken",
    ],
    contact: {
      phone: "+49 1577 1677034",
      email: "moebeltaxiumzug@gmail.com",
      instagram: "@mobeltaxiumzug",
    },
    keywords: ["IKEA Lieferung Berlin", "Möbeltaxi Berlin", "Poco Lieferung"],
    canonical: "/leistungen/lieferung",
  },

  "senior-umzug": {
    metaTitle: "Seniorenumzug Berlin",
    h1: "🇩🇪 Senioren Umzug & Hilfe beim Umzug für Ältere",
    heroBadge: "👵 Senioren Umzug & Hilfe beim Umzug für Ältere",
    lead:
      "Ein Umzug im Alter ist eine besondere Herausforderung. Wir unterstützen Senioren mit Geduld, Einfühlungsvermögen und kompletter Organisation.",
    og: "/images/leistungen/senior-umzug.jpg",
    bulletsTitle: "Vorteile",
    bullets: [
      "Freundliches & hilfsbereites Team",
      "Unterstützung beim Ein- & Auspacken",
      "Möbeltransport, Aufbau & Entsorgung aus einer Hand",
      "Zuverlässig, respektvoll & fair",
    ],
    servicesTitle: "Unser Service",
    services: [
      "Komplettumzüge für Senioren",
      "Begleitung und Unterstützung beim Wohnungswechsel",
      "Entsorgung alter Möbel & Entrümpelung",
    ],
    contact: {
      phone: "+49 1577 1677034",
      email: "moebeltaxiumzug@gmail.com",
      instagram: "@mobeltaxiumzug",
    },
    keywords: ["Seniorenumzug Berlin", "Umzug Senioren", "Hilfe beim Umzug"],
    canonical: "/leistungen/senior-umzug",
  },

  entruempelung: {
    metaTitle: "Entrümpelung Berlin",
    h1: "🇩🇪 Entrümpelung in Berlin – Schnell & Diskret",
    heroBadge: "♻️ Entrümpelung & Sperrmüllentsorgung",
    lead:
      "Ob Wohnung, Keller oder Büro – wir übernehmen Entrümpelungen aller Art. Unser Team arbeitet diskret, schnell und umweltbewusst.",
    og: "/images/leistungen/entruempelung.jpg",
    bulletsTitle: "Vorteile",
    bullets: [
      "Zuverlässig & termintreu",
      "Fachgerechte Entsorgung nach Berliner Vorschriften",
      "Faire Pauschalpreise",
      "Auch kurzfristige Termine möglich",
    ],
    servicesTitle: "Unser Service",
    services: [
      "Haushaltsauflösungen",
      "Keller- & Dachbodenentrümpelungen",
      "Büro- & Firmenauflösungen",
      "Entsorgung von Möbeln, Elektrogeräten & Sperrmüll",
    ],
    contact: {
      phone: "+49 1577 1677034",
      email: "moebeltaxiumzug@gmail.com",
      instagram: "@mobeltaxiumzug",
    },
    keywords: ["Entrümpelung Berlin", "Sperrmüll Berlin", "Wohnungsauflösung"],
    canonical: "/leistungen/entruempelung",
  },

  garten: {
    metaTitle: "Gartenpflege Berlin",
    h1: "🇩🇪 Gartenpflege & Entsorgung in Berlin",
    heroBadge:
      "🏡 Gartenarbeiten: Rasenmähen, Laub sammeln, Gartenabfälle entsorgen, Müllentsorgung",
    lead:
      "Ein gepflegter Garten sorgt für Wohlbefinden – unser Team kümmert sich um Pflege, Grünschnitt und die fachgerechte Entsorgung aller Abfälle.",
    og: "/images/leistungen/garten.jpg",
    bulletsTitle: "Vorteile",
    bullets: [
      "Zuverlässiger Gartenservice in Berlin",
      "Fachgerechte Entsorgung von Grünabfällen",
      "Faire Preise & pünktliche Arbeit",
      "Ideal für Privathaushalte & Gewerbe",
    ],
    servicesTitle: "Unser Service",
    services: [
      "Rasenmähen, Heckenschneiden, Laubentsorgung",
      "Entrümpelung von Gärten & Außenanlagen",
      "Abtransport von Gartenabfällen",
    ],
    contact: {
      phone: "+49 1577 1677034",
      email: "moebeltaxiumzug@gmail.com",
      instagram: "@mobeltaxiumzug",
    },
    keywords: ["Gartenpflege Berlin", "Grünschnitt Berlin", "Gartenabfälle"],
    canonical: "/leistungen/garten",
  },
};