import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import PreferenceRoute from "./controllers/preference.js";
import PhoneRoute from "./controllers/phone.js";

// Get my env variables
dotenv.config();

// create express app
const app = express();

// register middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes and routers
app.get("/", (req, res) => {
  res.json({ message: "it works" });
});

app.use("/phone", PhoneRoute);
app.use("/preference", PreferenceRoute);

// listener
const PORT = process.env.PORT ?? 4444;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
