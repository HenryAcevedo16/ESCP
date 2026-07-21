import NavbarArticulando from "@/components/NavbarArticulando";
import ArticulandoHero from "@/components/articulando/ArticulandoHero";
import DialogandoWithPoll from "@/components/articulando/DialogandoWithPoll";
import CategoryRow from "@/components/articulando/CategoryRow";
import CategoryGrid from "@/components/articulando/CategoryGrid";
import {
  getArticuloDestacado,
  getDebateActivo,
  getArticulosPorCategoria,
} from "@/lib/strapi";

export default async function ArticulandoPage() {
  const [
    destacadosData,
    debateData,
    notasPresidenteData,
    noticiasData,
    articulosData,
  ] = await Promise.all([
    getArticuloDestacado(),
    getDebateActivo(),
    getArticulosPorCategoria("notas-del-presidente", 4),
    getArticulosPorCategoria("noticias", 4),
    getArticulosPorCategoria("articulos", 4),
  ]);

  const articuloDestacado = Array.isArray(destacadosData) ? destacadosData[0] : null;
  const debate = Array.isArray(debateData) ? debateData[0] : null;

  // El artículo principal del debate viene del debate mismo (si tiene uno asociado)
  const articuloDebate = debate?.articulo_relacionado ?? articuloDestacado ?? null;

  // Separar artículo principal y secundarios para CategoryGrid
  const notasPresidente = Array.isArray(notasPresidenteData) ? notasPresidenteData : [];
  const mainNota = notasPresidente[0] ?? null;
  const secundariasNota = notasPresidente.slice(1);

  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      <NavbarArticulando />
      <ArticulandoHero
        tag={articuloDestacado?.categoria?.nombre}
        title={articuloDestacado?.titulo}
        excerpt={articuloDestacado?.extracto}
        image={articuloDestacado?.imagen_portada}
        slug={articuloDestacado?.slug}
      />
      <div className="flex flex-col pt-10 md:pt-[200px] gap-[100px] md:gap-[200px] pb-[100px] md:pb-[200px]">
        <DialogandoWithPoll
          sectionTitle="Debate"
          mainArticle={articuloDebate}
          debate={debate}
        />
        <CategoryGrid
          sectionTitle="Notas del presidente"
          mainArticle={mainNota}
          secondaryArticles={secundariasNota}
        />
        <CategoryRow
          sectionTitle="Noticias"
          categoryArticles={Array.isArray(noticiasData) ? noticiasData : []}
        />
        <CategoryRow
          sectionTitle="Artículos"
          categoryArticles={Array.isArray(articulosData) ? articulosData : []}
          bgColor="bg-white"
        />
      </div>
    </main>
  );
}
