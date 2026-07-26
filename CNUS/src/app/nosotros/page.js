"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { 
  Users, 
  HeartHandshake, 
  Vote, 
  ShieldCheck, 
  Layers, 
  Megaphone,
  Target,
  Eye,
  BookOpen,
  Scale,
  GraduationCap,
  Lightbulb,
  CheckCircle2
} from "lucide-react";

const valores = [
  { 
    icono: Users, 
    titulo: "Acción Social", 
    descripcion: "Defensa de una sociedad más justa, con mejores condiciones de vida y trabajo para la clase trabajadora." 
  },
  { 
    icono: HeartHandshake, 
    titulo: "Equidad de Género", 
    descripcion: "Promoción de la igualdad real entre mujeres y hombres en el mundo laboral, sindical, social y político." 
  },
  { 
    icono: Vote, 
    titulo: "Democracia", 
    descripcion: "Construcción de consensos, acuerdos democráticos y soluciones colectivas para la sociedad." 
  },
  { 
    icono: ShieldCheck, 
    titulo: "Transparencia", 
    descripcion: "Actuación coherente, responsable y transparente en la defensa del interés colectivo." 
  },
  { 
    icono: Layers, 
    titulo: "Pluralismo", 
    descripcion: "Compromiso colectivo entre trabajadores, organizaciones sindicales y sectores sociales vulnerables." 
  },
  { 
    icono: Megaphone, 
    titulo: "Incidencia política", 
    descripcion: "Capacidad de transformar demandas laborales en propuestas de país y políticas públicas." 
  },
];

const objetivos = [
  "Fortalecer a la CNUS y sus organizaciones sindicales como sujetos principales de la acción sindical.",
  "Incorporar la equidad de género como eje transversal en todos los contenidos y metodologías.",
  "Promover el liderazgo de las mujeres trabajadoras en los espacios sindicales y de negociación.",
  "Desarrollar capacidades en derecho laboral, libertad sindical y seguridad social.",
  "Impulsar el diálogo social como medio para el debate, consenso y acuerdos democráticos.",
  "Fortalecer la capacidad de incidencia de la CNUS en políticas públicas nacionales.",
  "Construir agendas sindicales sectoriales que articulen trabajo decente y justicia social.",
];

export default function NosotrosPage() {
  const [activeTab, setActiveTab] = useState("quienes-somos");

  return (
    <main className="w-full bg-white flex flex-col min-h-screen overflow-x-hidden">
      
      {/* ─── BANNER / HERO CON 200PX DE SEPARACIÓN ABAJO ──────────── */}
      <section className="relative w-full h-[360px] tablet:h-[440px] desktop:h-[480px] flex flex-col overflow-hidden mb-[200px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')` }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <Navbar />
        <div className="relative z-10 flex-1 flex items-center justify-center text-center px-4">
          <h1 className="text-4xl tablet:text-5xl desktop:text-6xl font-light tracking-tight text-white text-center mt-12 tablet:mt-0">
            Sobre nosotros
          </h1>
        </div>
      </section>

      {/* ─── SUB-NAVIGATION TAB BAR (RESPONSIVO PARA CELULARES Y PANTALLAS GRANDES) ─── */}
      <section className="w-full max-w-[1680px] mx-auto px-4 tablet:px-[60px] min-[1200px]:max-[1609px]:px-20 desktop:px-[80px] mb-[200px] flex flex-col items-center gap-3">
        
        {/* VISTA PARA CELULARES (sm:hidden) */}
        <div className="flex flex-col items-center gap-3 sm:hidden w-full">
          {/* Fila 1: ¿Quiénes somos? | Perfil Sociopolítico */}
          <div className="inline-flex items-center rounded-full border border-[#2b4c7e] p-1.5 bg-white shadow-sm max-w-full">
            <button
              onClick={() => setActiveTab("quienes-somos")}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition duration-300 ${
                activeTab === "quienes-somos"
                  ? "bg-[#DCE6F2] text-[#0045A5] shadow-sm"
                  : "bg-transparent text-gray-800 hover:text-[#0045A5]"
              }`}
            >
              ¿Quiénes somos?
            </button>
            <div className="w-px h-5 bg-gray-300 shrink-0 mx-1"></div>
            <button
              onClick={() => setActiveTab("perfil-sociopolitico")}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition duration-300 ${
                activeTab === "perfil-sociopolitico"
                  ? "bg-[#DCE6F2] text-[#0045A5] shadow-sm"
                  : "bg-transparent text-gray-800 hover:text-[#0045A5]"
              }`}
            >
              Perfil Sociopolítico
            </button>
          </div>

          {/* Fila 2 (Debajo): Visión y enfoque */}
          <div className="inline-flex items-center rounded-full border border-[#2b4c7e] p-1.5 bg-white shadow-sm">
            <button
              onClick={() => setActiveTab("vision-formativa")}
              className={`px-6 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition duration-300 ${
                activeTab === "vision-formativa"
                  ? "bg-[#DCE6F2] text-[#0045A5] shadow-sm"
                  : "bg-transparent text-gray-800 hover:text-[#0045A5]"
              }`}
            >
              Visión y enfoque
            </button>
          </div>
        </div>

        {/* VISTA PARA PANTALLAS SM, TABLETS Y DESKTOP (hidden sm:flex) */}
        <div className="hidden sm:inline-flex items-center rounded-full border border-[#2b4c7e] p-1.5 bg-white shadow-sm max-w-full overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab("quienes-somos")}
            className={`px-6 py-2.5 rounded-full text-sm tablet:text-base font-semibold whitespace-nowrap transition duration-300 ${
              activeTab === "quienes-somos"
                ? "bg-[#DCE6F2] text-[#0045A5] shadow-sm"
                : "bg-transparent text-gray-800 hover:text-[#0045A5]"
            }`}
          >
            ¿Quiénes somos?
          </button>
          <div className="w-px h-6 bg-gray-300 shrink-0 mx-1"></div>
          <button
            onClick={() => setActiveTab("perfil-sociopolitico")}
            className={`px-6 py-2.5 rounded-full text-sm tablet:text-base font-semibold whitespace-nowrap transition duration-300 ${
              activeTab === "perfil-sociopolitico"
                ? "bg-[#DCE6F2] text-[#0045A5] shadow-sm"
                : "bg-transparent text-gray-800 hover:text-[#0045A5]"
            }`}
          >
            Perfil Sociopolítico
          </button>
          <div className="w-px h-6 bg-gray-300 shrink-0 mx-1"></div>
          <button
            onClick={() => setActiveTab("vision-formativa")}
            className={`px-6 py-2.5 rounded-full text-sm tablet:text-base font-semibold whitespace-nowrap transition duration-300 ${
              activeTab === "vision-formativa"
                ? "bg-[#DCE6F2] text-[#0045A5] shadow-sm"
                : "bg-transparent text-gray-800 hover:text-[#0045A5]"
            }`}
          >
            Visión y enfoque
          </button>
        </div>

      </section>

      {/* ─── TAB 1: ¿QUIÉNES SOMOS? ────────────────────────────────── */}
      {activeTab === "quienes-somos" && (
        <div className="animate-fadeIn">
          {/* SECCIÓN INTRODUCCIÓN CON MARGEN EXACTO DE NAVBAR (LOGO A HAMBURGUESA) */}
          <section className="w-full max-w-[1680px] mx-auto px-4 tablet:px-[60px] min-[1200px]:max-[1609px]:px-20 desktop:px-[80px] mb-[200px]">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-[166px]">
              
              {/* Logo emblemático a color */}
              <div className="w-full lg:w-[420px] h-[340px] tablet:h-[440px] lg:h-[541px] flex items-center justify-center shrink-0 relative">
                <Image 
                  src="/logos/logocolor.svg" 
                  alt="Escuela CNUS de Sindicalismo Sociopolítico"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>

              {/* Texto explicativo */}
              <div className="flex-1 flex flex-col justify-center text-left">
                <h2 className="text-3xl tablet:text-4xl desktop:text-[44px] font-bold text-[#05162D] leading-tight mb-8">
                  Un espacio de formación, reflexión y transformación
                </h2>
                <p className="text-gray-600 text-base tablet:text-lg leading-relaxed mb-6">
                  La Escuela CNUS de Sindicalismo Sociopolítico (ECSP) se concibe como un espacio institucional de formación, reflexión, articulación e incidencia al servicio de la Confederación Nacional de Unidad Sindical (CNUS) y de sus organizaciones afiliadas.
                </p>
                <p className="text-gray-600 text-base tablet:text-lg leading-relaxed">
                  Su creación responde a la necesidad de renovar y fortalecer el sindicalismo dominicano ante los desafíos actuales del mundo del trabajo y de la sociedad: desigualdades sociales, altos niveles de informalidad laboral, precarización del empleo y limitada participación de los trabajadores en las políticas públicas.
                </p>
              </div>
            </div>
          </section>

          {/* MISIÓN Y VISIÓN */}
          <section className="w-full bg-[#f4f6f8] py-20 mb-[200px]">
            <div className="max-w-[1680px] mx-auto px-4 tablet:px-[60px] min-[1200px]:max-[1609px]:px-20 desktop:px-[80px] grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Tarjeta Misión */}
              <div className="bg-white rounded-[32px] p-8 tablet:p-12 shadow-sm border border-gray-100 flex flex-col gap-6">
                <div className="w-14 h-14 rounded-full bg-blue-50 text-[#0045A5] flex items-center justify-center shrink-0">
                  <Target size={26} />
                </div>
                <div>
                  <h3 className="text-2xl tablet:text-3xl font-bold text-[#05162D] mb-4">Nuestra Misión</h3>
                  <p className="text-gray-600 text-base tablet:text-lg leading-relaxed">
                    Formar trabajadores, trabajadoras, dirigentes sindicales y líderes sociales vinculados a la CNUS y sus organizaciones afiliadas, con conciencia crítica, ética democrática, perspectiva de género, conocimiento jurídico-laboral, capacidad sectorial y visión sociopolítica, para fortalecer la acción sindical, promover el diálogo social y construir consensos e incidir en las políticas públicas nacionales y sectoriales.
                  </p>
                </div>
              </div>

              {/* Tarjeta Visión */}
              <div className="bg-[#0045A5] rounded-[32px] p-8 tablet:p-12 text-white flex flex-col gap-6 shadow-md">
                <div className="w-14 h-14 rounded-full bg-white/20 text-white flex items-center justify-center shrink-0">
                  <Eye size={26} />
                </div>
                <div>
                  <h3 className="text-2xl tablet:text-3xl font-bold text-white mb-4">Nuestra Visión</h3>
                  <p className="text-blue-100 text-base tablet:text-lg leading-relaxed">
                    Ser una Escuela de referencia nacional en formación sindical sociopolítica, reconocida por fortalecer a la CNUS y a sus organizaciones afiliadas como sujetos principales de la acción laboral, social, sectorial y democrática, promoviendo liderazgos éticos, inclusivos, con equidad de género y capacidad de incidencia en la transformación de la realidad dominicana.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* VALORES */}
          <section className="w-full max-w-[1680px] mx-auto px-4 tablet:px-[60px] min-[1200px]:max-[1609px]:px-20 desktop:px-[80px] mb-[200px]">
            <div className="text-center mb-16">
              <h2 className="text-3xl tablet:text-4xl desktop:text-5xl font-bold text-[#05162D]">
                Nuestros valores
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {valores.map(({ icono: Icono, titulo, descripcion }) => (
                <div
                  key={titulo}
                  className="bg-white border border-gray-100 shadow-sm rounded-[24px] p-8 flex flex-col items-start text-left hover:border-blue-200 hover:shadow-md transition duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-[#0045A5] flex items-center justify-center mb-6">
                    <Icono size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-[#05162D] mb-3">{titulo}</h3>
                  <p className="text-gray-600 text-sm tablet:text-base leading-relaxed">{descripcion}</p>
                </div>
              ))}
            </div>
          </section>

          {/* OBJETIVOS ESPECÍFICOS */}
          <section className="w-full bg-[#0B1426] py-20 text-white mb-[200px]">
            <div className="max-w-[1680px] mx-auto px-4 tablet:px-[60px] min-[1200px]:max-[1609px]:px-20 desktop:px-[80px]">
              <div className="text-center mb-16">
                <h2 className="text-3xl tablet:text-4xl desktop:text-5xl font-bold text-white">
                  Objetivos Específicos
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {objetivos.map((objetivo, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-full py-4 px-8 text-gray-900 flex items-center gap-6 shadow-md"
                  >
                    <span className="text-[#0045A5] font-bold text-xl tablet:text-2xl shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-gray-800 text-sm tablet:text-base font-medium leading-snug">
                      {objetivo}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* ─── TAB 2: PERFIL SOCIOPOLÍTICO ──────────────────────────── */}
      {activeTab === "perfil-sociopolitico" && (
        <div className="animate-fadeIn">
          <section className="w-full max-w-[1680px] mx-auto px-4 tablet:px-[60px] min-[1200px]:max-[1609px]:px-20 desktop:px-[80px] mb-[200px]">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl tablet:text-4xl desktop:text-5xl font-bold text-[#05162D] mb-6">
                Perfil Sociopolítico e Identidad
              </h2>
              <p className="text-gray-600 text-base tablet:text-lg leading-relaxed">
                Entendemos que las reivindicaciones laborales van de la mano de la transformación social, económica e institucional del país.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-[200px]">
              <div className="bg-[#f8f9fa] border border-gray-100 rounded-[28px] p-8 tablet:p-10 flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-[#0045A5] text-white flex items-center justify-center shrink-0 shadow-md">
                  <Scale size={26} />
                </div>
                <div>
                  <h3 className="text-xl tablet:text-2xl font-bold text-[#05162D] mb-3">Autonomía y Conciencia Crítica</h3>
                  <p className="text-gray-600 leading-relaxed text-sm tablet:text-base">
                    Formación orientada al desarrollo de una visión independiente del movimiento obrero, libre de presiones partidarias y comprometida con los trabajadores.
                  </p>
                </div>
              </div>

              <div className="bg-[#f8f9fa] border border-gray-100 rounded-[28px] p-8 tablet:p-10 flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-[#0045A5] text-white flex items-center justify-center shrink-0 shadow-md">
                  <HeartHandshake size={26} />
                </div>
                <div>
                  <h3 className="text-xl tablet:text-2xl font-bold text-[#05162D] mb-3">Equidad de Género Transversal</h3>
                  <p className="text-gray-600 leading-relaxed text-sm tablet:text-base">
                    Garantizamos la incorporación efectiva de las trabajadoras en los espacios de decisión, negociación colectiva e incidencia sociopolítica.
                  </p>
                </div>
              </div>
            </div>

            {/* Banner Informativo */}
            <div className="bg-[#0B1426] rounded-[32px] p-8 tablet:p-14 text-white shadow-xl text-center">
              <h3 className="text-2xl tablet:text-3xl font-bold text-white mb-6">
                Incidencia Real en Políticas Públicas
              </h3>
              <p className="text-gray-300 text-base tablet:text-lg max-w-3xl mx-auto leading-relaxed">
                El perfil sociopolítico capacita a los dirigentes para transformar las demandas laborales en propuestas concretas sobre salario mínimo, seguridad social, libertad sindical y desarrollo productivo.
              </p>
            </div>
          </section>
        </div>
      )}

      {/* ─── TAB 3: VISIÓN FORMATIVA Y ENFOQUE METODOLÓGICO ──────── */}
      {activeTab === "vision-formativa" && (
        <div className="animate-fadeIn">
          <section className="w-full max-w-[1680px] mx-auto px-4 tablet:px-[60px] min-[1200px]:max-[1609px]:px-20 desktop:px-[80px] mb-[200px]">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl tablet:text-4xl desktop:text-5xl font-bold text-[#05162D] mb-6">
                Visión Formativa y Enfoque Metodológico
              </h2>
              <p className="text-gray-600 text-base tablet:text-lg leading-relaxed">
                Nuestro modelo pedagógico combina el rigor teórico, el aprendizaje participativo y el uso de tecnologías para una formación inclusiva.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-[200px]">
              <div className="bg-white border border-gray-200 rounded-[28px] p-8 shadow-sm flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-[#0045A5] flex items-center justify-center">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#05162D]">Educación Popular y Participativa</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Metodología centrada en la experiencia práctica de los trabajadores, fomentando el debate colectivo y la construcción de consensos.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-[28px] p-8 shadow-sm flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-[#0045A5] flex items-center justify-center">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#05162D]">Flexibilidad de Modalidades</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Modalidades presenciales, virtuales asincrónicas e híbridas adaptadas a los horarios laborales y a la dispersión geográfica.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-[28px] p-8 shadow-sm flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-[#0045A5] flex items-center justify-center">
                  <Lightbulb size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#05162D]">Innovación Curricular</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Módulos actualizados sobre economía laboral, digitalización del trabajo, medio ambiente y transición justa.
                </p>
              </div>
            </div>

            {/* Módulo de 4 pilares */}
            <div className="bg-[#f8f9fa] rounded-[32px] p-8 tablet:p-12 border border-gray-200">
              <h3 className="text-2xl font-bold text-[#05162D] mb-8 text-center">Ejes Metodológicos Fundamentales</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Investigación-acción participativa en los centros de trabajo",
                  "Talleres de simulación de negociación colectiva y mediación",
                  "Seminarios de actualización jurídica y código de trabajo",
                  "Acompañamiento tutorial continuo en plataforma virtual",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm">
                    <CheckCircle2 className="text-[#0045A5] shrink-0" size={22} />
                    <p className="text-gray-800 text-sm font-semibold">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      
    </main>
  );
}
