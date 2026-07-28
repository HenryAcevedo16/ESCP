"use client";

import { useState } from "react";
import { Play, MessageCircle } from "lucide-react";

export default function DebateArticleHero({ debate }) {
  const [playing, setPlaying] = useState(false);

  // Fallback to active debate if no debate is provided
  const pregunta = debate?.pregunta || "¿Debería el salario mínimo en República Dominicana indexarse automáticamente a la inflación?";
  const contexto = debate?.contexto || "Actualmente el salario mínimo se revisa cada dos años mediante negociación tripartita. Sectores sindicales proponen una indexación automática que garantice el poder adquisitivo, mientras que sectores empresariales advierten sobre el impacto en la generación de empleo.";
  const participantes = debate?.participantes || 184;
  const respuestas = debate?.respuestas || 247;

  return (
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
                  Debate
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
  );
}
