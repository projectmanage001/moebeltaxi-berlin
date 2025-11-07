"use client";

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

/** /public/images/hero */
const slides = [
  { src: "/images/hero/hero-01.jpg", alt: "Slide 1" },
  { src: "/images/hero/hero-02.jpg", alt: "Slide 2" },
  { src: "/images/hero/hero-03.jpg", alt: "Slide 3" },
  { src: "/images/hero/hero-04.jpg", alt: "Slide 4" },
  { src: "/images/hero/hero-05.jpg", alt: "Slide 5" },
] as const;

const AUTO_DELAY_MS = 4200;

export default function HeroSwiper() {
  const barRef = useRef<HTMLDivElement | null>(null);
  const activeKickTimeout = useRef<NodeJS.Timeout | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);

  // full-bleed
  const fullBleed: React.CSSProperties = {
    width: "100vw",
    position: "relative",
    left: "50%",
    right: "50%",
    marginLeft: "-50vw",
    marginRight: "-50vw",
  };

  // masaüstü için tam ekran
  const heroStyle: React.CSSProperties = {
    position: "relative",
    height: "100svh",
    minHeight: 320,
    zIndex: 0,
    background: "#000",
  };

  const kickActiveSlide = (swiper?: any) => {
    try {
      if (!swiper) return;
      const el: HTMLElement | null = swiper.slides?.[swiper.activeIndex];
      const inner = el?.querySelector<HTMLElement>(".slide-inner");
      if (!inner) return;
      inner.classList.remove("kick");
      void inner.offsetWidth; // reflow
      inner.classList.add("kick");
      if (activeKickTimeout.current) clearTimeout(activeKickTimeout.current);
      activeKickTimeout.current = setTimeout(() => {
        inner.classList.remove("kick");
      }, 700);
    } catch { /* no-op */ }
  };

  // Mobilde aspect-ratio'yu dinamik ata (ilk görseli baz alır)
  useEffect(() => {
    const img = new Image();
    img.src = slides[0].src;
    img.onload = () => {
      const ratio = img.naturalWidth / img.naturalHeight || 16 / 9;
      rootRef.current?.style.setProperty("--hero-ratio", String(ratio));
    };
  }, []);

  useEffect(() => {
    return () => {
      if (activeKickTimeout.current) clearTimeout(activeKickTimeout.current);
    };
  }, []);

  return (
    <section style={{ margin: 0, padding: 0 }}>
      <div style={fullBleed}>
        <div ref={rootRef} style={heroStyle} className="hero-swiper">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            loop
            speed={1100}
            autoplay={{ delay: AUTO_DELAY_MS, disableOnInteraction: false }}
            style={{ height: "100%" }}
            onInit={(sw) => {
              if (barRef.current) barRef.current.style.setProperty("--p", "0%");
              kickActiveSlide(sw);
            }}
            onAutoplayTimeLeft={(_, __time, progress) => {
              const filled = `${Math.min(100, Math.max(0, (1 - progress) * 100)).toFixed(2)}%`;
              if (barRef.current) barRef.current.style.setProperty("--p", filled);
            }}
            onSlideChangeTransitionStart={(sw) => {
              if (barRef.current) {
                barRef.current.classList.remove("is-pulse");
                void barRef.current.offsetWidth;
                barRef.current.classList.add("is-pulse");
              }
              kickActiveSlide(sw);
            }}
          >
            {slides.map((s) => (
              <SwiperSlide key={s.src} style={{ height: "100%" }}>
                <div className="slide-inner" style={{ position: "relative", width: "100%", height: "100%" }}>
                  {/* Masaüstü: cover | Mobil: contain + aspect-ratio kutusu */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.src}
                    alt={s.alt}
                    className="slide-img"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Dış progress bar */}
        <div className="hero-controls">
          <div className="hero-pagination" aria-hidden="true">
            <div className="progress" ref={barRef} />
          </div>
        </div>
      </div>
    </section>
  );
}