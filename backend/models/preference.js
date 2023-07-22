import mongoose from "./connection.js";
const {Schema, model} = mongoose 

// post Schema
const preferenceSchema = new Schema({
  budget: Number,
  dataPlan: String,
  talkTime: String,
});

const Preference = model("preference", preferenceSchema)

export default Preference