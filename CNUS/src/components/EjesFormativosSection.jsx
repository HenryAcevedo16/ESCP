"use client";
import { useRef, useEffect } from "react";

export default function EjesFormativosSection({ ejes = [] }) {
  // Duplicamos para el carrusel infinito
  const items = ejes.length > 0 ? [...ejes, ...ejes] : [];

  const trackRef = useRef(null);
  const posRef = useRef(0);
  const rafRef = useRef(null);
  const isPausedRef = useRef(false);
  const speed = 0.8;

  useEffect(() => {
    const track = trackRef.current;
    if (!track || items.length === 0) return;

    let half = 0;
    const animate = () => {
      if (half === 0) half = track.scrollWidth / 2;

      if (!isPausedRef.current && half > 0) {
        posRef.current -= speed;
        if (posRef.current <= -half) posRef.current += half;
        track.style.transform = `translateX(${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [items.length]);

  if (ejes.length === 0) return null;

  return (
    <section className="w-full max-w-[1920px] mb-[100px] desktop:mb-[200px] mx-auto px-4 tablet:px-[60px] desktop:px-6 py-12 tablet:py-16 text-center overflow-hidden bg-[#f8f9fa]">
      <h2 className="text-[32px] tablet:text-[48px] font-bold text-gray-900 mb-4">
        Nuestros Ejes Formativos
      </h2>
      <p className="text-gray-600 max-w-full mx-auto mb-12 text-[18px] tablet:text-[25px] leading-snug">
        Descubre los pilares que orientan nuestro modelo educativo y forman profesionales íntegros,
        preparados para afrontar los{" "}
        <br className="hidden tablet:block" />
        retos del futuro laboral.
      </p>

      <div
        className="relative w-full overflow-hidden py-8"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
        onMouseEnter={() => { isPausedRef.current = true; }}
        onMouseLeave={() => { isPausedRef.current = false; }}
      >
        <div
          ref={trackRef}
          className="flex gap-6"
          style={{ width: "max-content", willChange: "transform" }}
        >
          {items.map((eje, index) => (
            <div
              key={index}
              className="w-[200px] sm:w-[240px] tablet:w-[280px] desktop:w-[320px] h-[120px] sm:h-[150px] tablet:h-[180px] desktop:h-[200px] bg-gray-100 rounded-2xl hover:bg-gray-200 hover:-translate-y-2 transition-all duration-300 cursor-pointer flex items-center justify-center p-4 sm:p-6 shrink-0 shadow-sm"
            >
              <h3 className="font-bold text-gray-900 text-[16px] sm:text-[18px] tablet:text-[20px] desktop:text-[22px] leading-tight">
                {eje.nombre}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
