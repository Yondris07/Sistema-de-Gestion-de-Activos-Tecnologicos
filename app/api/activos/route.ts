export const runtime = "nodejs";

import { pool } from "@/lib/db";
import { NextResponse } from "next/server";

// OBTENER ACTIVOS
export async function GET() {
  const result = await pool.query("SELECT * FROM activos ORDER BY id DESC");
  return NextResponse.json(result.rows);
}

// CREAR ACTIVO
export async function POST(req: Request) {
  const { nombre, tipo, estado } = await req.json();

  await pool.query(
    "INSERT INTO activos (nombre, tipo, estado) VALUES ($1, $2, $3)",
    [nombre, tipo, estado],
  );

  return NextResponse.json({ message: "Activo creado" });
}

// ELIMINAR ACTIVO
export async function DELETE(req: Request) {
  const { id } = await req.json();

  await pool.query("DELETE FROM activos WHERE id = $1", [id]);

  return NextResponse.json({ message: "Activo eliminado" });
}
