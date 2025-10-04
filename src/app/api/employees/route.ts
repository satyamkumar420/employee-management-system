import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  const employees = db.prepare("SELECT * FROM employees").all();
  return NextResponse.json(employees);
}

export async function POST(request: Request) {
  const { name, email, position } = await request.json();
  const result = db
    .prepare("INSERT INTO employees (name, email, position) VALUES (?, ?, ?)")
    .run(name, email, position);
  return NextResponse.json({
    id: result.lastInsertRowid,
    name,
    email,
    position,
  });
}
