import Image from "next/image";
import Link from "next/link";
import { getStrapiImageUrl } from "@/lib/strapi";

export default function CourseCard({ titulo, descripcion, modalidad, slug, imagen }) {
  const imagenUrl = getStrapiImageUrl(imagen);

  return (
    <div className="flex flex-col">
      {/* Imagen */}
      <div className="w-full aspect-[4/3] bg-gray-200 rounded-2xl mb-4 relative overflow-hidden flex items-end">
        {imagenUrl && (
          <Image
            src={imagenUrl}
            alt={titulo}
            fill
            className="object-cover"
          />
        )}
        {/* Etiqueta de modalidad */}
        {modalidad && (
          <span className="absolute bottom-4 left-4 bg-[#8da5d7] text-white text-[10px] uppercase font-bold tracking-wide px-3 py-1 rounded-full z-10">
            {modalidad}
          </span>
        )}
      </div>

      {/* Contenido */}
      <h3 className="font-bold text-lg text-[#0a1a3a] mb-2 leading-tight">
        {titulo}
      </h3>
      {descripcion && (
        <p className="text-gray-500 text-xs mb-4 line-clamp-4 leading-relaxed">
          {descripcion}
        </p>
      )}

      {/* Botón */}
      <Link
        href={slug ? `/programas/${slug}` : "#"}
        className="mt-auto w-full bg-primary hover:bg-primary-dark text-white font-semibold py-2.5 rounded-full transition-colors text-sm text-center"
      >
        Ver curso
      </Link>
    </div>
  );
}
