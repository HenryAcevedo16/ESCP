"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function NavbarArticulando() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`w-full z-50 text-[#05162D] flex items-center justify-center transition-all duration-300 px-4 tablet:px-7.5 desktop:px-20 min-[1610px]:px-29.5
      ${isScrolled
        ? 'fixed top-0 bg-[#F2F4F7]/90 backdrop-blur-md shadow-xl h-17.5 tablet:h-19.75'
        : 'absolute top-0 bg-[#F2F4F7] h-22.5 tablet:h-29'
      }`}
    >
      <div className="w-full max-w-[1920px] relative flex items-center justify-between">

        {/* Desktop View — CSS Grid: [left items] [logo] [right items]
            The 1fr auto 1fr ensures logo is EXACTLY at 50% always */}
        <div className={`hidden desktop:grid w-full font-medium transition-all duration-300 items-center
          ${isScrolled
            ? 'text-[12px] min-[1400px]:text-[13px] min-[1610px]:text-[14px]'
            : 'text-[12px] min-[1400px]:text-[13px] min-[1610px]:text-[15px]'
          }`}
          style={{ gridTemplateColumns: 'minmax(0, 1fr) auto minmax(0, 1fr)' }}
        >
          {/* Left column — 3 items spread across left half */}
          <div className="flex items-center justify-end gap-6 min-[1400px]:gap-8 min-[1610px]:gap-10 pr-6 min-[1400px]:pr-10 min-[1610px]:pr-14">
            <Link href="/" className="hover:text-primary transition whitespace-nowrap">
              Inicio
            </Link>
            <Link href="/articulando/notas-del-presidente" className="hover:text-primary transition whitespace-nowrap">
              Notas del presidente
            </Link>
            <Link href="/articulando#debate" className="hover:text-primary transition whitespace-nowrap">
              Diálogo, debate y opinión
            </Link>
          </div>

          {/* Center column — Logo always in the exact middle */}
          <Link href="/articulando" className="flex items-center justify-center shrink-0">
            <div className={`relative transition-all duration-300 ${
                isScrolled
                  ? 'w-25 h-11.5 tablet:w-38.25 tablet:h-17.25'
                  : 'w-40 h-18 tablet:w-63.75 tablet:h-29'
              }`}>
              <Image
                src="/logos/logocolor.svg"
                alt="Logo Escuela CNUS Color"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </Link>

          {/* Right column — 3 items + button spread across right half */}
          <div className="flex items-center justify-start gap-6 min-[1400px]:gap-8 min-[1610px]:gap-10 pl-6 min-[1400px]:pl-10 min-[1610px]:pl-14">
            <Link href="/articulando#columna-del-director" className="hover:text-primary transition whitespace-nowrap">
              La columna del Director
            </Link>
            <Link href="/articulando#pensamiento-complejo" className="hover:text-primary transition whitespace-nowrap">
              Pensamiento complejo
            </Link>
            <Link href="/articulando#noticias-y-eventos" className="hover:text-primary transition whitespace-nowrap">
              Noticia y eventos
            </Link>
            <button
              type="button"
              aria-label="Suscríbete al boletín"
              className={`hidden desktop:flex items-center justify-center bg-[#0E52C6] hover:bg-blue-800 text-[#FFFFFF] rounded-full font-medium transition-all duration-300 shrink-0 px-4 min-[1400px]:px-5 min-[1610px]:px-7
              ${isScrolled ? 'h-10 min-[1610px]:h-13.75' : 'h-11 min-[1610px]:h-17.25'}`}
            >
              Suscríbete
            </button>
          </div>
        </div>

        {/* Mobile / Tablet View (<1200px) */}
        <div className="flex desktop:hidden items-center justify-between w-full">
          <Link href="/articulando" className="flex items-center shrink-0">
            <div className={`relative transition-all duration-300 ${
                isScrolled
                  ? 'w-25 h-11.5 tablet:w-38.25 tablet:h-17.25'
                  : 'w-40 h-18 tablet:w-63.75 tablet:h-29'
              }`}>
              <Image
                src="/logos/logocolor.svg"
                alt="Logo Escuela CNUS Color"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </Link>

          <button 
            className="desktop:hidden z-50 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation-articulando"
          >
            {isMenuOpen ? (
              <X size={isScrolled ? 28 : 36} className="transition-all duration-300 text-[#05162D]" />
            ) : (
              <Menu size={isScrolled ? 28 : 36} className="transition-all duration-300 text-[#05162D]" />
            )}
          </button>
        </div>

      </div>
    </nav>

      {/* Mobile/Tablet Menu Overlay */}
      <div 
        id="mobile-navigation-articulando"
        className={`fixed inset-0 bg-white text-[#05162D] z-40 flex flex-col items-center justify-center gap-6 px-6 text-center transition-transform duration-300 desktop:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium hover:text-primary transition">
          Inicio
        </Link>
        <Link href="/articulando/notas-del-presidente" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium hover:text-primary transition">
          Notas del presidente
        </Link>
        <Link href="/articulando#debate" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium hover:text-primary transition">
          Diálogo, debate y opinión
        </Link>
        <Link href="/articulando#columna-del-director" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium hover:text-primary transition">
          La columna del Director
        </Link>
        <Link href="/articulando#pensamiento-complejo" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium hover:text-primary transition">
          Pensamiento complejo
        </Link>
        <Link href="/articulando#noticias-y-eventos" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium hover:text-primary transition">
          Noticia y eventos
        </Link>

        <button 
          type="button" 
          aria-label="Suscríbete al boletín" 
          onClick={() => setIsMenuOpen(false)}
          className="mt-4 bg-[#0E52C6] hover:bg-blue-800 text-white rounded-full font-medium h-15 px-10 text-[20px] transition-all"
        >
          Suscríbete
        </button>
      </div>
    </>
  );
}







