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
      <nav className={`w-full z-50 text-[#05162D] flex items-center justify-center transition-all duration-300 px-4 tablet:px-7.5 laptop:px-20 desktop:px-29.5
      ${isScrolled
        ? 'fixed top-0 bg-[#F2F4F7]/90 backdrop-blur-md h-17.5 tablet:h-19.75'
        : 'absolute top-0 bg-[#F2F4F7] h-22.5 tablet:h-29'
      }`}
    >
      <div className="w-full max-w-[1920px] relative flex items-center justify-between">

        {/* Desktop View — Grid Layout for absolute symmetry */}
        <div className={`hidden laptop:grid w-full font-medium transition-all duration-300 items-center
          ${isScrolled
            ? 'text-[14px] desktop:text-[16px]'
            : 'text-[15px] desktop:text-[20px]'
          }`}
          style={{ gridTemplateColumns: 'minmax(0, 1fr) auto minmax(0, 1fr)' }}
        >
          {/* Left column — min-w-0 es crucial para que no rompa el ancho del grid */}
          <div className={`flex items-center justify-between w-full min-w-0 ${
            isScrolled ? 'pr-8 desktop:pr-16' : 'pr-10 desktop:pr-20'
          }`}>
            <Link href="/" className="hover:text-primary transition whitespace-nowrap shrink-0">
              Inicio
            </Link>
            <Link href="/articulando/notas-del-presidente" className="hover:text-primary transition whitespace-nowrap truncate">
              Notas del presidente
            </Link>
            <Link href="/articulando/debate" className="hover:text-primary transition whitespace-nowrap truncate">
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

          {/* Right column — justify-between para balancear simétricamente con el lado izquierdo */}
          <div className={`flex items-center justify-between w-full min-w-0 ${
            isScrolled ? 'pl-8 desktop:pl-16' : 'pl-10 desktop:pl-20'
          }`}>
            <Link href="/articulando/columna-del-director" className="hover:text-primary transition whitespace-nowrap truncate">
              La columna del Director
            </Link>
            <Link href="/articulando/articulos" className="hover:text-primary transition whitespace-nowrap truncate">
              Pensamiento complejo
            </Link>
            <Link href="/articulando/noticias" className="hover:text-primary transition whitespace-nowrap shrink-0">
              Noticias y eventos
            </Link>
          </div>
        </div>

        {/* Mobile / Tablet View (<1200px) */}
        <div className="flex laptop:hidden items-center justify-between w-full">
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
            className="laptop:hidden z-50 relative"
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
        className={`fixed inset-0 bg-white text-[#05162D] z-40 flex flex-col items-center justify-center gap-6 px-6 text-center transition-transform duration-300 laptop:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium hover:text-primary transition">
          Inicio
        </Link>
        <Link href="/articulando/notas-del-presidente" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium hover:text-primary transition">
          Notas del presidente
        </Link>
        <Link href="/articulando/debate" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium hover:text-primary transition">
          Diálogo, debate y opinión
        </Link>
        <Link href="/articulando/columna-del-director" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium hover:text-primary transition">
          La columna del Director
        </Link>
        <Link href="/articulando/articulos" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium hover:text-primary transition">
          Pensamiento complejo
        </Link>
        <Link href="/articulando/noticias" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium hover:text-primary transition">
          Noticia y eventos
        </Link>
      </div>
    </>
  );
}







