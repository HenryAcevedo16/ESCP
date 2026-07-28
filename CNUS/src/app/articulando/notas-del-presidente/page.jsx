import NavbarArticulando from "@/components/NavbarArticulando";
import NotasPresidenteHero from "@/components/notas-presidente/NotasPresidenteHero";
import NotasPresidenteGrid from "@/components/notas-presidente/NotasPresidenteGrid";
import { getArticulosPorCategoriaPaginado, getArticulosPorCategoria } from "@/lib/strapi";

export const metadata = {
  title: "Notas del Presidente | Articulando | ESCP",
  description:
    "Comunicados oficiales, reflexiones y notas del presidente de la Escuela Sindical del Caribe y Postgraduados (ESCP).",
};

const PAGE_SIZE = 6;

export default async function NotasDelPresidentePage({ searchParams }) {
  const params = await searchParams;
  const page = Math.max(1, parseInt(params?.page ?? '1', 10));

  const [featuredData, pageData] = await Promise.all([
    getArticulosPorCategoria("notas-del-presidente", 1),
    getArticulosPorCategoriaPaginado("notas-del-presidente", page, PAGE_SIZE),
  ]);

  const featured = Array.isArray(featuredData) ? featuredData[0] ?? null : null;

  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      <NavbarArticulando />
      <NotasPresidenteHero featuredNote={featured} />
      <NotasPresidenteGrid
        notas={pageData.data}
        currentPage={page}
        pageCount={pageData.pageCount}
        total={pageData.total}
        basePath="/articulando/notas-del-presidente"
      />
    </main>
  );
}
