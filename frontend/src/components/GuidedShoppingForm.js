import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import URL from "../router/url";
import EventContext from "../EventContext";
import { useContext } from "react";

const GuidedShoppingForm = ({ closeModal, darkMode }) => {
  const navigate = useNavigate();

  const { handleSubmitForm, eventData } = useContext(EventContext);

  // State to hold profiles
  const [profiles, setProfiles] = useState({
    budget: "",
    dataPlan: "",
    talkTime: "",
    color: "",
    analytics: eventData,
  });

  // State to hold matched phones
  const [matchedPhones, setMatchedPhones] = useState([]);

  // State to track whether the form has been submitted
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handlePhoneClick = async (phoneId) => {
    try {
      const currentTime = Date.now();
      const duration = eventData.length
        ? currentTime - eventData[0].startTime
        : 0;

      // Create a new object with the updated profiles and analytics
      const profilesWithChoice = {
        ...profiles,
        choice: phoneId,
        analytics: [
          ...profiles.analytics, // Include any previous analytics data
          {
            eventType: "choice",
            choice: phoneId,
            startTime: currentTime,
            timestamp: currentTime,
            duration,
          },
        ],
      };

      const response = await axios.post(
        URL + "/profile/profiles",
        profilesWithChoice
      );
      console.log("profile saved successfully:", response.data);

      // Save profiles to localStorage after successful submission
      localStorage.setItem("userprofiles", JSON.stringify(profilesWithChoice));

      // Update the state to show recommendations, etc.
      setFormSubmitted(true);

      // Fetch matched phones from the backend
      const matchedResponse = await axios.get(URL + "/profile/matched-phones", {
        params: { profiles: JSON.stringify(profilesWithChoice) },
      });
      setMatchedPhones(matchedResponse.data);

      navigate(`/phone/${phoneId}`);

      // Close the form when an image is clicked

      closeModal();
    } catch (error) {
      console.error("Error saving profile:", error.message);
      // Handle error, show error message, etc.
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Fetch matched phones from the backend
      const matchedResponse = await axios.get(URL + "/profile/matched-phones", {
        params: { profiles: JSON.stringify(profiles) },
      });
      setMatchedPhones(matchedResponse.data);

      // Handle success, show recommendations, etc.
      setFormSubmitted(true);
      // Call the handleSubmitForm function to trigger the formSubmit event
      handleSubmitForm(profiles);
    } catch (error) {
      console.error("Error saving profile:", error.message);
      // Handle error, show error message, etc.
    }
  };

  return (
    <div>
      <div
        className={`${
          darkMode
            ? "bg-neutral-800 text-white shadow-white"
            : "bg-white shadow"
        } max-w-lg mx-2 p-4 m-2 rounded-lg pb-10 sm: pb-20`}
      >
        {formSubmitted ? (
          matchedPhones.length > 0 ? (
            <div
              className={`${darkMode ? "bg-neutral-800 text-white" : "bg-white"}
           mt-8`}
            >
              <h2 className="text-2xl font-bold mb-4">
                We think you'll love these
              </h2>
              <ul className="grid grid-cols-2 gap-1 sm:gap-4">
                {/* Display matched phones */}
                {matchedPhones.map((phone) => (
                  <li
                    key={phone._id}
                    onClick={() => handlePhoneClick(phone._id)}
                    className={`p-2 rounded-lg shadow-lg`}
                  >
                    <img
                      src={"/" + phone.image.slice(0, -3) + "png"}
                      alt={phone.brand}
                      style={{
                        width: "100%",
                        marginBottom: "10px",
                        padding: "1rem",
                      }}
                    />
                    <h3>{phone.brand}</h3>
                    <h3>{phone.model}</h3>
                    <p>
                      Data:{" "}
                      {phone.dataPlan > 0
                        ? phone.dataPlan.toString().slice(0, -3) + "GB"
                        : "Unlimited"}
                    </p>
                    <p>
                      Talk Time:{" "}
                      {phone.talkTime > 0
                        ? `${phone.talkTime} minutes`
                        : "Unlimited"}
                    </p>
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
          <div
            className={`${darkMode ? "bg-neutral-800 text-white" : "bg-white"}
          max-h-96 p-1`}
          >
            <h2 className="text-xl font-bold mb-4">
              What are you looking for?
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className={`${darkMode ? "text-white" : "text-gray-700"}
          max-h-96 p-1 block text-sm font-medium`}
                >
                  Budget:
                </label>
                <input
                  placeholder="£"
                  type="number"
                  className={`${
                    darkMode ? "text-white bg-neutral-900" : "text-gray-700"
                  }
                  max-h-96 p-1 block text-sm font-medium w-full px-3 py-2 mt-1 rounded-lg border-gray-300 focus:border-white focus:ring focus:ring-white focus:ring-opacity-50`}
                  value={profiles.budget}
                  onChange={(e) =>
                    setProfiles({ ...profiles, budget: e.target.value })
                  }
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  className={`${darkMode ? "text-white" : "text-gray-700"}
          max-h-96 p-1 block text-sm font-medium`}
                >
                  Colour:
                </label>
                <select
                  className={`${
                    darkMode ? "text-white bg-neutral-900" : "text-gray-700"
                  }
                  max-h-96 p-1 block text-sm font-medium w-full px-3 py-2 mt-1 rounded-lg border-gray-300 focus:border-white focus:ring focus:ring-white focus:ring-opacity-50`}
                  value={profiles.color}
                  onChange={(e) =>
                    setProfiles({
                      ...profiles,
                      color: e.target.value,
                    })
                  }
                  required
                >
                  <option value="">Select Colour</option>
                  <option value="metal">Metal</option>
                  <option value="sky">Sky Blue</option>
                  <option value="mint">Mint</option>
                  <option value="pink">Pink</option>
                  <option value="purple">Purple</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  className={`${darkMode ? "text-white" : "text-gray-700"}
          max-h-96 p-1 block text-sm font-medium`}
                >
                  Data Plan:
                </label>
                <select
                  className={`${
                    darkMode ? "text-white bg-neutral-900" : "text-gray-700"
                  }
                  max-h-96 p-1 block text-sm font-medium w-full px-3 py-2 mt-1 rounded-lg border-gray-300 focus:border-white focus:ring focus:ring-white focus:ring-opacity-50`}
                  value={profiles.dataPlan}
                  onChange={(e) =>
                    setProfiles({
                      ...profiles,
                      dataPlan: e.target.value,
                    })
                  }
                  required
                >
                  <option value="">Select Data Plan</option>
                  <option value="2000">2GB</option>
                  <option value="5000">5GB</option>
                  <option value="0">Unlimited</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  className={`${darkMode ? "text-white" : "text-gray-700"}
          max-h-96 p-1 block text-sm font-medium`}
                >
                  Talk Time:
                </label>
                <select
                  className={`${
                    darkMode ? "text-white bg-neutral-900" : "text-gray-700"
                  }
                  max-h-96 p-1 block text-sm font-medium w-full px-3 py-2 mt-1 rounded-lg border-gray-300 focus:border-white focus:ring focus:ring-white focus:ring-opacity-50`}
                  value={profiles.talkTime}
                  onChange={(e) =>
                    setProfiles({
                      ...profiles,
                      talkTime: e.target.value,
                    })
                  }
                  required
                >
                  <option value="">Select Talk Time</option>
                  <option value="500">500 minutes</option>
                  <option value="0">Unlimited</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 mt-4 text-white font-semibold bg-emerald-600 rounded-lg hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
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
