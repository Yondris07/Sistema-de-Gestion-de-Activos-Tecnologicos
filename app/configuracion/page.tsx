"use client";

import Sidebar from "@/components/Sidebar";

import {
  Settings,
  Database,
  Shield,
  MonitorSmartphone,
  Server,
  CheckCircle,
} from "lucide-react";

export default function ConfiguracionPage() {
  return (
    <div className="flex bg-slate-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 p-10">
        {/* HEADER */}

        <div className="flex items-center gap-4 mb-10">
          <div className="bg-slate-200 p-4 rounded-2xl">
            <Settings size={35} className="text-slate-700" />
          </div>

          <div>
            <h1 className="text-4xl font-bold text-slate-800">Configuración</h1>

            <p className="text-slate-500 mt-1">
              Información y estado general del sistema
            </p>
          </div>
        </div>

        {/* GRID */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* BASE DE DATOS */}

          <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 p-3 rounded-xl">
                <Database className="text-blue-600" size={28} />
              </div>

              <h2 className="text-2xl font-bold text-slate-800">
                Base de Datos
              </h2>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-100 rounded-2xl p-4">
                <p className="text-slate-500 text-sm">Motor</p>

                <h3 className="text-xl font-bold text-slate-800 mt-1">
                  PostgreSQL
                </h3>
              </div>

              <div className="bg-slate-100 rounded-2xl p-4">
                <p className="text-slate-500 text-sm">Hosting</p>

                <h3 className="text-xl font-bold text-slate-800 mt-1">Neon</h3>
              </div>
            </div>
          </div>

          {/* SISTEMA */}

          <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-emerald-100 p-3 rounded-xl">
                <MonitorSmartphone className="text-emerald-600" size={28} />
              </div>

              <h2 className="text-2xl font-bold text-slate-800">Sistema</h2>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-100 rounded-2xl p-4">
                <p className="text-slate-500 text-sm">Framework</p>

                <h3 className="text-xl font-bold text-slate-800 mt-1">
                  Next.js
                </h3>
              </div>

              <div className="bg-slate-100 rounded-2xl p-4">
                <p className="text-slate-500 text-sm">Estado</p>

                <h3 className="text-xl font-bold text-emerald-600 mt-1">
                  Sistema Activo
                </h3>
              </div>
            </div>
          </div>

          {/* SEGURIDAD */}

          <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-rose-100 p-3 rounded-xl">
                <Shield className="text-rose-600" size={28} />
              </div>

              <h2 className="text-2xl font-bold text-slate-800">Seguridad</h2>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-100 rounded-2xl p-4">
                <p className="text-slate-500 text-sm">Conexión</p>

                <h3 className="text-xl font-bold text-slate-800 mt-1">
                  Segura SSL
                </h3>
              </div>

              <div className="bg-slate-100 rounded-2xl p-4">
                <p className="text-slate-500 text-sm">API</p>

                <h3 className="text-xl font-bold text-slate-800 mt-1">
                  Protegida
                </h3>
              </div>
            </div>
          </div>

          {/* SERVIDOR */}

          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <Server size={30} />

              <h2 className="text-2xl font-bold">Estado del Servidor</h2>
            </div>

            <p className="text-blue-100 leading-relaxed text-lg">
              El sistema SGAT se encuentra funcionando correctamente y conectado
              con Neon PostgreSQL.
            </p>

            <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-300" />

                <span className="text-xl font-semibold">Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
