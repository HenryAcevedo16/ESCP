import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getStrapiImageUrl } from "@/lib/strapi";

export default function CursosSection({ cursos = [] }) {
  if (cursos.length === 0) return null;

  return (
    <section className="w-full h-auto min-h-[902px] laptop:min-h-0 bg-[#f8f9fa] py-12 tablet:py-20 mb-[200px]">
      <div className="max-w-[1728px] mx-auto px-4 tablet:px-7.5 laptop:px-12 laptop:px-[80px] desktop:px-6">
        {/* Header */}
        <div className="flex flex-col tablet:flex-row items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Cursos</h2>
          <Link
            href="/programas"
            className="text-primary font-medium flex items-center gap-2 hover:underline mt-4 tablet:mt-0"
          >
            Ver todos <ArrowRight size={18} />
          </Link>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-6">
          {cursos.map((curso, index) => {
            const imagenUrl = getStrapiImageUrl(curso.imagen);
            return (
              <div
                key={curso.id}
                className={`w-full h-auto min-h-0 sm:min-h-[480px] laptop:min-h-[520px] bg-white rounded-2xl sm:rounded-3xl p-0 sm:p-6 flex flex-col border border-transparent hover:border-primary transition-all duration-300 cursor-pointer ${
                  index === 3 ? "laptop:hidden desktop:flex" : ""
                }`}
              >
                {/* Imagen del curso */}
                <div className="w-full h-[220px] sm:h-[200px] tablet:h-[230px] laptop:h-[256px] mx-auto bg-gray-200 rounded-2xl mb-4 sm:mb-6 shrink-0 overflow-hidden relative">
                  {imagenUrl && (
                    <Image
                      src={imagenUrl}
                      alt={curso.titulo}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow px-6 sm:px-0">
                  {curso.modalidad && (
                    <span className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                      {curso.modalidad}
                    </span>
                  )}
                  <h3 className="font-bold text-[24px] laptop:text-[28px] laptop:text-[16px] laptop:mb-2 text-[#05162D] mb-3 sm:mb-4 leading-snug">
                    {curso.titulo}
                  </h3>
                  {curso.descripcion && (
                    <p className="text-[#445163] text-[15px] sm:text-[16px] laptop:text-[13px] mb-5 sm:mb-6 flex-grow line-clamp-3">
                      {curso.descripcion}
                    </p>
                  )}
                  <Link
                    href={`/programas/${curso.slug}`}
                    className="w-full h-[54px] sm:h-[56px] laptop:h-[69px] laptop:h-[40px] bg-primary hover:bg-primary-dark text-white font-medium py-3 laptop:py-1.5 text-base laptop:text-[13px] rounded-full transition flex items-center justify-center mt-auto"
                  >
                    Ver detalles
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
