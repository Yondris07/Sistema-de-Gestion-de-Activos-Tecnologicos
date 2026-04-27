"use client";

import { FormEvent, useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";

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

  const cargarActivos = () => {
    fetch("/api/activos")
      .then((res) => res.json() as Promise<Activo[]>)
      .then(setActivos);
  };

  useEffect(() => {
    cargarActivos();
  }, []);

  const crearActivo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await fetch("/api/activos", {
      method: "POST",
      body: JSON.stringify({ nombre, tipo, estado }),
    });

    setNombre("");
    setTipo("");
    setEstado("");
    cargarActivos();
  };

  const eliminarActivo = async (id: number) => {
    await fetch("/api/activos", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });

    cargarActivos();
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="p-10 w-full">
        <h1 className="text-2xl font-bold mb-4">Gestión de Activos</h1>

        {/* FORMULARIO */}
        <form onSubmit={crearActivo} className="mb-6 flex gap-2">
          <input
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="border p-2 rounded"
          />

          <input
            placeholder="Tipo"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            className="border p-2 rounded"
          />

          <input
            placeholder="Estado"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            className="border p-2 rounded"
          />

          <button className="bg-blue-600 text-white px-4 rounded">Crear</button>
        </form>

        {/* LISTA */}
        <div className="grid gap-3">
          {activos.map((a) => (
            <div
              key={a.id}
              className="border p-3 rounded shadow flex justify-between items-center"
            >
              <span>
                {a.nombre} - {a.tipo} - {a.estado}
              </span>

              <button
                onClick={() => eliminarActivo(a.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
