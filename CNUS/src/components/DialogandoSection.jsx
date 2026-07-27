import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getStrapiImageUrl, formatDate } from "@/lib/strapi";

export default function DialogandoSection({ articulos = [] }) {
  if (articulos.length === 0) return null;

  const mainArticle = articulos[0];
  const secondaryArticles = articulos.slice(1, 4);

  const mainImageUrl = getStrapiImageUrl(mainArticle.imagen_portada);

  return (
    <section className="w-full max-w-[1680px] mx-auto px-4 tablet:px-[60px] laptop:px-20 laptop:px-[80px] pt-0 pb-0 mb-[200px] mt-[200px]">
      <div className="flex flex-col sm:flex-row items-baseline sm:items-center justify-between mb-10 laptop:mb-6">
        <h2 className="text-[32px] tablet:text-[44px] laptop:text-[36px] font-bold text-[#05162D]">Dialogando</h2>
        <Link
          href="/articulando"
          className="text-primary font-medium flex items-center gap-2 hover:underline mt-3 sm:mt-0 text-[16px] laptop:text-[16px]"
        >
          Ver todo <ArrowRight size={18} />
        </Link>
      </div>

      <div className="flex flex-col laptop:flex-row laptop:flex-row gap-10 laptop:gap-6 laptop:gap-6 items-start laptop:items-stretch">

        {/* Artículo principal */}
        <Link
          href={`/articulando/${mainArticle.slug}`}
          className="flex flex-col gap-6 laptop:gap-4 w-full laptop:w-[50%] laptop:w-[55%] shrink-0 group"
        >
          <div className="w-full h-[300px] tablet:h-[380px] laptop:h-[360px]! laptop:h-[490px] bg-gray-200 rounded-2xl overflow-hidden relative">
            {mainImageUrl && (
              <Image
                src={mainImageUrl}
                alt={mainArticle.titulo}
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />
            )}
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col items-start gap-0.5 mb-1.5 laptop:mb-1.5">
              {mainArticle.categoria?.nombre && (
                <span className="text-sm laptop:text-[13px] font-medium text-gray-500 bg-gray-100 w-fit px-3 py-1 laptop:px-3 laptop:py-0.5 rounded-full">
                  {mainArticle.categoria.nombre}
                </span>
              )}
              {mainArticle.fecha_publicacion && (
                <span className="text-sm laptop:text-[13px] text-gray-500 font-medium">
                  {formatDate(mainArticle.fecha_publicacion)}
                </span>
              )}
            </div>
            <h3 className="text-[34px] laptop:text-[24px] font-bold text-[#05162D] leading-snug group-hover:text-primary transition cursor-pointer mb-3 laptop:mb-2 laptop:line-clamp-none">
              {mainArticle.titulo}
            </h3>
            {mainArticle.extracto && (
              <p className="text-[20px] laptop:text-[15px] text-gray-600 line-clamp-2 laptop:line-clamp-3">{mainArticle.extracto}</p>
            )}
          </div>
        </Link>

        {/* Artículos secundarios */}
        <div className="flex flex-col gap-6 laptop:gap-4 flex-1 justify-between w-full">
          {secondaryArticles.map((article) => {
            const imgUrl = getStrapiImageUrl(article.imagen_portada);
            return (
              <Link
                key={article.id}
                href={`/articulando/${article.slug}`}
                className="flex flex-col sm:flex-row gap-6 laptop:gap-4 items-start laptop:items-center group cursor-pointer w-full"
              >
                <div className="w-full sm:w-[260px] laptop:w-[240px]! h-[200px] sm:h-[235px] laptop:h-[180px]! bg-gray-200 rounded-xl overflow-hidden shrink-0 relative">
                  {imgUrl && (
                    <Image
                      src={imgUrl}
                      alt={article.titulo}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />
                  )}
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex flex-col items-start gap-0.5 mb-1.5 laptop:mb-1">
                    {article.categoria?.nombre && (
                      <span className="text-xs laptop:text-[12px] font-medium text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded-full inline-block">
                        {article.categoria.nombre}
                      </span>
                    )}
                    {article.fecha_publicacion && (
                      <span className="text-xs laptop:text-[12px] text-gray-500 font-medium">
                        {formatDate(article.fecha_publicacion)}
                      </span>
                    )}
                  </div>
                  <h4 className="font-semibold text-[#05162D] leading-snug text-xl tablet:text-[24px] laptop:text-[17px] line-clamp-3 laptop:line-clamp-none group-hover:opacity-70 transition-opacity">
                    {article.titulo}
                  </h4>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
