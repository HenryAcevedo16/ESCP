import { ArrowRight } from "lucide-react";

export default function CursosSection() {
  const cursos = [
    { id: 1, title: "Liderazgo Sindical Avanzado" },
    { id: 2, title: "Negociación Colectiva Efectiva" },
    { id: 3, title: "Derechos Laborales en la Era Digital" },
    { id: 4, title: "Oratoria e Incidencia Política" },
  ];

  return (
    <section className="w-full bg-[#f8f9fa] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Cursos</h2>
          <button className="text-primary font-medium flex items-center gap-2 hover:underline mt-4 md:mt-0">
            Ver todos <ArrowRight size={18} />
          </button>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cursos.map((curso) => (
            <div key={curso.id} className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 flex flex-col">
              {/* Image Placeholder */}
              <div className="w-full h-40 bg-gray-200 rounded-2xl mb-6"></div>
              
              {/* Content */}
              <div className="flex flex-col flex-grow">
                <h3 className="font-bold text-lg text-gray-900 mb-2 leading-snug">{curso.title}</h3>
                <p className="text-gray-500 text-sm mb-6 flex-grow">
                  Desarrolla habilidades clave para la gestión y defensa de los derechos de los trabajadores en el contexto actual.
                </p>
                <button className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 rounded-full transition">
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
