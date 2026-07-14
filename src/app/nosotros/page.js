import Navbar from "@/components/Navbar";
import { Target, Eye, BookOpen, Users, Scale, MessageCircle, ShieldCheck, Lightbulb } from "lucide-react";

const valores = [
  { icono: Scale, titulo: "Justicia Social", descripcion: "Defensa de una sociedad más justa, con mejores condiciones de vida y trabajo para la clase trabajadora." },
  { icono: Users, titulo: "Equidad de Género", descripcion: "Promoción de la igualdad real entre mujeres y hombres en el mundo laboral, sindical, social y político." },
  { icono: ShieldCheck, titulo: "Solidaridad", descripcion: "Compromiso colectivo entre trabajadores, organizaciones sindicales y sectores sociales vulnerables." },
  { icono: MessageCircle, titulo: "Diálogo Social", descripcion: "Construcción de consensos, acuerdos democráticos y soluciones colectivas para la sociedad." },
  { icono: BookOpen, titulo: "Ética Sindical", descripcion: "Actuación coherente, responsable y transparente en la defensa del interés colectivo." },
  { icono: Lightbulb, titulo: "Incidencia Sociopolítica", descripcion: "Capacidad de transformar demandas laborales en propuestas de país y políticas públicas." },
];

const objetivos = [
  "Fortalecer a la CNUS y sus organizaciones sindicales como sujetos principales de la acción sindical, sociopolítica y democrática.",
  "Incorporar la equidad de género como eje transversal en todos los contenidos, metodologías y procesos formativos.",
  "Promover el liderazgo de las mujeres trabajadoras en los espacios sindicales, de negociación, diálogo e incidencia.",
  "Desarrollar capacidades en derecho laboral, libertad sindical, negociación colectiva y seguridad social.",
  "Impulsar el diálogo social como medio para el debate, la codificación ética, el consenso y los acuerdos democráticos.",
  "Fortalecer la capacidad de incidencia de la CNUS en políticas públicas nacionales y sectoriales.",
  "Construir agendas sindicales sectoriales que articulen trabajo decente, desarrollo productivo, justicia social y equidad de género.",
];

export default function NosotrosPage() {
  return (
    <main className="w-full bg-white">

      {/* ─── BANNER ─────────────────────────────────────────────── */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden mb-16 md:mb-[80px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/imagenes/contacto%20banner.png')` }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <Navbar />
        <div className="relative z-10 h-full flex flex-col items-center justify-center pb-20">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white text-center mt-4 max-w-4xl leading-tight">
            Sobre Nosotros
          </h1>
        </div>
      </section>

      {/* ─── CONTEXTO / INTRO ────────────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-6 mb-16 md:mb-28">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          {/* Texto */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Un espacio de formación, reflexión y transformación
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              La Escuela CNUS de Sindicalismo Sociopolítico (ECSP) se concibe como un espacio institucional de formación, reflexión, articulación e incidencia al servicio de la Confederación Nacional de Unidad Sindical (CNUS) y de sus organizaciones afiliadas.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Su creación responde a la necesidad de renovar y fortalecer el sindicalismo dominicano ante los desafíos actuales del mundo del trabajo y de la sociedad: desigualdades sociales, altos niveles de informalidad laboral, precarización del empleo y limitada participación de los trabajadores en las políticas públicas.
            </p>
          </div>
          {/* Card azul con estadísticas */}
          <div className="lg:w-1/2">
            <div className="bg-[#0B1426] rounded-[32px] md:rounded-[40px] p-8 md:p-12 text-white grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              <div className="flex flex-col">
                <span className="text-5xl font-bold text-blue-400 mb-2">10</span>
                <span className="text-gray-300 text-sm leading-tight">Ejes formativos</span>
              </div>
              <div className="flex flex-col">
                <span className="text-5xl font-bold text-blue-400 mb-2">8</span>
                <span className="text-gray-300 text-sm leading-tight">Modalidades de enseñanza</span>
              </div>
              <div className="flex flex-col">
                <span className="text-5xl font-bold text-blue-400 mb-2">14</span>
                <span className="text-gray-300 text-sm leading-tight">Líneas sectoriales</span>
              </div>
              <div className="flex flex-col">
                <span className="text-5xl font-bold text-blue-400 mb-2">RD</span>
                <span className="text-gray-300 text-sm leading-tight">Alcance nacional en toda la República Dominicana</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MISIÓN Y VISIÓN ────────────────────────────────────── */}
      <section className="bg-gray-50 py-16 md:py-24 mb-16 md:mb-28">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Misión */}
          <div className="bg-white rounded-[24px] md:rounded-[32px] p-8 md:p-10 shadow-sm border border-gray-100 flex flex-col gap-6">
            <div className="w-16 h-16 bg-[#0045A5] rounded-2xl flex items-center justify-center shrink-0">
              <Target className="text-white" size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Misión</h3>
              <p className="text-gray-600 leading-relaxed">
                Formar trabajadores, trabajadoras, dirigentes sindicales y líderes sociales vinculados a la CNUS y sus organizaciones afiliadas, con conciencia crítica, ética democrática, perspectiva de género, conocimiento jurídico-laboral, capacidad sectorial y visión sociopolítica, para fortalecer la acción sindical, promover el diálogo social y construir consensos e incidir en las políticas públicas nacionales y sectoriales.
              </p>
            </div>
          </div>
          {/* Visión */}
          <div className="bg-[#0045A5] rounded-[24px] md:rounded-[32px] p-8 md:p-10 flex flex-col gap-6">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
              <Eye className="text-white" size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Nuestra Visión</h3>
              <p className="text-blue-100 leading-relaxed">
                Ser una Escuela de referencia nacional en formación sindical sociopolítica, reconocida por fortalecer a la CNUS y a sus organizaciones afiliadas como sujetos principales de la acción laboral, social, sectorial y democrática, promoviendo liderazgos éticos, inclusivos, con equidad de género y capacidad de incidencia en la transformación de la realidad dominicana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALORES ─────────────────────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-6 mb-16 md:mb-28">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Nuestros Valores</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {valores.map(({ icono: Icono, titulo, descripcion }) => (
            <div
              key={titulo}
              className="border border-gray-200 rounded-[28px] p-6 md:p-8 hover:border-[#0045A5] hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-blue-50 group-hover:bg-[#0045A5] rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
                <Icono className="text-[#0045A5] group-hover:text-white transition-colors duration-300" size={24} />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">{titulo}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── ENFOQUE SOCIOPOLÍTICO ──────────────────────────────── */}
      <section className="bg-[#0B1426] py-16 md:py-24 mb-16 md:mb-28">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Sindicalismo Sociopolítico
            </h2>
            <p className="text-gray-300 leading-relaxed mb-5">
              La ECSP parte de una visión de sindicalismo sociopolítico. Esto significa entender que los problemas laborales no están aislados, sino vinculados a la estructura económica, social, educativa, productiva e institucional del país.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Desde este enfoque, la acción sindical debe articular la defensa de los derechos de los trabajadores con la participación en los debates sobre modelo de desarrollo, políticas públicas, democracia, equidad social y distribución de la riqueza.
            </p>
          </div>
          <div className="lg:w-1/2 grid grid-cols-1 gap-4">
            {[
              "Análisis crítico de la realidad nacional",
              "Participación en el diálogo social democrático",
              "Formulación de propuestas de políticas públicas",
              "Defensa de derechos laborales y sociales",
              "Equidad de género como eje transversal",
            ].map((item) => (
              <div key={item} className="flex items-center gap-4 bg-white/5 rounded-2xl px-6 py-4">
                <div className="w-2 h-2 rounded-full bg-blue-400 shrink-0"></div>
                <p className="text-gray-200 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OBJETIVOS ──────────────────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-6 mb-16 md:mb-28">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Objetivos Específicos</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {objetivos.map((objetivo, i) => (
            <div key={i} className="flex gap-4 items-start p-6 rounded-[24px] bg-gray-50 border border-gray-100">
              <span className="text-2xl font-bold text-[#0045A5] shrink-0 w-8">{String(i + 1).padStart(2, "0")}</span>
              <p className="text-gray-700 text-sm leading-relaxed pt-1">{objetivo}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA FINAL ─────────────────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-6 mb-16 md:mb-24">
        <div className="bg-[#0045A5] rounded-[32px] md:rounded-[40px] p-8 md:p-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-2xl mx-auto leading-tight">
            ¿Listo para fortalecer tu liderazgo sindical?
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Únete a la Escuela CNUS y sé parte de la transformación del movimiento sindical dominicano.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contacto" className="bg-white text-[#0045A5] font-semibold px-10 py-4 rounded-full hover:bg-blue-50 transition">
              Contáctanos
            </a>
            <a href="#" className="bg-transparent border border-white text-white font-semibold px-10 py-4 rounded-full hover:bg-white/10 transition">
              Ver Programas
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
