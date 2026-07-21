import Image from "next/image";
import Link from "next/link";
import { getStrapiImageUrl, formatDate, getAutorNombre } from "@/lib/strapi";

export default function CategoryGrid({ sectionTitle, mainArticle, secondaryArticles = [] }) {
  if (!mainArticle) return null;

  const mainImageUrl = getStrapiImageUrl(mainArticle.imagen_portada);

  return (
    <section className="w-full px-4 md:px-[60px] desktop:px-[80px] min-[1610px]:px-[120px] max-w-[1920px] mx-auto flex flex-col">

      {/* Título de sección */}
      <div className="flex justify-between items-center mb-6 md:mb-10">
        <h2 className="text-2xl md:text-[44px] font-black text-[#05162D] tracking-[-0.88px]">
          {sectionTitle}
        </h2>
        <a href="#" className="text-[#043F9F] font-semibold hover:underline text-base md:text-[20px] shrink-0 ml-4">
          Ver todas →
        </a>
      </div>

      {/* Layout principal */}
      <div className="flex flex-col xl:flex-row gap-6">

        {/* Tarjeta grande */}
        <Link
          href={`/articulando/${mainArticle.slug}`}
          className="flex flex-col group cursor-pointer w-full xl:w-[970px] shrink-0 relative rounded-[20px] md:rounded-[40px] overflow-hidden"
          style={{ minHeight: "300px" }}
        >
          <div className="w-full h-[260px] sm:h-[380px] md:h-[500px] xl:h-[727px] relative bg-[#05162D]">
            {mainImageUrl ? (
              <Image
                src={mainImageUrl}
                alt={mainArticle.titulo}
                fill
                className="object-cover group-hover:scale-105 transition duration-700"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-[#0E52C6] via-[#043F9F] to-[#05162D] flex items-center justify-center">
                <span className="text-white/10 text-[200px] font-black leading-none select-none">
                  {mainArticle.titulo?.charAt(0)?.toUpperCase()}
                </span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0.2)] to-transparent" />
            <div className="relative z-10 flex flex-col justify-end p-6 md:p-[50px] h-full text-white">
              <div className="flex items-center gap-3 mb-2 md:mb-3">
                {mainArticle.categoria?.nombre && (
                  <span className="text-sm md:text-[20px] font-medium opacity-90">
                    {mainArticle.categoria.nombre}
                  </span>
                )}
                {mainArticle.categoria?.nombre && mainArticle.fecha_publicacion && (
                  <span className="text-sm md:text-[20px] font-medium opacity-90">•</span>
                )}
                {mainArticle.fecha_publicacion && (
                  <span className="text-sm md:text-[20px] font-medium opacity-90">
                    {formatDate(mainArticle.fecha_publicacion)}
                  </span>
                )}
              </div>
              <h3 className="text-xl md:text-[48px] font-bold leading-tight mb-2 group-hover:text-gray-200 transition-colors tracking-tight md:tracking-[-0.96px] line-clamp-3">
                {mainArticle.titulo}
              </h3>
            </div>
          </div>
        </Link>

        {/* 3 Tarjetas pequeñas */}
        <div className="flex flex-col gap-4 md:gap-6 w-full xl:flex-1 justify-between">
          {secondaryArticles.slice(0, 3).map((article) => {
            const imgUrl = getStrapiImageUrl(article.imagen_portada);
            const autorNombre = getAutorNombre(article.autor);
            return (
              <Link
                key={article.id}
                href={`/articulando/${article.slug}`}
                className="flex items-center gap-4 md:gap-[30px] group cursor-pointer"
              >
                <div className="w-[120px] h-[90px] sm:w-[180px] sm:h-[130px] md:w-[260px] md:h-[180px] xl:w-[320px] xl:h-[226px] rounded-[16px] md:rounded-[30px] bg-[#05162D] overflow-hidden shrink-0 relative">
                  {imgUrl ? (
                    <Image
                      src={imgUrl}
                      alt={article.titulo}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0E52C6] to-[#05162D] flex items-center justify-center">
                      <span className="text-white/20 text-5xl font-black select-none">
                        {article.titulo?.charAt(0)?.toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex flex-col flex-1 justify-center py-1">
                  {article.categoria?.nombre && (
                    <span className="text-xs md:text-[16px] font-medium text-[#777C82] mb-1 md:mb-[8px]">
                      {article.categoria.nombre}
                    </span>
                  )}
                  <h4 className="font-bold text-[#05162D] text-sm md:text-[22px] xl:text-[28px] leading-tight tracking-tight md:tracking-[-0.56px] line-clamp-3 group-hover:text-[#043F9F] transition-colors mb-1 md:mb-3">
                    {article.titulo}
                  </h4>
                  {(autorNombre || article.fecha_publicacion) && (
                    <span className="text-xs md:text-[16px] text-[#777C82] mt-auto hidden sm:block">
                      {autorNombre && `Publicado por ${autorNombre}`}
                      {autorNombre && article.fecha_publicacion && " | "}
                      {article.fecha_publicacion && formatDate(article.fecha_publicacion)}
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
