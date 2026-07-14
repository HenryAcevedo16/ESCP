"use client";
import Link from "next/link";
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
      <nav className={`w-full z-50 text-[#05162D] flex items-center justify-center transition-all duration-300 px-6 md:px-[118px]
      ${isScrolled
        ? 'fixed top-0 bg-[#F2F4F7]/90 backdrop-blur-md h-[79px]'
        : 'absolute top-0 bg-[#F2F4F7] h-[116px]'
      }`}
    >
      <div className="w-full max-w-[1920px] flex items-center justify-between relative">

        {/* Left Links */}
        <div className={`hidden md:flex flex-1 items-center justify-between text-[#05162D] font-medium transition-all duration-300
          ${isScrolled ? 'text-[16px] pl-[100px] xl:pl-[200px] pr-[80px]' : 'text-[20px] pl-0 pr-[80px]'}`}
        >
          <Link href="/" className="hover:text-primary transition">Inicio</Link>
          <Link href="#" className="hover:text-primary transition">Noticias</Link>
          <div className="flex items-center gap-1 cursor-pointer hover:text-primary transition">
            <span>Artículos</span>
            <ChevronDown size={isScrolled ? 16 : 20} className="transition-all duration-300" />
          </div>
        </div>

        {/* Center Logo */}
        <Link href="/" className="flex items-center justify-center shrink-0 z-10 px-8">
          <img
            src="/logos/logocolor.svg"
            alt="Logo Escuela CNUS Color"
            className={`object-contain transition-all duration-300 ${isScrolled ? 'w-[120px] h-[55px] md:w-[153px] md:h-[69px]' : 'w-[180px] h-[80px] md:w-[255px] md:h-[116px]'}`}
          />
        </Link>

        {/* Right Links & Action Button */}
        <div className={`flex items-center justify-between flex-1 transition-all duration-300 ${isScrolled ? 'pl-[80px] pr-[100px] xl:pr-[200px]' : 'pl-[80px] pr-0'}`}>
          <div className={`hidden md:flex items-center justify-between w-full pr-[60px] text-[#05162D] font-medium transition-all duration-300
            ${isScrolled ? 'text-[16px]' : 'text-[20px]'}`}
          >
            <Link href="#" className="hover:text-primary transition">Debate</Link>
            <Link href="#" className="hover:text-primary transition whitespace-nowrap">Notas del presidente</Link>
          </div>

          <button className={`hidden md:flex items-center justify-center gap-[10px] w-[188px] bg-[#0E52C6] hover:bg-blue-800 text-[#FFFFFF] rounded-full font-medium transition-all duration-300
            ${isScrolled ? 'h-[55px] text-[16px]' : 'h-[69px] text-[20px]'}`}
          >
            Suscríbete
          </button>

          {/* Mobile Menu Icon */}
          <button 
            className="md:hidden z-50 relative ml-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white text-[#05162D] z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${
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
        <button className="mt-8 bg-[#0E52C6] hover:bg-blue-800 text-white rounded-full font-medium h-[60px] px-10 text-[20px] transition-all">
          Inscríbete
        </button>
      </div>
    </>
  );
}
