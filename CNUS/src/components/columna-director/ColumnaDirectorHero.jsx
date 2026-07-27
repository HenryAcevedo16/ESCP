import Link from "next/link";

const FEATURED_COLUMN = {
  id: 1,
  titulo: "La reforma que viene: por qué el diálogo social es la única vía posible",
  extracto:
    "En esta primera entrega de la columna del director, reflexiono sobre el momento histórico que vive el movimiento sindical dominicano frente a la reforma laboral y la necesidad de construir consensos.",
  fecha: "25 de julio de 2026",
  categoria: "Columna",
  slug: "reforma-dialogo-social-unica-via",
};

export default function ColumnaDirectorHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#05162D] via-[#2D1B4E] to-[#4C1D95]">
      <div className="w-full h-1.5 bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-[#8B5CF6]" />

      <div className="relative w-full max-w-[1920px] mx-auto px-4 tablet:px-7.5 laptop:px-20 desktop:px-29.5 mt-22.5 tablet:mt-29">
        <div className="flex flex-col laptop:flex-row items-center gap-10 laptop:gap-16 desktop:gap-24 py-14 laptop:py-20 desktop:py-28">
          <div className="flex flex-col flex-1 text-white order-2 laptop:order-1">
            <div className="flex items-center gap-3 mb-5 laptop:mb-7">
              <div className="w-8 h-0.5 bg-[#A78BFA]" />
              <span className="text-[#A78BFA] font-semibold text-sm laptop:text-[16px] desktop:text-[18px] uppercase tracking-widest">
                La columna del Director
              </span>
            </div>

            <h1 className="text-4xl laptop:text-[56px] desktop:text-[72px] font-black leading-none tracking-[-1.5px] desktop:tracking-[-2px] mb-6 laptop:mb-8">
              La voz del <br className="hidden laptop:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] to-[#C4B5FD]">
                director
              </span>
            </h1>

            <p className="text-white/60 text-base laptop:text-[18px] desktop:text-[20px] leading-relaxed mb-8 laptop:mb-10 max-w-[680px]">
              Artículos, reflexiones y posicionamientos personales del director de la Escuela Sindical del Caribe y Postgraduados sobre la actualidad sociopolítica y el futuro del movimiento sindical.
            </p>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[24px] p-6 laptop:p-8 desktop:p-10 hover:bg-white/10 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs laptop:text-[14px] font-semibold text-[#A78BFA] uppercase tracking-wider">
                  {FEATURED_COLUMN.categoria}
                </span>
                <span className="text-white/30">•</span>
                <span className="text-xs laptop:text-[14px] text-white/50">
                  {FEATURED_COLUMN.fecha}
                </span>
              </div>
              <h2 className="text-xl laptop:text-[28px] desktop:text-[32px] font-bold leading-tight tracking-tight text-white mb-3 laptop:mb-4 group-hover:text-[#A78BFA] transition-colors line-clamp-2">
                {FEATURED_COLUMN.titulo}
              </h2>
              <p className="text-white/60 text-sm laptop:text-[17px] leading-relaxed mb-6 line-clamp-3">
                {FEATURED_COLUMN.extracto}
              </p>
              <Link
                href={`/articulando/${FEATURED_COLUMN.slug}`}
                className="inline-flex items-center gap-2 text-[#A78BFA] font-semibold text-sm laptop:text-[16px] hover:gap-4 transition-all duration-200"
              >
                Leer columna completa
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center shrink-0 order-1 laptop:order-2">
            <div className="relative">
              <div className="absolute inset-0 m-auto w-[220px] h-[220px] laptop:w-[300px] laptop:h-[300px] desktop:w-[380px] desktop:h-[380px] rounded-full border-2 border-[#8B5CF6]/30 scale-110" />
              <div className="absolute inset-0 m-auto w-[220px] h-[220px] laptop:w-[300px] laptop:h-[300px] desktop:w-[380px] desktop:h-[380px] rounded-full border border-[#A78BFA]/20 scale-125" />

              <div className="relative w-[200px] h-[200px] laptop:w-[270px] laptop:h-[270px] desktop:w-[340px] desktop:h-[340px] rounded-full overflow-hidden border-4 border-[#8B5CF6] shadow-[0_0_60px_rgba(139,92,246,0.3)] bg-gradient-to-br from-[#6D28D9] via-[#5B21B6] to-[#4C1D95] flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white/20 laptop:w-[120px] laptop:h-[120px] desktop:w-[140px] desktop:h-[140px]">
                  <path d="M12 20h9"/>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                </svg>
              </div>
            </div>

            <div className="mt-5 flex flex-col items-center text-center">
              <span className="text-white font-bold text-lg laptop:text-[22px] desktop:text-[26px] tracking-tight">
                Juan Carlos Hernández
              </span>
              <span className="text-[#A78BFA] font-medium text-sm laptop:text-[16px] desktop:text-[18px] mt-1">
                Director — ESCP
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="h-16 laptop:h-24 bg-gradient-to-b from-[#4C1D95] to-white" />
    </section>
  );
}
