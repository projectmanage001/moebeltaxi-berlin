// src/components/CookieConsent.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const LS_KEY = "cookie-consent:v1"; // all | necessary

export default function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // SSR uyumu: yalnızca client’ta kontrol et
    try {
      const v = localStorage.getItem(LS_KEY);
      if (!v) setOpen(true);
    } catch {
      // no-op
    }
  }, []);

  const acceptAll = () => {
    try { localStorage.setItem(LS_KEY, "all"); } catch {}
    setOpen(false);
  };

  const acceptNecessary = () => {
    try { localStorage.setItem(LS_KEY, "necessary"); } catch {}
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      className={[
        "fixed inset-x-0 bottom-0 z-[9998]",
        "mx-auto max-w-6xl rounded-t-lg",
        "border border-white/10 bg-black/70 backdrop-blur",
        "px-4 py-3 shadow-[0_-8px_28px_rgba(0,0,0,.35)]",
      ].join(" ")}
      role="region"
      aria-label="Cookie-Hinweis"
    >
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13px] leading-5 text-white/85">
          Wir verwenden nur technisch notwendige Cookies sowie – bei Zustimmung – optionale Cookies
          zur Verbesserung der Website. Details in unserer{" "}
          <Link
            href="/datenschutz#cookies"
            className="underline underline-offset-4 decoration-brand-yellow text-brand-yellow hover:opacity-90"
          >
            Datenschutzerklärung
          </Link>
          .
        </p>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={acceptNecessary}
            className={[
              "rounded-md border border-white/20 bg-transparent",
              "px-3 py-1.5 text-[12px] font-medium text-white/90",
              "hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-brand-yellow/60",
              "transition"
            ].join(" ")}
          >
            Nur notwendige
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className={[
              "rounded-md bg-brand-yellow text-black",
              "px-3 py-1.5 text-[12px] font-semibold",
              "shadow-[0_6px_18px_rgba(245,196,0,.25)] hover:-translate-y-0.5",
              "focus:outline-none focus:ring-2 focus:ring-brand-yellow/70",
              "transition"
            ].join(" ")}
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}