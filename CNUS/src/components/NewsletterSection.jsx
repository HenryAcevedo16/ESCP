"use client";
import { useState } from "react";
import Image from "next/image";
import { Mail } from "lucide-react";

export default function NewsletterSection() {
  const [status, setStatus] = useState("idle"); // idle | pending

  const handleSubmit = (e) => {
    e.preventDefault();
    // La integración con el servicio de newsletter está pendiente.
    // Cuando se conecte Supabase (o el proveedor elegido), aquí irá la llamada a la API.
    setStatus("pending");
  };

  return (
    <section className="max-w-[1680px] w-full mx-auto px-4 tablet:px-15 desktop:px-20 min-[1610px]:px-6 py-20 min-[1200px]:max-[1609px]:pt-0 min-[1200px]:max-[1609px]:pb-0 mb-[100px] min-[1200px]:max-[1609px]:mb-[200px] desktop:mb-[200px]">
      <div className="flex flex-col desktop:flex-row rounded-3xl overflow-hidden bg-[#0045A5]">
        
        {/* Left Side: Image */}
        <div className="desktop:w-1/2 relative h-70 tablet:h-90 desktop:h-auto min-[1200px]:max-[1609px]:min-h-[360px]">
          <Image 
            src="/imagenes/nwslate.png" 
            alt="Mantente conectado"
            fill
            className="object-cover object-left-top"
            unoptimized
          />
        </div>

        {/* Right Side: Form */}
        <div className="desktop:w-1/2 p-10 tablet:p-16 min-[1200px]:max-[1609px]:py-8 min-[1200px]:max-[1609px]:px-10 flex flex-col justify-center items-center text-white">
          <div className="w-full max-w-146.5 flex flex-col text-left">
            <h2 className="text-3xl tablet:text-4xl min-[1200px]:max-[1609px]:text-3xl desktop:text-5xl font-bold mb-4 min-[1200px]:max-[1609px]:mb-2">Mantente conectado</h2>
            <p className="text-blue-100 mb-10 min-[1200px]:max-[1609px]:mb-5 text-[16px] tablet:text-[18px] desktop:text-[20px] min-[1200px]:max-[1609px]:text-[15px] leading-relaxed">
              Suscríbete a nuestro boletín y recibe las noticias más importantes, eventos, recursos exclusivos y oportunidades directamente en tu bandeja de entrada.
            </p>

            {status === "idle" ? (
              <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input 
                    type="email" 
                    placeholder="Ejemplo@correo.com" 
                    className="w-full pl-12 pr-4 py-4 rounded-full text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300"
                    required
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-transparent border border-white hover:bg-white hover:text-black text-white font-semibold py-4 rounded-full transition"
                >
                  Suscribirme
                </button>
              </form>
            ) : (
              /* Aviso honesto: el newsletter todavía no está conectado */
              <div className="flex flex-col items-center gap-4 py-6 text-center">
                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-3xl">
                  🔔
                </div>
                <h3 className="text-xl font-bold">¡Pronto disponible!</h3>
                <p className="text-blue-100 text-[16px] leading-relaxed">
                  El boletín está en preparación. Vuelve en breve para registrarte.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 border border-white text-white hover:bg-white hover:text-blue-800 font-semibold py-3 px-8 rounded-full transition"
                >
                  Volver
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
