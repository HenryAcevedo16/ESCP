"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getStrapiImageUrl, formatDate } from "@/lib/strapi";
import { postRespuestaDebate } from "@/lib/supabase";

export default function DialogandoWithPoll({ id, sectionTitle, mainArticle, debate }) {
  const [respuesta, setRespuesta] = useState("");
  const [voteSubmitted, setVoteSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!mainArticle && !debate) return null;

  const imageUrl = mainArticle ? getStrapiImageUrl(mainArticle.imagen_portada) : null;

  const handleSubmit = async () => {
    if (!respuesta.trim() || !debate?.id) return;
    setLoading(true);
    await postRespuestaDebate({
      debate_id: String(debate.id),
      respuesta: respuesta.trim(),
      nombre: "",
      apellido: "",
    });
    setLoading(false);
    setVoteSubmitted(true);
  };

  return (
    <section id={id} className="w-full px-4 tablet:px-7.5 desktop:px-20 min-[1610px]:px-29.5 max-w-[1920px] mx-auto flex flex-col">

      {/* Título */}
      <div className="flex justify-between items-center mb-6 md:mb-8">
        <h2 className="text-2xl md:text-[44px] font-black text-[#05162D] tracking-[-0.88px]">
          {sectionTitle || "Dialogando"}
        </h2>
        <Link href="/articulando" className="text-[#0E52C6] text-base md:text-[20px] font-medium flex items-center gap-2 hover:underline shrink-0 ml-4">
          Ver todo <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </div>

      <div className="flex flex-col min-[1200px]:flex-row gap-6 items-stretch">

        {/* Artículo principal */}
        {mainArticle && (
          <div className="flex flex-col w-full min-[1200px]:max-[1609px]:w-[55%] min-[1610px]:w-[970px] shrink-0">
            <div className="w-full flex-1 min-h-[240px] sm:min-h-[350px] min-[1200px]:min-h-[400px] min-[1610px]:min-h-[520px] rounded-[20px] md:rounded-[40px] overflow-hidden relative mb-4 min-[1200px]:max-[1609px]:mb-3 min-[1610px]:mb-6 bg-[#05162D]">
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt={mainArticle.titulo}
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-[#0E52C6] via-[#043F9F] to-[#05162D] flex items-center justify-center">
                  <span className="text-white/10 text-[160px] font-black leading-none select-none">
                    {mainArticle.titulo?.charAt(0)?.toUpperCase()}
                  </span>
                </div>
              )}
            </div>
            <div className="flex flex-col px-1 md:px-2 shrink-0">
              <div className="flex items-center gap-3 mb-2 min-[1200px]:max-[1609px]:mb-1 md:mb-3">
                {mainArticle.categoria?.nombre && (
                  <span className="text-sm min-[1200px]:max-[1609px]:text-[16px] min-[1610px]:text-[20px] text-[#777C82] font-medium">
                    {mainArticle.categoria.nombre}
                  </span>
                )}
                {mainArticle.categoria?.nombre && mainArticle.fecha_publicacion && (
                  <span className="text-sm min-[1200px]:max-[1609px]:text-[16px] min-[1610px]:text-[20px] text-[#777C82] font-medium">•</span>
                )}
                {mainArticle.fecha_publicacion && (
                  <span className="text-sm min-[1200px]:max-[1609px]:text-[16px] min-[1610px]:text-[20px] text-[#777C82] font-medium">
                    {formatDate(mainArticle.fecha_publicacion)}
                  </span>
                )}
              </div>
              <Link href={`/articulando/${mainArticle.slug}`}>
                <h3 className="text-xl min-[1200px]:max-[1609px]:text-[24px] min-[1610px]:text-[34px] font-bold text-[#05162D] leading-tight hover:text-[#043F9F] transition cursor-pointer tracking-tight mb-2 min-[1200px]:max-[1609px]:mb-1 md:mb-3 line-clamp-2">
                  {mainArticle.titulo}
                </h3>
              </Link>
              {mainArticle.extracto && (
                <p className="text-sm min-[1200px]:max-[1609px]:text-[15px] min-[1610px]:text-[20px] text-[#05162D] font-light min-[1200px]:max-[1609px]:leading-snug min-[1610px]:leading-[30px] line-clamp-2">
                  {mainArticle.extracto}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Tarjeta de Debate */}
        {debate && (
          <div className="flex flex-col w-full min-[1200px]:flex-1 bg-[#EFF3F4] rounded-[20px] md:rounded-[40px] px-6 py-8 min-[1200px]:max-[1609px]:px-8 min-[1200px]:max-[1609px]:py-8 xl:px-[52px] xl:py-[50px] justify-between">
            <div className="flex flex-col w-full text-center mb-4 min-[1200px]:max-[1609px]:mb-3 md:mb-8">
              <span className="text-base min-[1200px]:max-[1609px]:text-[15px] min-[1610px]:text-[20px] text-[#05162D] font-normal mb-1 md:mb-2">
                Conoce el debate del momento
              </span>
              <h2 className="text-2xl min-[1200px]:max-[1609px]:text-[28px] min-[1610px]:text-[40px] font-black text-[#05162D] tracking-tight leading-tight">
                {debate.pregunta}
              </h2>
            </div>

            {!voteSubmitted ? (
              <div className="flex flex-col w-full">
                <span className="text-base min-[1200px]:max-[1609px]:text-[15px] min-[1610px]:text-[20px] text-[#05162D] font-normal mb-2 min-[1200px]:max-[1609px]:mb-1 md:mb-4">
                  Respuesta
                </span>
                <textarea
                  id="debate-respuesta"
                  aria-label={`Tu respuesta al debate: ${debate.pregunta}`}
                  value={respuesta}
                  onChange={(e) => setRespuesta(e.target.value)}
                  className="w-full h-[120px] min-[1200px]:max-[1609px]:h-[130px] min-[1610px]:h-[160px] p-4 min-[1200px]:max-[1609px]:p-4 min-[1610px]:p-[24px] rounded-[16px] md:rounded-[20px] bg-white text-[#05162D] text-sm min-[1200px]:max-[1609px]:text-[14px] min-[1610px]:text-[16px] resize-none focus:outline-none focus:ring-2 focus:ring-[#0E52C6] transition mb-4 min-[1200px]:max-[1609px]:mb-3 min-[1610px]:mb-8 border-none placeholder:text-[#A0A4A8]"
                  placeholder="Ejemplo: Sí. Porque es algo diferente de lo que estamos acostumbrados"
                />
                <div className="flex flex-col w-full gap-2.5 min-[1200px]:max-[1609px]:gap-2.5 md:gap-4">
                  <button
                    onClick={handleSubmit}
                    disabled={loading || !respuesta.trim()}
                    className="w-full h-[52px] min-[1200px]:max-[1609px]:h-[52px] min-[1610px]:h-[60px] bg-[#0E52C6] hover:bg-blue-800 disabled:opacity-50 text-white font-medium text-base min-[1200px]:max-[1609px]:text-[16px] min-[1610px]:text-[18px] rounded-full transition-all"
                  >
                    {loading ? "Enviando..." : "Enviar"}
                  </button>
                  <Link href="/articulando" className="w-full h-[52px] min-[1200px]:max-[1609px]:h-[52px] min-[1610px]:h-[60px] border border-[#0E52C6] text-[#0E52C6] bg-transparent font-medium text-base min-[1200px]:max-[1609px]:text-[16px] min-[1610px]:text-[18px] rounded-full hover:bg-blue-50 transition-all flex items-center justify-center">
                    Ver todos
                  </Link>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center gap-4 py-8 text-center h-full">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl md:text-4xl mb-4">
                  ✓
                </div>
                <h4 className="text-2xl md:text-[30px] font-bold text-[#05162D] tracking-tight">
                  ¡Gracias por tu opinión!
                </h4>
                <button
                  onClick={() => { setVoteSubmitted(false); setRespuesta(""); }}
                  className="mt-6 md:mt-6 border border-[#043F9F] text-[#043F9F] hover:bg-blue-50 font-semibold text-base md:text-[18px] h-[52px] md:h-[60px] px-8 rounded-full transition-all"
                >
                  Volver a opinar
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
