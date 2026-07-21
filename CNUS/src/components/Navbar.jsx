"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
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
      <nav className={`w-full z-50 text-white flex items-center justify-center transition-all duration-300 px-4 tablet:px-[30px] desktop:px-[80px] min-[1610px]:px-[118px]
      ${isScrolled
        ? 'fixed top-0 bg-[#05162D]/90 backdrop-blur-md shadow-xl h-[70px] tablet:h-[79px]'
        : 'absolute top-0 bg-transparent h-[90px] tablet:h-[116px]'
      }`}
    >
      <div className="w-full max-w-[1920px] flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
            <img
              src="/logos/logo.svg"
              alt="Logo Escuela CNUS"
              className={`object-contain transition-all duration-300 ${
                isScrolled
                  ? 'w-[100px] h-[46px] tablet:w-[153px] tablet:h-[69px]'
                  : 'w-[160px] h-[72px] tablet:w-[255px] tablet:h-[116px]'
              }`}
            />
        </Link>

        {/* Desktop Links — only visible at 1200px+ */}
        <div className={`hidden desktop:flex flex-1 items-center justify-center min-[1610px]:justify-between text-[#FFFFFF] font-medium transition-all duration-300
          ${isScrolled
            ? 'gap-8 min-[1610px]:gap-0 ml-6 mr-6 min-[1610px]:ml-[209px] min-[1610px]:mr-[167px] text-[14px] min-[1610px]:text-[16px]'
            : 'gap-6 min-[1610px]:gap-0 ml-10 mr-10 min-[1610px]:ml-[152px] min-[1610px]:mr-[167px] text-[15px] min-[1610px]:text-[20px]'
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
          <button className={`hidden desktop:flex items-center justify-center gap-[10px] w-[188px] bg-primary hover:bg-primary-dark text-[#FFFFFF] rounded-full font-medium transition-all duration-300
            ${isScrolled ? 'h-[55px] text-[16px]' : 'h-[69px] text-[20px]'}`}
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
        <button className="mt-8 bg-primary hover:bg-primary-dark text-white rounded-full font-medium h-[60px] px-10 text-[20px] transition-all">
          Suscríbete
        </button>
      </div>
    </>
  );
}
