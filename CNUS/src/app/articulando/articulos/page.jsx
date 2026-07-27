import NavbarArticulando from "@/components/NavbarArticulando";
import ArticulosHero from "@/components/articulos/ArticulosHero";
import ArticulosGrid from "@/components/articulos/ArticulosGrid";

export const metadata = {
  title: "Artículos de Opinión y Análisis | Articulando | ESCP",
  description:
    "Artículos de opinión, análisis y reflexión elaborados por la comunidad académica y líderes sindicales sobre los temas que definen la agenda sociopolítica del país.",
};

export default function ArticulosPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      <NavbarArticulando />
      <ArticulosHero />
      <ArticulosGrid />
    </main>
  );
}
