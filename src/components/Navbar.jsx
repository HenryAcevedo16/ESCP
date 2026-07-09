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
    <nav className={`w-full z-50 text-white transition-all duration-300 ${isScrolled ? 'fixed top-0 bg-[#05162D]/85 backdrop-blur-md shadow-xl py-4 px-6' : 'absolute top-0 bg-transparent py-10 px-8'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img 
            src="/logos/logo.svg" 
            alt="Logo Escuela CNUS" 
            className={`object-contain transition-all duration-300 ${isScrolled ? 'h-10' : 'h-16'}`} 
          />
        </Link>

        {/* Desktop Links */}
        <div className={`hidden md:flex items-center gap-10 font-medium transition-all duration-300 ${isScrolled ? 'text-sm' : 'text-lg'}`}>
          <Link href="#" className="hover:text-blue-200 transition">Inicio</Link>
          <Link href="#" className="hover:text-blue-200 transition">Sobre Nosotros</Link>
          <div className="flex items-center gap-1 cursor-pointer hover:text-blue-200 transition">
            <span>Programas</span>
            <ChevronDown size={isScrolled ? 16 : 24} className="transition-all duration-300" />
          </div>
          <Link href="#" className="hover:text-blue-200 transition">Actualidad</Link>
          <Link href="#" className="hover:text-blue-200 transition">Contacto</Link>
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <button className={`bg-primary hover:bg-primary-dark text-white rounded-full font-semibold transition-all duration-300 ${isScrolled ? 'px-6 py-2.5 text-sm' : 'px-10 py-4 text-lg'}`}>
            Inscríbete
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden">
          <Menu size={isScrolled ? 28 : 40} className="transition-all duration-300" />
        </button>
      </div>
    </nav>
  );
}
