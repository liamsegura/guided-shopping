// controllers/preferences.js
import express from 'express';
const router = express.Router();
import Phone from '../models/phone.js';


const catcher = (res) => (error) => res.status(400).json({error}) 

router.get("/", async (req, res) => {
  const phones = await Phone.find({}).catch(catcher(res))
  console.log(phones)
  res.json(phones)
})
export default router;
