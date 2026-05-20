"use client";

import { FormEvent, useEffect, useState } from "react";

import Sidebar from "@/components/Sidebar";

type Activo = {
  id: number;
  nombre: string;
  tipo: string;
  estado: string;
};

import { Package, Trash2, Plus } from "lucide-react";

export default function ActivosPage() {
  const [activos, setActivos] = useState<Activo[]>([]);

  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("");
  const [estado, setEstado] = useState("");

  const cargarActivos = () => {
    fetch("/api/activos")
      .then((res) => res.json())
      .then(setActivos);
  };

  useEffect(() => {
    cargarActivos();
  }, []);

  const crearActivo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!nombre || !tipo || !estado) {
      alert("Completa todos los campos");
      return;
    }

    await fetch("/api/activos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre,
        tipo,
        estado,
      }),
    });

    setNombre("");
    setTipo("");
    setEstado("");

    cargarActivos();
  };

  const eliminarActivo = async (id: number) => {
    await fetch("/api/activos", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    cargarActivos();
  };

  return (
    <div className="flex bg-slate-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 p-10">
        {/* HEADER */}

        <div className="flex items-center gap-4 mb-10">
          <div className="bg-blue-100 p-4 rounded-2xl">
            <Package size={35} className="text-blue-600" />
          </div>

          <div>
            <h1 className="text-4xl font-bold text-slate-800">
              Gestión de Activos
            </h1>

            <p className="text-slate-500 mt-1">
              Administración de activos tecnológicos
            </p>
          </div>
        </div>

        {/* FORMULARIO */}

        <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-200 mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Registrar Activo
          </h2>

          <form
            onSubmit={crearActivo}
            className="grid grid-cols-1 md:grid-cols-4 gap-4"
          >
            <input
              type="text"
              placeholder="Nombre del activo"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="border border-slate-300 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Tipo"
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              className="border border-slate-300 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Estado"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
              className="border border-slate-300 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button className="bg-blue-600 hover:bg-blue-700 transition text-white rounded-xl flex items-center justify-center gap-2 font-semibold">
              <Plus size={20} />
              Crear
            </button>
          </form>
        </div>

        {/* LISTA */}

        <div className="bg-white rounded-3xl shadow-md border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800">
              Lista de Activos
            </h2>
          </div>

          <div className="divide-y divide-slate-200">
            {activos.map((a) => (
              <div
                key={a.id}
                className="flex items-center justify-between p-6 hover:bg-slate-50 transition"
              >
                <div>
                  <h3 className="font-bold text-lg text-slate-800">
                    {a.nombre}
                  </h3>

                  <p className="text-slate-500">
                    {a.tipo} • {a.estado}
                  </p>
                </div>

                <button
                  onClick={() => eliminarActivo(a.id)}
                  className="bg-red-500 hover:bg-red-600 transition text-white p-3 rounded-xl"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
