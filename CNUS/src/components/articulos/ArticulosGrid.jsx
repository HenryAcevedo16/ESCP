"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const MOCK_ARTICULOS = [
  {
    id: 1,
    titulo: "El sindicalismo en la era digital: desafíos y oportunidades para la clase trabajadora",
    extracto: "La transformación digital del mundo del trabajo plantea interrogantes fundamentales para el movimiento sindical. ¿Cómo organizar a trabajadores de plataformas? ¿Qué nuevos derechos necesitamos?",
    fecha: "22 de julio de 2026",
    categoria: "Análisis",
    tiempoLectura: "6 min",
    slug: "sindicalismo-era-digital-desafios-oportunidades",
  },
  {
    id: 2,
    titulo: "Reforma laboral dominicana: un análisis crítico de la propuesta gubernamental",
    extracto: "El proyecto de reforma al Código de Trabajo presentado por el Poder Ejecutivo contiene avances significativos, pero también omisiones preocupantes que podrían debilitar derechos históricos de los trabajadores.",
    fecha: "18 de julio de 2026",
    categoria: "Análisis jurídico",
    tiempoLectura: "8 min",
    slug: "reforma-laboral-analisis-critico",
  },
  {
    id: 3,
    titulo: "La economía del cuidado: un reto pendiente para las políticas públicas en RD",
    extracto: "El trabajo doméstico y de cuidados no remunerado representa el 23% del PIB dominicano, según un estudio de la ESCP. Sin embargo, sigue siendo invisible en las estadísticas oficiales y en las políticas públicas.",
    fecha: "14 de julio de 2026",
    categoria: "Investigación",
    tiempoLectura: "7 min",
    slug: "economia-cuidado-politicas-publicas-rd",
  },
  {
    id: 4,
    titulo: "Diálogo social: la asignatura pendiente de la democracia dominicana",
    extracto: "A pesar de los avances institucionales, el diálogo social tripartito en República Dominicana sigue siendo débil y fragmentado. ¿Qué podemos aprender de las experiencias exitosas en América Latina?",
    fecha: "10 de julio de 2026",
    categoria: "Opinión",
    tiempoLectura: "5 min",
    slug: "dialogo-social-asignatura-pendiente",
  },
  {
    id: 5,
    titulo: "Derecho a huelga en servicios esenciales: jurisprudencia reciente y perspectivas",
    extracto: "La reciente sentencia del Tribunal Constitucional sobre el derecho a huelga en servicios esenciales ha reabierto un debate crucial para el movimiento sindical dominicano.",
    fecha: "5 de julio de 2026",
    categoria: "Análisis jurídico",
    tiempoLectura: "6 min",
    slug: "derecho-huelga-servicios-esenciales-jurisprudencia",
  },
  {
    id: 6,
    titulo: "Globalización y crisis sindical: ¿cómo recuperar la capacidad de organización?",
    extracto: "La globalización económica ha fragmentado las bases tradicionales del sindicalismo. Sin embargo, emergen nuevas formas de organización transnacional que ofrecen esperanza para revitalizar el movimiento obrero.",
    fecha: "28 de junio de 2026",
    categoria: "Reflexión",
    tiempoLectura: "7 min",
    slug: "globalizacion-crisis-sindical-organizacion",
  },
  {
    id: 7,
    titulo: "Educación popular y conciencia de clase: el legado de Paulo Freire",
    extracto: "A casi treinta años de su muerte, el pensamiento de Paulo Freire sigue siendo una herramienta indispensable para la formación sindical y la emancipación de los trabajadores en América Latina.",
    fecha: "22 de junio de 2026",
    categoria: "Ensayo",
    tiempoLectura: "9 min",
    slug: "educacion-popular-paulo-freire",
  },
  {
    id: 8,
    titulo: "La juventud trabajadora en República Dominicana: diagnóstico y propuestas",
    extracto: "Los jóvenes dominicanos enfrentan tasas de desempleo que duplican el promedio nacional. Un análisis de las causas estructurales y las políticas necesarias para integrarlos al mundo laboral formal.",
    fecha: "15 de junio de 2026",
    categoria: "Investigación",
    tiempoLectura: "7 min",
    slug: "juventud-trabajadora-republica-dominicana",
  },
  {
    id: 9,
    titulo: "Sindicalismo feminista: la irrupción de las mujeres en la lucha laboral",
    extracto: "Cada vez más mujeres asumen liderazgo sindical y colocan en el centro de la agenda las demandas de igualdad de género, equidad salarial y el fin de la violencia laboral.",
    fecha: "8 de junio de 2026",
    categoria: "Análisis",
    tiempoLectura: "5 min",
    slug: "sindicalismo-feminista-mujeres-lucha-laboral",
  },
  {
    id: 10,
    titulo: "Inteligencia artificial y trabajo decente: hacia una regulación sindical",
    extracto: "La irrupción de la inteligencia artificial en los procesos de selección, evaluación y despido de trabajadores plantea desafíos éticos y legales que requieren una respuesta sindical coordinada.",
    fecha: "1 de junio de 2026",
    categoria: "Prospectiva",
    tiempoLectura: "7 min",
    slug: "inteligencia-artificial-trabajo-decente-regulacion",
  },
  {
    id: 11,
    titulo: "La negociación colectiva como herramienta de reducción de desigualdades",
    extracto: "Más allá del salario, la negociación colectiva puede ser un instrumento eficaz para reducir las desigualdades de género, mejorar las condiciones de trabajo y fortalecer la democracia en las empresas.",
    fecha: "25 de mayo de 2026",
    categoria: "Análisis",
    tiempoLectura: "6 min",
    slug: "negociacion-colectiva-reduccion-desigualdades",
  },
  {
    id: 12,
    titulo: "Memoria histórica del movimiento sindical dominicano: 1965-2026",
    extracto: "Un recorrido por seis décadas de lucha sindical en República Dominicana, desde la Revolución de Abril hasta los desafíos contemporáneos de la precariedad laboral y la automatización.",
    fecha: "18 de mayo de 2026",
    categoria: "Historia",
    tiempoLectura: "10 min",
    slug: "memoria-historica-movimiento-sindical-dominicano",
  },
];

const ITEMS_PER_PAGE = 6;

function ArticuloCard({ articulo }) {
  return (
    <Link
      href={`/articulando/${articulo.slug}`}
      className="group flex flex-col bg-white border border-[#E8ECF0] rounded-[20px] laptop:rounded-[28px] overflow-hidden hover:shadow-[0_12px_48px_rgba(5,22,45,0.10)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
    >
      <div className="w-full h-1 bg-gradient-to-r from-[#06B6D4] to-[#22D3EE] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex flex-col flex-1 p-5 laptop:p-7 desktop:p-8">
        <div className="flex items-center gap-2 flex-wrap mb-4">
          <span className="inline-block text-[11px] laptop:text-[13px] font-semibold px-3 py-1 rounded-full bg-[#06B6D4]/10 text-[#0891B2]">
            {articulo.categoria}
          </span>
          <span className="text-[#A0A4A8] text-[11px] laptop:text-[13px]">
            {articulo.tiempoLectura} lectura
          </span>
        </div>

        <h3 className="font-bold text-[#05162D] text-base laptop:text-[20px] desktop:text-[22px] leading-snug tracking-tight mb-3 line-clamp-3 group-hover:text-[#0891B2] transition-colors">
          {articulo.titulo}
        </h3>

        <p className="text-[#555B63] text-sm laptop:text-[15px] leading-relaxed line-clamp-3 flex-1">
          {articulo.extracto}
        </p>

        <div className="flex items-center justify-between mt-5 pt-4 border-t border-[#F0F2F5]">
          <span className="text-[#777C82] text-xs laptop:text-[14px]">
            {articulo.fecha}
          </span>
          <span className="flex items-center gap-1 text-[#0891B2] font-semibold text-xs laptop:text-[14px] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
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

export default function ArticulosGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(MOCK_ARTICULOS.length / ITEMS_PER_PAGE);

  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleArticulos = MOCK_ARTICULOS.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  const handlePage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="w-full px-4 tablet:px-7.5 laptop:px-20 desktop:px-29.5 max-w-[1920px] mx-auto pb-[200px]">

      <div className="flex flex-col laptop:flex-row laptop:items-end justify-between gap-4 mb-10 laptop:mb-14">
        <div>
          <h2 className="text-3xl laptop:text-[44px] desktop:text-[52px] font-black text-[#05162D] tracking-tight leading-none">
            Todos los artículos
          </h2>
        </div>
        <span className="text-[#777C82] text-sm laptop:text-[16px]">
          {MOCK_ARTICULOS.length} artículos publicados
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 laptop:grid-cols-3 gap-5 laptop:gap-6 desktop:gap-8 mb-12 laptop:mb-16">
        {visibleArticulos.map((articulo) => (
          <ArticuloCard key={articulo.id} articulo={articulo} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 laptop:gap-3">
          <button
            onClick={() => handlePage(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Página anterior"
            className="flex items-center justify-center w-10 h-10 laptop:w-12 laptop:h-12 rounded-full border border-[#E0E4EA] text-[#05162D] hover:border-[#0891B2] hover:text-[#0891B2] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
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
                  ? "bg-[#0891B2] text-white shadow-md shadow-cyan-200"
                  : "border border-[#E0E4EA] text-[#05162D] hover:border-[#0891B2] hover:text-[#0891B2]"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => handlePage(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Página siguiente"
            className="flex items-center justify-center w-10 h-10 laptop:w-12 laptop:h-12 rounded-full border border-[#E0E4EA] text-[#05162D] hover:border-[#0891B2] hover:text-[#0891B2] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      )}

    </section>
  );
}
