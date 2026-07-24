import Image from "next/image";
import Link from "next/link";
import { getStrapiImageUrl } from "@/lib/strapi";

export default function CourseCard({ titulo, descripcion, modalidad, slug, imagen }) {
  const imagenUrl = getStrapiImageUrl(imagen);
  const href = slug ? `/programas/${slug}` : "#";

  return (
    <div className="w-full h-auto min-h-[520px] bg-white rounded-3xl p-4 flex flex-col border border-transparent hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer group">
      {/* Imagen del curso */}
      <div className="w-full h-[200px] tablet:h-[230px] desktop:h-[256px] mx-auto bg-gray-200 rounded-2xl mb-6 shrink-0 overflow-hidden relative">
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
        <h3 className="font-bold text-[28px] min-[1200px]:max-[1609px]:text-[18px] text-[#05162D] mb-4 leading-snug group-hover:text-primary transition-colors">
          {titulo}
        </h3>
        {descripcion && (
          <p className="text-[#445163] text-[16px] min-[1200px]:max-[1609px]:text-[13px] mb-6 flex-grow line-clamp-3">
            {descripcion}
          </p>
        )}
        <Link
          href={href}
          className="w-full h-[69px] min-[1200px]:max-[1609px]:h-[44px] bg-primary hover:bg-primary-dark text-white font-medium py-3 min-[1200px]:max-[1609px]:py-2 min-[1200px]:max-[1609px]:text-[14px] rounded-full transition flex items-center justify-center text-center mt-auto"
        >
          Ver detalles
        </Link>
      </div>
    </div>
  );
}
