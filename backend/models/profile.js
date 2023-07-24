import mongoose from "./connection.js";
const { Schema, model } = mongoose;

const profileSchema = new Schema({
  budget: Number,
  dataPlan: Number,
  talkTime: Number,
  color: String,
  choice: { type: Schema.Types.ObjectId, ref: "Phone" },
  analytics: [{}],
});

const profile = model("profile", profileSchema);

export default profile;
