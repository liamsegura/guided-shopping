import express from "express";
const router = express.Router();

router.post("/track-event", (req, res) => {
  const eventData = req.body;
  console.log(eventData);

  res.status(200).json({ message: "Event data received successfully" });
});

export default router;
