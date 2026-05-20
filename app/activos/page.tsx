"use client";

import { FormEvent, useEffect, useState } from "react";

import Sidebar from "@/components/Sidebar";

import { Package, Trash2, Plus, Search } from "lucide-react";

import toast from "react-hot-toast";

type Activo = {
  id: number;
  nombre: string;
  tipo: string;
  estado: string;
};

export default function ActivosPage() {
  const [activos, setActivos] = useState<Activo[]>([]);

  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("");
  const [estado, setEstado] = useState("");

  const [busqueda, setBusqueda] = useState("");

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
      toast.error("Completa todos los campos");

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

    toast.success("Activo creado correctamente");

    setNombre("");
    setTipo("");
    setEstado("");

    cargarActivos();
  };

  const eliminarActivo = async (id: number) => {
    const confirmar = confirm("¿Seguro que deseas eliminar este activo?");

    if (!confirmar) return;

    await fetch("/api/activos", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    toast.success("Activo eliminado");

    cargarActivos();
  };

  return (
    <div className="flex bg-slate-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 p-4 md:p-8 lg:p-10 overflow-hidden">
        {/* HEADER */}

        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-10">
          <div className="bg-blue-100 p-4 rounded-2xl w-fit">
            <Package size={35} className="text-blue-600" />
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
              Gestión de Activos
            </h1>

            <p className="text-slate-500 mt-1">
              Administración de activos tecnológicos
            </p>
          </div>
        </div>

        {/* FORMULARIO */}

        <div className="bg-white rounded-3xl p-5 md:p-8 shadow-md border border-slate-200 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Registrar Activo
          </h2>

          <form
            onSubmit={crearActivo}
            className="grid grid-cols-1 xl:grid-cols-4 gap-4"
          >
            <input
              type="text"
              placeholder="Nombre del activo"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full border border-slate-300 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Tipo"
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              className="w-full border border-slate-300 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />

            <select
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
              className="w-full border border-slate-300 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Selecciona estado</option>

              <option value="Disponible">Disponible</option>

              <option value="Mantenimiento">Mantenimiento</option>

              <option value="Dañado">Dañado</option>
            </select>

            <button className="bg-blue-600 hover:bg-blue-700 transition text-white rounded-xl flex items-center justify-center gap-2 font-semibold py-3">
              <Plus size={20} />
              Crear
            </button>
          </form>
        </div>

        {/* BUSCADOR */}

        <div className="bg-white rounded-3xl p-4 md:p-5 shadow-md border border-slate-200 mb-6">
          <div className="flex items-center gap-3">
            <Search className="text-slate-500 shrink-0" />

            <input
              type="text"
              placeholder="Buscar activo..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="w-full outline-none text-slate-700 bg-transparent"
            />
          </div>
        </div>

        {/* LISTA */}

        <div className="bg-white rounded-3xl shadow-md border border-slate-200 overflow-hidden">
          <div className="p-5 md:p-6 border-b border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800">
              Lista de Activos
            </h2>
          </div>

          <div className="divide-y divide-slate-200">
            {activos
              .filter((a) =>
                a.nombre.toLowerCase().includes(busqueda.toLowerCase()),
              )
              .map((a) => (
                <div
                  key={a.id}
                  className="flex flex-col md:flex-row md:items-center justify-between gap-5 p-5 md:p-6 hover:bg-slate-50 transition"
                >
                  <div className="min-w-0">
                    <h3 className="font-bold text-lg text-slate-800 break-words">
                      {a.nombre}
                    </h3>

                    <div className="flex flex-wrap items-center gap-3 mt-3">
                      <p className="text-slate-500 break-words">{a.tipo}</p>

                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap
                      ${
                        a.estado === "Disponible"
                          ? "bg-green-100 text-green-700"
                          : a.estado === "Mantenimiento"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                      }`}
                      >
                        {a.estado}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => eliminarActivo(a.id)}
                    className="bg-red-500 hover:bg-red-600 transition text-white p-3 rounded-xl self-start md:self-center shrink-0"
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
