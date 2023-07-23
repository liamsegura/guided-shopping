import mongoose from "mongoose";
import dotenv from "dotenv";
import { string } from "zod";

dotenv.config(); // get dotenv vars

interface DATABASE_URL {
  DATABASE_URL: string | undefined;
}

const DATABASE_URL = process.env.DATABASE_URL;

console.log(DATABASE_URL);

// connect
if (DATABASE_URL) mongoose.connect(DATABASE_URL);

// connection message
mongoose.connection
  .on("open", () => console.log(`connected to mongo db`))
  .on("close", () => console.log("Disconnected from Mongo"))
  .on("error", (error) => console.log(error));

export default mongoose;
