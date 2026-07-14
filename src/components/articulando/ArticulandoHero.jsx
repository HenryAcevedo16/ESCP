export default function ArticulandoHero({ tag, title, excerpt, image, slug }) {
  return (
    <section className="relative w-full max-w-[1920px] mx-auto h-[calc(100vh-116px)] mt-[116px] mb-[200px] flex items-end justify-center pb-[120px]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={image || "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"} 
          alt="Hero background" 
          className="object-cover w-full h-full"
        />
        {/* Dark overlay: rgba(0,0,0,0.7) to rgba(102,102,102,0) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-[rgba(102,102,102,0)]"></div>
      </div>

      {/* Content */}
      <div className="relative w-full px-6 md:px-[118px] flex justify-between items-end">
        {/* Text Box */}
        <div className="flex flex-col justify-center w-[725px] h-[318px] bg-white/15 backdrop-blur-[9px] border border-white rounded-[20px] px-[40px] text-white">
          <span className="text-[32px] font-normal mb-2 leading-tight">
            {tag || "Categoría"}
          </span>
          <h1 className="text-[48px] font-bold leading-none mb-3 tracking-[-0.96px] line-clamp-2">
            {title || "ESCP inicia nuevo Diplomado en Liderazgo Sindical y Acción Sociopolítica"}
          </h1>
          <p className="text-[20px] font-light leading-[30px] tracking-[-0.4px] line-clamp-2">
            {excerpt || "Un nuevo programa formativo para fortalecer el liderazgo sindical, el diálogo social y la incidencia sociopolítica."}
          </p>
        </div>

        {/* Action Button */}
        <a href={slug ? `/articulando/${slug}` : "#"} className="flex items-center justify-center w-[260px] h-[69px] border border-white text-white rounded-full font-medium text-[20px] hover:bg-white/20 transition-all shrink-0">
          Leer más
        </a>
      </div>
    </section>
  );
}
