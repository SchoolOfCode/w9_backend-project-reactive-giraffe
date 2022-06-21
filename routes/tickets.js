import express from "express";
const router = express.Router();

import {
  getTickets,
  postTicket,
  updateTicket,
  deleteTicket,
} from "../models/tickets.js";

router.get("/", async function (req, res) {
  const result = await getTickets();
  res.json({ success: true, payload: result });
});

router.post("/", async function (req, res) {
  const newTicket = req.body;
  const result = await postTicket(newTicket);
  res.json({ success: true, payload: result });
});

router.put("/:id", async function (req, res) {
  const id = Number(req.params.id);
  const data = req.body;
  const result = await updateTicket(id, data);
  res.json({ success: true, payload: result });
});

router.delete("/:id", async function (req, res) {
  const id = Number(req.params.id);
  const result = await deleteTicket(id);
  res.json({ success: true, payload: result });
});

export default router;