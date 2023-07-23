"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // get dotenv vars
const DATABASE_URL = process.env.DATABASE_URL;
console.log(DATABASE_URL);
// connect
if (DATABASE_URL)
    mongoose_1.default.connect(DATABASE_URL);
// connection message
mongoose_1.default.connection
    .on("open", () => console.log(`connected to mongo db`))
    .on("close", () => console.log("Disconnected from Mongo"))
    .on("error", (error) => console.log(error));
exports.default = mongoose_1.default;
