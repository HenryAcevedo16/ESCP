"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MessageCircle, Users, Clock } from "lucide-react";

const PAST_DEBATES = [
  {
    id: 1,
    pregunta: "¿Es efectiva la huelga como herramienta de presión en el contexto laboral actual?",
    fecha: "julio 2026",
    respuestas: 312,
    participantes: 198,
    status: "cerrado",
    slug: "efectividad-huelga-herramienta-presion",
  },
  {
    id: 2,
    pregunta: "¿Debería regularse el trabajo en plataformas digitales como Uber y Rappi?",
    fecha: "junio 2026",
    respuestas: 289,
    participantes: 176,
    status: "cerrado",
    slug: "regulacion-trabajo-plataformas-digitales",
  },
  {
    id: 3,
    pregunta: "¿La reforma de pensiones debe incluir un pilar solidario financiado por el Estado?",
    fecha: "mayo 2026",
    respuestas: 245,
    participantes: 162,
    status: "cerrado",
    slug: "reforma-pensiones-pilar-solidario",
  },
  {
    id: 4,
    pregunta: "¿El teletrabajo debe regularse por ley sectorial o por convenio colectivo?",
    fecha: "abril 2026",
    respuestas: 198,
    participantes: 134,
    status: "cerrado",
    slug: "teletrabajo-ley-sectorial-convenio-colectivo",
  },
  {
    id: 5,
    pregunta: "¿Es necesario un salario mínimo diferenciado por sectores económicos?",
    fecha: "marzo 2026",
    respuestas: 267,
    participantes: 181,
    status: "cerrado",
    slug: "salario-minimo-diferenciado-sectores",
  },
  {
    id: 6,
    pregunta: "¿Debe el Estado asumir un rol más activo en la formación sindical?",
    fecha: "febrero 2026",
    respuestas: 156,
    participantes: 112,
    status: "cerrado",
    slug: "estado-rol-activo-formacion-sindical",
  },
];

const ITEMS_PER_PAGE = 6;

function DebateCard({ debate }) {
  return (
    <Link
      href={`/articulando/${debate.slug}`}
      className="group flex flex-col bg-white border border-[#E8ECF0] rounded-[20px] laptop:rounded-[28px] overflow-hidden hover:shadow-[0_12px_48px_rgba(5,22,45,0.10)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
    >
      {/* Color accent top bar */}
      <div className="w-full h-1 bg-gradient-to-r from-[#06B6D4] to-[#22D3EE] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5 laptop:p-7 desktop:p-8">
        {/* Meta row */}
        <div className="flex items-center gap-2 flex-wrap mb-4">
          <span className={`inline-block text-[11px] laptop:text-[13px] font-semibold px-3 py-1 rounded-full ${
            debate.status === "activo"
              ? "bg-green-100 text-green-700"
              : "bg-[#F0F2F5] text-[#777C82]"
          }`}>
            {debate.status === "activo" ? "Activo" : "Cerrado"}
          </span>
          <span className="text-[#A0A4A8] text-[11px] laptop:text-[13px] flex items-center gap-1">
            <MessageCircle size={12} /> {debate.respuestas}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-bold text-[#05162D] text-base laptop:text-[20px] desktop:text-[22px] leading-snug tracking-tight mb-3 line-clamp-3 group-hover:text-[#0891B2] transition-colors">
          {debate.pregunta}
        </h3>

        {/* Space filler since no extract in debate */}
        <div className="flex-1" />

        {/* Footer */}
        <div className="flex items-center justify-between mt-5 pt-4 border-t border-[#F0F2F5]">
          <span className="text-[#777C82] text-xs laptop:text-[14px]">
            {debate.fecha}
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

export default function DebateGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(PAST_DEBATES.length / ITEMS_PER_PAGE);

  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleDebates = PAST_DEBATES.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  const handlePage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="w-full px-4 tablet:px-7.5 laptop:px-20 desktop:px-29.5 max-w-[1920px] mx-auto pb-[200px] mt-20 laptop:mt-28">

      {/* Section header */}
      <div className="flex flex-col laptop:flex-row laptop:items-end justify-between gap-4 mb-10 laptop:mb-14">
        <div>
          <h2 className="text-3xl laptop:text-[44px] desktop:text-[52px] font-black text-[#05162D] tracking-tight leading-none">
            Debates anteriores
          </h2>
        </div>
        <span className="text-[#777C82] text-sm laptop:text-[16px]">
          {PAST_DEBATES.length} debates
        </span>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 laptop:grid-cols-3 gap-5 laptop:gap-6 desktop:gap-8 mb-12 laptop:mb-16">
        {visibleDebates.map((debate) => (
          <DebateCard key={debate.id} debate={debate} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 laptop:gap-3">
          {/* Prev */}
          <button
            onClick={() => handlePage(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Página anterior"
            className="flex items-center justify-center w-10 h-10 laptop:w-12 laptop:h-12 rounded-full border border-[#E0E4EA] text-[#05162D] hover:border-[#0891B2] hover:text-[#0891B2] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
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
              className={`flex items-center justify-center w-10 h-10 laptop:w-12 laptop:h-12 rounded-full font-semibold text-sm laptop:text-[16px] transition-all duration-200 ${
                currentPage === page
                  ? "bg-[#0891B2] text-white shadow-md shadow-cyan-200"
                  : "border border-[#E0E4EA] text-[#05162D] hover:border-[#0891B2] hover:text-[#0891B2]"
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
            className="flex items-center justify-center w-10 h-10 laptop:w-12 laptop:h-12 rounded-full border border-[#E0E4EA] text-[#05162D] hover:border-[#0891B2] hover:text-[#0891B2] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      )}

      {/* Community CTA (Restored style from previous DebateGrid) */}
      <div className="mt-16 laptop:mt-20 bg-gradient-to-r from-[#0A1628] via-[#1A2D5A] to-[#0A1628] rounded-[28px] p-8 laptop:p-12 text-center">
        <h3 className="text-2xl laptop:text-[32px] font-bold text-white mb-4">
          ¿Tienes un tema para debatir?
        </h3>
        <p className="text-white/60 text-sm laptop:text-[16px] max-w-[600px] mx-auto mb-6">
          Propón un tema de discusión y la comunidad votará para incluirlo en nuestros próximos debates.
        </p>
        <button className="h-[52px] px-8 bg-[#06B6D4] hover:bg-[#0891B2] text-white font-semibold text-[15px] rounded-full transition-all">
          Proponer tema
        </button>
      </div>

    </section>
  );
}
