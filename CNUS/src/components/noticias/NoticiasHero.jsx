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
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#05162D] via-[#0A2A5E] to-[#0E52C6]">
      <div className="w-full h-1.5 bg-gradient-to-r from-[#0E52C6] via-[#4A8EFF] to-[#0E52C6]" />

      <div className="relative w-full max-w-[1920px] mx-auto px-4 tablet:px-7.5 laptop:px-20 desktop:px-29.5 mt-22.5 tablet:mt-29">
        <div className="flex flex-col laptop:flex-row items-center gap-10 laptop:gap-16 desktop:gap-24 py-14 laptop:py-20 desktop:py-28">
          <div className="flex flex-col flex-1 text-white order-2 laptop:order-1">
            <div className="flex items-center gap-3 mb-5 laptop:mb-7">
              <div className="w-8 h-0.5 bg-[#F59E0B]" />
              <span className="text-[#F59E0B] font-semibold text-sm laptop:text-[16px] desktop:text-[18px] uppercase tracking-widest">
                Noticias y Eventos
              </span>
            </div>

            <h1 className="text-4xl laptop:text-[56px] desktop:text-[72px] font-black leading-none tracking-[-1.5px] desktop:tracking-[-2px] mb-6 laptop:mb-8">
              Actualidad <br className="hidden laptop:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-[#FBBF24]">
                sindical
              </span>
            </h1>

            <p className="text-white/60 text-base laptop:text-[18px] desktop:text-[20px] leading-relaxed mb-8 laptop:mb-10 max-w-[680px]">
              Mantente al día con las últimas noticias, eventos y actividades de la Escuela Sindical del Caribe y Postgraduados, así como del movimiento sindical dominicano e internacional.
            </p>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[24px] p-6 laptop:p-8 desktop:p-10 hover:bg-white/10 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs laptop:text-[14px] font-semibold text-[#F59E0B] uppercase tracking-wider">
                  {FEATURED_NEWS.categoria}
                </span>
                <span className="text-white/30">•</span>
                <span className="text-xs laptop:text-[14px] text-white/50">
                  {FEATURED_NEWS.fecha}
                </span>
              </div>
              <h2 className="text-xl laptop:text-[28px] desktop:text-[32px] font-bold leading-tight tracking-tight text-white mb-3 laptop:mb-4 group-hover:text-[#FBBF24] transition-colors line-clamp-2">
                {FEATURED_NEWS.titulo}
              </h2>
              <p className="text-white/60 text-sm laptop:text-[17px] leading-relaxed mb-6 line-clamp-3">
                {FEATURED_NEWS.extracto}
              </p>
              <Link
                href={`/articulando/${FEATURED_NEWS.slug}`}
                className="inline-flex items-center gap-2 text-[#FBBF24] font-semibold text-sm laptop:text-[16px] hover:gap-4 transition-all duration-200"
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
              <div className="absolute inset-0 m-auto w-[220px] h-[220px] laptop:w-[300px] laptop:h-[300px] desktop:w-[380px] desktop:h-[380px] rounded-full border-2 border-[#F59E0B]/30 scale-110" />
              <div className="absolute inset-0 m-auto w-[220px] h-[220px] laptop:w-[300px] laptop:h-[300px] desktop:w-[380px] desktop:h-[380px] rounded-full border border-[#FBBF24]/20 scale-125" />

              <div className="relative w-[200px] h-[200px] laptop:w-[270px] laptop:h-[270px] desktop:w-[340px] desktop:h-[340px] rounded-full overflow-hidden border-4 border-[#F59E0B] shadow-[0_0_60px_rgba(245,158,11,0.3)] bg-gradient-to-br from-[#F59E0B] via-[#D97706] to-[#92400E] flex items-center justify-center shrink-0">
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
              <span className="text-[#F59E0B] font-medium text-sm laptop:text-[16px] desktop:text-[18px] mt-1">
                ESCP — Noticias
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="h-16 laptop:h-24 bg-gradient-to-b from-[#0E52C6] to-white" />
    </section>
  );
}
