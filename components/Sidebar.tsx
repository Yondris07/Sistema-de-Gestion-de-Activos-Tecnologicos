import { Home, Package, Wrench, Users, Settings } from "lucide-react";

import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-blue-900 text-white p-5">
      <h1 className="text-2xl font-bold mb-8">SGAT</h1>

      <nav className="flex flex-col gap-4">
        <Link href="/dashboard" className="flex items-center gap-2">
          <Home size={20} />
          Inicio
        </Link>

        <Link href="/activos" className="flex items-center gap-2">
          <Package size={20} />
          Activos
        </Link>

        <Link href="/mantenimiento" className="flex items-center gap-2">
          <Wrench size={20} />
          Mantenimiento
        </Link>

        <Link href="/usuarios" className="flex items-center gap-2">
          <Users size={20} />
          Usuarios
        </Link>

        <Link href="/configuracion" className="flex items-center gap-2">
          <Settings size={20} />
          Configuración
        </Link>
      </nav>
    </div>
  );
}
