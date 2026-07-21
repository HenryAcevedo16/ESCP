"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getStrapiImageUrl, formatDate } from "@/lib/strapi";
import { postRespuestaDebate } from "@/lib/supabase";

export default function DialogandoWithPoll({ sectionTitle, mainArticle, debate }) {
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
    <section className="w-full px-4 md:px-[60px] desktop:px-[80px] min-[1610px]:px-[120px] max-w-[1920px] mx-auto flex flex-col">

      {/* Título */}
      <div className="flex justify-between items-center mb-6 md:mb-8">
        <h2 className="text-2xl md:text-[44px] font-black text-[#05162D] tracking-[-0.88px]">
          {sectionTitle || "Dialogando"}
        </h2>
        <button className="text-[#0E52C6] text-base md:text-[20px] font-medium flex items-center gap-2 hover:underline shrink-0 ml-4">
          Ver todo <ArrowRight size={18} />
        </button>
      </div>

      <div className="flex flex-col xl:flex-row gap-6">

        {/* Artículo principal */}
        {mainArticle && (
          <div className="flex flex-col w-full xl:w-[970px] shrink-0">
            <div className="w-full h-[240px] sm:h-[350px] md:h-[490px] rounded-[20px] md:rounded-[40px] overflow-hidden relative mb-4 md:mb-6 bg-[#05162D]">
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
            <div className="flex flex-col px-1 md:px-2">
              <div className="flex items-center gap-3 mb-2 md:mb-3">
                {mainArticle.categoria?.nombre && (
                  <span className="text-sm md:text-[20px] text-[#777C82] font-medium">
                    {mainArticle.categoria.nombre}
                  </span>
                )}
                {mainArticle.categoria?.nombre && mainArticle.fecha_publicacion && (
                  <span className="text-sm md:text-[20px] text-[#777C82] font-medium">•</span>
                )}
                {mainArticle.fecha_publicacion && (
                  <span className="text-sm md:text-[20px] text-[#777C82] font-medium">
                    {formatDate(mainArticle.fecha_publicacion)}
                  </span>
                )}
              </div>
              <Link href={`/articulando/${mainArticle.slug}`}>
                <h3 className="text-xl md:text-[34px] font-bold text-[#05162D] leading-tight hover:text-[#043F9F] transition cursor-pointer tracking-tight md:tracking-[-0.68px] mb-2 md:mb-3 line-clamp-3 md:line-clamp-2">
                  {mainArticle.titulo}
                </h3>
              </Link>
              {mainArticle.extracto && (
                <p className="text-sm md:text-[20px] text-[#05162D] font-light md:leading-[30px] md:tracking-[-0.4px] line-clamp-2">
                  {mainArticle.extracto}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Tarjeta de Debate */}
        {debate && (
          <div className="flex flex-col w-full xl:flex-1 bg-[#EFF3F4] rounded-[20px] md:rounded-[40px] px-6 py-8 md:px-[59px] md:py-[60px]">
            <div className="flex flex-col w-full text-center mb-6 md:mb-10">
              <span className="text-base md:text-[20px] text-[#05162D] font-normal mb-2">
                Conoce el debate del momento
              </span>
              <h3 className="text-2xl md:text-[44px] font-black text-[#05162D] tracking-tight md:tracking-[-0.88px] leading-tight">
                {debate.pregunta}
              </h3>
            </div>

            {!voteSubmitted ? (
              <div className="flex flex-col w-full">
                <span className="text-base md:text-[20px] text-[#05162D] font-normal mb-3 md:mb-4">
                  Respuesta
                </span>
                <textarea
                  value={respuesta}
                  onChange={(e) => setRespuesta(e.target.value)}
                  className="w-full h-[140px] md:h-[190px] p-4 md:p-[30px] rounded-[16px] md:rounded-[20px] bg-white text-[#05162D] text-sm md:text-[18px] resize-none focus:outline-none focus:ring-2 focus:ring-[#0E52C6] transition mb-6 md:mb-8 border-none placeholder:text-[#A0A4A8]"
                  placeholder="Ejemplo: Sí. Porque es algo diferente de lo que estamos acostumbrados"
                />
                <div className="flex flex-col w-full gap-3 md:gap-[16px]">
                  <button
                    onClick={handleSubmit}
                    disabled={loading || !respuesta.trim()}
                    className="w-full h-[56px] md:h-[69px] bg-[#0E52C6] hover:bg-blue-800 disabled:opacity-50 text-white font-medium text-base md:text-[20px] rounded-full transition-all"
                  >
                    {loading ? "Enviando..." : "Enviar"}
                  </button>
                  <button className="w-full h-[56px] md:h-[69px] border border-[#0E52C6] text-[#0E52C6] bg-transparent font-medium text-base md:text-[20px] rounded-full hover:bg-blue-50 transition-all">
                    Ver todos
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center gap-4 py-10 text-center h-full">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl md:text-4xl mb-4">
                  ✓
                </div>
                <h4 className="text-2xl md:text-[34px] font-bold text-[#05162D] tracking-tight md:tracking-[-0.68px]">
                  ¡Gracias por tu opinión!
                </h4>
                <button
                  onClick={() => { setVoteSubmitted(false); setRespuesta(""); }}
                  className="mt-6 md:mt-8 border border-[#043F9F] text-[#043F9F] hover:bg-blue-50 font-semibold text-base md:text-[20px] h-[56px] md:h-[69px] px-8 rounded-full transition-all"
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
