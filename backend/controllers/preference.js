// controllers/preferences.js
import express from 'express';
const router = express.Router();
import Preference from '../models/preference.js';
import Phone from '../models/phone.js';


// Create a new user preference
router.post('/preferences', async (req, res) => {
  try {
    const newPreferenceData = req.body;
    const newPreference = await Preference.create(newPreferenceData);
    res.status(201).json(newPreference);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the preference' });
  }
});

router.get('/matched-phones', async (req, res) => {
    try {
      const userPreferences = JSON.parse(req.query.preferences); // Parse preferences from the query string
  
      // Use your matching algorithm to retrieve the top 10 phones based on userPreferences
      const matchedPhones = await Phone.find({
        $and: [
          { dataPlan: userPreferences.dataPlan },
          { talkTime: userPreferences.talkTime },
          { budget: { $lte: userPreferences.budget } },
        ],
      }).limit(2);
  
      res.status(200).json(matchedPhones);
    } catch (error) {
      console.error('Error fetching matched phones:', error); // Log the error for debugging
      res.status(500).json({ error: 'An error occurred while fetching matched phones.' });
    }
  });

export default router;
