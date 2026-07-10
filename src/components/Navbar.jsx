"use client";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`w-full z-50 text-white flex items-center justify-center transition-all duration-300 px-6 md:px-12 lg:px-20
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
            className={`object-contain transition-all duration-300 ${isScrolled ? 'w-[153px] h-[69px]' : 'w-[255px] h-[116px]'}`}
          />
        </Link>

        {/* Desktop Links */}
        <div className={`hidden md:flex flex-1 items-center justify-between mr-[167px] text-[#FFFFFF] font-medium transition-all duration-300
          ${isScrolled ? 'ml-[209px] text-[16px]' : 'ml-[152px] text-[20px]'}`}
        >
          <Link href="#" className="hover:text-blue-200 transition">Inicio</Link>
          <Link href="#" className="hover:text-blue-200 transition">Sobre Nosotros</Link>
          <div className="flex items-center gap-1 cursor-pointer hover:text-blue-200 transition">
            <span>Programas</span>
            <ChevronDown size={isScrolled ? 16 : 20} className="transition-all duration-300" />
          </div>
          <Link href="#" className="hover:text-blue-200 transition">Articulando</Link>
          <Link href="#" className="hover:text-blue-200 transition">Contacto</Link>
        </div>

        {/* Action Button & Mobile Menu */}
        <div className="flex items-center gap-4">
          <button className={`hidden md:flex items-center justify-center gap-[10px] w-[188px] bg-primary hover:bg-primary-dark text-[#FFFFFF] rounded-full font-medium transition-all duration-300
            ${isScrolled ? 'h-[55px] text-[16px]' : 'h-[69px] text-[20px]'}`}
          >
            Suscríbete
          </button>

          {/* Mobile Menu Icon */}
          <button className="md:hidden">
            <Menu size={isScrolled ? 28 : 36} className="transition-all duration-300" />
          </button>
        </div>

      </div>
    </nav>
  );
}
