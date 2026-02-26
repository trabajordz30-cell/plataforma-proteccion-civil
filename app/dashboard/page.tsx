export default function DashboardPage() {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-8">
          Panel del Cliente
        </h1>
  
        {/* Tarjetas */}
        <div className="grid grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold">Establecimiento</h3>
            <p>Condominio Reforma 123</p>
          </div>
  
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold">Nivel de Riesgo</h3>
            <p>Mediano</p>
          </div>
  
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold">Estado del Programa</h3>
            <p className="text-orange-500">En revisión</p>
          </div>
        </div>
  
        {/* Barra de progreso */}
        <div className="mb-10">
          <h3 className="font-semibold mb-2">Progreso del Programa</h3>
          <div className="w-full bg-gray-200 h-4 rounded-full">
            <div className="bg-blue-600 h-4 rounded-full w-[60%]"></div>
          </div>
          <p className="mt-2">60% completado</p>
        </div>
  
        {/* Checklist */}
        <div>
          <h3 className="font-semibold mb-3">Documentación requerida</h3>
          <ul className="space-y-2">
            <li>✔ Acta constitutiva</li>
            <li>✔ Identificación representante</li>
            <li>⏳ Plano arquitectónico</li>
            <li>⏳ Fotografías del inmueble</li>
          </ul>
        </div>
      </div>
    );
  }