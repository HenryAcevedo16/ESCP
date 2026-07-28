import NavbarArticulando from "@/components/NavbarArticulando";
import DebateArticleHero from "@/components/debate/DebateArticleHero";
import OpinionForm from "@/components/article/OpinionForm";
import CommentsSection from "@/components/article/CommentsSection";
import CommunityCTA from "@/components/debate/CommunityCTA";
import { getComentarios } from "@/lib/supabase";
import { getDebates, getDebatePorSlug } from "@/lib/strapi";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const debates = await getDebates();
  if (!debates || !Array.isArray(debates)) return [];
  return debates.map((debate) => ({
    slug: debate.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = await getDebatePorSlug(slug);
  const debate = Array.isArray(data) ? data[0] : null;
  
  if (!debate) return { title: "Debate no encontrado" };

  return {
    title: `${debate.pregunta} | Debates Articulando`,
    description: "Participa en este debate y comparte tu opinión con la comunidad.",
  };
}

export default async function DebatePage({ params }) {
  const { slug } = await params;

  const data = await getDebatePorSlug(slug);
  const debate = Array.isArray(data) ? data[0] : null;
  
  if (!debate) notFound();

  // Reusing the same function as articles so we can use the same table
  const comentarios = await getComentarios(slug);

  return (
    <main className="flex min-h-screen flex-col w-full overflow-hidden bg-white">
      <NavbarArticulando />
      <DebateArticleHero debate={debate} />

      <OpinionForm articuloSlug={slug} />
      <CommentsSection comentarios={comentarios ?? []} />

      {/* Spacing before banner */}
      <div className="pt-20">
        <CommunityCTA />
      </div>
    </main>
  );
}
