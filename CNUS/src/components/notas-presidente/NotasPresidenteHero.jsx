import Image from "next/image";
import Link from "next/link";

const FEATURED_NOTE = {
  id: 1,
  titulo: "El sindicalismo dominicano como fuerza transformadora del siglo XXI",
  extracto:
    "En este comunicado reflexiono sobre el rol histórico que han jugado las organizaciones sindicales en la construcción de una sociedad más justa, y el desafío que enfrentamos hoy para adaptarnos a los cambios del mundo del trabajo sin perder nuestra esencia.",
  fecha: "20 de julio de 2026",
  categoria: "Notas del Presidente",
  slug: "sindicalismo-dominicano-fuerza-transformadora",
};

export default function NotasPresidenteHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#05162D] via-[#1A2A3A] to-[#2D4A5E] mb-16 laptop:mb-32 desktop:mb-50">
      {/* Top decorative bar */}
      <div className="w-full h-1.5 bg-gradient-to-r from-[#06B6D4] via-[#22D3EE] to-[#06B6D4]" />

      <div className="relative w-full max-w-[1920px] mx-auto px-4 tablet:px-7.5 laptop:px-20 desktop:px-29.5 mt-22.5 tablet:mt-29">

        {/* Main hero content */}
        <div className="flex flex-col laptop:flex-row items-center gap-10 laptop:gap-16 desktop:gap-24 py-14 laptop:py-20 desktop:py-28">

          <div className="flex flex-col flex-1 text-white order-2 laptop:order-1">
            {/* Section title */}
            <h1 className="text-4xl laptop:text-[56px] desktop:text-[72px] font-black leading-none tracking-[-1.5px] desktop:tracking-[-2px] mb-6 laptop:mb-8">
              Palabras <br className="hidden laptop:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#67E8F9]">
                del presidente
              </span>
            </h1>

            {/* Featured note card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[24px] p-6 laptop:p-8 desktop:p-10 hover:bg-white/10 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs laptop:text-[14px] font-semibold text-[#22D3EE] uppercase tracking-wider">
                  {FEATURED_NOTE.categoria}
                </span>
                <span className="text-white/30">•</span>
                <span className="text-xs laptop:text-[14px] text-white/50">
                  {FEATURED_NOTE.fecha}
                </span>
              </div>
              <h2 className="text-xl laptop:text-[28px] desktop:text-[32px] font-bold leading-tight tracking-tight text-white mb-3 laptop:mb-4 group-hover:text-[#22D3EE] transition-colors line-clamp-2">
                {FEATURED_NOTE.titulo}
              </h2>
              <p className="text-white/60 text-sm laptop:text-[17px] leading-relaxed mb-6 line-clamp-3">
                {FEATURED_NOTE.extracto}
              </p>
              <Link
                href={`/articulando/${FEATURED_NOTE.slug}`}
                className="inline-flex items-center gap-2 text-[#22D3EE] font-semibold text-sm laptop:text-[16px] hover:gap-4 transition-all duration-200"
              >
                Leer nota completa
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* RIGHT — President portrait */}
          <div className="flex flex-col items-center shrink-0 relative order-1 laptop:order-2">
            {/* Portrait circle */}
            <div className="relative w-[200px] h-[200px] laptop:w-[270px] laptop:h-[270px] desktop:w-[340px] desktop:h-[340px] rounded-full overflow-hidden border-4 border-[#22D3EE] shadow-[0_0_60px_rgba(6,182,212,0.3)] bg-gradient-to-br from-[#06B6D4] via-[#0891B2] to-[#0E7490] flex items-center justify-center shrink-0">
              {/* Placeholder monogram since no photo is available */}
              <span className="text-white/10 text-[120px] laptop:text-[160px] font-black leading-none select-none">P</span>
            </div>

            {/* Name tag */}
            <div className="mt-5 flex flex-col items-center text-center">
              <span className="text-white font-bold text-lg laptop:text-[22px] desktop:text-[26px] tracking-tight">
                Rafael Peña Rodríguez
              </span>
              <span className="text-[#22D3EE] font-medium text-sm laptop:text-[16px] desktop:text-[18px] mt-1">
                Presidente — ESCP
              </span>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}

