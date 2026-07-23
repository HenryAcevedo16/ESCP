"use client";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
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
      <nav className={`w-full z-50 text-[#05162D] flex items-center justify-center transition-all duration-300 px-4 tablet:px-7.5 desktop:px-20 2xl:px-29.5
      ${isScrolled
        ? 'fixed top-0 bg-[#F2F4F7]/90 backdrop-blur-md h-19.75'
        : 'absolute top-0 bg-[#F2F4F7] h-29'
      }`}
    >
      <div className="w-full max-w-[1920px] flex items-center justify-between relative">

        {/* Left Links — only visible at 1200px+ */}
        <div className={`hidden desktop:flex flex-1 items-center justify-between text-[#05162D] font-medium transition-all duration-300
          ${isScrolled ? 'text-[15px] min-[1610px]:text-[16px] px-0 min-[1610px]:pl-40 pr-10' : 'text-[16px] min-[1610px]:text-[20px] px-0 min-[1610px]:pl-0 pr-10'}`}
        >
          <Link href="/" className="hover:text-primary transition">Inicio</Link>
          <Link href="/articulando" className="hover:text-primary transition">Noticias</Link>
          <div className="flex items-center gap-1 cursor-pointer hover:text-primary transition">
            <span>Artículos</span>
            <ChevronDown size={isScrolled ? 16 : 20} className="transition-all duration-300" />
          </div>
        </div>

        {/* Center Logo */}
        <Link href="/" className="flex items-center justify-center shrink-0 z-10 px-8">
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

        {/* Right Links & Action Button */}
        <div className={`flex items-center justify-end desktop:justify-between flex-1 transition-all duration-300 ${isScrolled ? 'desktop:pl-10 min-[1610px]:pl-20 pr-6 desktop:pr-0' : 'desktop:pl-10 min-[1610px]:pl-20 pr-6 desktop:pr-0'}`}>
          <div className={`hidden desktop:flex items-center gap-6 min-[1610px]:gap-0 min-[1610px]:justify-between w-auto min-[1610px]:w-full pr-5 min-[1610px]:pr-15 text-[#05162D] font-medium transition-all duration-300
            ${isScrolled ? 'text-[15px] min-[1610px]:text-[16px]' : 'text-[16px] min-[1610px]:text-[20px]'}`}
          >
            <Link href="/articulando" className="hover:text-primary transition">Debate</Link>
            <Link href="/articulando" className="hover:text-primary transition whitespace-nowrap">Notas del presidente</Link>
          </div>

          <button
            type="button"
            aria-label="Suscríbete al boletín"
            className={`hidden desktop:flex items-center justify-center gap-2.5 w-37.5 min-[1610px]:w-47 bg-[#0E52C6] hover:bg-blue-800 text-[#FFFFFF] rounded-full font-medium transition-all duration-300
            ${isScrolled ? 'h-12 min-[1610px]:h-13.75 text-[15px] min-[1610px]:text-[16px]' : 'h-13.75 min-[1610px]:h-17.25 text-[16px] min-[1610px]:text-[20px]'}`}
          >
            Suscríbete
          </button>

          {/* Hamburger — hidden at 1200px+ */}
          <button 
            className="desktop:hidden z-50 relative ml-4"
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

      {/* Mobile/Tablet Menu Overlay — hidden at 1200px+ */}
      <div 
        id="mobile-navigation-articulando"
        className={`fixed inset-0 bg-white text-[#05162D] z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 desktop:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-2xl font-medium hover:text-primary transition">Inicio</Link>
        <div className="flex items-center gap-2 text-2xl font-medium hover:text-primary transition cursor-pointer">
          <span>Categorías</span>
          <ChevronDown size={24} />
        </div>
        <div className="flex items-center gap-2 text-2xl font-medium hover:text-primary transition cursor-pointer">
          <span>Programas</span>
          <ChevronDown size={24} />
        </div>
        <Link href="/contacto" onClick={() => setIsMenuOpen(false)} className="text-2xl font-medium hover:text-primary transition">Contacto</Link>
        <button type="button" aria-label="Suscríbete al boletín" className="mt-8 bg-[#0E52C6] hover:bg-blue-800 text-white rounded-full font-medium h-15 px-10 text-[20px] transition-all">
          Inscríbete
        </button>
      </div>
    </>
  );
}
