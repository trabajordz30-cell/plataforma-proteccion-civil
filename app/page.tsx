import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32 bg-gradient-to-b from-gray-900 to-gray-950">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
          Plataforma Digital de Protección Civil
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mb-8">
          Sistema integral para la elaboración, gestión y seguimiento de Programas Internos
          de Protección Civil bajo normatividad vigente.
        </p>

        <div className="flex gap-4">
          <a
            href="/login"
            className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl font-medium"
          >
            Acceso a Plataforma
          </a>

          <a
            href="#servicios"
            className="border border-gray-700 hover:border-gray-500 transition px-6 py-3 rounded-xl"
          >
            Conocer Servicios
          </a>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12 text-center">
          Servicios Profesionales
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Programas Internos de Protección Civil",
            "Análisis de Riesgo y Vulnerabilidad",
            "Dictámenes Técnicos",
            "Capacitación de Brigadas",
            "Simulacros Supervisados",
            "Gestión ante Autoridades"
          ].map((servicio, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-600 transition"
            >
              <h3 className="text-lg font-medium mb-3">{servicio}</h3>
              <p className="text-gray-400 text-sm">
                Servicio profesional conforme a lineamientos y normativa vigente
                en materia de Protección Civil.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PLATAFORMA */}
      <section className="bg-gray-900 py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Plataforma Tecnológica
          </h2>
          <p className="text-gray-400 mb-10">
            Gestión digital de establecimientos, documentación, seguimiento
            normativo y control operativo en un entorno seguro.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-gray-800 p-6 rounded-xl">
              Gestión documental digital
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              Seguimiento de cumplimiento normativo
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              Módulo fotográfico y evidencias
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              Administración de establecimientos
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 border-t border-gray-800 py-8 text-center text-gray-500 text-sm">
        © 2026 Plataforma Digital de Protección Civil – Todos los derechos reservados.
      </footer>
    </main>
  );
}