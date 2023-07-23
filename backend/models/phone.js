// import mongoose from "mongoose";

// const phoneSchema = new mongoose.Schema({
//   brand: {
//     type: String,
//     required: true,
//   },
//   model: {
//     type: String,
//     required: true,
//   },
//   budget: {
//     type: Number,
//     required: true,
//   },
//   dataPlan: {
//     type: Number,
//     required: true,
//   },
//   talkTime: {
//     type: Number,
//     required: true,
//   },
//   image: {
//     type: String,
//     required: true,
//   },
//   color: {
//     type: String,
//     required: true,
//   },
// });

// const Phone = mongoose.model("Phone", phoneSchema);

// export default Phone;
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
    get: (value) => (value === -1 ? "Unlimited" : `${value}GB`),
    set: (value) => (value === "Unlimited" ? -1 : parseInt(value)),
  },
  talkTime: {
    type: Number,
    required: true,
    get: (value) => (value === -1 ? "Unlimited" : `${value} minutes`),
    set: (value) => (value === "Unlimited" ? -1 : parseInt(value)),
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
