import { query } from "../index.js";

async function dropTicketsTable() {
  const res = await query(`DROP TABLE IF EXISTS tickets;`);
  console.log(res.command, "dropped tickets table");
}

dropTicketsTable();
