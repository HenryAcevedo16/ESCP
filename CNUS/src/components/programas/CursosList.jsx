"use client";
import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import CourseCard from "./CourseCard";
import Pagination from "../ui/Pagination";

export default function CursosList({ cursos = [], ejes = [] }) {
  const [selectedEje, setSelectedEje] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCursos = cursos.filter((curso) => {
    // Filtro por Eje
    const matchesEje = selectedEje
      ? (curso.eje_formativo?.nombre === selectedEje || curso.eje === selectedEje)
      : true;

    // Filtro por Búsqueda
    const matchesSearch = searchTerm
      ? curso.titulo?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        curso.descripcion?.toLowerCase().includes(searchTerm.toLowerCase())
      : true;

    return matchesEje && matchesSearch;
  });

  return (
    <div className="w-full">
      {/* Control Bar: Dropdown de Ejes + Buscador juntos al lado derecho en laptop */}
      <div className="flex flex-col sm:flex-row items-center justify-between laptop:justify-end mb-12 gap-4">
        
        {/* Dropdown de Ejes (Izquierda del Buscador) */}
        <div className="relative w-full sm:w-80 shrink-0">
          <select
            value={selectedEje}
            onChange={(e) => setSelectedEje(e.target.value)}
            className="w-full bg-[#05162D] text-white font-medium appearance-none py-3.5 px-5 pr-12 rounded-full text-sm sm:text-base cursor-pointer outline-none focus:ring-2 focus:ring-primary transition-all"
          >
            <option value="">Todos los ejes formativos</option>
            {ejes.map((eje) => (
              <option key={eje.id || eje.documentId} value={eje.nombre}>
                {eje.nombre}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white pointer-events-none" />
        </div>

        {/* Buscador (Derecha) */}
        <div className="relative w-full sm:w-80 shrink-0">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por nombre..."
            className="w-full pl-5 pr-12 py-3.5 rounded-full border border-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm sm:text-base bg-white transition-all"
          />
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
        </div>

      </div>

      {/* Grid de Cursos (4 por fila, igual que en el Home) */}
      {filteredCursos.length === 0 ? (
        <div className="bg-gray-50 rounded-3xl p-16 text-center text-gray-500 my-10">
          No se encontraron cursos que coincidan con la búsqueda.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 laptop:grid-cols-4 desktop:grid-cols-4 gap-6 gap-y-10">
          {filteredCursos.map((curso) => (
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
