import Database from "better-sqlite3";

const db = new Database("employees.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS employees (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    position TEXT
  )
`);

export default db;
