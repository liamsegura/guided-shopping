"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const phoneSchema = new mongoose_1.default.Schema({
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
const Phone = mongoose_1.default.model("Phone", phoneSchema);
exports.default = Phone;
