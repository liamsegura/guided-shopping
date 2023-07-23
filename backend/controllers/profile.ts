// controllers/profiles.js
import express from "express";
const router = express.Router();
import Profile from "../models/profile.js";
import Phone from "../models/phone.js";
import QueryString from "qs";

// Create a new user profile
router.post("/profiles", async (req, res) => {
  try {
    const newprofileData = req.body;
    console.log(newprofileData);
    const selectedPhone = newprofileData.choice;
    if (!selectedPhone) {
      return res.status(400).json({ error: "Choice not provided" });
    }

    // Find the corresponding phone from the database using the selectedPhone ID
    const phone = await Phone.findById(selectedPhone);
    if (!phone) {
      return res.status(404).json({ error: "Phone not found" });
    }

    // Associate the phone's _id with the profile
    newprofileData.choice = phone._id;

    // Save the profile with the associated phone's _id
    const newprofile = await Profile.create(newprofileData);
    res.status(201).json(newprofile);
  } catch (error) {
    console.error("Error saving profile:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the profile" });
  }
});

router.get("/matched-phones", async (req, res) => {
  try {
    let userProfiles: QueryString.ParsedQs;

    if (typeof req.query.profiles === "string") {
      userProfiles = JSON.parse(req.query.profiles) as QueryString.ParsedQs;
    } else {
      // Handle the case when req.query.profiles is already parsed
      userProfiles = req.query.profiles as QueryString.ParsedQs;
    }
    console.log("Parsed user profiles:", userProfiles);
    // Use your matching algorithm to retrieve the top 10 phones based on userprofiles
    const matchedPhones = await Phone.find({
      $and: [
        { dataPlan: { $gte: userProfiles.dataPlan } },
        { talkTime: { $gte: userProfiles.talkTime } },
        { budget: { $lte: userProfiles.budget } },
        { color: userProfiles.color as string },
      ],
    }).limit(2);

    console.log("Matched phones:", matchedPhones);

    res.status(200).json(matchedPhones);
  } catch (error) {
    console.error("Error fetching matched phones:", error); // Log the error for debugging
    res
      .status(500)
      .json({ error: "An error occurred while fetching matched phones." });
  }
});

export default router;
