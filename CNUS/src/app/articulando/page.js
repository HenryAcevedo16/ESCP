import NavbarArticulando from "@/components/NavbarArticulando";
import ArticulandoHero from "@/components/articulando/ArticulandoHero";
import DialogandoWithPoll from "@/components/articulando/DialogandoWithPoll";
import CategoryRow from "@/components/articulando/CategoryRow";
import CategoryGrid from "@/components/articulando/CategoryGrid";
import Footer from "@/components/Footer";

export default function ArticulandoPage() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-hidden bg-white">
      <NavbarArticulando />
      <ArticulandoHero />
      <DialogandoWithPoll sectionTitle="Debate" />
      <CategoryRow sectionTitle="Noticias" />
      <CategoryGrid sectionTitle="Artículos" />
      <CategoryRow sectionTitle="Notas del presidente" />
    </main>
  );
}
