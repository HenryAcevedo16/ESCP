import Navbar from "./Navbar";

export default function HeroSection({ 
  mediaType = "video", // Puede venir de Strapi: "video" o "image"
  mediaUrl = "https://www.w3schools.com/html/mov_bbb.mp4" // URL de prueba
}) {
  return (
    <section className="relative w-full bg-white">
      {/* Hero Container with the image/video */}
      <div className="relative w-full h-auto min-h-[850px] md:h-[925px] bg-slate-800 flex flex-col justify-between overflow-hidden">
        
        {/* Background Media (Dynamic from CMS) */}
        {mediaType === "video" ? (
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          >
            <source src={mediaUrl} type="video/mp4" />
          </video>
        ) : (
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-60" 
            style={{ backgroundImage: `url('${mediaUrl}')` }}
          ></div>
        )}
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30"></div>

        <Navbar />

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto h-full flex flex-col items-center justify-center text-center px-6 pt-32 md:pt-40 pb-32">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-[1300px] mx-auto mt-10 md:mt-0">
            Formación sindical sociopolítica para transformar la República Dominicana
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-[900px] mx-auto">
            Fortalece tu liderazgo y conocimientos para impulsar un trabajo decente 
            y mejores condiciones sociales.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mt-4 w-full sm:w-auto items-center">
            <button className="bg-primary hover:bg-primary-dark text-white w-full sm:w-[260px] h-[60px] sm:h-[80px] text-[18px] sm:text-[24px] rounded-full font-semibold transition flex items-center justify-center">
              Ver Programas
            </button>
            <button className="bg-transparent border border-white hover:bg-white/10 text-white w-full sm:w-[260px] h-[60px] sm:h-[80px] text-[18px] sm:text-[24px] rounded-full font-semibold transition flex items-center justify-center">
              Conócenos
            </button>
          </div>
        </div>
      </div>

      {/* Floating Bottom Card / Cutout - Smooth Fluid Shape */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full md:w-[90%] max-w-4xl h-auto md:h-28 bg-white z-20 flex flex-col md:flex-row items-center justify-around py-4 md:py-6 px-4 gap-2 md:gap-0 rounded-t-[32px] md:rounded-t-[56px] shadow-lg"
      >
        
        {/* Left Inverted Corner */}
        <div 
          className="absolute pointer-events-none hidden md:block" 
          style={{ 
            width: '56px', 
            height: '56px', 
            left: '-56px', 
            bottom: '0', 
            background: 'radial-gradient(circle at 0% 0%, transparent 56px, #ffffff 56.5px)' 
          }}
        ></div>

        {/* Right Inverted Corner */}
        <div 
          className="absolute pointer-events-none hidden md:block" 
          style={{ 
            width: '56px', 
            height: '56px', 
            right: '-56px', 
            bottom: '0', 
            background: 'radial-gradient(circle at 100% 0%, transparent 56px, #ffffff 56.5px)' 
          }}
        ></div>

        <div className="text-center w-full">
          <p className="font-bold text-gray-900 text-sm md:text-lg">10 ejes formativos</p>
        </div>
        <div className="w-px h-12 bg-gray-200 hidden md:block"></div>
        <div className="text-center w-full">
          <p className="font-bold text-gray-900 text-sm md:text-lg">8 modalidades</p>
        </div>
        <div className="w-px h-12 bg-gray-200 hidden md:block"></div>
        <div className="text-center w-full">
          <p className="font-bold text-gray-900 text-sm md:text-lg">14 líneas sectoriales</p>
        </div>
      </div>
    </section>
  );
}
