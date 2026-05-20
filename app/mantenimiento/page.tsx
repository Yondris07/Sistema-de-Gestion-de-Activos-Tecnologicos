"use client";

import { FormEvent, useEffect, useState } from "react";

import Sidebar from "@/components/Sidebar";

import { Wrench, Trash2, Plus } from "lucide-react";

type Mantenimiento = {
  id: number;
  equipo: string;
  descripcion: string;
};

export default function MantenimientoPage() {
  const [mantenimientos, setMantenimientos] = useState<Mantenimiento[]>([]);

  const [equipo, setEquipo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const cargarMantenimientos = () => {
    fetch("/api/mantenimiento")
      .then((res) => res.json())
      .then(setMantenimientos);
  };

  useEffect(() => {
    cargarMantenimientos();
  }, []);

  const crearMantenimiento = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!equipo || !descripcion) {
      alert("Completa todos los campos");
      return;
    }

    await fetch("/api/mantenimiento", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        equipo,
        descripcion,
      }),
    });

    setEquipo("");
    setDescripcion("");

    cargarMantenimientos();
  };

  const eliminarMantenimiento = async (id: number) => {
    await fetch("/api/mantenimiento", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    cargarMantenimientos();
  };

  return (
    <div className="flex bg-slate-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 p-10">
        {/* HEADER */}

        <div className="flex items-center gap-4 mb-10">
          <div className="bg-rose-100 p-4 rounded-2xl">
            <Wrench size={35} className="text-rose-600" />
          </div>

          <div>
            <h1 className="text-4xl font-bold text-slate-800">Mantenimiento</h1>

            <p className="text-slate-500 mt-1">
              Gestión de mantenimientos tecnológicos
            </p>
          </div>
        </div>

        {/* FORMULARIO */}

        <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-200 mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Registrar Mantenimiento
          </h2>

          <form
            onSubmit={crearMantenimiento}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <input
              type="text"
              placeholder="Equipo"
              value={equipo}
              onChange={(e) => setEquipo(e.target.value)}
              className="border border-slate-300 p-3 rounded-xl outline-none focus:ring-2 focus:ring-rose-500"
            />

            <input
              type="text"
              placeholder="Descripción"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              className="border border-slate-300 p-3 rounded-xl outline-none focus:ring-2 focus:ring-rose-500"
            />

            <button className="bg-rose-600 hover:bg-rose-700 transition text-white rounded-xl flex items-center justify-center gap-2 font-semibold">
              <Plus size={20} />
              Crear
            </button>
          </form>
        </div>

        {/* LISTA */}

        <div className="bg-white rounded-3xl shadow-md border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800">
              Lista de Mantenimientos
            </h2>
          </div>

          <div className="divide-y divide-slate-200">
            {mantenimientos.map((m) => (
              <div
                key={m.id}
                className="flex items-center justify-between p-6 hover:bg-slate-50 transition"
              >
                <div>
                  <h3 className="font-bold text-lg text-slate-800">
                    {m.equipo}
                  </h3>

                  <p className="text-slate-500">{m.descripcion}</p>
                </div>

                <button
                  onClick={() => eliminarMantenimiento(m.id)}
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
