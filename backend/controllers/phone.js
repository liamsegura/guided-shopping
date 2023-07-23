// controllers/preferences.js
import express from "express";
const router = express.Router();
import Phone from "../models/phone.js";

const catcher = (res) => (error) => res.status(400).json({ error });

router.get("/", async (req, res) => {
  const phones = await Phone.find({}).limit(36).catch(catcher(res));
  res.json(phones);
});

router.get("/:id", async (req, res) => {
  console.log(req.params.id);
  const phoneResult = await Phone.findById(req.params.id).catch(catcher(res));
  console.log(phoneResult);
  res.json(phoneResult);
});

export default router;
