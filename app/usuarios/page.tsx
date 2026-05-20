"use client";

import { FormEvent, useEffect, useState } from "react";

import Sidebar from "@/components/Sidebar";

type Usuario = {
  id: number;
  nombre: string;
  correo: string;
};

import { Users, Trash2, Plus } from "lucide-react";

export default function UsuariosPage() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");

  const cargarUsuarios = () => {
    fetch("/api/usuarios")
      .then((res) => res.json())
      .then(setUsuarios);
  };

  useEffect(() => {
    cargarUsuarios();
  }, []);

  const crearUsuario = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!nombre || !correo) {
      alert("Completa todos los campos");
      return;
    }

    await fetch("/api/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre,
        correo,
      }),
    });

    setNombre("");
    setCorreo("");

    cargarUsuarios();
  };

  const eliminarUsuario = async (id: number) => {
    await fetch("/api/usuarios", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    cargarUsuarios();
  };

  return (
    <div className="flex bg-slate-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 p-10">
        {/* HEADER */}

        <div className="flex items-center gap-4 mb-10">
          <div className="bg-emerald-100 p-4 rounded-2xl">
            <Users size={35} className="text-emerald-600" />
          </div>

          <div>
            <h1 className="text-4xl font-bold text-slate-800">
              Gestión de Usuarios
            </h1>

            <p className="text-slate-500 mt-1">
              Administración de usuarios del sistema
            </p>
          </div>
        </div>

        {/* FORMULARIO */}

        <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-200 mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Registrar Usuario
          </h2>

          <form
            onSubmit={crearUsuario}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <input
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="border border-slate-300 p-3 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500"
            />

            <input
              type="email"
              placeholder="Correo electrónico"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              className="border border-slate-300 p-3 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500"
            />

            <button className="bg-emerald-600 hover:bg-emerald-700 transition text-white rounded-xl flex items-center justify-center gap-2 font-semibold">
              <Plus size={20} />
              Crear
            </button>
          </form>
        </div>

        {/* LISTA */}

        <div className="bg-white rounded-3xl shadow-md border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800">
              Lista de Usuarios
            </h2>
          </div>

          <div className="divide-y divide-slate-200">
            {usuarios.map((u) => (
              <div
                key={u.id}
                className="flex items-center justify-between p-6 hover:bg-slate-50 transition"
              >
                <div>
                  <h3 className="font-bold text-lg text-slate-800">
                    {u.nombre}
                  </h3>

                  <p className="text-slate-500">{u.correo}</p>
                </div>

                <button
                  onClick={() => eliminarUsuario(u.id)}
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
