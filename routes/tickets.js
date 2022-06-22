import express from "express";
import bodyParser from "body-parser"; 
const router = express.Router();
const jsonParser = bodyParser.json();

import {
  getTickets,
  postTicket,
  updateTicket,
  updateStatus,
  deleteTicket,
} from "../models/tickets.js";

router.get("/", async function (req, res) {
  const result = await getTickets();
  res.json({ success: true, payload: result });
});

router.post("/", jsonParser, async function (req, res) {
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


  router.patch("/:id", async (req, res) => {
    const id = Number(req.params.id);
    const data = req.body;
    const result = await updateStatus(id, data) 
    res.json({ success: true, payload: result });
  });



router.delete("/:id", async function (req, res) {
  const id = Number(req.params.id);
  const result = await deleteTicket(id);
  res.json({ success: true, payload: result });
});

export default router;