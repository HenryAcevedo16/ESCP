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
    <section className="w-full max-w-[1680px] mx-auto px-4 tablet:px-[60px] min-[1200px]:max-[1609px]:px-20 desktop:px-[80px] pt-16 tablet:pt-24 min-[1200px]:max-[1609px]:pt-0 min-[1200px]:max-[1609px]:pb-0 mb-[100px] min-[1200px]:max-[1609px]:mb-[200px] desktop:mb-[200px] mt-[100px] min-[1200px]:max-[1609px]:mt-[200px] desktop:mt-[200px]">
      <div className="flex flex-col sm:flex-row items-baseline sm:items-center justify-between mb-10 min-[1200px]:max-[1609px]:mb-6">
        <h2 className="text-[32px] tablet:text-[44px] min-[1200px]:max-[1609px]:text-[36px] font-bold text-[#05162D]">Dialogando</h2>
        <Link
          href="/articulando"
          className="text-primary font-medium flex items-center gap-2 hover:underline mt-3 sm:mt-0 text-[16px] min-[1200px]:max-[1609px]:text-[16px]"
        >
          Ver todo <ArrowRight size={18} />
        </Link>
      </div>

      <div className="flex flex-col desktop:flex-row min-[1200px]:max-[1609px]:flex-row gap-10 min-[1200px]:max-[1609px]:gap-6 desktop:gap-6 items-start min-[1200px]:max-[1609px]:items-stretch">

        {/* Artículo principal */}
        <Link
          href={`/articulando/${mainArticle.slug}`}
          className="flex flex-col gap-6 min-[1200px]:max-[1609px]:gap-4 w-full min-[1200px]:max-[1609px]:w-[50%] desktop:w-[55%] shrink-0 group"
        >
          <div className="w-full h-[300px] tablet:h-[380px] min-[1200px]:max-[1609px]:h-[360px]! desktop:h-[490px] bg-gray-200 rounded-2xl overflow-hidden relative">
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
            <div className="flex flex-col items-start gap-0.5 mb-1.5 min-[1200px]:max-[1609px]:mb-1.5">
              {mainArticle.categoria?.nombre && (
                <span className="text-sm min-[1200px]:max-[1609px]:text-[13px] font-medium text-gray-500 bg-gray-100 w-fit px-3 py-1 min-[1200px]:max-[1609px]:px-3 min-[1200px]:max-[1609px]:py-0.5 rounded-full">
                  {mainArticle.categoria.nombre}
                </span>
              )}
              {mainArticle.fecha_publicacion && (
                <span className="text-sm min-[1200px]:max-[1609px]:text-[13px] text-gray-500 font-medium">
                  {formatDate(mainArticle.fecha_publicacion)}
                </span>
              )}
            </div>
            <h3 className="text-[34px] min-[1200px]:max-[1609px]:text-[24px] font-bold text-[#05162D] leading-snug group-hover:text-primary transition cursor-pointer mb-3 min-[1200px]:max-[1609px]:mb-2 min-[1200px]:max-[1609px]:line-clamp-none">
              {mainArticle.titulo}
            </h3>
            {mainArticle.extracto && (
              <p className="text-[20px] min-[1200px]:max-[1609px]:text-[15px] text-gray-600 line-clamp-2 min-[1200px]:max-[1609px]:line-clamp-3">{mainArticle.extracto}</p>
            )}
          </div>
        </Link>

        {/* Artículos secundarios */}
        <div className="flex flex-col gap-6 min-[1200px]:max-[1609px]:gap-4 flex-1 justify-between w-full">
          {secondaryArticles.map((article) => {
            const imgUrl = getStrapiImageUrl(article.imagen_portada);
            return (
              <Link
                key={article.id}
                href={`/articulando/${article.slug}`}
                className="flex flex-col sm:flex-row gap-6 min-[1200px]:max-[1609px]:gap-4 items-start min-[1200px]:max-[1609px]:items-center group cursor-pointer w-full"
              >
                <div className="w-full sm:w-[260px] min-[1200px]:max-[1609px]:w-[240px]! h-[200px] sm:h-[235px] min-[1200px]:max-[1609px]:h-[180px]! bg-gray-200 rounded-xl overflow-hidden shrink-0 relative">
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
                  <div className="flex flex-col items-start gap-0.5 mb-1.5 min-[1200px]:max-[1609px]:mb-1">
                    {article.categoria?.nombre && (
                      <span className="text-xs min-[1200px]:max-[1609px]:text-[12px] font-medium text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded-full inline-block">
                        {article.categoria.nombre}
                      </span>
                    )}
                    {article.fecha_publicacion && (
                      <span className="text-xs min-[1200px]:max-[1609px]:text-[12px] text-gray-500 font-medium">
                        {formatDate(article.fecha_publicacion)}
                      </span>
                    )}
                  </div>
                  <h4 className="font-semibold text-[#05162D] leading-snug text-xl tablet:text-[24px] min-[1200px]:max-[1609px]:text-[17px] line-clamp-3 min-[1200px]:max-[1609px]:line-clamp-none group-hover:opacity-70 transition-opacity">
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
