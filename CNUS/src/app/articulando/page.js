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
    pensamientoComplejoData,
    columnaDirectorData,
    noticiasEventosData,
  ] = await Promise.all([
    getArticuloDestacado(),
    getDebateActivo(),
    getArticulosPorCategoria("notas-del-presidente", 4),
    getArticulosPorCategoria("pensamiento-complejo", 4),
    getArticulosPorCategoria("columna-del-director", 4),
    getArticulosPorCategoria("noticias-y-eventos", 4),
  ]);

  const articuloDestacado = Array.isArray(destacadosData) ? destacadosData[0] : null;
  const debate = Array.isArray(debateData) ? debateData[0] : null;

  // El artículo principal del debate viene del debate mismo (si tiene uno asociado)
  const articuloDebate = debate?.articulo_relacionado ?? articuloDestacado ?? null;

  // Separar artículo principal y secundarios para Notas del Presidente
  const notasPresidente = Array.isArray(notasPresidenteData) ? notasPresidenteData : [];
  const mainNota = notasPresidente[0] ?? null;
  const secundariasNota = notasPresidente.slice(1);

  // Separar artículo principal y secundarios para Columna del Director
  const columnaDirector = Array.isArray(columnaDirectorData) ? columnaDirectorData : [];
  const mainColumna = columnaDirector[0] ?? null;
  const secundariasColumna = columnaDirector.slice(1);

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
      <div className="flex flex-col pt-0 gap-[200px] pb-[200px]">
        {/* 1. Debate */}
        <DialogandoWithPoll
          id="debate"
          sectionTitle="Debate"
          mainArticle={articuloDebate}
          debate={debate}
        />
        
        {/* 2. Notas del presidente */}
        <CategoryGrid
          id="notas-del-presidente"
          sectionTitle="Notas del presidente"
          mainArticle={mainNota}
          secondaryArticles={secundariasNota}
          verTodasHref="/articulando/notas-del-presidente"
        />

        {/* 3. Pensamiento complejo (CategoryRow) */}
        <CategoryRow
          id="pensamiento-complejo"
          sectionTitle="Pensamiento complejo"
          categoryArticles={Array.isArray(pensamientoComplejoData) ? pensamientoComplejoData : []}
          verTodasHref="/articulando/pensamiento-complejo"
        />

        {/* 4. Columna del director (CategoryGrid) */}
        <CategoryGrid
          id="columna-del-director"
          sectionTitle="Columna del director"
          mainArticle={mainColumna}
          secondaryArticles={secundariasColumna}
          verTodasHref="/articulando/columna-del-director"
        />

        {/* 5. Noticias y eventos (CategoryRow) */}
        <CategoryRow
          id="noticias-y-eventos"
          sectionTitle="Noticias y eventos"
          categoryArticles={Array.isArray(noticiasEventosData) ? noticiasEventosData : []}
          bgColor="bg-white"
          verTodasHref="/articulando/noticias-y-eventos"
        />
      </div>
    </main>
  );
}
