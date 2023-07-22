import { string } from "zod";
import mongoose from "./connection.js";
const {Schema, model} = mongoose 

// post Schema
const postSchema = new Schema({
    name: String,
    tasty: Boolean
}, {timestamps: true})

// post Model
const post = model("post", postSchema)

export default post