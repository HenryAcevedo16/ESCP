import NavbarArticulando from "@/components/NavbarArticulando";
import ArticulosHero from "@/components/articulos/ArticulosHero";
import ArticulosGrid from "@/components/articulos/ArticulosGrid";
import { getArticulosPorCategoriaPaginado, getArticulosPorCategoria } from "@/lib/strapi";

export const metadata = {
  title: "Pensamiento Complejo | Articulando | ESCP",
  description:
    "Artículos de opinión, análisis y reflexión elaborados por la comunidad académica y líderes sindicales sobre los temas que definen la agenda sociopolítica del país.",
};

const PAGE_SIZE = 6;

export default async function ArticulosPage({ searchParams }) {
  const params = await searchParams;
  const page = Math.max(1, parseInt(params?.page ?? '1', 10));

  const [featuredData, pageData] = await Promise.all([
    getArticulosPorCategoria("pensamiento-complejo", 1),
    getArticulosPorCategoriaPaginado("pensamiento-complejo", page, PAGE_SIZE),
  ]);

  const featured = Array.isArray(featuredData) ? featuredData[0] ?? null : null;

  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      <NavbarArticulando />
      <ArticulosHero featuredNote={featured} />
      <ArticulosGrid
        notas={pageData.data}
        currentPage={page}
        pageCount={pageData.pageCount}
        total={pageData.total}
        basePath="/articulando/pensamiento-complejo"
      />
    </main>
  );
}

