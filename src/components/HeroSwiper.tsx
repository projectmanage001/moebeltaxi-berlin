"use client";

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

/**
 * Görseller /public/images/hero içinde:
 *  hero-01.jpg ... hero-05.jpg
 */
const slides = [
  { src: "/images/hero/hero-01.jpg", alt: "Slide 1" },
  { src: "/images/hero/hero-02.jpg", alt: "Slide 2" },
  { src: "/images/hero/hero-03.jpg", alt: "Slide 3" },
  { src: "/images/hero/hero-04.jpg", alt: "Slide 4" },
  { src: "/images/hero/hero-05.jpg", alt: "Slide 5" },
] as const;

const AUTO_DELAY_MS = 4200;

export default function HeroSwiper() {
  // dış pagination ref
  const barRef = useRef<HTMLDivElement | null>(null);
  // aktif slayta mikro scale "kick" vermek için
  const activeKickTimeout = useRef<NodeJS.Timeout | null>(null);

  // full-bleed: container paddinglerini by-pass (Tailwind’e bağlı değil)
  const fullBleed: React.CSSProperties = {
    width: "100vw",
    position: "relative",
    left: "50%",
    right: "50%",
    marginLeft: "-50vw",
    marginRight: "-50vw",
  };

  // viewport yüksekliği (inline)
  const heroStyle: React.CSSProperties = {
    position: "relative",
    height: "100dvh",
    minHeight: 320,
    zIndex: 0,
    background: "#000",
  };

  // katman stilleri (cover + contain)
  const layerFill: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transform: "scale(1.05)",
    filter: "saturate(1.1) brightness(.9) blur(10px)",
  };
  const layerContain: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "contain",
  };
  const vignette: React.CSSProperties = {
    pointerEvents: "none",
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(ellipse at center, transparent 75%, rgba(0,0,0,0.08) 100%)",
  };

  // yardımcı: aktif slide’ın iç kapsayıcısına "kick" sınıfı ekle/çıkar
  const kickActiveSlide = (swiper?: any) => {
    try {
      if (!swiper) return;
      const el: HTMLElement | null = swiper.slides?.[swiper.activeIndex];
      const inner = el?.querySelector<HTMLElement>(".slide-inner");
      if (!inner) return;
      inner.classList.remove("kick"); // yeniden tetiklemek için önce kaldır
      // reflow hilesi
      void inner.offsetWidth;
      inner.classList.add("kick");
      if (activeKickTimeout.current) clearTimeout(activeKickTimeout.current);
      activeKickTimeout.current = setTimeout(() => {
        inner.classList.remove("kick");
      }, 700);
    } catch {/* no-op */}
  };

  // cleanup
  useEffect(() => {
    return () => {
      if (activeKickTimeout.current) clearTimeout(activeKickTimeout.current);
    };
  }, []);

  return (
    <>
      <section style={{ margin: 0, padding: 0 }}>
        <div style={fullBleed}>
          <div style={heroStyle} className="hero-swiper">
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              loop
              speed={1100}
              autoplay={{ delay: AUTO_DELAY_MS, disableOnInteraction: false }}
              // Dahili pagination/oklar KAPALI (dış pagination kullanıyoruz)
              style={{ height: "100%" }}
              onInit={(sw) => {
                // başlarken bar'ı sıfırla
                if (barRef.current) barRef.current.style.setProperty("--p", "0%");
                // ilk kick
                kickActiveSlide(sw);
              }}
              onAutoplayTimeLeft={(_, time, progress) => {
                // progress: 0→1 (sona doğru artıyor), bize kalan değil dolan lazım
                const filled = `${Math.min(100, Math.max(0, (1 - progress) * 100)).toFixed(2)}%`;
                if (barRef.current) barRef.current.style.setProperty("--p", filled);
              }}
              onSlideChangeTransitionStart={(sw) => {
                // bar'a kısa pulse
                if (barRef.current) {
                  barRef.current.classList.remove("is-pulse");
                  // reflow tetikle
                  void barRef.current.offsetWidth;
                  barRef.current.classList.add("is-pulse");
                }
                // aktif slayta mikro-scale
                kickActiveSlide(sw);
              }}
            >
              {slides.map((s) => (
                <SwiperSlide key={s.src} style={{ height: "100%" }}>
                  <div className="slide-inner" style={{ position: "relative", width: "100%", height: "100%" }}>
                    {/* ARKA PLAN (boşluk kapatan katman) */}
                    <img src={s.src} alt="" aria-hidden style={layerFill} />
                    {/* ÖN KATMAN (görselin TAMAMI görünsün) */}
                    <img src={s.src} alt={s.alt} style={layerContain} />
                    {/* hafif vignette */}
                    <div style={vignette} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* ==== DIŞ PAGINATION (ince bar) ==== */}
          <div className="hero-controls">
            <div className="hero-pagination" aria-hidden="true">
              <div className="progress" ref={barRef} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}