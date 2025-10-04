import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const employee = db.prepare("SELECT * FROM employees WHERE id = ?").get(id);
  return NextResponse.json(employee);
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const { name, email, position } = await request.json();
  db.prepare(
    "UPDATE employees SET name = ?, email = ?, position = ? WHERE id = ?"
  ).run(name, email, position, id);
  return NextResponse.json({ id, name, email, position });
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  db.prepare("DELETE FROM employees WHERE id = ?").run(id);
  return NextResponse.json({ message: "Employee deleted successfully" });
}
