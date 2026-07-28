"use client";

import { useState } from "react";
import { Play, ChevronDown, MessageCircle } from "lucide-react";

const sampleComments = [
  { nombre: "María", apellido: "Fernández", texto: "Es una medida necesaria y de justicia básica. Llevamos años perdiendo poder adquisitivo mientras la canasta básica no deja de subir.", likes: 45, created_at: "2026-07-24T10:00:00Z", color: "bg-[#0E52C6]" },
  { nombre: "Carlos", apellido: "Mejía", texto: "La indexación automática tiene ventajas pero también riesgos. Podría generar rigidez salarial. Una fórmula mixta sería más equilibrada.", likes: 32, created_at: "2026-07-23T15:30:00Z", color: "bg-[#E05A2B]" },
  { nombre: "Ana", apellido: "Polanco", texto: "Mientras discuten fórmulas, mi salario no alcanza ni para la mitad del mes. Necesitamos acciones concretas ya.", likes: 28, created_at: "2026-07-22T09:15:00Z", color: "bg-[#2EAE6D]" },
  { nombre: "Roberto", apellido: "Díaz", texto: "Los países que han implementado indexación muestran resultados mixtos. El diseño institucional es clave.", likes: 19, created_at: "2026-07-21T14:00:00Z", color: "bg-[#9B59B6]" },
];

export default function DebateHero({ activeDebate }) {
  const [playing, setPlaying] = useState(false);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [texto, setTexto] = useState("");
  const [success, setSuccess] = useState(false);

  // Use real data from Strapi if available, otherwise show nothing
  const pregunta = activeDebate?.pregunta;
  const contexto = activeDebate?.contexto;
  const participantes = activeDebate?.participantes ?? sampleComments.length;
  const respuestas = activeDebate?.respuestas ?? sampleComments.length;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre.trim() || !texto.trim()) return;
    setSuccess(true);
  };

  return (
    <>
      {/* VIDEO HERO — full width */}
      <section className="relative w-full bg-black mt-22.5 tablet:mt-29">
        <div className="relative w-full aspect-[21/9] max-h-[65vh] min-h-[380px] laptop:min-h-[480px] overflow-hidden">
          {!playing ? (
            <div
              className="absolute inset-0 bg-gradient-to-br from-[#0F1F3D] via-[#1A2D5A] to-[#0A1628] flex flex-col items-center justify-center group cursor-pointer"
              onClick={() => setPlaying(true)}
            >
              <div className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage: `radial-gradient(circle at 30% 30%, #4A8EFF 0%, transparent 40%), radial-gradient(circle at 70% 70%, #8B5CF6 0%, transparent 40%)`,
                }}
              />

              <div className="w-16 h-16 laptop:w-20 laptop:h-20 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300 z-10">
                <Play size={28} className="text-white ml-1" />
              </div>
              <span className="text-white/40 text-sm mt-3 z-10">Reproducir video</span>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent w-full">
                <div className="w-full max-w-[1920px] mx-auto px-4 tablet:px-7.5 laptop:px-20 desktop:px-29.5 pb-6 laptop:pb-10 pt-10">
                  <div className="flex items-center gap-2 text-[#4A8EFF] text-xs font-semibold uppercase tracking-widest mb-2">
                    <MessageCircle size={14} />
                    Debate del momento
                  </div>
                  <h1 className="text-white text-xl laptop:text-3xl desktop:text-4xl font-bold leading-tight max-w-3xl">
                    {pregunta}
                  </h1>
                  {contexto && (
                    <p className="text-white/50 text-sm laptop:text-base mt-3 max-w-2xl line-clamp-2">
                      {contexto}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="absolute inset-0 bg-black flex items-center justify-center">
              <p className="text-white/20 text-sm">Video embed</p>
            </div>
          )}

          <div className="absolute top-4 right-4 flex items-center gap-3 bg-black/40 backdrop-blur rounded-full px-4 py-2 border border-white/10">
            <span className="text-white/70 text-xs"><strong className="text-white">{participantes}</strong> participando</span>
            <span className="w-px h-3 bg-white/20" />
            <span className="text-white/70 text-xs"><strong className="text-white">{respuestas}</strong> opiniones</span>
          </div>
        </div>
      </section>

      {/* TWO COLUMNS: izquierda = Formulario, derecha = Comentarios */}
      <section className="w-full bg-white">
        <div className="max-w-[1280px] mx-auto px-4 tablet:px-7.5 laptop:px-10 py-12 laptop:py-16">
          <div className="flex flex-col laptop:flex-row gap-10 laptop:gap-12">

            {/* LEFT COLUMN — Formulario */}
            <div className="w-full laptop:w-[420px] shrink-0">
              {!success ? (
                <>
                  <h2 className="text-2xl md:text-[32px] font-bold text-[#05162D] mb-8">
                    ¿Qué opinas sobre el tema?
                  </h2>

                  <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-2">
                      <label className="text-[#05162D] font-medium ml-1">Nombre</label>
                      <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        placeholder="Ejemplo: Pedro"
                        required
                        className="w-full h-[56px] laptop:h-[60px] rounded-full border border-[#D0D5DD] px-6 text-[#05162D] placeholder:text-[#98A2B3] focus:outline-none focus:border-primary transition"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[#05162D] font-medium ml-1">Apellido</label>
                      <input
                        type="text"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                        placeholder="Ejemplo: Martínez"
                        className="w-full h-[56px] laptop:h-[60px] rounded-full border border-[#D0D5DD] px-6 text-[#05162D] placeholder:text-[#98A2B3] focus:outline-none focus:border-primary transition"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[#05162D] font-medium ml-1">Respuesta</label>
                      <textarea
                        value={texto}
                        onChange={(e) => setTexto(e.target.value)}
                        placeholder="Escribe tu opinión sobre el tema..."
                        required
                        className="w-full h-[140px] laptop:h-[160px] rounded-[24px] border border-[#D0D5DD] p-6 text-[#05162D] placeholder:text-[#98A2B3] focus:outline-none focus:border-primary transition resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full h-[56px] laptop:h-[60px] bg-[#0E52C6] hover:bg-blue-800 text-white rounded-full font-medium text-lg transition-colors"
                    >
                      Enviar
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">✓</div>
                  <h2 className="text-2xl font-bold text-[#05162D] mb-2">¡Gracias por tu opinión!</h2>
                  <p className="text-gray-500 mb-6">Tu comentario ha sido publicado.</p>
                  <button onClick={() => { setSuccess(false); setNombre(""); setApellido(""); setTexto(""); }} className="text-[#0E52C6] font-medium hover:underline">
                    Escribir otro comentario
                  </button>
                </div>
              )}
            </div>

            {/* RIGHT COLUMN — Comentarios */}
            <div className="flex-1 min-w-0 bg-[#F9FAFB] rounded-[24px] p-6 laptop:p-8 border border-[#E5E7EB]">
              <div className="flex items-center gap-3 mb-8">
                <h2 className="text-[#05162D] text-xl md:text-[24px] font-bold">Comentarios</h2>
                <span className="bg-[#0E52C6] text-white text-sm font-bold rounded-full w-[30px] h-[30px] flex items-center justify-center">
                  4
                </span>
              </div>

              <div className="flex flex-col gap-6">
                {sampleComments.map((comment, i) => (
                  <div key={i}>
                    <div className="flex gap-3">
                      <div className={`w-[40px] h-[40px] rounded-full ${comment.color} flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                        {comment.nombre.charAt(0)}{comment.apellido.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="text-[#05162D] font-semibold text-[14px]">{comment.nombre} {comment.apellido}</span>
                          <span className="text-[#98A2B3] text-[12px]">
                            {new Date(comment.created_at).toLocaleDateString("es-DO", { day: "numeric", month: "long", year: "numeric" })}
                          </span>
                        </div>
                        <p className="text-[#475467] text-[14px] leading-relaxed mb-2">{comment.texto}</p>
                        <div className="flex items-center gap-4">
                          <button className="flex items-center gap-1 text-[12px] font-medium text-[#98A2B3] hover:text-[#0E52C6] transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/>
                            </svg>
                            {comment.likes}
                          </button>
                          <button className="text-[12px] font-medium text-[#98A2B3] hover:text-[#0E52C6] transition-colors">Responder</button>
                        </div>
                      </div>
                    </div>
                    {i < sampleComments.length - 1 && <div className="border-b border-[#E5E7EB] mt-6" />}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
