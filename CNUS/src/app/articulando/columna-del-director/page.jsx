import NavbarArticulando from "@/components/NavbarArticulando";
import ColumnaDirectorHero from "@/components/columna-director/ColumnaDirectorHero";
import ColumnaDirectorGrid from "@/components/columna-director/ColumnaDirectorGrid";

export const metadata = {
  title: "La Columna del Director | Articulando | ESCP",
  description:
    "Artículos, reflexiones y posicionamientos personales del director de la Escuela Sindical del Caribe y Postgraduados (ESCP).",
};

export default function ColumnaDirectorPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      <NavbarArticulando />
      <ColumnaDirectorHero />
      <ColumnaDirectorGrid />
    </main>
  );
}
