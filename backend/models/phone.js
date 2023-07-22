// models/phone.js
import mongoose from 'mongoose';

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
    type: String,
    required: true,
  },
  talkTime: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Phone = mongoose.model('Phone', phoneSchema);

export default Phone;
