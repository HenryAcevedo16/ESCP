import ProgramasHero from "@/components/programas/ProgramasHero";
import CursosList from "@/components/programas/CursosList";
import { getProgramas, getEjesFormativos } from "@/lib/strapi";

export const metadata = {
  title: "Programas - Escuela CNUS",
  description: "Explora nuestros programas y cursos de formación sindical",
};

export default async function ProgramasPage() {
  const [programas, ejes] = await Promise.all([
    getProgramas(),
    getEjesFormativos(),
  ]);

  return (
    <main className="flex flex-col min-h-screen bg-white">
      <ProgramasHero />
      <section className="w-full max-w-[1680px] mx-auto px-4 tablet:px-[60px] min-[1200px]:max-[1609px]:px-20 desktop:px-[80px] pt-10 md:pt-[200px] mb-[100px] min-[1200px]:max-[1609px]:mb-[200px] desktop:mb-[200px]">
        <CursosList cursos={programas ?? []} ejes={ejes ?? []} />
      </section>
    </main>
  );
}
