import mongoose from "./connection.js";
const {Schema, model} = mongoose 



// post Schema
const preferenceSchema = new Schema({
  budget: Number,
  dataPlan: String,
  talkTime: String,
  choice: { type: Schema.Types.ObjectId, ref: 'Phone' }
});

const Preference = model("preference", preferenceSchema)

export default Preference