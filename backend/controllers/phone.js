import express from "express";
const router = express.Router();
import Phone from "../models/phone.js";

const catcher = (res) => (error) => res.status(400).json({ error });

router.get("/", async (req, res) => {
  try {
    const phones = await Phone.find({}).catch(catcher(res));

    // Fetch the 6 most popular phones
    const popularPhones = await Phone.aggregate([
      {
        $lookup: {
          from: "profiles",
          localField: "_id",
          foreignField: "choice",
          as: "profiles",
        },
      },
      {
        $addFields: {
          popularity: { $size: "$profiles" },
        },
      },
      {
        $sort: { popularity: -1 },
      },
      {
        $limit: 6,
      },
    ]).catch(catcher(res));

    res.json({ phones, popularPhones });
  } catch (error) {
    console.error("Error fetching popular phones:", error);
    res.status(500).json({ error: "Error fetching popular phones" });
  }
});

router.get("/popularPhones", async (req, res) => {
  try {
    // Use the aggregation pipeline to count the occurrences of each phone choice
    const popularPhones = await Profile.aggregate([
      { $group: { _id: "$choice", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 6 },
    ]);

    // Get the phone ids from the aggregated results
    const phoneIds = popularPhones.map((phone) => phone._id);

    // Fetch the actual phone details using the phone ids
    const phones = await Phone.find({ _id: { $in: phoneIds } });

    res.json(phones);
  } catch (error) {
    console.error("Error fetching popular phones:", error);
    res.status(500).json({ error: "Error fetching popular phones" });
  }
});

router.get("/:id", async (req, res) => {
  console.log(req.params.id);
  const phoneResult = await Phone.findById(req.params.id).catch(catcher(res));
  console.log(phoneResult);
  res.json(phoneResult);
});

export default router;
