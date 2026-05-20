import Link from "next/link";

import { Home, Package, Wrench, Users, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-72 min-h-screen bg-slate-950 text-white p-6 border-r border-slate-800">
      {/* LOGO */}

      <div className="mb-10">
        <h1 className="text-3xl font-extrabold tracking-wide text-blue-500">
          SGAT
        </h1>

        <p className="text-slate-400 text-sm mt-1">Gestión Tecnológica</p>
      </div>

      {/* MENU */}

      <nav className="flex flex-col gap-3">
        <Link
          href="/dashboard"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition-all"
        >
          <Home size={20} />
          <span>Dashboard</span>
        </Link>

        <Link
          href="/activos"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition-all"
        >
          <Package size={20} />
          <span>Activos</span>
        </Link>

        <Link
          href="/mantenimiento"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition-all"
        >
          <Wrench size={20} />
          <span>Mantenimiento</span>
        </Link>

        <Link
          href="/usuarios"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition-all"
        >
          <Users size={20} />
          <span>Usuarios</span>
        </Link>

        <Link
          href="/configuracion"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition-all"
        >
          <Settings size={20} />
          <span>Configuración</span>
        </Link>
      </nav>
    </div>
  );
}
