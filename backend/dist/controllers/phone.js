"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const phone_js_1 = __importDefault(require("../models/phone.js"));
const catcher = (res) => (error) => res.status(400).json({ error });
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const phones = yield phone_js_1.default.find({}).limit(36).catch(catcher(res));
    res.json(phones);
}));
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.params.id);
    const phoneResult = yield phone_js_1.default.findById(req.params.id).catch(catcher(res));
    console.log(phoneResult);
    res.json(phoneResult);
}));
exports.default = router;
