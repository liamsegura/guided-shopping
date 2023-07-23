"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const profile_js_1 = __importDefault(require("./controllers/profile.js"));
const phone_js_1 = __importDefault(require("./controllers/phone.js"));
// Get my env variables
dotenv_1.default.config();
// create express app
const app = (0, express_1.default)();
// register middleware
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
// Routes and routers
app.get("/", (req, res) => {
    res.json({ message: "it works" });
});
app.use("/phone", phone_js_1.default);
app.use("/profile", profile_js_1.default);
// listener
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 4444;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
