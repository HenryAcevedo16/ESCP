import { Mail, CheckCircle } from "lucide-react";

export default function NewsletterSection() {
  return (
    <section className="max-w-[1680px] w-full mx-auto px-6 py-20">
      <div className="flex flex-col lg:flex-row rounded-3xl overflow-hidden bg-[#0045A5]">
        
        {/* Left Side: Image */}
        <div className="lg:w-1/2 relative">
          <img 
            src="/imagenes/nwslate.png" 
            alt="Mantente conectado"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Form */}
        <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center items-center text-white">
          <div className="w-full max-w-[586px] flex flex-col text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Mantente conectado</h2>
            <p className="text-blue-100 mb-10 text-[18px] leading-relaxed">
              Suscríbete a nuestro boletín y recibe las noticias más importantes, eventos, recursos exclusivos y oportunidades directamente en tu bandeja de entrada.
            </p>

            <form className="flex flex-col gap-4 w-full">
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
          </div>
        </div>

      </div>
    </section>
  );
}
