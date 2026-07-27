"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const MOCK_NOTICIAS = [
  {
    id: 1,
    titulo: "ESCP y OIT firman acuerdo para fortalecer la formación sindical en la región Caribe",
    extracto: "La Alianza Estratégica para la Formación Sindical en la Región Caribe representa un hito en la cooperación internacional para el fortalecimiento de las capacidades de los líderes sindicales.",
    fecha: "24 de julio de 2026",
    categoria: "Convenio internacional",
    tiempoLectura: "4 min",
    slug: "escp-oit-acuerdo-formacion-sindical-caribe",
    imagen: null,
  },
  {
    id: 2,
    titulo: "Inician las inscripciones para el Diplomado en Liderazgo Sindical y Acción Sociopolítica",
    extracto: "La Escuela Sindical del Caribe y Postgraduados anuncia la apertura de inscripciones para su programa insignia de formación, con becas disponibles para dirigentes sindicales de todo el país.",
    fecha: "20 de julio de 2026",
    categoria: "Convocatoria",
    tiempoLectura: "3 min",
    slug: "inscripciones-diplomado-liderazgo-sindical",
    imagen: null,
  },
  {
    id: 3,
    titulo: "Congreso Nacional Sindical 2026: fecha, sede y temas a discutir",
    extracto: "Del 15 al 17 de octubre se celebrará en Santo Domingo el Congreso Nacional Sindical 2026, con la participación de más de 500 delegados de todo el país.",
    fecha: "18 de julio de 2026",
    categoria: "Evento",
    tiempoLectura: "5 min",
    slug: "congreso-nacional-sindical-2026",
    imagen: null,
  },
  {
    id: 4,
    titulo: "Nuevo estudio revela brecha salarial de género en el sector industrial dominicano",
    extracto: "Una investigación publicada por la ESCP en colaboración con la OIT revela que las trabajadoras del sector industrial ganan en promedio un 23% menos que sus pares masculinos.",
    fecha: "15 de julio de 2026",
    categoria: "Investigación",
    tiempoLectura: "6 min",
    slug: "estudio-brecha-salarial-genero",
    imagen: null,
  },
  {
    id: 5,
    titulo: "ESCP celebra 15 años de formación sindical ininterrumpida",
    extracto: "Con un acto encabezado por autoridades gubernamentales y representantes de organismos internacionales, la ESCP conmemoró su decimoquinto aniversario formando líderes sindicales.",
    fecha: "10 de julio de 2026",
    categoria: "Aniversario",
    tiempoLectura: "4 min",
    slug: "escp-15-aniversario",
    imagen: null,
  },
  {
    id: 6,
    titulo: "Diálogo tripartito: avances en la mesa de negociación de la reforma laboral",
    extracto: "Representantes del Gobierno, empleadores y sindicatos logran acuerdos preliminares en tres de los seis ejes de la reforma al Código de Trabajo.",
    fecha: "5 de julio de 2026",
    categoria: "Actualidad",
    tiempoLectura: "4 min",
    slug: "dialogo-tripartito-reforma-laboral",
    imagen: null,
  },
  {
    id: 7,
    titulo: "Jornada de afiliación sindical: más de 2,000 nuevos miembros en todo el país",
    extracto: "La campaña nacional de afiliación impulsada por la CNUS y la ESCP logró incorporar a más de 2,000 trabajadores a organizaciones sindicales durante el mes de junio.",
    fecha: "1 de julio de 2026",
    categoria: "Campaña",
    tiempoLectura: "3 min",
    slug: "jornada-afiliacion-sindical",
    imagen: null,
  },
  {
    id: 8,
    titulo: "Entrevista: 'La reforma laboral no puede esperar más', dice secretario general de la CNUS",
    extracto: "En una entrevista exclusiva con ESCP Noticias, el secretario general de la CNUS analiza los puntos críticos de la reforma laboral y el rol del movimiento sindical.",
    fecha: "28 de junio de 2026",
    categoria: "Entrevista",
    tiempoLectura: "8 min",
    slug: "entrevista-reforma-laboral-cnus",
    imagen: null,
  },
  {
    id: 9,
    titulo: "Convocatoria: Becas internacionales para formación sindical en España",
    extracto: "La ESCP y la Fundación Sindical Europea abren convocatoria para 15 becas dirigidas a dirigentes sindicales dominicanos para un programa de formación en Madrid.",
    fecha: "25 de junio de 2026",
    categoria: "Convocatoria",
    tiempoLectura: "3 min",
    slug: "becas-internacionales-formacion-sindical-espana",
    imagen: null,
  },
  {
    id: 10,
    titulo: "Taller de negociación colectiva: herramientas para el fortalecimiento sindical",
    extracto: "Más de 60 dirigentes sindicales participaron en el taller intensivo organizado por la ESCP, enfocado en técnicas avanzadas de negociación colectiva y resolución de conflictos.",
    fecha: "20 de junio de 2026",
    categoria: "Taller",
    tiempoLectura: "4 min",
    slug: "taller-negociacion-colectiva",
    imagen: null,
  },
  {
    id: 11,
    titulo: "Posicionamiento oficial: ESCP ante la sentencia del Tribunal Constitucional sobre el derecho a huelga",
    extracto: "La Escuela Sindical del Caribe y Postgraduados emite un posicionamiento oficial respecto a la reciente sentencia del Tribunal Constitucional que limita el ejercicio del derecho a huelga en servicios esenciales.",
    fecha: "15 de junio de 2026",
    categoria: "Posicionamiento",
    tiempoLectura: "5 min",
    slug: "posicionamiento-escp-sentencia-derecho-huelga",
    imagen: null,
  },
  {
    id: 12,
    titulo: "Nuevo ciclo de conferencias: 'El futuro del trabajo en la era digital'",
    extracto: "La ESCP anuncia un ciclo de conferencias virtuales con expertos internacionales sobre el impacto de la digitalización y la inteligencia artificial en el mundo del trabajo.",
    fecha: "10 de junio de 2026",
    categoria: "Evento",
    tiempoLectura: "2 min",
    slug: "ciclo-conferencias-futuro-trabajo-digital",
    imagen: null,
  },
];

const ITEMS_PER_PAGE = 6;

function NoticiaCard({ noticia }) {
  return (
    <Link
      href={`/articulando/${noticia.slug}`}
      className="group flex flex-col bg-white border border-[#E8ECF0] rounded-[20px] laptop:rounded-[28px] overflow-hidden hover:shadow-[0_12px_48px_rgba(5,22,45,0.10)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
    >
      <div className="w-full h-1 bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex flex-col flex-1 p-5 laptop:p-7 desktop:p-8">
        <div className="flex items-center gap-2 flex-wrap mb-4">
          <span className="inline-block text-[11px] laptop:text-[13px] font-semibold px-3 py-1 rounded-full bg-[#F59E0B]/10 text-[#D97706]">
            {noticia.categoria}
          </span>
          <span className="text-[#A0A4A8] text-[11px] laptop:text-[13px]">
            {noticia.tiempoLectura} lectura
          </span>
        </div>

        <h3 className="font-bold text-[#05162D] text-base laptop:text-[20px] desktop:text-[22px] leading-snug tracking-tight mb-3 line-clamp-3 group-hover:text-[#D97706] transition-colors">
          {noticia.titulo}
        </h3>

        <p className="text-[#555B63] text-sm laptop:text-[15px] leading-relaxed line-clamp-3 flex-1">
          {noticia.extracto}
        </p>

        <div className="flex items-center justify-between mt-5 pt-4 border-t border-[#F0F2F5]">
          <span className="text-[#777C82] text-xs laptop:text-[14px]">
            {noticia.fecha}
          </span>
          <span className="flex items-center gap-1 text-[#D97706] font-semibold text-xs laptop:text-[14px] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Leer
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function NoticiasGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(MOCK_NOTICIAS.length / ITEMS_PER_PAGE);

  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleNoticias = MOCK_NOTICIAS.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  const handlePage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="w-full px-4 tablet:px-7.5 laptop:px-20 desktop:px-29.5 max-w-[1920px] mx-auto pb-[200px]">

      <div className="flex flex-col laptop:flex-row laptop:items-end justify-between gap-4 mb-10 laptop:mb-14">
        <div>
          <h2 className="text-3xl laptop:text-[44px] desktop:text-[52px] font-black text-[#05162D] tracking-tight leading-none">
            Todas las noticias
          </h2>
        </div>
        <span className="text-[#777C82] text-sm laptop:text-[16px]">
          {MOCK_NOTICIAS.length} noticias publicadas
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 laptop:grid-cols-3 gap-5 laptop:gap-6 desktop:gap-8 mb-12 laptop:mb-16">
        {visibleNoticias.map((noticia) => (
          <NoticiaCard key={noticia.id} noticia={noticia} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 laptop:gap-3">
          <button
            onClick={() => handlePage(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Página anterior"
            className="flex items-center justify-center w-10 h-10 laptop:w-12 laptop:h-12 rounded-full border border-[#E0E4EA] text-[#05162D] hover:border-[#D97706] hover:text-[#D97706] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ArrowLeft size={18} />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePage(page)}
              aria-label={`Página ${page}`}
              aria-current={currentPage === page ? "page" : undefined}
              className={`flex items-center justify-center w-10 h-10 laptop:w-12 laptop:h-12 rounded-full font-semibold text-sm laptop:text-[16px] transition-all duration-200 ${
                currentPage === page
                  ? "bg-[#D97706] text-white shadow-md shadow-amber-200"
                  : "border border-[#E0E4EA] text-[#05162D] hover:border-[#D97706] hover:text-[#D97706]"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => handlePage(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Página siguiente"
            className="flex items-center justify-center w-10 h-10 laptop:w-12 laptop:h-12 rounded-full border border-[#E0E4EA] text-[#05162D] hover:border-[#D97706] hover:text-[#D97706] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      )}

    </section>
  );
}
