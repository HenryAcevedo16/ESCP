import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/strapi";
import PaginationLinks from "@/components/ui/PaginationLinks";

function NoticiaCard({ noticia }) {
  return (
    <Link
      href={`/articulando/${noticia.slug}`}
      className="group flex flex-col bg-white border border-[#E8ECF0] rounded-[20px] laptop:rounded-[28px] overflow-hidden hover:shadow-[0_12px_48px_rgba(5,22,45,0.10)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
    >
      <div className="w-full h-1 bg-gradient-to-r from-[#06B6D4] to-[#22D3EE] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex flex-col flex-1 p-5 laptop:p-7 desktop:p-8">
        <div className="flex items-center gap-2 flex-wrap mb-4">
          <span className="inline-block text-[11px] laptop:text-[13px] font-semibold px-3 py-1 rounded-full bg-[#06B6D4]/10 text-[#0891B2]">
            {noticia.categoria?.nombre || "Noticias y Eventos"}
          </span>
        </div>

        <h3 className="font-bold text-[#05162D] text-base laptop:text-[20px] desktop:text-[22px] leading-snug tracking-tight mb-3 line-clamp-3 group-hover:text-[#0891B2] transition-colors">
          {noticia.titulo}
        </h3>

        <p className="text-[#555B63] text-sm laptop:text-[15px] leading-relaxed line-clamp-3 flex-1">
          {noticia.extracto}
        </p>

        <div className="flex items-center justify-between mt-5 pt-4 border-t border-[#F0F2F5]">
          <span className="text-[#777C82] text-xs laptop:text-[14px]">
            {noticia.fecha_publicacion ? formatDate(noticia.fecha_publicacion) : ""}
          </span>
          <span className="flex items-center gap-1 text-[#0891B2] font-semibold text-xs laptop:text-[14px] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Leer
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function NoticiasGrid({ notas = [], currentPage = 1, pageCount = 1, total = 0, basePath = "" }) {
  return (
    <section className="w-full px-4 tablet:px-7.5 laptop:px-20 desktop:px-29.5 max-w-[1920px] mx-auto pb-[200px]">

      <div className="flex flex-col laptop:flex-row laptop:items-end justify-between gap-4 mb-10 laptop:mb-14">
        <div>
          <h2 className="text-3xl laptop:text-[44px] desktop:text-[52px] font-black text-[#05162D] tracking-tight leading-none">
            Todas las noticias
          </h2>
        </div>
        <span className="text-[#777C82] text-sm laptop:text-[16px]">
          {total} noticias publicadas
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 laptop:grid-cols-3 gap-5 laptop:gap-6 desktop:gap-8 mb-12 laptop:mb-16">
        {notas.map((noticia) => (
          <NoticiaCard key={noticia.id} noticia={noticia} />
        ))}
      </div>

      <PaginationLinks currentPage={currentPage} pageCount={pageCount} basePath={basePath} />

    </section>
  );
}
