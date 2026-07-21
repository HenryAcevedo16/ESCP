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
    <section className="w-full max-w-[1680px] mx-auto px-4 tablet:px-[60px] desktop:px-[80px] min-[1610px]:px-6 pt-16 tablet:pt-24 mb-[100px] desktop:mb-[200px] mt-[100px] desktop:mt-[200px]">
      <div className="flex flex-col sm:flex-row items-baseline sm:items-center justify-between mb-10">
        <h2 className="text-[32px] tablet:text-[44px] font-bold text-[#05162D]">Dialogando</h2>
        <Link
          href="/articulando"
          className="text-primary font-medium flex items-center gap-2 hover:underline mt-3 sm:mt-0 text-[16px]"
        >
          Ver todo <ArrowRight size={18} />
        </Link>
      </div>

      <div className="flex flex-col desktop:flex-row gap-10 desktop:gap-6 items-start">

        {/* Artículo principal */}
        <Link
          href={`/articulando/${mainArticle.slug}`}
          className="flex flex-col gap-6 w-full desktop:w-[55%] shrink-0 group"
        >
          <div className="w-full h-[300px] tablet:h-[380px] desktop:h-[490px] bg-gray-200 rounded-2xl overflow-hidden relative">
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
            <div className="flex items-center gap-2 mb-1.5">
              {mainArticle.categoria?.nombre && (
                <span className="text-sm font-medium text-gray-500 bg-gray-100 w-fit px-3 py-1 rounded-full">
                  {mainArticle.categoria.nombre}
                </span>
              )}
              {mainArticle.fecha_publicacion && (
                <span className="text-sm text-gray-400 font-medium">
                  {formatDate(mainArticle.fecha_publicacion)}
                </span>
              )}
            </div>
            <h3 className="text-[34px] font-bold text-[#05162D] leading-tight group-hover:text-primary transition cursor-pointer line-clamp-2 mb-3">
              {mainArticle.titulo}
            </h3>
            {mainArticle.extracto && (
              <p className="text-[20px] text-gray-600 line-clamp-2">{mainArticle.extracto}</p>
            )}
          </div>
        </Link>

        {/* Artículos secundarios */}
        <div className="flex flex-col gap-6 flex-1 justify-start w-full">
          {secondaryArticles.map((article) => {
            const imgUrl = getStrapiImageUrl(article.imagen_portada);
            return (
              <Link
                key={article.id}
                href={`/articulando/${article.slug}`}
                className="flex flex-col sm:flex-row gap-6 items-start group cursor-pointer w-full"
              >
                <div className="w-full sm:w-[260px] h-[200px] sm:h-[235px] bg-gray-200 rounded-xl overflow-hidden shrink-0 relative">
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
                  <div className="flex items-center gap-2 mb-1.5">
                    {article.categoria?.nombre && (
                      <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full inline-block">
                        {article.categoria.nombre}
                      </span>
                    )}
                    {article.fecha_publicacion && (
                      <span className="text-xs text-gray-400 font-medium">
                        {formatDate(article.fecha_publicacion)}
                      </span>
                    )}
                  </div>
                  <h4 className="font-semibold text-[#05162D] leading-tight text-xl tablet:text-[24px] line-clamp-3 group-hover:opacity-70 transition-opacity">
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
