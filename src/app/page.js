import HeroSection from "@/components/HeroSection";
import DialogandoSection from "@/components/DialogandoSection";
import EjesFormativosSection from "@/components/EjesFormativosSection";
import AudienceSection from "@/components/AudienceSection";
import CursosSection from "@/components/CursosSection";
import NewsletterSection from "@/components/NewsletterSection";

export default function Home() {
  // Simulamos los datos que llegarían desde tu API de Strapi CMS
  const heroDataFromStrapi = {
    mediaType: "video", 
    mediaUrl: "/videos/2c23d65f-1858-45d4-910c-139fa94d9e74.mp4" 
  };

  const newsFromStrapi = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
      tag: "Actualidad",
      date: "12 Oct 2026",
      title: "ESCP inicia nuevo Diplomado en Liderazgo Sindical y Acción Sociopolítica",
      excerpt: "Un nuevo programa formativo para fortalecer el liderazgo sindical, el diálogo social y la incidencia sociopolítica."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
      tag: "Noticia",
      date: "08 Oct 2026",
      title: "Mujeres lideran jornada de formación sobre negociación y diálogo social",
      excerpt: ""
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1932&auto=format&fit=crop",
      tag: "Evento",
      date: "05 Oct 2026",
      title: "Foro reúne a dirigentes sindicales para analizar los desafíos del empleo digno",
      excerpt: ""
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1974&auto=format&fit=crop",
      tag: "Academia",
      date: "01 Oct 2026",
      title: "La ESCP amplía su oferta académica con nuevos cursos especializados",
      excerpt: ""
    }
  ];

  return (
    <main className="flex min-h-screen flex-col w-full overflow-hidden bg-white">
      <HeroSection 
        mediaType={heroDataFromStrapi.mediaType} 
        mediaUrl={heroDataFromStrapi.mediaUrl} 
      />
      <DialogandoSection news={newsFromStrapi} />
      <EjesFormativosSection />
      <AudienceSection />
      <CursosSection />
      <NewsletterSection />
    </main>
  );
}
