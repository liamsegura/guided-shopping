import mongoose from "mongoose";

const phoneSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  budget: {
    type: Number,
    required: true,
  },
  dataPlan: {
    type: Number,
    required: true,
  },
  talkTime: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});

const Phone = mongoose.model("Phone", phoneSchema);

export default Phone;
