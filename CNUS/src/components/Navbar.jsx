"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar({ logoClassName = "" }) {
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
      <nav className={`w-full z-50 text-white flex items-center justify-center transition-all duration-300 px-4 tablet:px-7.5 desktop:px-20 min-[1610px]:px-29.5
      ${isScrolled
        ? 'fixed top-0 bg-[#05162D]/90 backdrop-blur-md shadow-xl h-17.5 tablet:h-19.75'
        : 'absolute top-0 bg-transparent h-22.5 tablet:h-29'
      }`}
    >
      <div className="w-full max-w-[1920px] flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
            <div className={`relative transition-all duration-300 ${logoClassName} ${
                isScrolled
                  ? 'w-25 h-11.5 tablet:w-38.25 tablet:h-17.25'
                  : 'w-40 h-18 tablet:w-63.75 tablet:h-29'
              }`}>
              <Image
                src="/logos/logo.svg"
                alt="Logo Escuela CNUS"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
        </Link>

        {/* Desktop Links — only visible at 1200px+ */}
        <div className={`hidden desktop:flex flex-1 items-center justify-center min-[1610px]:justify-between text-[#FFFFFF] font-medium transition-all duration-300
          ${isScrolled
            ? 'gap-8 min-[1610px]:gap-0 ml-6 mr-6 min-[1610px]:ml-52.25 min-[1610px]:mr-41.75 text-[14px] min-[1610px]:text-[16px]'
            : 'gap-6 min-[1610px]:gap-0 ml-10 mr-10 min-[1610px]:ml-38 min-[1610px]:mr-41.75 text-[15px] min-[1610px]:text-[20px]'
          }`}
        >
          <Link href="/" className="hover:text-blue-200 transition whitespace-nowrap">Inicio</Link>
          <Link href="/nosotros" className="hover:text-blue-200 transition whitespace-nowrap">Sobre Nosotros</Link>
          <Link href="/programas" className="hover:text-blue-200 transition whitespace-nowrap">Programas</Link>
          <Link href="/articulando" className="hover:text-blue-200 transition whitespace-nowrap">Articulando</Link>
          <Link href="/contacto" className="hover:text-blue-200 transition whitespace-nowrap">Contacto</Link>
        </div>

        {/* Action Button & Mobile/Tablet Menu */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Suscríbete al boletín"
            className={`hidden desktop:flex items-center justify-center gap-2.5 w-47 bg-primary hover:bg-primary-dark text-[#FFFFFF] rounded-full font-medium transition-all duration-300
            ${isScrolled ? 'h-13.75 text-[16px]' : 'h-17.25 text-[20px]'}`}
          >
            Suscríbete
          </button>

          {/* Hamburger — hidden at 1200px+ */}
          <button 
            className="desktop:hidden z-50 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? (
              <X size={isScrolled ? 28 : 36} className="transition-all duration-300" />
            ) : (
              <Menu size={isScrolled ? 28 : 36} className="transition-all duration-300" />
            )}
          </button>
        </div>
      </div>
    </nav>

      {/* Mobile/Tablet Menu Overlay — hidden at 1200px+ */}
      <div 
        id="mobile-navigation"
        className={`fixed inset-0 bg-[#05162D] text-white z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 desktop:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-2xl font-medium hover:text-blue-300 transition">Inicio</Link>
        <Link href="/nosotros" onClick={() => setIsMenuOpen(false)} className="text-2xl font-medium hover:text-blue-300 transition">Sobre Nosotros</Link>
        <Link href="/programas" onClick={() => setIsMenuOpen(false)} className="text-2xl font-medium hover:text-blue-300 transition">Programas</Link>
        <Link href="/articulando" onClick={() => setIsMenuOpen(false)} className="text-2xl font-medium hover:text-blue-300 transition">Articulando</Link>
        <Link href="/contacto" onClick={() => setIsMenuOpen(false)} className="text-2xl font-medium hover:text-blue-300 transition">Contacto</Link>
        <button type="button" aria-label="Suscríbete al boletín" className="mt-8 bg-primary hover:bg-primary-dark text-white rounded-full font-medium h-15 px-10 text-[20px] transition-all">
          Suscríbete
        </button>
      </div>
    </>
  );
}
