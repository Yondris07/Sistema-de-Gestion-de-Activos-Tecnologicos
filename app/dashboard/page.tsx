"use client";

import { useEffect, useState } from "react";

import Sidebar from "@/components/Sidebar";

import { Package, Users, Wrench, Activity } from "lucide-react";

export default function DashboardPage() {
  const [activos, setActivos] = useState(0);
  const [usuarios, setUsuarios] = useState(0);
  const [mantenimientos, setMantenimientos] = useState(0);

  useEffect(() => {
    fetch("/api/activos")
      .then((res) => res.json())
      .then((data) => setActivos(data.length));

    fetch("/api/usuarios")
      .then((res) => res.json())
      .then((data) => setUsuarios(data.length));

    fetch("/api/mantenimiento")
      .then((res) => res.json())
      .then((data) => setMantenimientos(data.length));
  }, []);

  return (
    <div className="flex bg-slate-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 p-10">
        {/* HEADER */}

        <div className="mb-10">
          <h1 className="text-5xl font-extrabold text-slate-800">Dashboard</h1>

          <p className="text-slate-500 mt-3 text-lg">
            Sistema de Gestión de Activos Tecnológicos
          </p>
        </div>

        {/* CARDS */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* ACTIVOS */}

          <div className="bg-white rounded-3xl p-7 shadow-md border border-slate-200 hover:shadow-2xl hover:-translate-y-1 transition-all">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-slate-500 text-sm">Total Activos</p>

                <h2 className="text-5xl font-bold text-blue-600 mt-3">
                  {activos}
                </h2>
              </div>

              <div className="bg-blue-100 p-5 rounded-2xl">
                <Package size={35} className="text-blue-600" />
              </div>
            </div>
          </div>

          {/* USUARIOS */}

          <div className="bg-white rounded-3xl p-7 shadow-md border border-slate-200 hover:shadow-2xl hover:-translate-y-1 transition-all">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-slate-500 text-sm">Usuarios</p>

                <h2 className="text-5xl font-bold text-emerald-600 mt-3">
                  {usuarios}
                </h2>
              </div>

              <div className="bg-emerald-100 p-5 rounded-2xl">
                <Users size={35} className="text-emerald-600" />
              </div>
            </div>
          </div>

          {/* MANTENIMIENTO */}

          <div className="bg-white rounded-3xl p-7 shadow-md border border-slate-200 hover:shadow-2xl hover:-translate-y-1 transition-all">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-slate-500 text-sm">Mantenimientos</p>

                <h2 className="text-5xl font-bold text-rose-600 mt-3">
                  {mantenimientos}
                </h2>
              </div>

              <div className="bg-rose-100 p-5 rounded-2xl">
                <Wrench size={35} className="text-rose-600" />
              </div>
            </div>
          </div>
        </div>

        {/* PANEL INFERIOR */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
          {/* SISTEMA */}

          <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <Activity className="text-blue-600" />

              <h2 className="text-2xl font-bold text-slate-800">
                Estado del Sistema
              </h2>
            </div>

            <div className="space-y-5">
              <div className="bg-slate-100 rounded-2xl p-5">
                <p className="text-slate-500 text-sm">Base de Datos</p>

                <h3 className="text-xl font-bold text-slate-800 mt-2">
                  Neon PostgreSQL
                </h3>
              </div>

              <div className="bg-slate-100 rounded-2xl p-5">
                <p className="text-slate-500 text-sm">Framework</p>

                <h3 className="text-xl font-bold text-slate-800 mt-2">
                  Next.js
                </h3>
              </div>
            </div>
          </div>

          {/* ACTIVIDAD */}

          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-4">Sistema Operativo</h2>

            <p className="text-blue-100 text-lg leading-relaxed">
              El sistema SGAT se encuentra conectado correctamente con Neon
              PostgreSQL y todas las funcionalidades CRUD están activas.
            </p>

            <div className="mt-8 bg-white/10 rounded-2xl p-5 backdrop-blur-sm">
              <p className="text-blue-100">Estado actual</p>

              <h3 className="text-3xl font-bold mt-2">Online</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
