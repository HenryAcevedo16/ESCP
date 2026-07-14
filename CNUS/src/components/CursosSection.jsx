import { ArrowRight } from "lucide-react";

export default function CursosSection() {
  const cursos = [
    { id: 1, title: "Liderazgo Sindical Avanzado" },
    { id: 2, title: "Negociación Colectiva Efectiva" },
    { id: 3, title: "Derechos Laborales en la Era Digital" },
    { id: 4, title: "Oratoria e Incidencia Política" },
  ];

  return (
    <section className="w-full h-auto min-h-[902px] bg-[#f8f9fa] py-12 md:py-20">
      <div className="max-w-[1728px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Cursos</h2>
          <button className="text-primary font-medium flex items-center gap-2 hover:underline mt-4 md:mt-0">
            Ver todos <ArrowRight size={18} />
          </button>
        </div>

        {/* Courses Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {cursos.map((curso) => (
            <div key={curso.id} className="w-full sm:w-[402px] h-auto min-h-[550px] shrink-0 bg-white rounded-3xl p-4 flex flex-col border border-transparent hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer">
              {/* Image Placeholder */}
              <div className="w-full sm:w-[364px] h-[200px] sm:h-[256px] mx-auto bg-gray-200 rounded-2xl mb-6 shrink-0"></div>
              
              {/* Content */}
              <div className="flex flex-col flex-grow">
                <h3 className="font-bold text-[28px] text-[#05162D] mb-4 leading-snug">{curso.title}</h3>
                <p className="text-[#445163] text-[16px] mb-6 flex-grow">
                  Desarrolla habilidades clave para la gestión y defensa de los derechos de los trabajadores en el contexto actual.
                </p>
                <button className="w-full h-[69px] bg-primary hover:bg-primary-dark text-white font-medium py-3 rounded-full transition">
                  Ver detalles
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
