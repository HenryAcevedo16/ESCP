import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0B1426] text-white py-16 mt-20">
      <div className="max-w-[1680px] mx-auto px-4 tablet:px-7.5 desktop:px-20 min-[1610px]:px-6 grid grid-cols-1 tablet:grid-cols-12 gap-10 tablet:gap-4 desktop:gap-16">
        
        {/* Column 1: Logo & Description */}
        <div className="tablet:col-span-4 desktop:col-span-5 space-y-4 desktop:space-y-6">
          <div className="relative w-full max-w-50 desktop:max-w-70 h-22.5 desktop:h-31.5">
            <Image src="/logos/logo.svg" alt="Logo Escuela CNUS" fill className="object-contain" unoptimized />
          </div>
          <p className="text-[10px] desktop:text-sm text-gray-300 leading-relaxed max-w-md">
            En esta parte va una descripcion general de la escuela 
            CNUS de sindicalismo sociopolitico. En esta parte va una 
            descripcion general de la escuela CNUS de sindicalismo 
            sociopolitico. En esta parte va una descripcion general de la 
            escuela CNUS de sindicalismo sociopolitico.
          </p>
          <div className="flex items-center gap-2">
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="Contáctanos por WhatsApp" className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-white hover:text-[#0B1426] transition">
              <FaWhatsapp size={18} aria-hidden="true" />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Síguenos en Instagram" className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-white hover:text-[#0B1426] transition">
              <FaInstagram size={18} aria-hidden="true" />
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Síguenos en Facebook" className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-white hover:text-[#0B1426] transition">
              <FaFacebook size={18} aria-hidden="true" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Síguenos en Twitter / X" className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-white hover:text-[#0B1426] transition">
              <FaTwitter size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Column 2: Mapa del sitio */}
        <div className="tablet:col-span-2 desktop:col-span-2">
          <h4 className="font-bold text-[13px] desktop:text-lg mb-4 desktop:mb-6 whitespace-nowrap">Mapa del sitio</h4>
          <ul className="space-y-2 desktop:space-y-4 text-[11px] desktop:text-sm text-gray-300">
            <li><Link href="/" className="hover:text-white transition">Inicio</Link></li>
            <li><Link href="/nosotros" className="hover:text-white transition">Nosotros</Link></li>
            <li><Link href="/articulando" className="hover:text-white transition">Articulando</Link></li>
          </ul>
        </div>

        {/* Column 3: Programas */}
        <div className="tablet:col-span-4 desktop:col-span-3">
          <h4 className="font-bold text-[13px] desktop:text-lg mb-4 desktop:mb-6">Programas</h4>
          <div className="grid grid-cols-2 gap-2 desktop:gap-4 text-[11px] desktop:text-sm text-gray-300">
            <ul className="space-y-4">
              <li><Link href="/programas" className="hover:text-white transition">Eje 1</Link></li>
              <li><Link href="/programas" className="hover:text-white transition">Eje 2</Link></li>
              <li><Link href="/programas" className="hover:text-white transition">Eje 3</Link></li>
              <li><Link href="/programas" className="hover:text-white transition">Eje 4</Link></li>
              <li><Link href="/programas" className="hover:text-white transition">Eje 5</Link></li>
            </ul>
            <ul className="space-y-4">
              <li><Link href="/programas" className="hover:text-white transition">Eje 6</Link></li>
              <li><Link href="/programas" className="hover:text-white transition">Eje 7</Link></li>
              <li><Link href="/programas" className="hover:text-white transition">Eje 8</Link></li>
              <li><Link href="/programas" className="hover:text-white transition">Eje 9</Link></li>
              <li><Link href="/programas" className="hover:text-white transition">Eje 10</Link></li>
            </ul>
          </div>
        </div>

        {/* Column 4: Contactanos */}
        <div className="tablet:col-span-2 desktop:col-span-2">
          <h4 className="font-bold text-[13px] desktop:text-lg mb-4 desktop:mb-6">Contactanos</h4>
          <ul className="space-y-2 desktop:space-y-4 text-[11px] desktop:text-sm text-gray-300">
            <li><Link href="/contacto" className="hover:text-white transition">Dirección</Link></li>
            <li><Link href="/contacto" className="hover:text-white transition">Teléfono</Link></li>
            <li><Link href="/contacto" className="hover:text-white transition">Correo</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1680px] mx-auto px-4 tablet:px-7.5 tablet:gap-5 desktop:px-20 min-[1610px]:px-6 mt-16 pt-8 border-t border-gray-600 flex flex-col tablet:flex-row items-center justify-between text-[11px] tablet:text-xs text-gray-400">
        <p className="text-center tablet:text-left tablet:mr-2">© 2026 Escuela CNUS De Sindicalismo Sociopolítico | Todos los derechos reservados. Desarrollado por NovoDev</p>
        <div className="mt-4 tablet:mt-0">
          <Link href="/" className="hover:text-white transition">Políticas de privacidad</Link>
        </div>
      </div>
    </footer>
  );
}
