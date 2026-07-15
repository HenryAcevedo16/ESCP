"use client";
import { useState } from "react";

const dummyComments = [
  {
    id: 1,
    name: "María Fernández",
    initials: "MF",
    color: "bg-[#0E52C6]",
    date: "12 Julio 2023",
    text: "Excelente iniciativa de la ESCP. Este tipo de diplomados son fundamentales para fortalecer el movimiento sindical en nuestro país. Espero que sigan abriendo más oportunidades como esta.",
    likes: 14,
    replies: [
      {
        id: 11,
        name: "Carlos Mejía",
        initials: "CM",
        color: "bg-[#E05A2B]",
        date: "12 Julio 2023",
        text: "Totalmente de acuerdo, María. Yo participé en el diplomado anterior y fue una experiencia transformadora.",
        likes: 5,
      },
    ],
  },
  {
    id: 2,
    name: "José Ramírez",
    initials: "JR",
    color: "bg-[#2EAE6D]",
    date: "11 Julio 2023",
    text: "Me gustaría saber más sobre los requisitos de inscripción. ¿Hay algún enlace donde pueda obtener más información sobre el pensum y los horarios del diplomado?",
    likes: 8,
    replies: [],
  },
  {
    id: 3,
    name: "Ana Lucía Pérez",
    initials: "AP",
    color: "bg-[#9B59B6]",
    date: "11 Julio 2023",
    text: "El liderazgo sindical necesita renovarse constantemente. Programas como este diplomado son la clave para formar dirigentes con visión estratégica y compromiso social. ¡Felicidades a la ESCP!",
    likes: 22,
    replies: [
      {
        id: 31,
        name: "Roberto Díaz",
        initials: "RD",
        color: "bg-[#E67E22]",
        date: "11 Julio 2023",
        text: "Bien dicho, Ana. La formación continua es esencial para enfrentar los retos actuales del sindicalismo.",
        likes: 3,
      },
      {
        id: 32,
        name: "Laura Martínez",
        initials: "LM",
        color: "bg-[#1ABC9C]",
        date: "12 Julio 2023",
        text: "Me encantaría participar en la próxima cohorte. ¿Saben si ya están abiertas las inscripciones?",
        likes: 7,
      },
    ],
  },
  {
    id: 4,
    name: "Pedro Santos",
    initials: "PS",
    color: "bg-[#3498DB]",
    date: "10 Julio 2023",
    text: "Muy buena noticia. La acción sociopolítica informada es lo que necesitamos para avanzar como sociedad. Ojalá estos programas lleguen a más regiones del país.",
    likes: 11,
    replies: [],
  },
  {
    id: 5,
    name: "Diana Castillo",
    initials: "DC",
    color: "bg-[#E74C3C]",
    date: "10 Julio 2023",
    text: "Como egresada de programas anteriores de la ESCP, puedo dar fe de la calidad de sus formaciones. Los profesores son de primer nivel y el contenido es muy relevante para la realidad dominicana.",
    likes: 31,
    replies: [
      {
        id: 51,
        name: "Miguel Ángel Torres",
        initials: "MT",
        color: "bg-[#8E44AD]",
        date: "10 Julio 2023",
        text: "¡Gracias por compartir tu experiencia, Diana! Eso me motiva a inscribirme.",
        likes: 4,
      },
    ],
  },
  {
    id: 6,
    name: "Raúl Hernández",
    initials: "RH",
    color: "bg-[#F39C12]",
    date: "9 Julio 2023",
    text: "La educación sindical es una inversión en el futuro de los trabajadores. Este diplomado es una muestra del compromiso de la ESCP con la formación de líderes capaces y responsables.",
    likes: 9,
    replies: [],
  },
  {
    id: 7,
    name: "Sofía Méndez",
    initials: "SM",
    color: "bg-[#16A085]",
    date: "9 Julio 2023",
    text: "¿Alguien sabe si este diplomado tiene modalidad virtual? Soy de Santiago y me resultaría difícil asistir de manera presencial todos los días.",
    likes: 15,
    replies: [
      {
        id: 71,
        name: "Pedro Santos",
        initials: "PS",
        color: "bg-[#3498DB]",
        date: "9 Julio 2023",
        text: "Sofía, en la convocatoria anterior ofrecieron un formato híbrido. Te recomiendo contactar directamente a la ESCP para confirmar.",
        likes: 6,
      },
    ],
  },
  {
    id: 8,
    name: "Fernando Vásquez",
    initials: "FV",
    color: "bg-[#2C3E50]",
    date: "8 Julio 2023",
    text: "Participé en la primera edición de este diplomado y puedo decir que cambió mi perspectiva sobre el rol del sindicalismo en la política nacional. El módulo de negociación colectiva fue excepcional.",
    likes: 27,
    replies: [],
  },
  {
    id: 9,
    name: "Carmen Rosario",
    initials: "CR",
    color: "bg-[#D35400]",
    date: "8 Julio 2023",
    text: "Excelente artículo. Es importante que los medios cubran este tipo de iniciativas educativas. La formación sindical no recibe la atención que merece en nuestro país.",
    likes: 18,
    replies: [
      {
        id: 91,
        name: "José Ramírez",
        initials: "JR",
        color: "bg-[#2EAE6D]",
        date: "8 Julio 2023",
        text: "Coincido, Carmen. Necesitamos más visibilidad para estos programas que realmente transforman comunidades.",
        likes: 8,
      },
    ],
  },
  {
    id: 10,
    name: "Alejandro Núñez",
    initials: "AN",
    color: "bg-[#7D3C98]",
    date: "7 Julio 2023",
    text: "Me alegra ver que la ESCP sigue ampliando su oferta formativa. La combinación de liderazgo sindical con acción sociopolítica es justamente lo que necesitan los nuevos dirigentes sindicales.",
    likes: 12,
    replies: [],
  },
];

const VISIBLE_COUNT = 5;

function ReplyModal({ comment, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4" onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-white rounded-[24px] w-full max-w-[560px] p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-[32px] h-[32px] rounded-full bg-[#F2F4F7] flex items-center justify-center text-[#667085] hover:bg-[#E5E7EB] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>

        <h3 className="text-[#05162D] text-xl font-bold mb-6">Responder comentario</h3>

        {/* Original comment preview */}
        <div className="bg-[#F9FAFB] rounded-[16px] p-4 mb-6 border border-[#E5E7EB]">
          <div className="flex items-center gap-3 mb-2">
            <div className={`w-[36px] h-[36px] rounded-full ${comment.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
              {comment.initials}
            </div>
            <div>
              <span className="text-[#05162D] font-semibold text-[14px] block">{comment.name}</span>
              <span className="text-[#98A2B3] text-[12px]">{comment.date}</span>
            </div>
          </div>
          <p className="text-[#475467] text-[14px] leading-relaxed line-clamp-3">
            {comment.text}
          </p>
        </div>

        {/* Compact reply form */}
        <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
          <div className="flex gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <label className="text-[#05162D] font-medium text-[13px] ml-1">Nombre</label>
              <input
                type="text"
                placeholder="Tu nombre"
                className="w-full h-[44px] rounded-full border border-[#D0D5DD] px-4 text-[14px] text-[#05162D] placeholder:text-[#98A2B3] focus:outline-none focus:border-[#0E52C6] transition"
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <label className="text-[#05162D] font-medium text-[13px] ml-1">Apellido</label>
              <input
                type="text"
                placeholder="Tu apellido"
                className="w-full h-[44px] rounded-full border border-[#D0D5DD] px-4 text-[14px] text-[#05162D] placeholder:text-[#98A2B3] focus:outline-none focus:border-[#0E52C6] transition"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[#05162D] font-medium text-[13px] ml-1">Tu respuesta</label>
            <textarea
              placeholder="Escribe tu respuesta..."
              className="w-full h-[100px] rounded-[16px] border border-[#D0D5DD] p-4 text-[14px] text-[#05162D] placeholder:text-[#98A2B3] focus:outline-none focus:border-[#0E52C6] transition resize-none"
            ></textarea>
          </div>

          <div className="flex justify-end gap-3 mt-1">
            <button
              type="button"
              onClick={onClose}
              className="h-[44px] px-6 rounded-full border border-[#D0D5DD] text-[#667085] font-medium text-[14px] hover:bg-[#F9FAFB] transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="h-[44px] px-6 rounded-full bg-[#0E52C6] hover:bg-blue-800 text-white font-medium text-[14px] transition-colors"
            >
              Enviar respuesta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function CommentCard({ comment, isReply = false, onReply }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(comment.likes);
  const [showReplies, setShowReplies] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  const replyCount = comment.replies ? comment.replies.length : 0;

  return (
    <div className={`flex gap-4 ${isReply ? "ml-14 mt-4" : ""}`}>
      {/* Avatar */}
      <div
        className={`w-[44px] h-[44px] rounded-full ${comment.color} flex items-center justify-center text-white text-sm font-bold shrink-0`}
      >
        {comment.initials}
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-1">
          <span className="text-[#05162D] font-semibold text-[15px]">
            {comment.name}
          </span>
          <span className="text-[#98A2B3] text-[13px]">{comment.date}</span>
        </div>

        <p className="text-[#475467] text-[15px] leading-relaxed mb-3">
          {comment.text}
        </p>

        {/* Actions */}
        <div className="flex items-center gap-5">
          <button
            onClick={handleLike}
            className={`flex items-center gap-1.5 text-[13px] font-medium transition-colors ${
              liked
                ? "text-[#0E52C6]"
                : "text-[#98A2B3] hover:text-[#0E52C6]"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill={liked ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 10v12" />
              <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
            </svg>
            {likeCount}
          </button>
          <button
            onClick={() => onReply(comment)}
            className="text-[13px] font-medium text-[#98A2B3] hover:text-[#0E52C6] transition-colors"
          >
            Responder
          </button>
          {/* Reply count & toggle */}
          {!isReply && replyCount > 0 && (
            <button
              onClick={() => setShowReplies(!showReplies)}
              className="flex items-center gap-1.5 text-[13px] font-medium text-[#0E52C6] hover:underline transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              {showReplies
                ? "Ocultar respuestas"
                : `Ver ${replyCount} ${replyCount === 1 ? "respuesta" : "respuestas"}`}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-200 ${showReplies ? "rotate-180" : ""}`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          )}
        </div>

        {/* Replies (collapsible) */}
        {!isReply && showReplies && comment.replies && comment.replies.length > 0 && (
          <div className="mt-2">
            {comment.replies.map((reply) => (
              <CommentCard key={reply.id} comment={reply} isReply={true} onReply={onReply} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function CommentsSection() {
  const [showAll, setShowAll] = useState(false);
  const [replyingTo, setReplyingTo] = useState(null);

  // Mostrar los últimos 5 comentarios por defecto (los más recientes están primero)
  const visibleComments = showAll
    ? dummyComments
    : dummyComments.slice(0, VISIBLE_COUNT);

  const hiddenCount = dummyComments.length - VISIBLE_COUNT;

  return (
    <section className="w-full bg-[#F9FAFB] border-t border-[#E5E7EB]">
      <div className="w-full max-w-[800px] mx-auto py-16 px-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-10">
          <h2 className="text-[#05162D] text-2xl md:text-[32px] font-bold">
            Comentarios
          </h2>
          <span className="bg-[#0E52C6] text-white text-sm font-bold rounded-full w-[32px] h-[32px] flex items-center justify-center">
            {dummyComments.length}
          </span>
        </div>

        {/* Comments list */}
        <div className={`flex flex-col gap-8 h-[600px] ${showAll ? "overflow-y-auto pr-4" : "overflow-hidden"}`}>
          {visibleComments.map((comment) => (
            <div key={comment.id}>
              <CommentCard comment={comment} onReply={setReplyingTo} />
              {/* Divider */}
              <div className="border-b border-[#E5E7EB] mt-8" />
            </div>
          ))}
        </div>

        {/* Ver todos / Mostrar menos */}
        {dummyComments.length > VISIBLE_COUNT && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 text-[#0E52C6] font-semibold text-[16px] hover:underline transition-colors"
            >
              {showAll ? (
                <>
                  Mostrar menos
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                </>
              ) : (
                <>
                  Ver todos los comentarios ({hiddenCount} más)
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Reply Modal */}
      {replyingTo && (
        <ReplyModal comment={replyingTo} onClose={() => setReplyingTo(null)} />
      )}
    </section>
  );
}
