import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import URL from "../router/url";

const GuidedShoppingForm = ({ closeModal }) => {
  const navigate = useNavigate();

  // State to hold preferences
  const [preferences, setPreferences] = useState({
    budget: "",
    dataPlan: "",
    talkTime: "",
  });

  // State to hold matched phones
  const [matchedPhones, setMatchedPhones] = useState([]);

  // State to track whether the form has been submitted
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handlePhoneClick = async (phoneId) => {
    try {
      const preferencesWithChoice = { ...preferences, choice: phoneId };
      const response = await axios.post(
        URL + "/preference/preferences",
        preferencesWithChoice
      );
      console.log("Preference saved successfully:", response.data);

      // Save preferences to localStorage after successful submission
      localStorage.setItem(
        "userPreferences",
        JSON.stringify(preferencesWithChoice)
      );

      // Update the state to show recommendations, etc.
      setFormSubmitted(true);

      // Fetch matched phones from the backend
      const matchedResponse = await axios.get(
        "http://localhost:4444/preference/matched-phones",
        {
          params: { preferences: JSON.stringify(preferencesWithChoice) },
        }
      );
      setMatchedPhones(matchedResponse.data);

      navigate(`/phone/${phoneId}`);

      // Close the form when an image is clicked

      closeModal();
    } catch (error) {
      console.error("Error saving preference:", error.message);
      // Handle error, show error message, etc.
    }
  };

  // Load preferences from localStorage when the component mounts
  useEffect(() => {
    const savedPreferences = JSON.parse(
      localStorage.getItem("userPreferences")
    );
    if (savedPreferences) {
      setPreferences(savedPreferences);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Fetch matched phones from the backend
      const matchedResponse = await axios.get(
        "https://odd-jade-crow-slip.cyclic.app/preference/matched-phones",
        {
          params: { preferences: JSON.stringify(preferences) },
        }
      );
      setMatchedPhones(matchedResponse.data);

      // Handle success, show recommendations, etc.
      setFormSubmitted(true);
    } catch (error) {
      console.error("Error saving preference:", error.message);
      // Handle error, show error message, etc.
    }
  };

  return (
    <div>
      <div className="max-w-lg mx-2 p-4 m-2 bg-white shadow rounded-lg">
        {formSubmitted ? (
          matchedPhones.length > 0 ? (
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">
                We think you'll love these
              </h2>
              <ul className="grid gap-4 grid-cols-2">
                {/* Display matched phones */}
                {matchedPhones.map((phone) => (
                  <li
                    key={phone._id}
                    onClick={() => handlePhoneClick(phone._id)}
                    className={`bg-white p-4 rounded-lg shadow-lg`}
                  >
                    <img
                      src="/mock.png"
                      alt={phone.brand}
                      style={{ width: "100%", marginBottom: "10px" }}
                    />
                    <h3>{phone.brand}</h3>
                    <h3>{phone.model}</h3>
                    <p>Data: {phone.dataPlan}</p>
                    <p>Talk Time: {phone.talkTime}</p>
                    <p>Price: £{phone.budget}</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>No matched phones found.</p>
          )
        ) : (
          // Show the form when it's not submitted
          <div className="max-h-96 overflow-auto p-1">
            <h2 className="text-2xl font-bold mb-4">
              What are you looking for?
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Budget in £:
                </label>
                <input
                  type="number"
                  className="w-full px-3 py-2 mt-1 rounded-lg border-gray-300 focus:border-white focus:ring focus:ring-white focus:ring-opacity-50"
                  value={preferences.budget}
                  onChange={(e) =>
                    setPreferences({ ...preferences, budget: e.target.value })
                  }
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Data Plan:
                </label>
                <select
                  className="w-full px-3 py-2 mt-1 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  value={preferences.dataPlan}
                  onChange={(e) =>
                    setPreferences({
                      ...preferences,
                      dataPlan: e.target.value,
                    })
                  }
                  required
                >
                  <option value="">Select Data Plan</option>
                  <option value="2GB">2GB</option>
                  <option value="5GB">5GB</option>
                  <option value="Unlimited">Unlimited</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Talk Time:
                </label>
                <select
                  className="w-full px-3 py-2 mt-1 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  value={preferences.talkTime}
                  onChange={(e) =>
                    setPreferences({
                      ...preferences,
                      talkTime: e.target.value,
                    })
                  }
                  required
                >
                  <option value="">Select Talk Time</option>
                  <option value="500 minutes">500 minutes</option>
                  <option value="Unlimited">Unlimited</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 mt-4 text-white font-semibold bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default GuidedShoppingForm;
