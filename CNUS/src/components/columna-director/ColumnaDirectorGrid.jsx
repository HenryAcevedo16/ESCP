"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const MOCK_COLUMNAS = [
  {
    id: 1,
    titulo: "La reforma que viene: por qué el diálogo social es la única vía posible",
    extracto: "En esta primera entrega de la columna del director, reflexiono sobre el momento histórico que vive el movimiento sindical dominicano frente a la reforma laboral y la necesidad de construir consensos.",
    fecha: "25 de julio de 2026",
    categoria: "Columna",
    tiempoLectura: "5 min",
    slug: "reforma-dialogo-social-unica-via",
  },
  {
    id: 2,
    titulo: "Tres lecciones que nos deja el paro de transportistas",
    extracto: "El reciente paro de transporte a nivel nacional no fue solo una protesta sectorial: fue una advertencia sobre la fragilidad de nuestro modelo de diálogo social y la urgencia de fortalecerlo.",
    fecha: "18 de julio de 2026",
    categoria: "Columna",
    tiempoLectura: "4 min",
    slug: "tres-lecciones-paro-transportistas",
  },
  {
    id: 3,
    titulo: "Educación sindical: ¿gasto o inversión?",
    extracto: "Cada peso invertido en formación sindical se multiplica en mejores condiciones laborales, contratos colectivos más justos y una democracia más robusta. La evidencia internacional es contundente.",
    fecha: "11 de julio de 2026",
    categoria: "Columna",
    tiempoLectura: "5 min",
    slug: "educacion-sindical-gasto-o-inversion",
  },
  {
    id: 4,
    titulo: "La informalidad laboral: un problema de todos",
    extracto: "Más del 55% de los trabajadores dominicanos están en la informalidad. Este no es solo un problema económico: es una emergencia social que requiere una respuesta sindical innovadora y audaz.",
    fecha: "4 de julio de 2026",
    categoria: "Columna",
    tiempoLectura: "6 min",
    slug: "informalidad-laboral-problema-todos",
  },
  {
    id: 5,
    titulo: "Mirando hacia el bicentenario: el sindicalismo que necesitamos",
    extracto: "Al acercarnos al bicentenario de la República, el movimiento sindical debe preguntarse qué tipo de organización necesita el país para afrontar los desafíos del próximo siglo.",
    fecha: "27 de junio de 2026",
    categoria: "Columna",
    tiempoLectura: "5 min",
    slug: "bicentenario-sindicalismo-necesitamos",
  },
  {
    id: 6,
    titulo: "Juventud y sindicalismo: cerrar la brecha generacional",
    extracto: "La edad promedio de los afiliados sindicales en RD supera los 45 años. Si no logramos conectar con las nuevas generaciones, el movimiento sindical corre el riesgo de volverse irrelevante.",
    fecha: "20 de junio de 2026",
    categoria: "Columna",
    tiempoLectura: "4 min",
    slug: "juventud-sindicalismo-brecha-generacional",
  },
  {
    id: 7,
    titulo: "Mujer y liderazgo sindical: avances que no podemos detener",
    extracto: "Hoy las mujeres ocupan el 35% de las posiciones de liderazgo sindical en el país, frente al 12% de hace una década. El progreso es real, pero insuficiente. Debemos acelerar el paso.",
    fecha: "13 de junio de 2026",
    categoria: "Columna",
    tiempoLectura: "5 min",
    slug: "mujer-liderazgo-sindical-avances",
  },
  {
    id: 8,
    titulo: "Cambio climático y trabajo: la agenda sindical del futuro",
    extracto: "La transición energética justa no es un tema ambientalista: es una cuestión de derechos laborales. Millones de empleos desaparecerán y otros nuevos surgirán. El sindicalismo debe liderar esa transición.",
    fecha: "6 de junio de 2026",
    categoria: "Columna",
    tiempoLectura: "6 min",
    slug: "cambio-climatico-trabajo-agenda-sindical",
  },
  {
    id: 9,
    titulo: "El sindicalismo internacional y la solidaridad sin fronteras",
    extracto: "Cada vez que un trabajador es despedido por organizarse, cada vez que una fábrica cierra sin previo aviso, el sindicalismo internacional debe responder. Nuestra solidaridad no puede tener fronteras.",
    fecha: "30 de mayo de 2026",
    categoria: "Columna",
    tiempoLectura: "5 min",
    slug: "sindicalismo-internacional-solidaridad",
  },
  {
    id: 10,
    titulo: "¿Hacia dónde va el movimiento sindical dominicano?",
    extracto: "Al cerrar este primer ciclo de columnas, quiero compartir una visión personal sobre el rumbo que debería tomar el sindicalismo dominicano en los próximos años.",
    fecha: "23 de mayo de 2026",
    categoria: "Columna",
    tiempoLectura: "7 min",
    slug: "hacia-donde-va-movimiento-sindical-dominicano",
  },
];

const ITEMS_PER_PAGE = 6;

function ColumnaCard({ columna }) {
  return (
    <Link
      href={`/articulando/${columna.slug}`}
      className="group flex flex-col bg-white border border-[#E8ECF0] rounded-[20px] laptop:rounded-[28px] overflow-hidden hover:shadow-[0_12px_48px_rgba(5,22,45,0.10)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
    >
      <div className="w-full h-1 bg-gradient-to-r from-[#06B6D4] to-[#22D3EE] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex flex-col flex-1 p-5 laptop:p-7 desktop:p-8">
        <div className="flex items-center gap-2 flex-wrap mb-4">
          <span className="inline-block text-[11px] laptop:text-[13px] font-semibold px-3 py-1 rounded-full bg-[#06B6D4]/10 text-[#0891B2]">
            {columna.categoria}
          </span>
          <span className="text-[#A0A4A8] text-[11px] laptop:text-[13px]">
            {columna.tiempoLectura} lectura
          </span>
        </div>

        <h3 className="font-bold text-[#05162D] text-base laptop:text-[20px] desktop:text-[22px] leading-snug tracking-tight mb-3 line-clamp-3 group-hover:text-[#0891B2] transition-colors">
          {columna.titulo}
        </h3>

        <p className="text-[#555B63] text-sm laptop:text-[15px] leading-relaxed line-clamp-3 flex-1">
          {columna.extracto}
        </p>

        <div className="flex items-center justify-between mt-5 pt-4 border-t border-[#F0F2F5]">
          <span className="text-[#777C82] text-xs laptop:text-[14px]">
            {columna.fecha}
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

export default function ColumnaDirectorGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(MOCK_COLUMNAS.length / ITEMS_PER_PAGE);

  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleCol = MOCK_COLUMNAS.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  const handlePage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="w-full px-4 tablet:px-7.5 laptop:px-20 desktop:px-29.5 max-w-[1920px] mx-auto pb-[200px]">

      <div className="flex flex-col laptop:flex-row laptop:items-end justify-between gap-4 mb-10 laptop:mb-14">
        <div>
          <h2 className="text-3xl laptop:text-[44px] desktop:text-[52px] font-black text-[#05162D] tracking-tight leading-none">
            Todas las columnas
          </h2>
        </div>
        <span className="text-[#777C82] text-sm laptop:text-[16px]">
          {MOCK_COLUMNAS.length} columnas publicadas
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 laptop:grid-cols-3 gap-5 laptop:gap-6 desktop:gap-8 mb-12 laptop:mb-16">
        {visibleCol.map((columna) => (
          <ColumnaCard key={columna.id} columna={columna} />
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
