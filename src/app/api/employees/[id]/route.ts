import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const employee = db
    .prepare("SELECT * FROM employees WHERE id = ?")
    .get(params.id);
  return NextResponse.json(employee);
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { name, email, position } = await request.json();
  db.prepare(
    "UPDATE employees SET name = ?, email = ?, position = ? WHERE id = ?"
  ).run(name, email, position, params.id);
  return NextResponse.json({ id: params.id, name, email, position });
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  db.prepare("DELETE FROM employees WHERE id = ?").run(params.id);
  return NextResponse.json({ message: "Employee deleted successfully" });
}
