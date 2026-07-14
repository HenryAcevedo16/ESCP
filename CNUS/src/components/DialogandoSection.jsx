
export default function DialogandoSection({ news = [] }) {
  // Asegurarnos de tener datos (para el modo de vista previa si no se pasan props)
  const articles = news.length > 0 ? news : [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
      tag: "Actualidad",
      date: "12 Oct 2026",
      title: "ESCP inicia nuevo Diplomado en Liderazgo Sindical y Acción Sociopolítica",
      excerpt: "Un nuevo programa formativo para fortalecer el liderazgo sindical, el diálogo social y la incidencia sociopolítica."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
      tag: "Noticia",
      date: "08 Oct 2026",
      title: "Mujeres lideran jornada de formación sobre negociación y diálogo social",
      excerpt: ""
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1932&auto=format&fit=crop",
      tag: "Evento",
      date: "05 Oct 2026",
      title: "Foro reúne a dirigentes sindicales para analizar los desafíos del empleo digno",
      excerpt: ""
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1974&auto=format&fit=crop",
      tag: "Academia",
      date: "01 Oct 2026",
      title: "La ESCP amplía su oferta académica con nuevos cursos especializados",
      excerpt: ""
    }
  ];

  const mainArticle = articles[0];
  const secondaryArticles = articles.slice(1, 4);

  return (
    <section className="max-w-[1680px] mx-auto px-6 pt-16 lg:pt-24 mb-[100px] lg:mb-[200px] mt-[100px] lg:mt-[200px]">
      <h2 className="text-[32px] md:text-[44px] font-bold text-[#05162D] mb-10">Dialogando</h2>
      
      <div className="flex flex-col xl:flex-row gap-10 xl:gap-6 items-start">
        
        {/* Main Article (Left) */}
        {mainArticle && (
          <div className="flex flex-col gap-6 w-full xl:w-[970px] shrink-0">
            <div className="w-full xl:w-[970px] h-[300px] md:h-[490px] bg-gray-200 rounded-2xl overflow-hidden relative">
              <img 
                src={mainArticle.image} 
                alt={mainArticle.title}
                className="object-cover w-full h-full hover:scale-105 transition duration-500"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-sm font-medium text-gray-500 bg-gray-100 w-fit px-3 py-1 rounded-full">
                  {mainArticle.tag}
                </span>
                <span className="text-sm text-gray-400 font-medium">{mainArticle.date}</span>
              </div>
              <h3 className="text-[34px] font-bold text-[#05162D] leading-tight hover:text-primary transition cursor-pointer line-clamp-2 mb-3">
                {mainArticle.title}
              </h3>
              <p className="text-[20px] text-gray-600 line-clamp-2">
                {mainArticle.excerpt}
              </p>
            </div>
          </div>
        )}

        {/* Secondary Articles List (Right) */}
        <div className="flex flex-col gap-6 flex-1 justify-start w-full">
          {secondaryArticles.map((article) => (
            <div key={article.id} className="flex flex-col sm:flex-row gap-6 items-start group cursor-pointer w-full">
              <div className="w-full sm:w-[260px] h-[200px] sm:h-[235px] bg-gray-200 rounded-xl overflow-hidden shrink-0">
                 <img 
                  src={article.image} 
                  alt={article.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full inline-block">
                    {article.tag}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">{article.date}</span>
                </div>
                <h4 className="font-semibold text-[#05162D] leading-tight text-[30px] line-clamp-3 cursor-pointer hover:opacity-70 transition-opacity">
                  {article.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
