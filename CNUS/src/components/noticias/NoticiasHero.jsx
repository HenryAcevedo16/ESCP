import Link from "next/link";

const FEATURED_NEWS = {
  id: 1,
  titulo: "ESCP y OIT firman acuerdo para fortalecer la formación sindical en la región Caribe",
  extracto:
    "La Alianza Estratégica para la Formación Sindical en la Región Caribe representa un hito en la cooperación internacional para el fortalecimiento de las capacidades de los líderes sindicales de República Dominicana y países vecinos.",
  fecha: "24 de julio de 2026",
  categoria: "Convenio internacional",
  slug: "escp-oit-acuerdo-formacion-sindical-caribe",
};

export default function NoticiasHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#05162D] via-[#1A2A3A] to-[#2D4A5E] mb-16 laptop:mb-32 desktop:mb-50">
      <div className="w-full h-1.5 bg-gradient-to-r from-[#06B6D4] via-[#22D3EE] to-[#06B6D4]" />

      <div className="relative w-full max-w-[1920px] mx-auto px-4 tablet:px-7.5 laptop:px-20 desktop:px-29.5 mt-22.5 tablet:mt-29">
        <div className="flex flex-col laptop:flex-row items-center gap-10 laptop:gap-16 desktop:gap-24 py-14 laptop:py-20 desktop:py-28">
          <div className="flex flex-col flex-1 text-white order-2 laptop:order-1">
            <h1 className="text-4xl laptop:text-[56px] desktop:text-[72px] font-black leading-none tracking-[-1.5px] desktop:tracking-[-2px] mb-6 laptop:mb-8">
              Actualidad <br className="hidden laptop:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#67E8F9]">
                sindical
              </span>
            </h1>



            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[24px] p-6 laptop:p-8 desktop:p-10 hover:bg-white/10 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs laptop:text-[14px] font-semibold text-[#22D3EE] uppercase tracking-wider">
                  {FEATURED_NEWS.categoria}
                </span>
                <span className="text-white/30">•</span>
                <span className="text-xs laptop:text-[14px] text-white/50">
                  {FEATURED_NEWS.fecha}
                </span>
              </div>
              <h2 className="text-xl laptop:text-[28px] desktop:text-[32px] font-bold leading-tight tracking-tight text-white mb-3 laptop:mb-4 group-hover:text-[#22D3EE] transition-colors line-clamp-2">
                {FEATURED_NEWS.titulo}
              </h2>
              <p className="text-white/60 text-sm laptop:text-[17px] leading-relaxed mb-6 line-clamp-3">
                {FEATURED_NEWS.extracto}
              </p>
              <Link
                href={`/articulando/${FEATURED_NEWS.slug}`}
                className="inline-flex items-center gap-2 text-[#22D3EE] font-semibold text-sm laptop:text-[16px] hover:gap-4 transition-all duration-200"
              >
                Leer noticia completa
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center shrink-0 order-1 laptop:order-2">
            <div className="relative">
              <div className="relative w-[200px] h-[200px] laptop:w-[270px] laptop:h-[270px] desktop:w-[340px] desktop:h-[340px] rounded-full overflow-hidden border-4 border-[#22D3EE] shadow-[0_0_60px_rgba(6,182,212,0.3)] bg-gradient-to-br from-[#06B6D4] via-[#0891B2] to-[#0E7490] flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white/20 laptop:w-[120px] laptop:h-[120px] desktop:w-[140px] desktop:h-[140px]">
                  <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9h2"/>
                  <path d="M18 14h-8"/>
                  <path d="M15 18h-5"/>
                  <path d="M10 6h8v4h-8V6Z"/>
                </svg>
              </div>
            </div>

            <div className="mt-5 flex flex-col items-center text-center">
              <span className="text-white font-bold text-lg laptop:text-[22px] desktop:text-[26px] tracking-tight">
                Actualidad Sindical
              </span>
              <span className="text-[#22D3EE] font-medium text-sm laptop:text-[16px] desktop:text-[18px] mt-1">
                ESCP — Noticias
              </span>
            </div>

          </div>
        </div>
      </div>


    </section>
  );
}
