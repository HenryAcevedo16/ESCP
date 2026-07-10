"use client";
import { useRef, useEffect } from "react";

export default function EjesFormativosSection() {
  const ejes = [
    "Identidad sindical", "Derechos laborales", "Diálogo democrático",
    "Equidad inclusión", "Liderazgo sindical", "Economía trabajo",
    "Incidencia política", "Investigación sindical", "Desarrollo sectorial",
    "Políticas educativas"
  ];

  // Exactamente 2 copias: cuando pos llega al ancho de 1 copia, reseteamos a 0
  const items = [...ejes, ...ejes];

  const trackRef = useRef(null);
  const posRef = useRef(0);
  const rafRef = useRef(null);
  const isPausedRef = useRef(false);
  const speed = 0.8; // px por frame (~48px/s a 60fps)

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Medimos en el primer frame para garantizar que el DOM ya tiene el ancho real
    let half = 0;

    const animate = () => {
      if (half === 0) {
        half = track.scrollWidth / 2;
      }

      if (!isPausedRef.current && half > 0) {
        posRef.current -= speed;

        // += half en vez de = 0 preserva el overshoot fraccional → sin salto visible
        if (posRef.current <= -half) {
          posRef.current += half;
        }

        track.style.transform = `translateX(${posRef.current}px)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <section className="max-w-[1920px] mb-[200px] mx-auto px-6 py-16 text-center overflow-hidden bg-[#f8f9fa]">
      <h2 className="text-[48px] font-bold text-gray-900 mb-4">Nuestros Ejes Formativos</h2>
      <p className="text-gray-600 max-w-full mx-auto mb-12 text-[25px] leading-snug">
        Descubre los diez pilares que orientan nuestro modelo educativo y forman profesionales íntegros, preparados para afrontar los <br />
        retos del futuro laboral.
      </p>

      {/* Contenedor del Carrusel */}
      <div
        className="relative w-full overflow-hidden py-8"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
        }}
        onMouseEnter={() => { isPausedRef.current = true; }}
        onMouseLeave={() => { isPausedRef.current = false; }}
      >
        <div
          ref={trackRef}
          className="flex gap-6"
          style={{ width: 'max-content', willChange: 'transform' }}
        >
          {items.map((eje, index) => (
            <div
              key={index}
              className="w-[320px] h-[200px] bg-gray-100 rounded-2xl hover:bg-gray-200 hover:-translate-y-2 transition-all duration-300 cursor-pointer flex items-center justify-center p-6 shrink-0 shadow-sm"
            >
              <h3 className="font-bold text-gray-900 text-[22px] leading-tight">{eje}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
