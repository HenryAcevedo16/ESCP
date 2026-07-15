"use client";

export default function OpinionForm() {
  return (
    <div className="w-full max-w-[800px] mx-auto mt-20 mb-32 px-6">
      <h2 className="text-center text-3xl md:text-[40px] font-bold text-[#05162D] mb-12">
        ¿Qué opinas sobre el tema?
      </h2>
      
      <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 flex flex-col gap-2">
            <label className="text-[#05162D] font-medium ml-1">Nombre</label>
            <input 
              type="text" 
              placeholder="Ejemplo: Pedro"
              className="w-full h-[60px] rounded-full border border-[#D0D5DD] px-6 text-[#05162D] placeholder:text-[#98A2B3] focus:outline-none focus:border-primary transition"
            />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <label className="text-[#05162D] font-medium ml-1">Apellido</label>
            <input 
              type="text" 
              placeholder="Ejemplo: Martínez"
              className="w-full h-[60px] rounded-full border border-[#D0D5DD] px-6 text-[#05162D] placeholder:text-[#98A2B3] focus:outline-none focus:border-primary transition"
            />
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <label className="text-[#05162D] font-medium ml-1">Respuesta</label>
          <textarea 
            placeholder="Ejemplo: Recibir información sobre futuros programas"
            className="w-full h-[150px] rounded-[24px] border border-[#D0D5DD] p-6 text-[#05162D] placeholder:text-[#98A2B3] focus:outline-none focus:border-primary transition resize-none"
          ></textarea>
        </div>
        
        <div className="flex justify-center mt-4">
          <button 
            type="submit"
            className="w-[200px] h-[60px] bg-[#0E52C6] hover:bg-blue-800 text-white rounded-full font-medium text-lg transition-colors"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
