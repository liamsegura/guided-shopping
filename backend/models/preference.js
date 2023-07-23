import mongoose from "./connection.js";
const { Schema, model } = mongoose;

const preferenceSchema = new Schema({
  budget: Number,
  dataPlan: Number,
  talkTime: Number,
  choice: { type: Schema.Types.ObjectId, ref: "Phone" },
});

const Preference = model("preference", preferenceSchema);

export default Preference;
