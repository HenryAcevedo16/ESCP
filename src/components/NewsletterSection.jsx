import { Mail, CheckCircle } from "lucide-react";

export default function NewsletterSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-sm border border-gray-100 bg-[#0045A5]">
        
        {/* Left Side: Image */}
        <div className="lg:w-1/2 relative bg-[#F4E9E2]">
          <img 
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop" 
            alt="Man looking at phone"
            className="w-full h-full object-cover mix-blend-multiply"
          />
          {/* Floating Success Badge */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-16 bg-white p-6 rounded-3xl shadow-xl flex flex-col items-center gap-2 animate-bounce">
            <CheckCircle className="text-green-500" size={32} />
            <h4 className="font-bold text-gray-900">¡Suscrito!</h4>
            <p className="text-xs text-gray-500 text-center">Has sido añadido a la lista.</p>
            <button className="mt-2 w-full bg-green-50 text-green-600 font-medium py-1.5 rounded-full text-sm">
              Genial
            </button>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mantente conectado</h2>
          <p className="text-blue-100 mb-10 max-w-md text-sm md:text-base leading-relaxed">
            Únete a nuestro boletín para recibir noticias, actualizaciones sobre nuevos cursos y eventos exclusivos de la Escuela CNUS directamente en tu bandeja de entrada.
          </p>

          <form className="flex flex-col gap-4 max-w-md">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="email" 
                placeholder="Ingresa tu correo electrónico" 
                className="w-full pl-12 pr-4 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-[#003380] hover:bg-[#002255] text-white font-semibold py-4 rounded-full transition"
            >
              Suscríbase
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
