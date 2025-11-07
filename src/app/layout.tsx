// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import StickyBar from "@/components/StickyBar";
import FooterContactGate from "@/components/FooterContactGate";
import CookieConsent from "@/components/CookieConsent";          // ✅ cookie banner
// import AnalyticsLoader from "@/components/AnalyticsLoader";    // (opsiyonel) analytics izne göre

const SITE_NAME = "Möbel Taxi Umzug Berlin";
const SITE_URL = "https://moebeltaxiumzug.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} – Ihr Partner für Umzüge & Logistik`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Deutschland genelinde profesyonel Umzug & Transport hizmetleri. Hızlı teklif, sigortalı taşıma, güvenilir ekip.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} – Ihr Partner für Umzüge & Logistik`,
    description:
      "Deutschland genelinde profesyonel Umzug & Transport hizmetleri. Hızlı teklif, sigortalı taşıma, güvenilir ekip.",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630 }],
    locale: "de_DE",
  },
  twitter: { card: "summary_large_image" },
  themeColor: "#0b0b0c",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className="bg-brand-black text-gray-100 antialiased selection:bg-brand-yellow/70 selection:text-black">
        {/* Üst ince sarı çizgi (marka aksanı) */}
        <div className="h-1 bg-gradient-to-r from-brand-yellow via-yellow-400 to-brand-yellow" />

        {/* Header’ın üstünde StickyBar */}
        <StickyBar />

        {/* Global header */}
        <Header />

        {/* Sayfa içerikleri */}
        {children}

        {/* Site genelinde cookie bildirimi (fixed-bottom) */}
        <CookieConsent />

        {/* (Opsiyonel) Analytics izinli ise scriptleri yükle
            <AnalyticsLoader /> */}

        {/* Footer’dan hemen önce: /kontakt dışındaki tüm sayfalarda gösterilir */}
        <FooterContactGate />

        {/* Global footer */}
        <Footer />

        {/* Sabit WhatsApp & Telefon butonları */}
        <FloatingButtons />
      </body>
    </html>
  );
}