import Navbar from "@/components/Navbar";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactoPage() {
  return (
    <main className="w-full bg-white">
      {/* Banner Section */}
      <section className="relative w-full h-[280px] md:h-[450px] overflow-hidden mb-[200px]">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url('/imagenes/contacto%20banner.png')` }}
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <Navbar />

        <div className="relative z-10 h-full flex flex-col items-center justify-center pb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-white text-center mt-20">
            Contáctanos
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="max-w-[1680px] mx-auto px-6 py-16 md:py-24 flex flex-col lg:flex-row gap-10 lg:gap-[24px]">
        
        {/* Left Side: Contact Form (Dark Blue Card) */}
        <div className="w-full lg:w-1/2 shrink-0 bg-[#0B1426] rounded-[32px] md:rounded-[40px] p-8 md:p-14 py-12 text-white flex flex-col items-center justify-center">
          <div className="w-full max-w-[697px] flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 md:mb-14">Tu formación comienza con una conversación</h2>
            
            <form className="flex flex-col gap-[24px]">
              <div className="flex flex-col md:flex-row gap-[15px]">
                <div className="flex flex-col gap-[15px] flex-1">
                  <label className="text-md font-medium">Nombre</label>
                  <input 
                    type="text" 
                    placeholder="Ejemplo: Pedro" 
                    className="w-full h-[60px] md:h-[79px] px-5 rounded-full text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    suppressHydrationWarning
                  />
                </div>
                <div className="flex flex-col gap-[15px] flex-1">
                  <label className="text-sm font-medium">Apellido</label>
                  <input 
                    type="text" 
                    placeholder="Ejemplo: Martinez" 
                    className="w-full h-[60px] md:h-[79px] px-5 rounded-full text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    suppressHydrationWarning
                  />
                </div>
              </div>

              <div className="flex flex-col gap-[15px]">
                <label className="text-sm font-medium">Correo electrónico</label>
                <input 
                  type="email" 
                  placeholder="Ejemplo@correo.com" 
                  className="w-full h-[60px] md:h-[79px] px-5 rounded-full text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  suppressHydrationWarning
                />
              </div>

              <div className="flex flex-col gap-[15px]">
                <label className="text-sm font-medium">Motivo</label>
                <textarea 
                  placeholder="Ejemplo: Recibir información sobre futuros programas" 
                  className="w-full h-[150px] md:h-[190px] p-5 rounded-[24px] md:rounded-[32px] text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  required
                  suppressHydrationWarning
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full h-[70px] md:h-[89px] bg-[#0045A5] hover:bg-blue-700 text-white font-semibold rounded-full transition"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>

        {/* Right Side: Contact Info & Map */}
        <div className="w-full lg:w-1/2 flex flex-col pt-4">
          <h3 className="text-xl md:text-[22px] text-gray-800 mb-10 max-w-full leading-relaxed">
           Si necesitas información sobre nuestros programas de formación, inscripciones, horarios o cualquier otro tema, no dudes en comunicarte con nosotros. Nuestro equipo estará encantado de atenderte y brindarte la orientación que necesites.
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {/* Phone Card */}
            <div className="flex items-center gap-4 p-6 rounded-3xl border border-gray-800">
              <Phone className="text-gray-800 shrink-0" size={24} />
              <div className="flex flex-col">
                <span className="font-semibold text-gray-900 text-sm">Número de teléfono</span>
                <span className="text-gray-700 text-sm">809-221-2158</span>
              </div>
            </div>

            {/* Email Card */}
            <div className="flex items-center gap-4 p-6 rounded-3xl border border-gray-800">
              <Mail className="text-gray-800 shrink-0" size={24} />
              <div className="flex flex-col">
                <span className="font-semibold text-gray-900 text-sm">Correo</span>
                <span className="text-gray-700 text-sm">ejemplo@email.com</span>
              </div>
            </div>

            {/* Whatsapp Card */}
            <div className="flex items-center gap-4 p-6 rounded-3xl border border-gray-800">
              <FaWhatsapp className="text-gray-800 shrink-0" size={24} />
              <div className="flex flex-col">
                <span className="font-semibold text-gray-900 text-sm">Whatsapp</span>
                <span className="text-gray-700 text-sm">809-221-2158</span>
              </div>
            </div>

            {/* Address Card */}
            <div className="flex items-center gap-4 p-6 rounded-3xl border border-gray-800">
              <MapPin className="text-gray-800 shrink-0" size={24} />
              <div className="flex flex-col">
                <span className="font-semibold text-gray-900 text-sm">Dirección</span>
                <span className="text-gray-700 text-sm leading-tight mt-1">
                  Calle Juan Erazo No. 14, Edificio Centrales Sindicales, Villa Juana, Santo Domingo, D.N.
                </span>
              </div>
            </div>
          </div>

          {/* Map Area */}
          <div className="w-full h-[350px] lg:h-auto lg:flex-grow bg-gray-200 rounded-[32px] overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.018921616773!2d-69.90707139999999!3d18.4828021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf89929175acc5%3A0x1351b1636dd07019!2sConfederaci%C3%B3n%20Nacional%20Unidad%20Sindical%20-%20CNUS!5e0!3m2!1ses-419!2sdo!4v1783715132501!5m2!1ses-419!2sdo" 
              width="100%"
              height="100%"
              style={{ minHeight: '350px' }}
              className="border-0"
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>

      </section>
    </main>
  );
}
