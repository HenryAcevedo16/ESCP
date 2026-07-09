import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0B1426] text-white py-16 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo & Description */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary font-bold">
              CNUS
            </div>
            <div>
              <h3 className="font-bold text-xl">Escuela CNUS</h3>
              <p className="text-xs text-gray-400">Escuela Sindical Sociopolítica</p>
            </div>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Formación sociopolítica de excelencia para el empoderamiento 
            y desarrollo del movimiento sindical en la República Dominicana, 
            promoviendo un liderazgo renovado y comprometido con los 
            derechos sociolaborales.
          </p>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-[#0B1426] transition cursor-pointer">
              <FaFacebook size={16} />
            </div>
            <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-[#0B1426] transition cursor-pointer">
              <FaInstagram size={16} />
            </div>
            <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-[#0B1426] transition cursor-pointer">
              <FaTwitter size={16} />
            </div>
            <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-[#0B1426] transition cursor-pointer">
              <FaLinkedin size={16} />
            </div>
          </div>
        </div>

        {/* Column 1: Organización */}
        <div>
          <h4 className="font-semibold mb-6">Organización</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link href="#" className="hover:text-white transition">Inicio</Link></li>
            <li><Link href="#" className="hover:text-white transition">Nosotros</Link></li>
            <li><Link href="#" className="hover:text-white transition">Académico</Link></li>
          </ul>
        </div>

        {/* Column 2: Programas */}
        <div>
          <h4 className="font-semibold mb-6">Programas</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link href="#" className="hover:text-white transition">Eje 1</Link></li>
            <li><Link href="#" className="hover:text-white transition">Eje 2</Link></li>
            <li><Link href="#" className="hover:text-white transition">Eje 3</Link></li>
            <li><Link href="#" className="hover:text-white transition">Eje 4</Link></li>
            <li><Link href="#" className="hover:text-white transition">Eje 5</Link></li>
          </ul>
        </div>

        {/* Column 3: Contáctanos */}
        <div>
          <h4 className="font-semibold mb-6">Contáctanos</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link href="#" className="hover:text-white transition">Dirección</Link></li>
            <li><Link href="#" className="hover:text-white transition">Teléfono</Link></li>
            <li><Link href="#" className="hover:text-white transition">Correo</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
        <p>© 2024 Escuela CNUS. Todos los derechos reservados.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white transition">Política de Privacidad</Link>
          <Link href="#" className="hover:text-white transition">Términos de Servicio</Link>
        </div>
      </div>
    </footer>
  );
}
