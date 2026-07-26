import NavbarArticulando from "@/components/NavbarArticulando";
import NotasPresidenteHero from "@/components/notas-presidente/NotasPresidenteHero";
import NotasPresidenteGrid from "@/components/notas-presidente/NotasPresidenteGrid";

export const metadata = {
  title: "Notas del Presidente | Articulando | ESCP",
  description:
    "Comunicados oficiales, reflexiones y notas del presidente de la Escuela Sindical del Caribe y Postgraduados (ESCP).",
};

export default function NotasDelPresidentePage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      <NavbarArticulando />
      <NotasPresidenteHero />
      <NotasPresidenteGrid />
    </main>
  );
}

