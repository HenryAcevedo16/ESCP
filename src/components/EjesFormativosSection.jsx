export default function EjesFormativosSection() {
  // Lista de 10 ejes de ejemplo
  const ejes = [
    "Identidad sindical", "Derechos laborales", "Diálogo democrático",
    "Equidad inclusión", "Liderazgo sindical", "Economía trabajo",
    "Incidencia política", "Investigación sindical", "Desarrollo sectorial",
    "Políticas educativas"
  ];

  // Duplicamos el arreglo para lograr el efecto visual de scroll infinito sin cortes
  const marqueeItems = [...ejes, ...ejes];

  return (
    <section className="max-w-[1920px] mb-[200px] mx-auto px-6 py-16 text-center overflow-hidden bg-[#f8f9fa]">
      <h2 className="text-[48px] font-bold text-gray-900 mb-4">Nuestros Ejes Formativos</h2>
      <p className="text-gray-600 max-w-full mx-auto mb-12 text-[25px] leading-snug">
        Descubre los diez pilares que orientan nuestro modelo educativo y forman profesionales íntegros, preparados para afrontar los <br /> 
        retos del futuro laboral.
      </p>

      {/* Contenedor del Carrusel Animado (Marquee) con efecto de desvanecimiento en los bordes */}
      <div 
        className="relative w-full overflow-hidden py-8"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
        }}
      >
        <div className="flex w-max animate-marquee gap-6">
          {marqueeItems.map((eje, index) => (
            <div 
              key={index} 
              className="w-[320px] h-[200px] bg-gray-100 rounded-2xl hover:bg-gray-200 hover:-translate-y-2 transition-all duration-300 cursor-pointer flex items-center justify-center p-6 shrink-0 shadow-sm"
            >
              <h3 className="font-bold text-gray-900 text-[22px] leading-tight">{eje}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
