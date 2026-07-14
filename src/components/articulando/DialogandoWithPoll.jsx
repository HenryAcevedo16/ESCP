"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function DialogandoWithPoll({ sectionTitle, mainArticle, debateTitle }) {
  // Datos estáticos listos para ser reemplazados por Strapi
  const article = mainArticle || {
    id: 1,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    tag: "Categoría",
    date: "12 Oct 2026",
    title: "ESCP inicia nuevo Diplomado en Liderazgo Sindical y Acción Sociopolítica",
    excerpt: "Un nuevo programa formativo para fortalecer el liderazgo sindical, el diálogo social y la incidencia sociopolítica.",
    slug: "#"
  };

  const [voteSubmitted, setVoteSubmitted] = useState(false);

  return (
    <section className="w-full max-w-[1920px] mx-auto flex flex-col items-center">
      
      {/* Título de la sección (Ancho de 1680px) */}
      <div className="w-[1680px] flex justify-between items-center mb-8">
        <h2 className="text-[44px] font-black text-[#05162D] tracking-[-0.88px]">
          {sectionTitle || "Dialogando"}
        </h2>
        <button className="text-[#0E52C6] text-[20px] font-medium flex items-center gap-2 hover:underline mt-4 md:mt-0">
          Ver todo <ArrowRight size={20} />
        </button>
      </div>
      
      {/* Contenedor de las dos tarjetas */}
      <div className="w-[1680px] flex gap-[24px]">
        
        {/* Artículo principal (Izquierda) */}
        <div className="flex flex-col w-[970px] h-[727px]">
          <div className="w-[970px] h-[490px] rounded-[40px] overflow-hidden relative mb-6 shrink-0 bg-[#D9D9D9]">
            <img 
              src={article.image} 
              alt={article.title}
              className="object-cover w-full h-full hover:scale-105 transition duration-500 cursor-pointer"
            />
          </div>
          <div className="flex flex-col px-2">
            <div className="flex items-center gap-4 mb-3">
              <span className="text-[20px] text-[#777C82] font-medium">
                {article.tag}
              </span>
              <span className="text-[20px] text-[#777C82] font-medium">•</span>
              <span className="text-[20px] text-[#777C82] font-medium">{article.date}</span>
            </div>
            <a href={`/articulando/${article.slug}`}>
              <h3 className="text-[34px] font-bold text-[#05162D] leading-tight hover:text-[#043F9F] transition cursor-pointer tracking-[-0.68px] mb-3 line-clamp-2">
                {article.title}
              </h3>
            </a>
            <p className="text-[20px] text-[#05162D] font-light leading-[30px] tracking-[-0.4px] line-clamp-2">
              {article.excerpt}
            </p>
          </div>
        </div>

        {/* Tarjeta de Debate (Derecha) */}
        <div className="flex flex-col w-[686px] h-[727px] bg-[#EFF3F4] rounded-[40px] px-[59px] py-[60px]">
          <div className="flex flex-col w-full text-center">
            <span className="text-[20px] text-[#05162D] font-normal mb-2">Conoce el debate del momento</span>
            <h3 className="text-[44px] font-black text-[#05162D] tracking-[-0.88px] leading-tight mb-10">
              {debateTitle || "¿Cree usted que este es un buen diseño?"}
            </h3>
          </div>

          {!voteSubmitted ? (
            <div className="flex flex-col w-full">
              {/* Label */}
              <span className="text-[20px] text-[#05162D] font-normal mb-4">Respuesta</span>
              
              {/* Input de respuesta */}
              <textarea 
                className="w-full h-[190px] p-[30px] rounded-[20px] bg-white text-[#05162D] text-[18px] resize-none focus:outline-none focus:ring-2 focus:ring-[#0E52C6] transition mb-8 border-none placeholder:text-[#A0A4A8]"
                placeholder="Ejemplo: Sí. Porque es algo diferente de lo que estamos acostumbrados"
              ></textarea>

              <div className="flex flex-col w-full gap-[16px]">
                {/* Botón Enviar */}
                <button 
                  onClick={() => setVoteSubmitted(true)}
                  className="w-full h-[69px] bg-[#0E52C6] hover:bg-blue-800 text-white font-medium text-[20px] rounded-full transition-all"
                >
                  Enviar
                </button>
                {/* Botón Ver Todos */}
                <button className="w-full h-[69px] border border-[#0E52C6] text-[#0E52C6] bg-transparent font-medium text-[20px] rounded-full hover:bg-blue-50 transition-all">
                  Ver todos
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4 py-10 text-center h-full">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mb-4">
                ✓
              </div>
              <h4 className="text-[34px] font-bold text-[#05162D] tracking-[-0.68px]">¡Gracias por tu opinión!</h4>
              <button 
                onClick={() => setVoteSubmitted(false)}
                className="mt-8 border border-[#043F9F] text-[#043F9F] hover:bg-blue-50 font-semibold text-[20px] h-[69px] px-8 rounded-full transition-all"
              >
                Volver a opinar
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
