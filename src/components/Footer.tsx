// src/components/Footer.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-brand-yellow/20 bg-black/60 backdrop-blur-sm relative">
      {/* ince üst parıltı çizgisi */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-yellow/60 to-transparent"
      />

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 md:grid-cols-4">
        {/* Marka + Sosyal */}
        <div className="space-y-5">
          <div className="inline-flex items-center gap-3">
            {/* DEV GİBİ BÜYÜK LOGO */}
            <Image
              src="/logo-2.png"
              alt="Möbel Taxi Umzug Berlin Logo"
              width={900}
              height={300}
              priority
              className="h-28 md:h-40 lg:h-48 w-auto object-contain drop-shadow-[0_8px_24px_rgba(245,196,0,.18)]"
            />
          </div>

          <p className="text-sm text-gray-300/85 leading-6">
            Zuverlässige Umzüge & Transporte in Berlin und deutschlandweit.
            Pünktlich, sorgfältig, versichert.
          </p>

          {/* Sosyal medya ikonları (renkli) */}
          <div className="flex items-center gap-3 pt-1">
            <Link
              href="https://www.facebook.com/people/M%C3%B6bel-Taxi-Umzug-Berlin/61581455103024/#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="group grid h-9 w-9 place-items-center rounded-full bg-[#1877F2] text-white shadow hover:brightness-110 transition"
              title="Facebook"
            >
              <FaFacebookF className="text-[16px]" />
            </Link>
            <Link
              href="https://www.instagram.com/mobeltaxiumzug/?igsh=MWYwam9xM29ud3RldQ%3D%3D#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="group grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white shadow hover:brightness-110 transition"
              title="Instagram"
            >
              <FaInstagram className="text-[16px]" />
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="mb-3 text-sm font-semibold tracking-wide text-brand-yellow">
            <span className="relative inline-block">
              Navigation
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 h-[2px] w-full bg-brand-yellow/40"
              />
            </span>
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              { href: "/", label: "Startseite" },
              { href: "/ueber-uns", label: "Über uns" },
              { href: "/leistungen", label: "Leistungen" },
              { href: "/blog", label: "Blog" },
              { href: "/kontakt", label: "Kontakt" },
            ].map((i) => (
              <li key={i.href}>
                <Link
                  href={i.href}
                  className="footer-link relative inline-block text-gray-200/90 transition hover:text-brand-yellow"
                >
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontakt */}
        <div>
          <h3 className="mb-3 text-sm font-semibold tracking-wide text-brand-yellow">
            <span className="relative inline-block">
              Kontakt
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 h-[2px] w-full bg-brand-yellow/40"
              />
            </span>
          </h3>
          <ul className="space-y-2 text-sm text-gray-300/90">
            <li>
              <a
                href="tel:+4915771677034"
                className="hover:text-brand-yellow transition-colors"
              >
                Telefon: +49 1577 1677034
              </a>
            </li>
            <li>
              <a
                href="mailto:moebeltaxiumzug@gmail.com"
                className="hover:text-brand-yellow transition-colors"
              >
                E-Mail: moebeltaxiumzug@gmail.com
              </a>
            </li>
            <li>Adresse: Zeppelinstraße 75, 13583 Berlin</li>
          </ul>
        </div>

        {/* Hızlı Teklif */}
        <div>
          <h3 className="mb-3 text-sm font-semibold tracking-wide text-brand-yellow">
            <span className="relative inline-block">
              Schnelles Angebot
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 h-[2px] w-full bg-brand-yellow/40"
              />
            </span>
          </h3>
          <p className="text-sm text-gray-300/85 mb-3">
            2 Minuten Formular – wir melden uns schnell zurück.
          </p>
          <Link
            href="/kontakt"
            className="group inline-flex items-center gap-2 rounded-full bg-brand-yellow px-5 py-2.5 text-sm font-semibold text-black
                       shadow-[0_12px_32px_rgba(245,196,0,.28)]
                       transition-transform duration-200 hover:-translate-y-0.5
                       focus:outline-none focus:ring-2 focus:ring-brand-yellow/70"
          >
            Formular öffnen
            <span
              aria-hidden
              className="inline-block translate-x-0 transition-transform duration-200 group-hover:translate-x-0.5"
            >
              →
            </span>
          </Link>
        </div>
      </div>

      {/* alt şerit */}
      <div className="border-t border-brand-yellow/10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-6 text-xs text-gray-400 sm:flex-row">
          <p>
            {/* YEAR sabit 2025 olarak istendi */}
            © 2025 MöbelTaxi Umzug. Alle Rechte vorbehalten.{" "}
            <span className="hidden sm:inline">|</span>{" "}
            <Link
              href="https://tr.linkedin.com/in/enes-g%C3%B6kyar-822433271"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block align-baseline font-semibold text-brand-yellow powered-by"
            >
              Powered by Enes
            </Link>
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/impressum"
              className="footer-link hover:text-brand-yellow transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="footer-link hover:text-brand-yellow transition-colors"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>

      {/* “Powered by Enes” altındaki sürekli akan ince şerit */}
      <style jsx>{`
        .powered-by {
          padding-bottom: 2px; /* çizgiye biraz mesafe */
        }
        .powered-by::after {
          content: "";
          position: absolute;
          left: -30%;
          bottom: -2px;
          height: 2px;
          width: 30%;
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0),
            #f5c400,
            rgba(0, 0, 0, 0)
          );
          filter: drop-shadow(0 0 6px rgba(245, 196, 0, 0.55));
          animation: poweredRun 1.8s linear infinite;
        }
        @keyframes poweredRun {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(460%);
          }
        }
      `}</style>
    </footer>
  );
}