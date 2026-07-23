import { Search } from "lucide-react";
import CourseCard from "./CourseCard";
import Pagination from "../ui/Pagination";

export default function CursosList({ cursos = [] }) {
  return (
    <div className="flex-1 w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <h2 className="text-2xl font-bold text-[#0a1a3a]">Cursos disponibles</h2>
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full pl-4 pr-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm"
          />
          <button type="button" aria-label="Buscar cursos" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary">
            <Search className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      {cursos.length === 0 ? (
        <p className="text-gray-500 text-center py-20">
          No hay cursos disponibles por el momento.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-10">
          {cursos.map((curso) => (
            <CourseCard
              key={curso.id}
              titulo={curso.titulo}
              descripcion={curso.descripcion}
              modalidad={curso.modalidad}
              slug={curso.slug}
              imagen={curso.imagen}
            />
          ))}
        </div>
      )}

      <Pagination />
    </div>
  );
}
