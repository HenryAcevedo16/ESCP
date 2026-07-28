import NavbarArticulando from "@/components/NavbarArticulando";
import NoticiasHero from "@/components/noticias/NoticiasHero";
import NoticiasGrid from "@/components/noticias/NoticiasGrid";
import { getArticulosPorCategoriaPaginado, getArticulosPorCategoria } from "@/lib/strapi";

export const metadata = {
  title: "Noticias y Eventos | Articulando | ESCP",
  description:
    "Últimas noticias, eventos y actividades de la Escuela Sindical del Caribe y Postgraduados (ESCP) y del movimiento sindical dominicano e internacional.",
};

const PAGE_SIZE = 6;

export default async function NoticiasPage({ searchParams }) {
  const params = await searchParams;
  const page = Math.max(1, parseInt(params?.page ?? '1', 10));

  const [featuredData, pageData] = await Promise.all([
    getArticulosPorCategoria("noticias-y-eventos", 1),
    getArticulosPorCategoriaPaginado("noticias-y-eventos", page, PAGE_SIZE),
  ]);

  const featured = Array.isArray(featuredData) ? featuredData[0] ?? null : null;

  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      <NavbarArticulando />
      <NoticiasHero featuredNote={featured} />
      <NoticiasGrid
        notas={pageData.data}
        currentPage={page}
        pageCount={pageData.pageCount}
        total={pageData.total}
        basePath="/articulando/noticias-y-eventos"
      />
    </main>
  );
}

