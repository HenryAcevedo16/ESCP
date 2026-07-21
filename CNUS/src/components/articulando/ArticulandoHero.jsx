export default function ArticulandoHero({ tag, title, excerpt, image, slug }) {
  return (
    <section className="relative w-full overflow-hidden h-[calc(100vh-90px)] md:h-[calc(100vh-116px)] mt-[90px] md:mt-[116px] mb-[200px] flex items-end justify-center pb-[60px] md:pb-[120px]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={image || "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"} 
          alt="Hero background" 
          className="object-cover w-full h-full"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-[rgba(102,102,102,0)]"></div>
      </div>

      {/* Content */}
      <div className="relative w-full px-4 md:px-[60px] desktop:px-[80px] min-[1610px]:px-[118px] flex flex-col md:flex-row md:justify-between items-stretch md:items-end gap-4 md:gap-0">
        {/* Text Box */}
        <div className="flex flex-col justify-center w-full md:w-[725px] md:h-[318px] bg-white/15 backdrop-blur-[9px] border border-white rounded-[20px] p-5 md:px-[40px] text-white">
          <span className="text-base md:text-[32px] font-normal mb-1 md:mb-2 leading-tight">
            {tag || "Categoría"}
          </span>
          <h1 className="text-2xl md:text-[48px] font-bold leading-tight md:leading-none mb-2 md:mb-3 tracking-tight md:tracking-[-0.96px] line-clamp-3 md:line-clamp-2">
            {title || "ESCP inicia nuevo Diplomado en Liderazgo Sindical y Acción Sociopolítica"}
          </h1>
          <p className="text-sm md:text-[20px] font-light md:leading-[30px] md:tracking-[-0.4px] line-clamp-2">
            {excerpt || "Un nuevo programa formativo para fortalecer el liderazgo sindical, el diálogo social y la incidencia sociopolítica."}
          </p>
        </div>

        {/* Action Button */}
        <a href={slug ? `/articulando/${slug}` : "#"} className="flex items-center justify-center w-full md:w-[260px] h-[50px] md:h-[69px] border border-white text-white rounded-full font-medium text-base md:text-[20px] hover:bg-white/20 transition-all shrink-0">
          Leer más
        </a>
      </div>
    </section>
  );
}
