import NavbarArticulando from "@/components/NavbarArticulando";
import NoticiasHero from "@/components/noticias/NoticiasHero";
import NoticiasGrid from "@/components/noticias/NoticiasGrid";

export const metadata = {
  title: "Noticias y Eventos | Articulando | ESCP",
  description:
    "Últimas noticias, eventos y actividades de la Escuela Sindical del Caribe y Postgraduados (ESCP) y del movimiento sindical dominicano e internacional.",
};

export default function NoticiasPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      <NavbarArticulando />
      <NoticiasHero />
      <NoticiasGrid />
    </main>
  );
}
