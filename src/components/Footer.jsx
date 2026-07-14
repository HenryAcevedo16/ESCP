import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0B1426] text-white py-16 mt-20">
      <div className="max-w-[1680px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
        
        {/* Column 1: Logo & Description */}
        <div className="md:col-span-5 space-y-6">
          <img src="/logos/logo.svg" alt="Logo Escuela CNUS" className="w-[350px] h-auto object-contain" />
          <p className="text-sm text-gray-300 leading-relaxed max-w-md">
            En esta parte va una descripcion general de la escuela 
            CNUS de sindicalismo sociopolitico. En esta parte va una 
            descripcion general de la escuela CNUS de sindicalismo 
            sociopolitico. En esta parte va una descripcion general de la 
            escuela CNUS de sindicalismo sociopolitico.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-white hover:text-[#0B1426] transition cursor-pointer">
              <FaWhatsapp size={18} />
            </div>
            <div className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-white hover:text-[#0B1426] transition cursor-pointer">
              <FaInstagram size={18} />
            </div>
            <div className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-white hover:text-[#0B1426] transition cursor-pointer">
              <FaFacebook size={18} />
            </div>
            <div className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-white hover:text-[#0B1426] transition cursor-pointer">
              <FaTwitter size={18} />
            </div>
          </div>
        </div>

        {/* Column 2: Mapa del sitio */}
        <div className="md:col-span-2">
          <h4 className="font-bold text-lg mb-6">Mapa del sitio</h4>
          <ul className="space-y-4 text-sm text-gray-300">
            <li><Link href="#" className="hover:text-white transition">Inicio</Link></li>
            <li><Link href="#" className="hover:text-white transition">Nosotros</Link></li>
            <li><Link href="#" className="hover:text-white transition">Articulando</Link></li>
          </ul>
        </div>

        {/* Column 3: Programas */}
        <div className="md:col-span-3">
          <h4 className="font-bold text-lg mb-6">Programas</h4>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
            <ul className="space-y-4">
              <li><Link href="#" className="hover:text-white transition">Eje 1</Link></li>
              <li><Link href="#" className="hover:text-white transition">Eje 2</Link></li>
              <li><Link href="#" className="hover:text-white transition">Eje 3</Link></li>
              <li><Link href="#" className="hover:text-white transition">Eje 4</Link></li>
              <li><Link href="#" className="hover:text-white transition">Eje 5</Link></li>
            </ul>
            <ul className="space-y-4">
              <li><Link href="#" className="hover:text-white transition">Eje 6</Link></li>
              <li><Link href="#" className="hover:text-white transition">Eje 7</Link></li>
              <li><Link href="#" className="hover:text-white transition">Eje 8</Link></li>
              <li><Link href="#" className="hover:text-white transition">Eje 9</Link></li>
              <li><Link href="#" className="hover:text-white transition">Eje 10</Link></li>
            </ul>
          </div>
        </div>

        {/* Column 4: Contactanos */}
        <div className="md:col-span-2">
          <h4 className="font-bold text-lg mb-6">Contactanos</h4>
          <ul className="space-y-4 text-sm text-gray-300">
            <li><Link href="#" className="hover:text-white transition">Direccion</Link></li>
            <li><Link href="#" className="hover:text-white transition">Telefono</Link></li>
            <li><Link href="#" className="hover:text-white transition">Correo</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1680px] mx-auto px-6 mt-16 pt-8 border-t border-gray-600 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400">
        <p>© 2026 Escuela CNUS De Sindicalismo Sociopolítico | Todos los derechos reservados. Desarrollado por NovoDev</p>
        <div className="mt-4 md:mt-0">
          <Link href="#" className="hover:text-white transition">Políticas de privacidad</Link>
        </div>
      </div>
    </footer>
  );
}
