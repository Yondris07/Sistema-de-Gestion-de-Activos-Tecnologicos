export const runtime = "nodejs";

import { pool } from "@/lib/db";
import { NextResponse } from "next/server";

// OBTENER USUARIOS
export async function GET() {
  const result = await pool.query("SELECT * FROM usuarios ORDER BY id DESC");

  return NextResponse.json(result.rows);
}

// CREAR USUARIO
export async function POST(req: Request) {
  const body = await req.json();

  const { nombre, correo } = body;

  if (!nombre || !correo) {
    return NextResponse.json(
      { error: "Todos los campos son obligatorios" },
      { status: 400 },
    );
  }

  await pool.query("INSERT INTO usuarios (nombre, correo) VALUES ($1, $2)", [
    nombre,
    correo,
  ]);

  return NextResponse.json({
    message: "Usuario creado",
  });
}

// ELIMINAR USUARIO
export async function DELETE(req: Request) {
  const body = await req.json();

  const { id } = body;

  if (!id) {
    return NextResponse.json({ error: "ID requerido" }, { status: 400 });
  }

  await pool.query("DELETE FROM usuarios WHERE id = $1", [id]);

  return NextResponse.json({
    message: "Usuario eliminado",
  });
}
