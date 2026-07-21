"use client";
import { useState } from "react";
import { postComentario } from "@/lib/supabase";

const VISIBLE_COUNT = 5;

function getInitials(nombre = "", apellido = "") {
  return `${nombre.charAt(0)}${apellido.charAt(0)}`.toUpperCase() || "?";
}

const AVATAR_COLORS = [
  "bg-[#0E52C6]", "bg-[#E05A2B]", "bg-[#2EAE6D]", "bg-[#9B59B6]",
  "bg-[#E67E22]", "bg-[#3498DB]", "bg-[#16A085]", "bg-[#E74C3C]",
];

function getColor(id) {
  return AVATAR_COLORS[id % AVATAR_COLORS.length];
}

function ReplyModal({ comment, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div className="relative bg-white rounded-[24px] w-full max-w-[560px] p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-5 right-5 w-[32px] h-[32px] rounded-full bg-[#F2F4F7] flex items-center justify-center text-[#667085] hover:bg-[#E5E7EB] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
        <h3 className="text-[#05162D] text-xl font-bold mb-6">Responder comentario</h3>
        <div className="bg-[#F9FAFB] rounded-[16px] p-4 mb-6 border border-[#E5E7EB]">
          <div className="flex items-center gap-3 mb-2">
            <div className={`w-[36px] h-[36px] rounded-full ${getColor(comment.id)} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
              {getInitials(comment.nombre, comment.apellido)}
            </div>
            <div>
              <span className="text-[#05162D] font-semibold text-[14px] block">{comment.nombre} {comment.apellido}</span>
            </div>
          </div>
          <p className="text-[#475467] text-[14px] leading-relaxed line-clamp-3">{comment.texto}</p>
        </div>
        <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
          <div className="flex gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <label className="text-[#05162D] font-medium text-[13px] ml-1">Nombre</label>
              <input type="text" placeholder="Tu nombre" className="w-full h-[44px] rounded-full border border-[#D0D5DD] px-4 text-[14px] text-[#05162D] placeholder:text-[#98A2B3] focus:outline-none focus:border-[#0E52C6] transition" />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <label className="text-[#05162D] font-medium text-[13px] ml-1">Apellido</label>
              <input type="text" placeholder="Tu apellido" className="w-full h-[44px] rounded-full border border-[#D0D5DD] px-4 text-[14px] text-[#05162D] placeholder:text-[#98A2B3] focus:outline-none focus:border-[#0E52C6] transition" />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[#05162D] font-medium text-[13px] ml-1">Tu respuesta</label>
            <textarea placeholder="Escribe tu respuesta..." className="w-full h-[100px] rounded-[16px] border border-[#D0D5DD] p-4 text-[14px] text-[#05162D] placeholder:text-[#98A2B3] focus:outline-none focus:border-[#0E52C6] transition resize-none"></textarea>
          </div>
          <div className="flex justify-end gap-3 mt-1">
            <button type="button" onClick={onClose} className="h-[44px] px-6 rounded-full border border-[#D0D5DD] text-[#667085] font-medium text-[14px] hover:bg-[#F9FAFB] transition-colors">Cancelar</button>
            <button type="submit" className="h-[44px] px-6 rounded-full bg-[#0E52C6] hover:bg-blue-800 text-white font-medium text-[14px] transition-colors">Enviar respuesta</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function CommentCard({ comment, isReply = false, onReply }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(comment.likes ?? 0);
  const [showReplies, setShowReplies] = useState(false);

  const initials = getInitials(comment.nombre, comment.apellido);
  const color = getColor(comment.id ?? 0);
  const replyCount = comment.replies?.length ?? 0;

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <div className={`flex gap-4 ${isReply ? "ml-14 mt-4" : ""}`}>
      <div className={`w-[44px] h-[44px] rounded-full ${color} flex items-center justify-center text-white text-sm font-bold shrink-0`}>
        {initials}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-1">
          <span className="text-[#05162D] font-semibold text-[15px]">{comment.nombre} {comment.apellido}</span>
          {comment.created_at && (
            <span className="text-[#98A2B3] text-[13px]">
              {new Date(comment.created_at).toLocaleDateString("es-DO", { day: "numeric", month: "long", year: "numeric" })}
            </span>
          )}
        </div>
        <p className="text-[#475467] text-[15px] leading-relaxed mb-3">{comment.texto}</p>
        <div className="flex items-center gap-5">
          <button onClick={handleLike} className={`flex items-center gap-1.5 text-[13px] font-medium transition-colors ${liked ? "text-[#0E52C6]" : "text-[#98A2B3] hover:text-[#0E52C6]"}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={liked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 10v12"/>
              <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/>
            </svg>
            {likeCount}
          </button>
          <button onClick={() => onReply(comment)} className="text-[13px] font-medium text-[#98A2B3] hover:text-[#0E52C6] transition-colors">Responder</button>
          {!isReply && replyCount > 0 && (
            <button onClick={() => setShowReplies(!showReplies)} className="flex items-center gap-1.5 text-[13px] font-medium text-[#0E52C6] hover:underline">
              {showReplies ? "Ocultar respuestas" : `Ver ${replyCount} ${replyCount === 1 ? "respuesta" : "respuestas"}`}
            </button>
          )}
        </div>
        {!isReply && showReplies && comment.replies?.length > 0 && (
          <div className="mt-2">
            {comment.replies.map((reply) => (
              <CommentCard key={reply.id} comment={reply} isReply onReply={onReply} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function CommentsSection({ comentarios = [] }) {
  const [showAll, setShowAll] = useState(false);
  const [replyingTo, setReplyingTo] = useState(null);

  const visibleComments = showAll ? comentarios : comentarios.slice(0, VISIBLE_COUNT);
  const hiddenCount = comentarios.length - VISIBLE_COUNT;

  if (comentarios.length === 0) {
    return (
      <section className="w-full bg-[#F9FAFB] border-t border-[#E5E7EB]">
        <div className="w-full max-w-[800px] mx-auto py-16 px-6 text-center">
          <h2 className="text-[#05162D] text-2xl font-bold mb-4">Comentarios</h2>
          <p className="text-gray-400">Sé el primero en comentar.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-[#F9FAFB] border-t border-[#E5E7EB]">
      <div className="w-full max-w-[800px] mx-auto py-16 px-6">
        <div className="flex items-center gap-3 mb-10">
          <h2 className="text-[#05162D] text-2xl md:text-[32px] font-bold">Comentarios</h2>
          <span className="bg-[#0E52C6] text-white text-sm font-bold rounded-full w-[32px] h-[32px] flex items-center justify-center">
            {comentarios.length}
          </span>
        </div>

        <div className={`flex flex-col gap-8 ${showAll ? "max-h-[600px] overflow-y-auto pr-4" : ""}`}>
          {visibleComments.map((comment) => (
            <div key={comment.id}>
              <CommentCard comment={comment} onReply={setReplyingTo} />
              <div className="border-b border-[#E5E7EB] mt-8" />
            </div>
          ))}
        </div>

        {comentarios.length > VISIBLE_COUNT && (
          <div className="flex justify-center mt-10">
            <button onClick={() => setShowAll(!showAll)} className="flex items-center gap-2 text-[#0E52C6] font-semibold text-[16px] hover:underline transition-colors">
              {showAll ? (
                <>Mostrar menos <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg></>
              ) : (
                <>Ver todos los comentarios ({hiddenCount} más) <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg></>
              )}
            </button>
          </div>
        )}
      </div>
      {replyingTo && <ReplyModal comment={replyingTo} onClose={() => setReplyingTo(null)} />}
    </section>
  );
}
