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
    <div className="bg-white rounded-[24px] p-6 laptop:p-8 border border-[#E8ECF0] hover:shadow-[0_8px_32px_rgba(5,22,45,0.08)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col group">
      <div className="flex items-start justify-between mb-4">
        <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full ${
          debate.status === "activo"
            ? "bg-green-100 text-green-700"
            : "bg-[#F0F2F5] text-[#777C82]"
        }`}>
          {debate.status === "activo" ? (
            <><span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" /> Activo</>
          ) : (
            <><Clock size={12} /> Cerrado</>
          )}
        </span>
      </div>

      <Link href={`/articulando/${debate.slug}`} className="mb-auto">
        <h3 className="font-bold text-[#05162D] text-[16px] laptop:text-[18px] leading-snug mb-4 group-hover:text-[#4A8EFF] transition-colors line-clamp-3">
          {debate.pregunta}
        </h3>
      </Link>

      <div className="flex items-center justify-between pt-4 border-t border-[#F0F2F5] mt-auto">
        <div className="flex items-center gap-3 text-[#777C82] text-xs">
          <span className="flex items-center gap-1">
            <MessageCircle size={13} /> {debate.respuestas}
          </span>
          <span className="flex items-center gap-1">
            <Users size={13} /> {debate.participantes}
          </span>
          <span>{debate.fecha}</span>
        </div>
        <Link
          href={`/articulando/${debate.slug}`}
          className="text-[#4A8EFF] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"
        >
          Leer <ArrowRight size={14} />
        </Link>
      </div>
    </div>
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
    <section className="w-full bg-white">
      <div className="w-full max-w-[1200px] mx-auto px-4 tablet:px-7.5 laptop:px-10 py-20 laptop:py-28">

        <div className="flex flex-col laptop:flex-row laptop:items-end justify-between gap-4 mb-10 laptop:mb-14">
          <div>
            <h2 className="text-2xl laptop:text-[38px] font-black text-[#05162D] tracking-tight leading-none mb-3">
              Debates anteriores
            </h2>
            <p className="text-[#777C82] text-sm laptop:text-[16px]">
              Explora los temas que han generado conversación en nuestra comunidad.
            </p>
          </div>
          <span className="text-[#777C82] text-sm laptop:text-[15px] shrink-0">
            {PAST_DEBATES.length} debates
          </span>
        </div>

        <div className="grid grid-cols-1 laptop:grid-cols-2 gap-5 laptop:gap-6 mb-12 laptop:mb-16">
          {visibleDebates.map((debate) => (
            <DebateCard key={debate.id} debate={debate} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 laptop:gap-3">
            <button
              onClick={() => handlePage(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Página anterior"
              className="flex items-center justify-center w-10 h-10 laptop:w-12 laptop:h-12 rounded-full border border-[#E0E4EA] text-[#05162D] hover:border-[#4A8EFF] hover:text-[#4A8EFF] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
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
                    ? "bg-[#4A8EFF] text-white shadow-md shadow-blue-200"
                    : "border border-[#E0E4EA] text-[#05162D] hover:border-[#4A8EFF] hover:text-[#4A8EFF]"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePage(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Página siguiente"
              className="flex items-center justify-center w-10 h-10 laptop:w-12 laptop:h-12 rounded-full border border-[#E0E4EA] text-[#05162D] hover:border-[#4A8EFF] hover:text-[#4A8EFF] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        )}

        {/* Community CTA */}
        <div className="mt-16 laptop:mt-20 bg-gradient-to-r from-[#0A1628] via-[#1A2D5A] to-[#0A1628] rounded-[28px] p-8 laptop:p-12 text-center">
          <h3 className="text-2xl laptop:text-[32px] font-bold text-white mb-4">
            ¿Tienes un tema para debatir?
          </h3>
          <p className="text-white/60 text-sm laptop:text-[16px] max-w-[600px] mx-auto mb-6">
            Propón un tema de discusión y la comunidad votará para incluirlo en nuestros próximos debates.
          </p>
          <button className="h-[52px] px-8 bg-[#4A8EFF] hover:bg-blue-600 text-white font-semibold text-[15px] rounded-full transition-all">
            Proponer tema
          </button>
        </div>
      </div>
    </section>
  );
}
