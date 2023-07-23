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
// controllers/profiles.js
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const profile_js_1 = __importDefault(require("../models/profile.js"));
const phone_js_1 = __importDefault(require("../models/phone.js"));
// Create a new user profile
router.post("/profiles", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newprofileData = req.body;
        console.log(newprofileData);
        const selectedPhone = newprofileData.choice;
        if (!selectedPhone) {
            return res.status(400).json({ error: "Choice not provided" });
        }
        // Find the corresponding phone from the database using the selectedPhone ID
        const phone = yield phone_js_1.default.findById(selectedPhone);
        if (!phone) {
            return res.status(404).json({ error: "Phone not found" });
        }
        // Associate the phone's _id with the profile
        newprofileData.choice = phone._id;
        // Save the profile with the associated phone's _id
        const newprofile = yield profile_js_1.default.create(newprofileData);
        res.status(201).json(newprofile);
    }
    catch (error) {
        console.error("Error saving profile:", error);
        res
            .status(500)
            .json({ error: "An error occurred while creating the profile" });
    }
}));
router.get("/matched-phones", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let userProfiles;
        if (typeof req.query.profiles === "string") {
            userProfiles = JSON.parse(req.query.profiles);
        }
        else {
            // Handle the case when req.query.profiles is already parsed
            userProfiles = req.query.profiles;
        }
        console.log("Parsed user profiles:", userProfiles);
        // Use your matching algorithm to retrieve the top 10 phones based on userprofiles
        const matchedPhones = yield phone_js_1.default.find({
            $and: [
                { dataPlan: { $gte: userProfiles.dataPlan } },
                { talkTime: { $gte: userProfiles.talkTime } },
                { budget: { $lte: userProfiles.budget } },
                { color: userProfiles.color },
            ],
        }).limit(2);
        console.log("Matched phones:", matchedPhones);
        res.status(200).json(matchedPhones);
    }
    catch (error) {
        console.error("Error fetching matched phones:", error); // Log the error for debugging
        res
            .status(500)
            .json({ error: "An error occurred while fetching matched phones." });
    }
}));
exports.default = router;
