"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { FaPhoneAlt, FaClipboardList, FaWhatsapp } from "react-icons/fa";

export default function StickyBar() {
  const ref = useRef<HTMLDivElement>(null);

  // Bar yüksekliğini ölç → :root --sticky-h değişkenine yaz
  useEffect(() => {
    const setH = () => {
      const h = ref.current?.offsetHeight ?? 0;
      document.documentElement.style.setProperty("--sticky-h", `${h}px`);
    };
    setH();
    window.addEventListener("resize", setH);
    return () => window.removeEventListener("resize", setH);
  }, []);

  return (
    <div ref={ref} className="sticky-bar">
      <div className="sticky-left">
        {/* 📞 Telefon */}
        <a href="tel:+4915771677034" className="sticky-link" aria-label="Telefon ile ara">
          <div className="sticky-item">
            <FaPhoneAlt className="sticky-ic" />
            <div className="sticky-txt">
              <span className="st-white">Click & Call | Mo–Fr 9–18 Uhr</span>
              <span className="st-yellow">+49 1577 1677034</span>
            </div>
          </div>
        </a>

        {/* 📋 Form */}
        <Link href="/kontakt" className="sticky-link" aria-label="Anfrageformular">
          <div className="sticky-item">
            <FaClipboardList className="sticky-ic" />
            <div className="sticky-txt">
              <span className="st-white">Zum Anfrageformular</span>
              <span className="st-yellow">Jetzt anfragen</span>
            </div>
          </div>
        </Link>
      </div>

      <div className="sticky-right">
        {/* 💬 WhatsApp */}
        <a
          href="https://wa.me/4915771677034"
          target="_blank"
          rel="noopener noreferrer"
          className="sticky-link"
          aria-label="WhatsApp ile yaz"
        >
          <div className="sticky-item">
            <FaWhatsapp className="sticky-ic" />
            <div className="sticky-txt">
              <span className="st-white">Click & Chat | WhatsApp 24/7</span>
              <span className="st-yellow">WhatsApp</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}