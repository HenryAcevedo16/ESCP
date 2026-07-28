import NavbarArticulando from "@/components/NavbarArticulando";
import DebateHero from "@/components/debate/DebateHero";
import DebateGrid from "@/components/debate/DebateGrid";

import { getDebates, getDebateActivo } from "@/lib/strapi";

export const metadata = {
  title: "Diálogo, Debate y Opinión | Articulando | ESCP",
  description:
    "Participa en los debates sobre los temas más importantes para el movimiento sindical dominicano. Opina, comparte y construye conocimiento colectivo.",
};

export default async function DebatePage() {
  const [debatesData, activeDebateData] = await Promise.all([
    getDebates(),
    getDebateActivo()
  ]);
  
  const activeDebate = Array.isArray(activeDebateData) ? activeDebateData[0] : null;
  const debates = Array.isArray(debatesData) ? debatesData : [];

  return (
    <main className="flex min-h-screen flex-col w-full bg-[#F2F4F7]">
      <NavbarArticulando />
      <DebateHero activeDebate={activeDebate} />
      <DebateGrid debates={debates} />
    </main>
  );
}
