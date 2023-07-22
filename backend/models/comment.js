import { string } from "zod";
import mongoose from "./connection.js";
const {Schema, model} = mongoose 

// Cheese Schema
const commentSchema = new Schema({
    comment: {
        type: String,
        required: true,
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
}, {timestamps: true})

// Cheese Model
const Comment = model("Comment", commentSchema)

export default Comment