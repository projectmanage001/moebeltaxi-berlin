"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Item = {
  clientName: string;
  clientTitle: string;
  rating: number;          // 0–5
  testimonialText: string;
  imageUrl?: string;
};

type Props = {
  className?: string;
  items?: Item[];
  showImage?: boolean;     // avatar göster
  compact?: boolean;       // küçük kart
  autoplay?: boolean;      // otomatik geçiş
  intervalMs?: number;     // ms
  gapBottom?: number;      // footer’dan önce boşluk (px)
  theme?: "dark" | "light";
};

export default function TestimonialsPreview({
  className = "",
  items,
  showImage = false,
  compact = true,
  autoplay = true,
  intervalMs = 4000,
  gapBottom = 40,
  theme = "dark",
}: Props) {
  // Varsayılan 10 yorum
  const data = useMemo<Item[]>(
    () =>
      items?.length
        ? items
        : [
            {
              clientName: "Familie K.",
              clientTitle: "Privatumzug • Prenzlauer Berg",
              rating: 5,
              testimonialText:
                "Sehr pünktlich und freundlich. Unsere 3-Zimmer-Wohnung war schneller umgezogen als gedacht. Möbel wurden professionell gesichert – klare Empfehlung.",
            },
            {
              clientName: "Herr S.",
              clientTitle: "Möbeltransport • Neukölln → Charlottenburg",
              rating: 5,
              testimonialText:
                "Spontan am selben Tag einen Transport bekommen. Couch und Esstisch kamen ohne Kratzer an. Preis fair, Kommunikation per WhatsApp super.",
            },
            {
              clientName: "Start-up Team",
              clientTitle: "Büroumzug • Friedrichshain",
              rating: 5,
              testimonialText:
                "Monitore, Schreibtische, Kartons – alles sauber verpackt. Team war zügig und sehr freundlich. Gerne wieder!",
            },
            {
              clientName: "Frau L.",
              clientTitle: "Entrümpelung • Spandau",
              rating: 5,
              testimonialText:
                "Kellerentrümpelung inkl. Abtransport. Diskret, sauber und schnell erledigt. Fixpreis eingehalten.",
            },
            {
              clientName: "Herr & Frau M.",
              clientTitle: "Seniorenumzug • Steglitz",
              rating: 5,
              testimonialText:
                "Sehr einfühlsames Team. Ein- und Auspacken sowie Möbelaufbau perfekt. Herzlichen Dank!",
            },
            {
              clientName: "Kunde aus Potsdam",
              clientTitle: "Möbeltaxi • IKEA Abholung",
              rating: 4,
              testimonialText:
                "IKEA-Einkauf pünktlich abgeholt und bis in die Wohnung getragen. Insgesamt top Service.",
            },
            {
              clientName: "Frau R.",
              clientTitle: "Montage • Pankow",
              rating: 5,
              testimonialText:
                "Kleiderschrank + Regal fachgerecht aufgebaut, Verpackung mitgenommen. Preis-Leistung stimmt.",
            },
            {
              clientName: "Herr T.",
              clientTitle: "Kleintransport • Kreuzberg",
              rating: 5,
              testimonialText:
                "Ebay-Fund schnell geholt. Fahrer hat beim Tragen geholfen, Treppenhaus kein Problem.",
            },
            {
              clientName: "WG-Team",
              clientTitle: "Mini-Umzug • Wedding",
              rating: 4,
              testimonialText:
                "Für einen Mini-Umzug ideal. Zwei Fahrten, alles gut gesichert – professionell gelöst.",
            },
            {
              clientName: "Herr B.",
              clientTitle: "Transport • Berlin → Leipzig",
              rating: 5,
              testimonialText:
                "Terminabsprache verbindlich, Ankunft auf die Minute. Versicherungspapiere vorab – seriös.",
            },
          ],
    [items]
  );

  const [index, setIndex] = useState(0);

  // Autoplay
  useEffect(() => {
    if (!autoplay || data.length <= 1) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [autoplay, data.length, intervalMs]);

  const goPrev = () => setIndex((p) => (p - 1 + data.length) % data.length);
  const goNext = () => setIndex((p) => (p + 1) % data.length);

  const item = data[index];

  // Tema
  const isDark = theme === "dark";
  const colorText = isDark ? "#EDEDED" : "#111";
  const colorMuted = isDark ? "rgba(255,255,255,.75)" : "#555";
  const colorCardBg = isDark ? "rgba(0,0,0,.35)" : "#fff";
  const colorCardBorder = isDark ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.08)";
  const colorStar = "#f5c400";

  // Kart stili
  const cardStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: compact ? 720 : 820,
    margin: "0 auto",
    background: colorCardBg,
    border: `1px solid ${colorCardBorder}`,
    borderRadius: 16,
    padding: compact ? "20px 22px" : "28px 30px",
    boxShadow: isDark
      ? "0 14px 36px rgba(0,0,0,.40), inset 0 0 0 1px rgba(255,255,255,.02)"
      : "0 8px 24px rgba(0,0,0,.08), 0 2px 8px rgba(0,0,0,.04)",
    backdropFilter: isDark ? "blur(4px)" : undefined,
  };

  const navBtnStyle = (side: "left" | "right"): React.CSSProperties => ({
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    [side]: -2,
    width: 36,
    height: 36,
    borderRadius: 999,
    border: `1px solid ${colorCardBorder}`,
    background: isDark ? "rgba(0,0,0,.65)" : "#fff",
    boxShadow: isDark ? "0 6px 18px rgba(0,0,0,.35)" : "0 6px 16px rgba(0,0,0,.08)",
    display: "grid",
    placeItems: "center",
    cursor: "pointer",
    fontSize: 20,
    lineHeight: 1,
    color: colorText,
  });

  return (
    <section
      className={`home-testimonials-preview ${className}`}
      aria-label="Kundenbewertungen"
      style={{
        padding: "44px 0",
        marginBottom: gapBottom,
        position: "relative",
        zIndex: 1,
        background: isDark ? "transparent" : "#fff",
      }}
    >
      <div className="mx-auto max-w-6xl px-5">
        {/* Başlık */}
        <div style={{ textAlign: "center", marginBottom: 18 }}>
          <h2
            style={{
              fontSize: 28,
              fontWeight: 800,
              color: colorText,
              margin: 0,
              letterSpacing: "-.01em",
            }}
          >
            Was unsere Kunden sagen
          </h2>
          <p style={{ color: colorMuted, marginTop: 8 }}>
            Echte Erfahrungen – zuverlässig, freundlich, pünktlich.
          </p>
        </div>

        {/* Kart + geçiş */}
        <div style={{ position: "relative" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              style={cardStyle}
            >
              {showImage && item?.imageUrl ? (
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 14 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.imageUrl}
                    alt={item.clientName}
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: `1px solid ${colorCardBorder}`,
                    }}
                  />
                </div>
              ) : null}

              {/* Yıldızlar */}
              <div style={{ display: "flex", gap: 4, marginBottom: 10 }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    aria-hidden="true"
                    style={{
                      fontSize: compact ? 16 : 18,
                      lineHeight: 1,
                      color: colorStar,
                      opacity: i < (item?.rating || 0) ? 1 : 0.2,
                    }}
                  >
                    ★
                  </span>
                ))}
                <span className="sr-only">{item?.rating || 0} von 5 Sternen</span>
              </div>

              <p
                style={{
                  color: colorText,
                  opacity: 0.92,
                  lineHeight: 1.75,
                  marginBottom: 14,
                  fontSize: compact ? 16 : 17,
                }}
              >
                {item?.testimonialText}
              </p>

              <div
                style={{
                  display: "flex",
                  gap: 10,
                  alignItems: "baseline",
                  color: colorText,
                  fontWeight: 700,
                }}
              >
                <span>{item?.clientName}</span>
                <span
                  style={{
                    color: colorMuted,
                    fontWeight: 500,
                    fontSize: 14,
                  }}
                >
                  • {item?.clientTitle}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Önceki / Sonraki */}
          {data.length > 1 && (
            <>
              <button type="button" onClick={goPrev} aria-label="Vorheriges Testimonial" style={navBtnStyle("left")}>
                ‹
              </button>
              <button type="button" onClick={goNext} aria-label="Nächstes Testimonial" style={navBtnStyle("right")}>
                ›
              </button>
            </>
          )}
        </div>

        {/* Noktalar */}
        {data.length > 1 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 8,
              marginTop: 14,
            }}
            role="tablist"
            aria-label="Testimonial navigation dots"
          >
            {data.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Gehe zu Kommentar ${i + 1}`}
                aria-selected={i === index}
                role="tab"
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 999,
                  border: 0,
                  background: i === index ? colorText : "rgba(255,255,255,.35)",
                  transition: "background .2s",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}