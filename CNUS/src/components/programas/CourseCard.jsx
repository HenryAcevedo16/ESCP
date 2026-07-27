import Image from "next/image";
import Link from "next/link";
import { getStrapiImageUrl } from "@/lib/strapi";

export default function CourseCard({ titulo, descripcion, modalidad, slug, imagen }) {
  const imagenUrl = getStrapiImageUrl(imagen);
  const href = slug ? `/programas/${slug}` : "#";

  return (
    <div className="w-full h-auto min-h-0 sm:min-h-[480px] laptop:min-h-[520px] bg-white rounded-2xl sm:rounded-3xl p-0 sm:p-6 flex flex-col border border-transparent hover:border-primary transition-all duration-300 cursor-pointer group">
      {/* Imagen del curso */}
      <div className="w-full h-[220px] sm:h-[200px] tablet:h-[230px] laptop:h-[256px] mx-auto bg-gray-200 rounded-2xl mb-4 sm:mb-6 shrink-0 overflow-hidden relative">
        {imagenUrl && (
          <Image
            src={imagenUrl}
            alt={titulo || "Curso"}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow text-left">
        {modalidad && (
          <span className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
            {modalidad}
          </span>
        )}
        <h3 className="font-bold text-[24px] laptop:text-[28px] laptop:text-[18px] text-[#05162D] mb-3 sm:mb-4 leading-snug group-hover:text-primary transition-colors">
          {titulo}
        </h3>
        {descripcion && (
          <p className="text-[#445163] text-[15px] sm:text-[16px] laptop:text-[13px] mb-5 sm:mb-6 flex-grow line-clamp-3">
            {descripcion}
          </p>
        )}
        <Link
          href={href}
          className="w-full h-[54px] sm:h-[56px] laptop:h-[69px] laptop:h-[44px] bg-primary hover:bg-primary-dark text-white font-medium py-3 laptop:py-2 text-base laptop:text-[14px] rounded-full transition flex items-center justify-center text-center mt-auto"
        >
          Ver detalles
        </Link>
      </div>
    </div>
  );
}
