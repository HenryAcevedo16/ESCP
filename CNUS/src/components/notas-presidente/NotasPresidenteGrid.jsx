"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const MOCK_NOTAS = [
  {
    id: 2,
    titulo: "Carta abierta al Ministerio de Trabajo: La hora de la reforma laboral ha llegado",
    extracto: "En nombre de la Escuela Sindical del Caribe y Postgraduados, me dirijo a las autoridades para exigir una revisión profunda del Código de Trabajo que reconozca las nuevas realidades del mercado laboral y proteja los derechos de todos los trabajadores dominicanos.",
    fecha: "15 de julio de 2026",
    categoria: "Comunicado oficial",
    tiempoLectura: "5 min",
    slug: "carta-abierta-ministerio-trabajo",
  },
  {
    id: 3,
    titulo: "Reflexión sobre el Día Internacional del Trabajo 2026",
    extracto: "Un primero de mayo diferente. Este año la conmemoración del Día Internacional del Trabajo nos encuentra ante desafíos inéditos: la automatización, la precariedad laboral y la necesidad de un sindicalismo renovado para un mundo en transformación acelerada.",
    fecha: "1 de mayo de 2026",
    categoria: "Reflexión",
    tiempoLectura: "4 min",
    slug: "reflexion-dia-internacional-trabajo-2026",
  },
  {
    id: 4,
    titulo: "ESCP: 15 años formando líderes sindicales en la República Dominicana",
    extracto: "Al cumplir quince años de labor ininterrumpida, me detengo a mirar el camino recorrido. Más de dos mil líderes sindicales formados, convenios colectivos mejorados y una generación de trabajadores con mayor conciencia de sus derechos. Este es nuestro balance.",
    fecha: "18 de abril de 2026",
    categoria: "Aniversario institucional",
    tiempoLectura: "6 min",
    slug: "escp-15-anos-formando-lideres",
  },
  {
    id: 5,
    titulo: "Posicionamiento ante el alza del costo de vida: Los trabajadores no pueden esperar",
    extracto: "El incremento sostenido del costo de la canasta básica representa una emergencia social que el Gobierno y los empleadores deben atender con urgencia. Desde la ESCP, exigimos una mesa de diálogo tripartita para acordar ajustes salariales que restauren el poder adquisitivo de los trabajadores.",
    fecha: "2 de marzo de 2026",
    categoria: "Posicionamiento",
    tiempoLectura: "3 min",
    slug: "posicionamiento-alza-costo-vida",
  },
  {
    id: 6,
    titulo: "El rol de la mujer en el sindicalismo dominicano: avances y deudas pendientes",
    extracto: "Con motivo del Día Internacional de la Mujer, reflexiono sobre los avances que hemos logrado en materia de igualdad de género al interior de las organizaciones sindicales, pero también sobre las barreras estructurales que aún persisten y que debemos desmantelar colectivamente.",
    fecha: "8 de marzo de 2026",
    categoria: "Reflexión",
    tiempoLectura: "5 min",
    slug: "rol-mujer-sindicalismo-dominicano",
  },
  {
    id: 7,
    titulo: "Declaración conjunta con la CNUS: Frente al incremento de la informalidad laboral",
    extracto: "Junto a la Confederación Nacional de Unidad Sindical, emitimos esta declaración en respuesta al preocupante aumento del trabajo informal que registra el país. La formalización laboral es una prioridad ética y económica que no puede postergarse.",
    fecha: "10 de febrero de 2026",
    categoria: "Declaración conjunta",
    tiempoLectura: "4 min",
    slug: "declaracion-conjunta-informalidad-laboral",
  },
  {
    id: 8,
    titulo: "Balance del año 2025: logros, aprendizajes y desafíos para el movimiento sindical",
    extracto: "Al cerrar el año, presento un recuento de los hitos más importantes que vivimos como organización y como movimiento. Un año de resistencia, formación y propuesta que nos deja mejor preparados para enfrentar los retos que vienen.",
    fecha: "28 de diciembre de 2025",
    categoria: "Balance anual",
    tiempoLectura: "8 min",
    slug: "balance-anual-2025",
  },
  {
    id: 9,
    titulo: "Llamado a la unidad sindical en tiempos de fragmentación política",
    extracto: "La politización excesiva de las organizaciones sindicales representa uno de los mayores riesgos para la autonomía del movimiento obrero. Desde la ESCP, hacemos un llamado a la unidad basada en principios y en la defensa irrestricta de los derechos de los trabajadores.",
    fecha: "5 de noviembre de 2025",
    categoria: "Llamado a la acción",
    tiempoLectura: "4 min",
    slug: "llamado-unidad-sindical",
  },
  {
    id: 10,
    titulo: "La educación sindical como herramienta de transformación social",
    extracto: "Un sindicalista que estudia es un sindicalista que transforma. Esa convicción ha guiado cada decisión de la ESCP desde su fundación. La formación continua no es un lujo: es la piedra angular sobre la que se construye un movimiento obrero robusto, propositivo y capaz de negociar en igualdad de condiciones.",
    fecha: "12 de octubre de 2025",
    categoria: "Reflexión",
    tiempoLectura: "6 min",
    slug: "educacion-sindical-herramienta-transformacion",
  },
  {
    id: 11,
    titulo: "Presencia de la ESCP en el Congreso Sindical Latinoamericano",
    extracto: "Tuve el honor de representar a la Escuela Sindical del Caribe y Postgraduados en el XIV Congreso Sindical Latinoamericano celebrado en Buenos Aires. Compartimos experiencias, establecimos alianzas y reafirmamos nuestro compromiso con la solidaridad obrera internacional.",
    fecha: "3 de septiembre de 2025",
    categoria: "Crónica internacional",
    tiempoLectura: "5 min",
    slug: "escp-congreso-sindical-latinoamericano",
  },
  {
    id: 12,
    titulo: "Sobre la negociación colectiva en el sector público: avances y limitaciones",
    extracto: "El reciente fallo del Tribunal Constitucional abre una ventana de oportunidad para ampliar los derechos de negociación colectiva de los trabajadores del Estado. Analizamos sus implicaciones y trazamos una hoja de ruta para aprovechar este momento histórico.",
    fecha: "20 de julio de 2025",
    categoria: "Análisis jurídico",
    tiempoLectura: "7 min",
    slug: "negociacion-colectiva-sector-publico",
  },
  {
    id: 13,
    titulo: "La inteligencia artificial y el futuro del trabajo: perspectiva sindical",
    extracto: "La irrupción de la inteligencia artificial en los procesos productivos no es una amenaza lejana: ya está transformando empleos, destruyendo algunos y creando otros. El movimiento sindical dominicano necesita una agenda proactiva ante este fenómeno, y desde la ESCP proponemos los primeros pasos.",
    fecha: "5 de junio de 2025",
    categoria: "Prospectiva",
    tiempoLectura: "6 min",
    slug: "inteligencia-artificial-futuro-trabajo",
  },
];

const NOTES_PER_PAGE = 6;



function NotaCard({ nota }) {
  return (
    <Link
      href={`/articulando/${nota.slug}`}
      className="group flex flex-col bg-white border border-[#E8ECF0] rounded-[20px] min-[1200px]:rounded-[28px] overflow-hidden hover:shadow-[0_12px_48px_rgba(5,22,45,0.10)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
    >
      {/* Color accent top bar */}
      <div className="w-full h-1 bg-gradient-to-r from-[#0E52C6] to-[#4A8EFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5 min-[1200px]:p-7 min-[1610px]:p-8">
        {/* Meta row */}
        <div className="flex items-center gap-2 flex-wrap mb-4">
          <span className="inline-block text-[11px] min-[1200px]:text-[13px] font-semibold px-3 py-1 rounded-full bg-[#0E52C6]/10 text-[#0E52C6]">
            Notas del Presidente
          </span>
          <span className="text-[#A0A4A8] text-[11px] min-[1200px]:text-[13px]">
            {nota.tiempoLectura} lectura
          </span>
        </div>

        {/* Title */}
        <h3 className="font-bold text-[#05162D] text-base min-[1200px]:text-[20px] min-[1610px]:text-[22px] leading-snug tracking-tight mb-3 line-clamp-3 group-hover:text-[#0E52C6] transition-colors">
          {nota.titulo}
        </h3>

        {/* Excerpt */}
        <p className="text-[#555B63] text-sm min-[1200px]:text-[15px] leading-relaxed line-clamp-3 flex-1">
          {nota.extracto}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-5 pt-4 border-t border-[#F0F2F5]">
          <span className="text-[#777C82] text-xs min-[1200px]:text-[14px]">
            {nota.fecha}
          </span>
          <span className="flex items-center gap-1 text-[#0E52C6] font-semibold text-xs min-[1200px]:text-[14px] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
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

export default function NotasPresidenteGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(MOCK_NOTAS.length / NOTES_PER_PAGE);

  const startIdx = (currentPage - 1) * NOTES_PER_PAGE;
  const visibleNotes = MOCK_NOTAS.slice(startIdx, startIdx + NOTES_PER_PAGE);

  const handlePage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="w-full px-4 tablet:px-7.5 desktop:px-20 min-[1610px]:px-29.5 max-w-[1920px] mx-auto pb-[200px]">

      {/* Section header */}
      <div className="flex flex-col min-[1200px]:flex-row min-[1200px]:items-end justify-between gap-4 mb-10 min-[1200px]:mb-14">
        <div>
          <h2 className="text-3xl min-[1200px]:text-[44px] min-[1610px]:text-[52px] font-black text-[#05162D] tracking-tight leading-none">
            Todas las notas
          </h2>
        </div>
        <span className="text-[#777C82] text-sm min-[1200px]:text-[16px]">
          {MOCK_NOTAS.length} notas publicadas
        </span>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 min-[1200px]:grid-cols-3 gap-5 min-[1200px]:gap-6 min-[1610px]:gap-8 mb-12 min-[1200px]:mb-16">
        {visibleNotes.map((nota) => (
          <NotaCard key={nota.id} nota={nota} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 min-[1200px]:gap-3">
          {/* Prev */}
          <button
            onClick={() => handlePage(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Página anterior"
            className="flex items-center justify-center w-10 h-10 min-[1200px]:w-12 min-[1200px]:h-12 rounded-full border border-[#E0E4EA] text-[#05162D] hover:border-[#0E52C6] hover:text-[#0E52C6] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ArrowLeft size={18} />
          </button>

          {/* Page numbers */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePage(page)}
              aria-label={`Página ${page}`}
              aria-current={currentPage === page ? "page" : undefined}
              className={`flex items-center justify-center w-10 h-10 min-[1200px]:w-12 min-[1200px]:h-12 rounded-full font-semibold text-sm min-[1200px]:text-[16px] transition-all duration-200 ${
                currentPage === page
                  ? "bg-[#0E52C6] text-white shadow-md shadow-blue-200"
                  : "border border-[#E0E4EA] text-[#05162D] hover:border-[#0E52C6] hover:text-[#0E52C6]"
              }`}
            >
              {page}
            </button>
          ))}

          {/* Next */}
          <button
            onClick={() => handlePage(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Página siguiente"
            className="flex items-center justify-center w-10 h-10 min-[1200px]:w-12 min-[1200px]:h-12 rounded-full border border-[#E0E4EA] text-[#05162D] hover:border-[#0E52C6] hover:text-[#0E52C6] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      )}

    </section>
  );
}

