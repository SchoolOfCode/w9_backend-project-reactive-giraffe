import { query } from "../index.js";

async function createTicketsTable() {
  const res = await query(
    `CREATE TABLE IF NOT EXISTS tickets (ticket_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, name TEXT, roomnumber TEXT, message TEXT, keywords TEXT, status TEXT);`
  );
  console.log(res.command, "tickets table created");
}

createTicketsTable();
