export default function CategoryGrid({ sectionTitle, mainArticle, secondaryArticles }) {
  const title = sectionTitle || "Nombre de la categoria";
  
  // Dummy data preparadas para Strapi
  const defaultMainArticle = mainArticle || {
    id: 1,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    tag: "Categoría",
    title: "ESCP inicia nuevo Diplomado en Liderazgo Sindical y Acción Sociopolítica",
    date: "12 Oct 2026",
    slug: "#"
  };

  const defaultSecondaryArticles = secondaryArticles || [
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
      tag: "Categoría",
      title: "ESCP inicia nuevo Diplomado en Liderazgo Sindical y Acción Sociopolítica",
      date: "12 Oct 2026",
      slug: "#"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1932&auto=format&fit=crop",
      tag: "Categoría",
      title: "ESCP inicia nuevo Diplomado en Liderazgo Sindical y Acción Sociopolítica",
      date: "12 Oct 2026",
      slug: "#"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1974&auto=format&fit=crop",
      tag: "Categoría",
      title: "ESCP inicia nuevo Diplomado en Liderazgo Sindical y Acción Sociopolítica",
      date: "12 Oct 2026",
      slug: "#"
    }
  ];

  return (
    <section className="w-full max-w-[1920px] mx-auto py-[120px] flex flex-col items-center">
      
      {/* Título de sección */}
      <div className="w-[1680px] flex justify-between items-center mb-[40px]">
        <h2 className="text-[44px] font-black text-[#05162D] tracking-[-0.88px]">{title}</h2>
        <a href="#" className="text-[#043F9F] font-semibold hover:underline text-[20px]">Ver todas →</a>
      </div>
      
      {/* Contenedor principal de 1680px */}
      <div className="w-[1680px] flex gap-[24px]">
        
        {/* Tarjeta grande izquierda */}
        <a 
          href={`/articulando/${defaultMainArticle.slug}`} 
          className="flex flex-col group cursor-pointer w-[970px] h-[727px] relative rounded-[40px] overflow-hidden shrink-0"
        >
          <img 
            src={defaultMainArticle.image} 
            alt={defaultMainArticle.title}
            className="absolute inset-0 object-cover w-full h-full group-hover:scale-105 transition duration-700"
          />
          {/* Overlay oscuro desde abajo */}
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0.3)] to-transparent"></div>
          
          <div className="relative z-10 flex flex-col justify-end p-[50px] h-full text-white">
            <div className="flex items-center gap-4 mb-3">
              <span className="text-[20px] font-medium opacity-90">
                {defaultMainArticle.tag}
              </span>
              <span className="text-[20px] font-medium opacity-90">•</span>
              <span className="text-[20px] font-medium opacity-90">{defaultMainArticle.date}</span>
            </div>
            <h3 className="text-[48px] font-bold leading-tight mb-2 group-hover:text-gray-200 transition-colors tracking-[-0.96px] line-clamp-3">
              {defaultMainArticle.title}
            </h3>
          </div>
        </a>

        {/* 3 Tarjetas pequeñas a la derecha */}
        <div className="flex flex-col gap-[24px] w-[686px] h-[727px]">
          {defaultSecondaryArticles.slice(0, 3).map((article) => (
            <a 
              key={article.id} 
              href={`/articulando/${article.slug}`}
              className="flex items-center group cursor-pointer w-[686px] h-[226px] bg-[#EFF3F4] rounded-[26px] overflow-hidden transition-all duration-300 hover:shadow-md shrink-0"
            >
              <div className="w-[280px] h-full bg-[#D9D9D9] overflow-hidden shrink-0">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="flex flex-col p-[30px] w-full">
                <span className="text-[20px] font-medium text-[#777C82] mb-2">
                  {article.tag}
                </span>
                <h4 className="font-bold text-[#05162D] text-[24px] leading-tight line-clamp-3 hover:text-[#043F9F] transition-colors tracking-[-0.48px] mb-3">
                  {article.title}
                </h4>
                <span className="text-[20px] font-medium text-[#777C82] mt-auto">
                  {article.date}
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
