import Image from "next/image";
import NavbarArticulando from "@/components/NavbarArticulando";
import ArticleHero from "@/components/article/ArticleHero";
import OpinionForm from "@/components/article/OpinionForm";
import CommentsSection from "@/components/article/CommentsSection";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getArticuloPorSlug,
  getAllArticuloSlugs,
  getStrapiImageUrl,
  formatDate,
  getAutorNombre,
} from "@/lib/strapi";
import { getComentarios } from "@/lib/supabase";

export async function generateStaticParams() {
  const slugs = await getAllArticuloSlugs();
  return slugs;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = await getArticuloPorSlug(slug);
  const article = Array.isArray(data) ? data[0] : null;
  if (!article) return { title: "Artículo no encontrado" };

  return {
    title: `${article.titulo} | Articulando ESCP`,
    description: article.extracto ?? "",
    openGraph: {
      title: article.titulo,
      description: article.extracto ?? "",
      images: getStrapiImageUrl(article.imagen_portada)
        ? [{ url: getStrapiImageUrl(article.imagen_portada) }]
        : [],
    },
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;

  const [articuloData, comentarios] = await Promise.all([
    getArticuloPorSlug(slug),
    getComentarios(slug),
  ]);

  const article = Array.isArray(articuloData) ? articuloData[0] : null;
  if (!article) notFound();

  const autorNombre = getAutorNombre(article.autor);
  const portadaUrl = getStrapiImageUrl(article.imagen_portada);
  const avatarUrl = getStrapiImageUrl(article.autor?.avatar);
  const relacionados = Array.isArray(article.articulos_relacionados)
    ? article.articulos_relacionados
    : [];

  return (
    <main className="flex min-h-screen flex-col w-full overflow-hidden bg-white">
      <NavbarArticulando />
      <ArticleHero
        category={article.categoria?.nombre}
        title={article.titulo}
        imageUrl={portadaUrl}
      />

      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-[118px] py-16 flex flex-col lg:flex-row gap-12 xl:gap-24">

        {/* Columna izquierda: Autor y meta */}
        <div className="w-full lg:w-[250px] shrink-0 flex flex-col order-2 lg:order-1">
          <div className="mb-8">
            <div className="flex items-center gap-[29px] mb-3">
              <div className="flex flex-col justify-center h-[72px]">
                <span className="text-[#05162D] text-sm block">Publicado por</span>
                <h3 className="text-[#05162D] text-[24px] font-semibold whitespace-nowrap leading-none mt-1">
                  {autorNombre}
                </h3>
              </div>
              <div className="w-[72px] h-[72px] rounded-full bg-[#E5E7EB] shrink-0 overflow-hidden relative">
                {avatarUrl && (
                  <Image src={avatarUrl} alt={autorNombre} fill className="object-cover" />
                )}
              </div>
            </div>
            {article.autor?.cargo && (
              <p className="text-[#05162D] text-[16px] font-light tracking-[-0.02em] mt-[15px] leading-[30px]">
                {article.autor.cargo}
              </p>
            )}
          </div>

          <div className="w-full md:w-[284px] flex flex-col">
            {article.fecha_publicacion && (
              <div className="pb-4 border-b border-gray-300 mb-4">
                <span className="text-[#667085] text-[16px] font-medium block">
                  Publicado el {formatDate(article.fecha_publicacion)}
                </span>
              </div>
            )}

            {article.tags?.length > 0 && (
              <div className="mb-8">
                <p className="text-[#667085] text-[16px] leading-[28px]">
                  {article.tags.map((tag, index) => (
                    <span key={tag.id ?? index} className="hover:text-primary cursor-pointer transition-colors">
                      #{tag.nombre}{index < article.tags.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
              </div>
            )}

            {/* Redes sociales para compartir */}
            <div className="flex gap-3">
              <button className="w-[48px] h-[48px] rounded-full bg-[#98A2B3] flex items-center justify-center text-white hover:bg-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </button>
              <button className="w-[48px] h-[48px] rounded-full bg-[#98A2B3] flex items-center justify-center text-white hover:bg-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </button>
              <button className="w-[48px] h-[48px] rounded-full bg-[#98A2B3] flex items-center justify-center text-white hover:bg-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </button>
              <button className="w-[48px] h-[48px] rounded-full bg-[#98A2B3] flex items-center justify-center text-white hover:bg-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Columna central: Contenido */}
        <div className="flex-1 max-w-[800px] order-1 lg:order-2">
          {article.contenido && (
            <div
              className="text-[#05162D] text-[16px] font-light tracking-[-0.02em] leading-[30px] prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.contenido }}
            />
          )}
        </div>

        {/* Columna derecha: Relacionados */}
        {relacionados.length > 0 && (
          <div className="w-full lg:w-[300px] xl:w-[350px] shrink-0 order-3">
            <h3 className="text-[#05162D] text-xl font-bold mb-8">
              Conoce más de {article.categoria?.nombre ?? "esta categoría"}
            </h3>
            <div className="flex flex-col gap-6">
              {relacionados.map((item, index) => {
                const relImgUrl = getStrapiImageUrl(item.imagen_portada);
                return (
                  <Link
                    href={`/articulando/${item.slug}`}
                    key={item.id ?? index}
                    className="group flex gap-4 items-start"
                  >
                    <span className="text-[#F2F4F7] text-[56px] font-bold leading-none -mt-2 group-hover:text-primary transition-colors">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1 flex flex-col gap-2">
                      {relImgUrl && (
                        <div className="w-[120px] h-[70px] bg-gray-200 rounded overflow-hidden relative shrink-0">
                          <Image src={relImgUrl} alt={item.titulo} fill className="object-cover" />
                        </div>
                      )}
                      <h4 className="text-[#05162D] text-sm font-medium leading-tight group-hover:text-primary transition-colors">
                        {item.titulo}
                      </h4>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <OpinionForm articuloSlug={slug} />
      <CommentsSection comentarios={comentarios ?? []} />
    </main>
  );
}
