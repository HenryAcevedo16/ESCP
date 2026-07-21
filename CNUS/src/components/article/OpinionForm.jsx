"use client";
import { useState } from "react";
import { postComentario } from "@/lib/supabase";

export default function OpinionForm({ articuloSlug }) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [texto, setTexto] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombre.trim() || !texto.trim() || !articuloSlug) return;

    setLoading(true);
    setError(false);

    const result = await postComentario({
      articulo_slug: articuloSlug,
      nombre: nombre.trim(),
      apellido: apellido.trim(),
      texto: texto.trim(),
    });

    setLoading(false);
    if (result) {
      setSuccess(true);
      setNombre("");
      setApellido("");
      setTexto("");
    } else {
      setError(true);
    }
  };

  if (success) {
    return (
      <div className="w-full max-w-[800px] mx-auto mt-20 mb-32 px-6 text-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
          ✓
        </div>
        <h2 className="text-2xl font-bold text-[#05162D] mb-2">¡Gracias por tu opinión!</h2>
        <p className="text-gray-500 mb-6">Tu comentario ha sido publicado.</p>
        <button
          onClick={() => setSuccess(false)}
          className="text-[#0E52C6] font-medium hover:underline"
        >
          Escribir otro comentario
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[800px] mx-auto mt-20 mb-32 px-6">
      <h2 className="text-center text-3xl md:text-[40px] font-bold text-[#05162D] mb-12">
        ¿Qué opinas sobre el tema?
      </h2>

      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 flex flex-col gap-2">
            <label className="text-[#05162D] font-medium ml-1">Nombre</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ejemplo: Pedro"
              required
              className="w-full h-[60px] rounded-full border border-[#D0D5DD] px-6 text-[#05162D] placeholder:text-[#98A2B3] focus:outline-none focus:border-primary transition"
            />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <label className="text-[#05162D] font-medium ml-1">Apellido</label>
            <input
              type="text"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              placeholder="Ejemplo: Martínez"
              className="w-full h-[60px] rounded-full border border-[#D0D5DD] px-6 text-[#05162D] placeholder:text-[#98A2B3] focus:outline-none focus:border-primary transition"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[#05162D] font-medium ml-1">Respuesta</label>
          <textarea
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            placeholder="Escribe tu opinión sobre el tema..."
            required
            className="w-full h-[150px] rounded-[24px] border border-[#D0D5DD] p-6 text-[#05162D] placeholder:text-[#98A2B3] focus:outline-none focus:border-primary transition resize-none"
          />
        </div>

        {error && (
          <p className="text-red-500 text-sm text-center">
            Hubo un error al enviar tu comentario. Intenta de nuevo.
          </p>
        )}

        <div className="flex justify-center mt-4">
          <button
            type="submit"
            disabled={loading}
            className="w-[200px] h-[60px] bg-[#0E52C6] hover:bg-blue-800 disabled:opacity-50 text-white rounded-full font-medium text-lg transition-colors"
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </div>
      </form>
    </div>
  );
}
