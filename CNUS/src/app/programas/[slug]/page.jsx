import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProgramaDetailTabs from "@/components/programas/ProgramaDetailTabs";
import { notFound } from "next/navigation";
import {
  getProgramaPorSlug,
  getAllProgramaSlugs,
  getStrapiImageUrl,
  getAutorNombre,
} from "@/lib/strapi";

export async function generateStaticParams() {
  const slugs = await getAllProgramaSlugs();
  return slugs;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = await getProgramaPorSlug(slug);
  const programa = Array.isArray(data) ? data[0] : null;
  if (!programa) return { title: "Programa no encontrado" };

  return {
    title: `${programa.titulo} | Programas — Escuela CNUS`,
    description: programa.descripcion ?? "",
  };
}

export default async function ProgramaDetailPage({ params }) {
  const { slug } = await params;

  const data = await getProgramaPorSlug(slug);
  const programa = Array.isArray(data) ? data[0] : null;
  if (!programa) notFound();

  const imagenUrl = getStrapiImageUrl(programa.imagen);
  const instructorNombre = getAutorNombre(programa.instructor);
  const avatarUrl = getStrapiImageUrl(programa.instructor?.avatar);

  const ejeNombre = programa.eje?.nombre ?? null;
  const ejeSlug  = programa.eje?.slug  ?? null;

  // Contenido temático: si el eje tiene descripción la usamos, si no mostramos placeholder
  const contenidoTematico = programa.eje?.descripcion
    ? programa.eje.descripcion
        .split(/\n|\.(?=\s[A-ZÁÉÍÓÚ])/)
        .map((s) => s.trim().replace(/\.$/, ""))
        .filter(Boolean)
    : [
        "Historia del sindicalismo y su evolución hacia lo sociopolítico",
        "Globalización, migración, cambios en el mundo del trabajo y políticas sindicales",
        "Economía social y solidaria como alternativa al modelo neoliberal",
        "Educación ambiental, medio ambiente, sostenibilidad y justicia climática",
        "Género, equidad y diversidad en la acción sindical",
        "Formulación de propuesta político pública y legislativa",
        "Mapeo de actores sociales y políticos para comprender alianzas y tensiones",
        "Rol de los sindicatos en procesos de democratización, justicia social y negociación colectiva",
        "Pacto social, trabajo decente y participación ciudadana",
        "Comunicación política, campañas sindicales y estrategias de incidencia pública",
        "Estudio de casos de sindicatos con impacto en reformas sociales y políticas",
      ];

  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      <Navbar logoClassName="tablet:mt-3.5" />

      {/* ── BANNER HEADER ──────────────────────────────────────── */}
      <section className="relative w-full bg-[#05162D] pt-32 pb-10 md:pt-44 md:pb-14 px-4 tablet:px-[60px] desktop:px-20 min-[1610px]:px-[118px]">
        {/* Breadcrumb */}
        <nav aria-label="Ruta de navegación" className="flex items-center gap-2 text-sm text-gray-400 mb-4 flex-wrap tablet:mt-2.5">
          <Link href="/programas" className="hover:text-white transition-colors">
            Programas
          </Link>
          <span aria-hidden="true">/</span>
          {ejeNombre && (
            <>
              {ejeSlug ? (
                <Link href={`/programas?eje=${ejeSlug}`} className="hover:text-white transition-colors">
                  {ejeNombre}
                </Link>
              ) : (
                <span>{ejeNombre}</span>
              )}
              <span aria-hidden="true">/</span>
            </>
          )}
          <span className="text-gray-300 truncate max-w-[200px] sm:max-w-none">
            {programa.titulo}
          </span>
        </nav>

        {/* Title */}
        <h1 className="text-2xl tablet:text-4xl desktop:text-5xl font-bold text-white leading-tight max-w-4xl">
          {programa.titulo}
        </h1>

        {/* Badges */}
        <div className="flex flex-wrap gap-3 mt-6">
          {programa.modalidad && (
            <span className="inline-flex items-center gap-1.5 bg-white/10 text-white text-sm font-medium px-4 py-1.5 rounded-full border border-white/20">
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
              </svg>
              {programa.modalidad}
            </span>
          )}
          {programa.duracion && (
            <span className="inline-flex items-center gap-1.5 bg-white/10 text-white text-sm font-medium px-4 py-1.5 rounded-full border border-white/20">
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
              </svg>
              {programa.duracion}
            </span>
          )}
          {ejeNombre && (
            <span className="inline-flex items-center bg-[#0045A5]/60 text-blue-200 text-sm font-medium px-4 py-1.5 rounded-full border border-blue-400/30">
              {ejeNombre}
            </span>
          )}
        </div>
      </section>

      {/* ── MAIN CONTENT ───────────────────────────────────────── */}
      <section className="w-full max-w-[1400px] mx-auto px-4 tablet:px-[60px] desktop:px-20 py-12 md:py-16 flex flex-col lg:flex-row gap-10 lg:gap-14">

        {/* ── LEFT COLUMN ─────────────────────────────── */}
        <div className="flex-1 min-w-0">

          {/* Course image */}
          <div className="w-full aspect-video bg-[#D1D9E6] rounded-2xl mb-8 relative overflow-hidden">
            {imagenUrl ? (
              <Image
                src={imagenUrl}
                alt={programa.titulo}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1a2f54] to-[#0a1929]">
                <span className="text-[#8A9BB8] text-base font-medium tracking-wide">Sin imagen</span>
              </div>
            )}
          </div>

          {/* Tabs */}
          <ProgramaDetailTabs
            descripcion={programa.descripcion}
            instructor={programa.instructor}
            instructorNombre={instructorNombre}
            avatarUrl={avatarUrl}
          />
        </div>

        {/* ── RIGHT COLUMN — Contenido temático ───────── */}
        <aside className="w-full lg:w-[340px] xl:w-[380px] shrink-0">
          <div className="bg-[#05162D] rounded-2xl p-6 md:p-8 text-white sticky top-24">
            <h2 className="text-xl font-bold mb-6 text-white border-b border-white/10 pb-4">
              Contenido temático
            </h2>

            <ul className="flex flex-col gap-4" role="list">
              {contenidoTematico.map((item, i) => (
                <li key={i} className="flex gap-3 items-start text-[14px] text-gray-200 leading-relaxed">
                  <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/contacto"
              className="mt-8 w-full flex items-center justify-center h-12 bg-[#0045A5] hover:bg-blue-700 text-white font-semibold rounded-full transition-colors text-sm"
            >
              Inscríbete ahora
            </Link>
          </div>
        </aside>
      </section>

      <Footer />
    </main>
  );
}
