import { ArrowRight } from "lucide-react";

export default function CategoryRow({ sectionTitle, categoryArticles, bgColor = "bg-[#EFF3F4]" }) {
  const title = sectionTitle || "Nombre de la categoria";
  
  // Dummy data preparada para Strapi
  const articles = categoryArticles || [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
      tag: "Categoría",
      title: "ESCP inicia nuevo Diplomado en Liderazgo Sindical y Acción Sociopolítica",
      slug: "ejemplo-articulo"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
      tag: "Categoría",
      title: "ESCP inicia nuevo Diplomado en Liderazgo Sindical y Acción Sociopolítica",
      slug: "ejemplo-articulo"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1932&auto=format&fit=crop",
      tag: "Categoría",
      title: "ESCP inicia nuevo Diplomado en Liderazgo Sindical y Acción Sociopolítica",
      slug: "ejemplo-articulo"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1974&auto=format&fit=crop",
      tag: "Categoría",
      title: "ESCP inicia nuevo Diplomado en Liderazgo Sindical y Acción Sociopolítica",
      slug: "ejemplo-articulo"
    }
  ];

  return (
    <section className={`w-full max-w-[1920px] mx-auto h-auto flex flex-col items-center py-[78px] ${bgColor}`}>
      
      {/* Título de la sección */}
      <div className="flex justify-between items-center mb-[40px] w-[1680px]">
        <h2 className="text-[34px] font-black text-[#05162D] tracking-[-0.88px]">
          {title}
        </h2>
        <button className="text-[#0E52C6] text-[20px] font-medium flex items-center gap-2 hover:underline mt-4 md:mt-0">
          Ver todo <ArrowRight size={20} />
        </button>
      </div>
      
      {/* 4 Tarjetas en fila */}
      <div className="flex gap-[24px] w-[1680px]">
        {articles.slice(0, 4).map((article) => (
          <a 
            key={article.id} 
            href={`/articulando/${article.slug}`} 
            className="flex flex-col group cursor-pointer w-[402px] h-[532px] shrink-0"
          >
            <div className="w-full h-[290px] rounded-[30px] overflow-hidden relative shrink-0 mb-[16px] bg-[#D9D9D9]">
              <img 
                src={article.image} 
                alt={article.title}
                className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="flex flex-col flex-grow">
              <span className="text-[16px] font-medium text-[#777C82] mb-[8px]">
                {article.tag}
              </span>
              <h4 className="font-bold text-[#05162D] text-[32px] tracking-[-0.64px] leading-[1.1] mb-3 line-clamp-4 group-hover:text-[#043F9F] transition-colors">
                {article.title}
              </h4>
              <span className="text-[16px] text-[#777C82] mt-auto">
                Publicado por Omar Canela | 11/07/2026
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
