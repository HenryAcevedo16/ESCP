import Navbar from "./Navbar";

export default function HeroSection({ 
  mediaType = "video", // Puede venir de Strapi: "video" o "image"
  mediaUrl = "https://www.w3schools.com/html/mov_bbb.mp4" // URL de prueba
}) {
  return (
    <section className="relative w-full bg-white">
      {/* Hero Container with the image/video */}
      <div className="relative w-full h-[925px] bg-slate-800 overflow-hidden">
        
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
        <div className="relative z-10 max-w-4xl mx-auto h-full flex flex-col items-center justify-center text-center px-6 pt-10 pb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Formación sindical sociopolítica para transformar la República Dominicana
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl">
            Fortalece tu liderazgo y conocimientos para impulsar un trabajo decente 
            y mejores condiciones sociales.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-semibold transition">
              Programas
            </button>
            <button className="bg-transparent border border-white hover:bg-white/10 text-white px-8 py-3 rounded-full font-semibold transition">
              Contáctanos
            </button>
          </div>
        </div>
      </div>

      {/* Floating Bottom Card / Cutout - Smooth Fluid Shape */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl h-28 bg-white z-20 flex items-center justify-around py-6 px-4"
        style={{ borderTopLeftRadius: '56px', borderTopRightRadius: '56px' }}
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
          <p className="font-bold text-gray-900 md:text-lg">Mejor Formación</p>
        </div>
        <div className="w-px h-12 bg-gray-200 hidden md:block"></div>
        <div className="text-center w-full">
          <p className="font-bold text-gray-900 md:text-lg">+10,000 Alumnos</p>
        </div>
        <div className="w-px h-12 bg-gray-200 hidden md:block"></div>
        <div className="text-center w-full">
          <p className="font-bold text-gray-900 md:text-lg">15 Años de Experiencia</p>
        </div>
      </div>
    </section>
  );
}
