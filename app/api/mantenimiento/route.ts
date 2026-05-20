export const runtime = "nodejs";

import { pool } from "@/lib/db";
import { NextResponse } from "next/server";

// OBTENER MANTENIMIENTOS
export async function GET() {
  const result = await pool.query(
    "SELECT * FROM mantenimientos ORDER BY id DESC",
  );

  return NextResponse.json(result.rows);
}

// CREAR MANTENIMIENTO
export async function POST(req: Request) {
  const body = await req.json();

  const { equipo, descripcion } = body;

  if (!equipo || !descripcion) {
    return NextResponse.json(
      { error: "Todos los campos son obligatorios" },
      { status: 400 },
    );
  }

  await pool.query(
    "INSERT INTO mantenimientos (equipo, descripcion) VALUES ($1, $2)",
    [equipo, descripcion],
  );

  return NextResponse.json({
    message: "Mantenimiento creado",
  });
}

// ELIMINAR MANTENIMIENTO
export async function DELETE(req: Request) {
  const body = await req.json();

  const { id } = body;

  if (!id) {
    return NextResponse.json({ error: "ID requerido" }, { status: 400 });
  }

  await pool.query("DELETE FROM mantenimientos WHERE id = $1", [id]);

  return NextResponse.json({
    message: "Mantenimiento eliminado",
  });
}
