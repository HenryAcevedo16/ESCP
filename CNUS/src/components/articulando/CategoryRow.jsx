export default function CategoryRow({ sectionTitle, categoryArticles }) {
  const title = sectionTitle || "Nombre de la categoria";
  
  // Dummy data preparada para Strapi
  const articles = categoryArticles || [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
      tag: "Categoría",
      title: "ESCP inicia nuevo Diplomado en Liderazgo Sindical y Acción Sociopolítica",
      slug: "#"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
      tag: "Categoría",
      title: "ESCP inicia nuevo Diplomado en Liderazgo Sindical y Acción Sociopolítica",
      slug: "#"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1932&auto=format&fit=crop",
      tag: "Categoría",
      title: "ESCP inicia nuevo Diplomado en Liderazgo Sindical y Acción Sociopolítica",
      slug: "#"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1974&auto=format&fit=crop",
      tag: "Categoría",
      title: "ESCP inicia nuevo Diplomado en Liderazgo Sindical y Acción Sociopolítica",
      slug: "#"
    }
  ];

  return (
    <section className="w-full max-w-[1920px] mx-auto bg-[#EFF3F4] h-[902px] px-[120px] py-[78px]">
      
      {/* Título de la sección */}
      <div className="flex justify-between items-center mb-[40px] w-full">
        <h2 className="text-[44px] font-black text-[#05162D] tracking-[-0.88px]">
          {title}
        </h2>
        <a href="#" className="text-[#043F9F] font-semibold hover:underline text-[20px]">
          Ver todas →
        </a>
      </div>
      
      {/* 4 Tarjetas en fila */}
      <div className="flex gap-[24px] w-full">
        {articles.slice(0, 4).map((article) => (
          <a 
            key={article.id} 
            href={`/articulando/${article.slug}`} 
            className="flex flex-col group cursor-pointer w-[402px] h-[532px] bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 shrink-0"
          >
            <div className="w-full h-[250px] bg-[#D9D9D9] overflow-hidden relative shrink-0">
              <img 
                src={article.image} 
                alt={article.title}
                className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="flex flex-col px-[30px] py-[30px] flex-grow">
              <span className="text-[20px] font-medium text-[#777C82] mb-[12px]">
                {article.tag}
              </span>
              <h4 className="font-bold text-[#05162D] text-[24px] tracking-[-0.48px] leading-tight line-clamp-4 group-hover:text-[#043F9F] transition-colors">
                {article.title}
              </h4>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
