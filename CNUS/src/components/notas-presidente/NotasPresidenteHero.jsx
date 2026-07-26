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
    <section className="relative w-full overflow-hidden bg-[#05162D]">
      {/* Top decorative bar */}
      <div className="w-full h-1.5 bg-gradient-to-r from-[#0E52C6] via-[#4A8EFF] to-[#0E52C6]" />

      <div className="relative w-full max-w-[1920px] mx-auto px-4 tablet:px-7.5 desktop:px-20 min-[1610px]:px-29.5 mt-22.5 tablet:mt-29">

        {/* Main hero content */}
        <div className="flex flex-col min-[1200px]:flex-row items-center gap-10 min-[1200px]:gap-16 min-[1610px]:gap-24 py-14 min-[1200px]:py-20 min-[1610px]:py-28">

          {/* LEFT — President portrait */}
          <div className="flex flex-col items-center shrink-0 relative">
            {/* Decorative ring behind portrait */}
            <div className="absolute inset-0 m-auto w-[220px] h-[220px] min-[1200px]:w-[300px] min-[1200px]:h-[300px] min-[1610px]:w-[380px] min-[1610px]:h-[380px] rounded-full border-2 border-[#0E52C6]/30 scale-110" />
            <div className="absolute inset-0 m-auto w-[220px] h-[220px] min-[1200px]:w-[300px] min-[1200px]:h-[300px] min-[1610px]:w-[380px] min-[1610px]:h-[380px] rounded-full border border-[#4A8EFF]/20 scale-125" />

            {/* Portrait circle */}
            <div className="relative w-[200px] h-[200px] min-[1200px]:w-[270px] min-[1200px]:h-[270px] min-[1610px]:w-[340px] min-[1610px]:h-[340px] rounded-full overflow-hidden border-4 border-[#0E52C6] shadow-[0_0_60px_rgba(14,82,198,0.4)] bg-gradient-to-br from-[#0E52C6] via-[#043F9F] to-[#05162D] flex items-center justify-center shrink-0">
              {/* Placeholder monogram since no photo is available */}
              <span className="text-white/10 text-[120px] min-[1200px]:text-[160px] font-black leading-none select-none">P</span>
            </div>

            {/* Name tag */}
            <div className="mt-5 flex flex-col items-center text-center">
              <span className="text-white font-bold text-lg min-[1200px]:text-[22px] min-[1610px]:text-[26px] tracking-tight">
                Rafael Peña Rodríguez
              </span>
              <span className="text-[#4A8EFF] font-medium text-sm min-[1200px]:text-[16px] min-[1610px]:text-[18px] mt-1">
                Presidente — ESCP
              </span>
            </div>
          </div>

          {/* RIGHT — Section title + featured note */}
          <div className="flex flex-col flex-1 text-white">
            {/* Section label */}
            <div className="flex items-center gap-3 mb-5 min-[1200px]:mb-7">
              <div className="w-8 h-0.5 bg-[#4A8EFF]" />
              <span className="text-[#4A8EFF] font-semibold text-sm min-[1200px]:text-[16px] min-[1610px]:text-[18px] uppercase tracking-widest">
                Notas del Presidente
              </span>
            </div>

            {/* Section title */}
            <h1 className="text-4xl min-[1200px]:text-[56px] min-[1610px]:text-[72px] font-black leading-none tracking-[-1.5px] min-[1610px]:tracking-[-2px] mb-6 min-[1200px]:mb-8">
              Palabras <br className="hidden min-[1200px]:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A8EFF] to-[#60A5FA]">
                del presidente
              </span>
            </h1>

            <p className="text-white/60 text-base min-[1200px]:text-[18px] min-[1610px]:text-[20px] leading-relaxed mb-8 min-[1200px]:mb-10 max-w-[680px]">
              Comunicados oficiales, reflexiones y posicionamientos del presidente de la Escuela Sindical del Caribe y Postgraduados sobre los temas más relevantes para el movimiento sindical dominicano.
            </p>

            {/* Featured note card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[24px] p-6 min-[1200px]:p-8 min-[1610px]:p-10 hover:bg-white/10 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs min-[1200px]:text-[14px] font-semibold text-[#4A8EFF] uppercase tracking-wider">
                  {FEATURED_NOTE.categoria}
                </span>
                <span className="text-white/30">•</span>
                <span className="text-xs min-[1200px]:text-[14px] text-white/50">
                  {FEATURED_NOTE.fecha}
                </span>
              </div>
              <h2 className="text-xl min-[1200px]:text-[28px] min-[1610px]:text-[32px] font-bold leading-tight tracking-tight text-white mb-3 min-[1200px]:mb-4 group-hover:text-[#93C5FD] transition-colors line-clamp-2">
                {FEATURED_NOTE.titulo}
              </h2>
              <p className="text-white/60 text-sm min-[1200px]:text-[17px] leading-relaxed mb-6 line-clamp-3">
                {FEATURED_NOTE.extracto}
              </p>
              <Link
                href={`/articulando/${FEATURED_NOTE.slug}`}
                className="inline-flex items-center gap-2 text-[#4A8EFF] font-semibold text-sm min-[1200px]:text-[16px] hover:gap-4 transition-all duration-200"
              >
                Leer nota completa
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade to white */}
      <div className="h-16 min-[1200px]:h-24 bg-gradient-to-b from-[#05162D] to-white" />
    </section>
  );
}

