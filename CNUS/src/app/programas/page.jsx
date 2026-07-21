import ProgramasHero from "@/components/programas/ProgramasHero";
import ProgramasSidebar from "@/components/programas/ProgramasSidebar";
import CursosList from "@/components/programas/CursosList";
import { getProgramas, getCategorias } from "@/lib/strapi";

export const metadata = {
  title: "Programas - Escuela CNUS",
  description: "Explora nuestros programas y cursos de formación sindical",
};

export default async function ProgramasPage() {
  const [programas, categorias] = await Promise.all([
    getProgramas(),
    getCategorias(),
  ]);

  return (
    <main className="flex flex-col min-h-screen bg-white">
      <ProgramasHero />
      <section className="max-w-[1400px] w-full mx-auto px-6 pt-10 md:pt-[200px] pb-20 flex flex-col lg:flex-row gap-10 lg:gap-16">
        <ProgramasSidebar categorias={categorias ?? []} />
        <CursosList cursos={programas ?? []} />
      </section>
    </main>
  );
}
