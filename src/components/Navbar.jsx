"use client";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
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
      <nav className={`w-full z-50 text-white flex items-center justify-center transition-all duration-300 px-6 md:px-[118px]
      ${isScrolled
        ? 'fixed top-0 bg-[#05162D]/90 backdrop-blur-md shadow-xl h-[79px]'
        : 'absolute top-0 bg-transparent h-[116px]'
      }`}
    >
      <div className="w-full max-w-[1920px] flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <img
            src="/logos/logo.svg"
            alt="Logo Escuela CNUS"
            className={`object-contain transition-all duration-300 ${isScrolled ? 'w-[120px] h-[55px] md:w-[153px] md:h-[69px]' : 'w-[180px] h-[80px] md:w-[255px] md:h-[116px]'}`}
          />
        </Link>

        {/* Desktop Links */}
        <div className={`hidden md:flex flex-1 items-center justify-between mr-[167px] text-[#FFFFFF] font-medium transition-all duration-300
          ${isScrolled ? 'ml-[209px] text-[16px]' : 'ml-[152px] text-[20px]'}`}
        >
          <Link href="/" className="hover:text-blue-200 transition">Inicio</Link>
          <Link href="/nosotros" className="hover:text-blue-200 transition">Sobre Nosotros</Link>
          <div className="flex items-center gap-1 cursor-pointer hover:text-blue-200 transition">
            <span>Programas</span>
            <ChevronDown size={isScrolled ? 16 : 20} className="transition-all duration-300" />
          </div>
          <Link href="#" className="hover:text-blue-200 transition">Articulando</Link>
          <Link href="/contacto" className="hover:text-blue-200 transition">Contacto</Link>
        </div>

        {/* Action Button & Mobile Menu */}
        <div className="flex items-center gap-4">
          <button className={`hidden md:flex items-center justify-center gap-[10px] w-[188px] bg-primary hover:bg-primary-dark text-[#FFFFFF] rounded-full font-medium transition-all duration-300
            ${isScrolled ? 'h-[55px] text-[16px]' : 'h-[69px] text-[20px]'}`}
          >
            Suscríbete
          </button>

          {/* Mobile Menu Icon */}
          <button 
            className="md:hidden z-50 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#05162D] text-white z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-2xl font-medium hover:text-blue-300 transition">Inicio</Link>
        <Link href="/nosotros" onClick={() => setIsMenuOpen(false)} className="text-2xl font-medium hover:text-blue-300 transition">Sobre Nosotros</Link>
        <div className="flex items-center gap-2 text-2xl font-medium hover:text-blue-300 transition cursor-pointer">
          <span>Programas</span>
          <ChevronDown size={24} />
        </div>
        <Link href="#" onClick={() => setIsMenuOpen(false)} className="text-2xl font-medium hover:text-blue-300 transition">Articulando</Link>
        <Link href="/contacto" onClick={() => setIsMenuOpen(false)} className="text-2xl font-medium hover:text-blue-300 transition">Contacto</Link>
        <button className="mt-8 bg-primary hover:bg-primary-dark text-white rounded-full font-medium h-[60px] px-10 text-[20px] transition-all">
          Suscríbete
        </button>
      </div>
    </>
  );
}
