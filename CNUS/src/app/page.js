import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DialogandoSection from "@/components/DialogandoSection";
import EjesFormativosSection from "@/components/EjesFormativosSection";
import AudienceSection from "@/components/AudienceSection";
import CursosSection from "@/components/CursosSection";
import NewsletterSection from "@/components/NewsletterSection";
import {
  getHeroConfig,
  getEjesFormativos,
  getProgramasDestacados,
  getArticulos,
} from "@/lib/strapi";

export default async function Home() {
  // Fetch en paralelo — si Strapi no está activo retorna null/[]
  const [heroConfig, ejes, cursosDestacados, articulos] = await Promise.all([
    getHeroConfig(),
    getEjesFormativos(),
    getProgramasDestacados(),
    getArticulos(4),
  ]);

  return (
    <main className="flex min-h-screen flex-col w-full overflow-hidden bg-white">
      <Navbar />
      <HeroSection heroConfig={heroConfig} />
      <DialogandoSection articulos={articulos ?? []} />
      <EjesFormativosSection ejes={ejes ?? []} />
      <AudienceSection />
      <CursosSection cursos={cursosDestacados ?? []} />
      <NewsletterSection />
    </main>
  );
}
