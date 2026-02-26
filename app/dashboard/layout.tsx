export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="flex h-screen">
        
        {/* Sidebar */}
        <aside className="w-64 bg-slate-900 text-white p-6">
          <h2 className="text-xl font-bold mb-8">
            Protección Civil
          </h2>
  
          <nav className="flex flex-col gap-4">
            <a href="/dashboard">Inicio</a>
            <a href="/dashboard/establecimiento">Mi Establecimiento</a>
            <a href="/dashboard/documentos">Documentos</a>
            <a href="/dashboard/fotografias">Fotografías</a>
            <a href="/dashboard/planos">Planos</a>
            <a href="/login">Cerrar sesión</a>
          </nav>
        </aside>
  
        {/* Contenido */}
        <main className="flex-1 bg-slate-100 p-10">
          {children}
        </main>
      </div>
    );
  }