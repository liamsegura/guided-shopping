"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_js_1 = __importDefault(require("./connection.js"));
const { Schema, model } = connection_js_1.default;
const profileSchema = new Schema({
    budget: Number,
    dataPlan: Number,
    talkTime: Number,
    color: String,
    choice: { type: Schema.Types.ObjectId, ref: "Phone" },
});
const profile = model("profile", profileSchema);
exports.default = profile;
