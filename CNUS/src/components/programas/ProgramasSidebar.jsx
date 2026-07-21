import { ChevronDown } from "lucide-react";

export default function ProgramasSidebar({ categorias = [] }) {
  return (
    <aside className="w-full lg:w-64 flex-shrink-0">
      {/* Filtro por modalidad */}
      <div className="relative mb-6">
        <select className="w-full bg-[#0a1a3a] text-white appearance-none py-3 px-4 rounded-md text-sm cursor-pointer outline-none focus:ring-2 focus:ring-primary">
          <option>Modalidad</option>
          <option>Virtual</option>
          <option>Presencial</option>
          <option>Híbrido</option>
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white">
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>

      {categorias.length > 0 && (
        <>
          <h2 className="text-xl font-bold text-[#0a1a3a] mb-6 leading-tight">
            Lista de <br /> programas
          </h2>
          <ul className="space-y-4">
            {categorias.map((categoria) => (
              <li key={categoria.id}>
                <a
                  href={`/programas?categoria=${categoria.slug}`}
                  className="text-sm text-[#0a1a3a] font-medium hover:text-primary transition-colors block py-1"
                >
                  {categoria.nombre}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </aside>
  );
}
