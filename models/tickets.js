import { query } from "../db/index.js";

export async function getTickets() {
  const data = await query(`SELECT * FROM tickets;`);
  return data.rows;
}

export async function postTicket(newTicket) {
  const { name, roomnumber, message, keywords, status } = newTicket;
  const data = await query(
    `INSERT INTO tickets (name, roomnumber, message, keywords, status) VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
    [name, roomnumber, message, keywords, status]
  );
  return data.rows;
}

export async function updateTicket(id, updatedTicket) {
  const { name, roomnumber, message, keywords, status } = updatedTicket;
  const data = await query(
    `UPDATE tickets SET name = $1, roomnumber = $2, message = $3, keywords = $4, status = $5 WHERE  ticket_id = $6 RETURNING *;`,
    [name, roomnumber, message, keywords, status, Number(id)]
  );
  return data.rows;
}


export async function updateStatus(id, updatedStatus) {
  const { name, roomnumber, message, keywords, status } = updatedStatus;
  const data = await query(
    `UPDATE tickets SET status = $5 WHERE, ticket_id = $6 RETURNING *;`,
    [name, roomnumber, message, keywords, status, Number(id)]
  );
  return data.rows;
}
  
export async function deleteTicket(id) {
  console.log("delete");
  const data = await query(
    `DELETE FROM tickets WHERE ticket_id = $1 RETURNING *`,
    [Number(id)]
  );
  return data.rows;
}
