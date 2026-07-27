import NavbarArticulando from "@/components/NavbarArticulando";
import DebateHero from "@/components/debate/DebateHero";
import DebateGrid from "@/components/debate/DebateGrid";

export const metadata = {
  title: "Diálogo, Debate y Opinión | Articulando | ESCP",
  description:
    "Participa en los debates sobre los temas más importantes para el movimiento sindical dominicano. Opina, comparte y construye conocimiento colectivo.",
};

export default function DebatePage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-[#F2F4F7]">
      <NavbarArticulando />
      <DebateHero />
      <DebateGrid />
    </main>
  );
}
