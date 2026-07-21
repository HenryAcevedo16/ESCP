"use client";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const createInitialSizes = () => Array.from({ length: 5 }, (_, index) => ({
  width: index === 0 ? 1218 : 1051,
  height: index === 0 ? 663 : 571,
  opacity: index === 0 ? 1 : 0.5,
  bannerWidth: index === 0 ? 882 : 715,
  bannerHeight: index === 0 ? 278 : 140,
  descOpacity: index === 0 ? 1 : 0,
  descHeight: index === 0 ? 28 : 0,
  descMargin: index === 0 ? 8 : 0,
}));

export default function AudienceSection() {
  const scrollRef = useRef(null);
  const cardsRef = useRef([]);
  const bannersRef = useRef([]);
  const descriptionsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0); // Ref para evitar closures obsoletos en los handlers

  // Utilizamos refs para mantener el estado de la animación (Lerp) sin re-renderizar React
  const currentSizes = useRef(createInitialSizes());
  const targetSizes = useRef(createInitialSizes());
  const rafId = useRef(null);

  // Calculamos los "objetivos" matemáticos basados en el scroll actual
  const updateTargets = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;
    
    const rects = cardsRef.current.map(card => card ? card.getBoundingClientRect() : null);
    
    let closestIndex = 0;
    let minDistance = Infinity;

    rects.forEach((cardRect, index) => {
      if (!cardRect) return;
      const card = cardsRef.current[index];
      const cardCenter = cardRect.left + cardRect.width / 2;
      const distance = Math.abs(containerCenter - cardCenter);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }

      // 1175px es la nueva distancia entre centros calculando el gap de 40px
      const maxDistance = 1175; 
      const progress = 1 - Math.min(distance / maxDistance, 1);
      
      // Curva Ease-Out: Crece muy rápido tan pronto como empieza a acercarse al centro
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      
      targetSizes.current[index] = {
        width: 1051 + (1218 - 1051) * easeProgress,
        height: 571 + (663 - 571) * easeProgress,
        opacity: 0.5 + 0.5 * easeProgress,
        bannerWidth: 715 + (882 - 715) * easeProgress,
        bannerHeight: 140 + (278 - 140) * easeProgress,
        descOpacity: easeProgress,
        descHeight: 28 * easeProgress,
        descMargin: 8 * easeProgress
      };
    });

    if (closestIndex !== activeIndexRef.current) {
      activeIndexRef.current = closestIndex;
      setActiveIndex(closestIndex);
    }
  };

  // El bucle de renderizado continuo (Lerp) que hace que la animación se vea lenta y majestuosa
  const renderLoop = () => {
    updateTargets();

    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      
      const target = targetSizes.current[index];
      const current = currentSizes.current[index];
      
      if (!target || !current) return;

      // Aumentado a 0.4 para que reaccione muchísimo más rápido (casi instantáneo)
      current.width += (target.width - current.width) * 0.4;
      current.height += (target.height - current.height) * 0.4;
      current.opacity += (target.opacity - current.opacity) * 0.4;
      current.bannerWidth += (target.bannerWidth - current.bannerWidth) * 0.4;
      current.bannerHeight += (target.bannerHeight - current.bannerHeight) * 0.4;
      current.descOpacity += (target.descOpacity - current.descOpacity) * 0.4;
      current.descHeight += (target.descHeight - current.descHeight) * 0.4;
      current.descMargin += (target.descMargin - current.descMargin) * 0.4;

      card.style.width = `${current.width}px`;
      card.style.height = `${current.height}px`;
      card.style.opacity = current.opacity;

      const banner = bannersRef.current[index];
      if (banner) {
        banner.style.width = `${current.bannerWidth}px`;
        banner.style.height = `${current.bannerHeight}px`;
      }

      const desc = descriptionsRef.current[index];
      if (desc) {
        desc.style.opacity = current.descOpacity;
        desc.style.height = `${current.descHeight}px`;
        desc.style.marginTop = `${current.descMargin}px`;
      }
    });

    rafId.current = requestAnimationFrame(renderLoop);
  };

  const handleScroll = () => {
    // Ya no es necesario hacer nada aquí porque el bucle corre continuamente
  };

  useEffect(() => {
    // Iniciamos el bucle de renderizado al montar el componente
    rafId.current = requestAnimationFrame(renderLoop);
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  const scrollRafId = useRef(null);

  // SCROLL PERSONALIZADO PARA CONTROLAR LA VELOCIDAD DE TRANSICIÓN ENTRE SLIDES
  const smoothScrollTo = (targetLeft, duration = 1000) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const startLeft = container.scrollLeft;
    const distance = targetLeft - startLeft;
    let startTime = null;

    if (scrollRafId.current) {
      cancelAnimationFrame(scrollRafId.current);
    }

    // Quitamos temporalmente el snap obligatorio para que no pelee con nuestra animación
    container.style.scrollSnapType = 'none';

    const animation = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // Función de aceleración (Ease in-out cúbica) para un movimiento súper elegante
      const ease = progress < 0.5 
        ? 4 * progress * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      
      container.scrollLeft = startLeft + distance * ease;
      
      if (timeElapsed < duration) {
        scrollRafId.current = requestAnimationFrame(animation);
      } else {
        // Restauramos el snap al finalizar
        container.style.scrollSnapType = 'x mandatory';
        scrollRafId.current = null;
      }
    };
    
    scrollRafId.current = requestAnimationFrame(animation);
  };

  const scrollNext = () => {
    if (!scrollRef.current) return;
    const isTabletOrSmaller = window.innerWidth < 1200;
    const slideWidth = isTabletOrSmaller ? window.innerWidth : 1175;
    const nextIndex = Math.min(activeIndexRef.current + 1, slides.length - 1);
    smoothScrollTo(nextIndex * slideWidth, 1200);
  };

  const scrollPrev = () => {
    if (!scrollRef.current) return;
    const isTabletOrSmaller = window.innerWidth < 1200;
    const slideWidth = isTabletOrSmaller ? window.innerWidth : 1175;
    const prevIndex = Math.max(activeIndexRef.current - 1, 0);
    smoothScrollTo(prevIndex * slideWidth, 1200);
  };

  const slides = [
    {
      type: "title",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
    },
    {
      type: "audience",
      number: "01.",
      title: "Dirigentes / Delegados",
      description: "Aquí va una pequeña descripción",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
    },
    {
      type: "audience",
      number: "02.",
      title: "Mujeres trabajadoras",
      description: "Aquí va una pequeña descripción",
      image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=2069&auto=format&fit=crop"
    },
    {
      type: "audience",
      number: "03.",
      title: "Jóvenes trabajadores",
      description: "Aquí va una pequeña descripción",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      type: "audience",
      number: "04.",
      title: "Equipos técnicos / Jurídicos",
      description: "Aquí va una pequeña descripción",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section className="w-full py-16 mb-[100px] desktop:mb-[200px]">
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto pb-10 snap-x snap-mandatory items-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] max-desktop:!px-4"
        style={{
          paddingLeft: 'max(1rem, calc(50vw - 587.5px))',
          paddingRight: 'max(1rem, calc(50vw - 587.5px))',
        }}
      >
        {slides.map((slide, i) => (
          // CONTENEDOR FIJO: Evita que el layout salte (thrashing) durante la animación
          <div 
            key={i} 
            className="flex items-center justify-center shrink-0 snap-center w-[1175px] h-[700px] max-desktop:!w-[100vw] max-desktop:!h-[500px]"
          >
            {/* TARJETA ANIMADA: Cambia de tamaño libremente dentro de su contenedor fijo */}
            <div 
              ref={el => cardsRef.current[i] = el}
              className="relative rounded-[40px] overflow-hidden shadow-xl origin-center will-change-[width,height,opacity] max-desktop:!w-[90vw] max-desktop:!h-[450px]"
              style={{
                width: i === 0 ? '1218px' : '1051px',
                height: i === 0 ? '663px' : '571px',
                opacity: i === 0 ? 1 : 0.5,
              }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>
              <div className="absolute inset-0 bg-black/50"></div>

              {slide.type === "title" ? (
                <div className="absolute inset-0 flex items-center justify-center p-6 tablet:p-10">
                  <h2 className="text-[36px] tablet:text-[65px] font-bold text-white leading-tight text-center drop-shadow-lg">
                    ¿A quién está dirigida<br />la Escuela?
                  </h2>
                </div>
              ) : (
                <>
                  <div 
                    ref={el => bannersRef.current[i] = el}
                    className="absolute bottom-6 left-6 tablet:bottom-8 tablet:left-8 bg-[#05162D] p-6 tablet:p-10 rounded-[24px] tablet:rounded-[32px] flex flex-col tablet:flex-row gap-4 tablet:gap-8 items-start shadow-2xl will-change-[width,height] max-desktop:!w-[calc(100%-3rem)] max-desktop:!h-auto"
                    style={{
                      width: i === 0 ? '882px' : '715px',
                      height: i === 0 ? '278px' : '140px',
                    }}
                  >
                    <div className="bg-white text-black w-[50px] h-[50px] tablet:w-[70px] tablet:h-[70px] rounded-full flex items-center justify-center font-bold text-xl tablet:text-3xl shrink-0">
                      {slide.number}
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-[22px] tablet:text-[32px] leading-tight mb-2 tablet:mb-0">{slide.title}</h3>
                      <p 
                        ref={el => descriptionsRef.current[i] = el}
                        className="text-gray-300 text-[14px] tablet:text-[18px] line-clamp-2 overflow-hidden will-change-[height,opacity,margin] max-desktop:!h-auto max-desktop:!opacity-100 max-desktop:!mt-0"
                        style={{
                          opacity: i === 0 ? 1 : 0,
                          height: i === 0 ? '28px' : '0px',
                          marginTop: i === 0 ? '8px' : '0px'
                        }}
                      >
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-6 mt-4">
        <button 
          onClick={scrollPrev}
          className="w-14 h-14 rounded-full bg-white shadow-md hover:bg-gray-100 flex items-center justify-center text-[#05162D] transition cursor-pointer"
        >
          <ChevronLeft size={28} />
        </button>
        <div className="flex gap-4">
          {slides.map((_, i) => (
            <div 
              key={i} 
              onClick={() => {
                if (scrollRef.current) {
                  const isTabletOrSmaller = window.innerWidth < 1200;
                  const slideWidth = isTabletOrSmaller ? window.innerWidth : 1175;
                  const scrollPos = i === 0 ? 0 : (i * slideWidth);
                  smoothScrollTo(scrollPos, 1200);
                }
              }}
              className={`h-3 rounded-full cursor-pointer transition-all duration-500 ${activeIndex === i ? 'w-10 bg-[#05162D]' : 'w-3 bg-gray-300'}`}
            ></div>
          ))}
        </div>
        <button 
          onClick={scrollNext}
          className="w-14 h-14 rounded-full bg-white shadow-md hover:bg-gray-100 flex items-center justify-center text-[#05162D] transition cursor-pointer"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </section>
  );
}
