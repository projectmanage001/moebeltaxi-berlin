"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const nav = [
  { href: "/", label: "Startseite" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/blog", label: "Blog" },
  { href: "/kontakt", label: "Kontakt" },
];

const COMPANY_NAME = "MöbelTaxi & Umzug Berlin";
const LOGO_SRC = "/brand/logo.png"; // /public/brand/logo.png

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [logoOk, setLogoOk] = useState(true);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const setHeaderVar = () => {
      const h = ref.current?.offsetHeight ?? 0;
      document.documentElement.style.setProperty("--header-h", `${h}px`);
    };
    onScroll();
    setHeaderVar();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", setHeaderVar);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", setHeaderVar);
    };
  }, []);

  return (
    <header
      ref={ref}
      style={{ top: "var(--sticky-h, 0px)" }}   // << StickyBar yüksekliğine göre boşluk
      className={[
        "sticky z-50 transition-all",            // top-0 kaldırıldı
        scrolled
          ? "bg-black/70 backdrop-blur-md border-b border-brand-yellow/20"
          : "bg-black/40 backdrop-blur-sm border-b border-transparent",
      ].join(" ")}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* ------- Logo + Şirket adı ------- */}
        <Link
          href="/"
          className="group inline-flex items-center gap-3 font-semibold tracking-wide"
          aria-label={`${COMPANY_NAME} – Startseite`}
        >
          {/* Büyük logo, PNG yoksa fallback rozet */}
          {logoOk ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={LOGO_SRC}
              width={64}
              height={64}
              alt="Logo"
              className="block h-12 w-12 md:h-16 md:w-16 object-contain"
              onError={() => setLogoOk(false)}
            />
          ) : (
            <span className="grid h-12 w-12 md:h-16 md:w-16 place-items-center bg-brand-yellow text-black font-extrabold text-xl md:text-2xl">
              M
            </span>
          )}

          <span className="text-base md:text-lg text-white uppercase tracking-[0.08em]">
            {COMPANY_NAME}
            <span className="ml-2 block h-1 w-12 origin-left bg-brand-yellow transition-transform duration-300 group-hover:scale-x-125" />
          </span>
        </Link>

        {/* ------- Masaüstü menü ------- */}
        <ul className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="nav-link relative uppercase tracking-[0.06em] text-white"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ------- Köşeli CTA (Kontakt) – hover’da sadece “yansıma” ------- */}
        <div className="hidden md:block">
          <Link
            href="/kontakt"
            className={[
              "cta-sheen relative inline-flex items-center justify-center",
              "px-5 py-2 text-sm font-semibold",
              "bg-brand-yellow text-black",
              "shadow-[0_10px_28px_rgba(245,196,0,.25)]",
              "transition-transform duration-200",
              "focus:outline-none focus:ring-2 focus:ring-brand-yellow/70",
            ].join(" ")}
            style={{ borderRadius: 0 }} // tamamen köşeli
          >
            Jetzt Kontakt
          </Link>
        </div>

        {/* ------- Mobil hamburger ------- */}
        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-brand-yellow/30 text-gray-100 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-brand-yellow/60"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menü"
          aria-expanded={open}
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-current transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-4 bg-current transition-opacity ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`block h-0.5 w-5 bg-current transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {/* ------- Mobil açılır menü ------- */}
      <div className={`md:hidden transition-[max-height,opacity] duration-300 overflow-hidden ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <ul className="mx-auto max-w-6xl px-4 pb-4 pt-2 space-y-2">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                onClick={() => setOpen(false)}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-base text-white uppercase tracking-[0.06em] hover:bg-white/5"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              onClick={() => setOpen(false)}
              href="/kontakt"
              className="mt-1 block text-center px-4 py-2 text-sm font-semibold bg-brand-yellow text-black"
              style={{ borderRadius: 0 }}
            >
              Jetzt Kontakt
            </Link>
          </li>
        </ul>
      </div>

      {/* CTA hover “sheen” efekti (yalnızca hover’da görünür) */}
      <style>{`
        .cta-sheen { overflow: hidden; }
        .cta-sheen::after{
          content:"";
          position:absolute; top:-120%; left:-40%;
          width:18%; height:340%;
          transform: translateX(-140%) skewX(-18deg);
          background: linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.55) 48%, rgba(255,255,255,0) 100%);
          mix-blend-mode: screen; transition: transform .4s ease; pointer-events:none;
        }
        .cta-sheen:hover::after{ transform: translateX(260%) skewX(-18deg); }
      `}</style>
    </header>
  );
}