// HelpPopup.js
import React from "react";
import { useState } from "react";
import GuidedShoppingForm from "./GuidedShoppingForm";
import EventContext from "../EventContext"; // Import EventContext
import { useContext } from "react"; // Import useContext hook

const HelpPopup = ({ onClick, darkMode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { handleCloseForm } = useContext(EventContext); // Use the useContext hook to access handleFormClose

  const openModal = () => {
    setIsModalOpen(true);
    onClick();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    handleCloseForm();
  };

  return (
    <>
      {/* Modal */}
      {isModalOpen ? (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className={darkMode ? "dark-mode" : ""}>
            <div
              className={`${
                darkMode ? "bg-neutral-800 text-white" : "bg-white"
              } p-6 rounded-lg shadow-lg mx-4 animate-slideIn`}
            >
              <GuidedShoppingForm closeModal={closeModal} darkMode={darkMode} />

              <button
                onClick={closeModal}
                className="mt-4 px-4 py-2 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className={darkMode ? "dark-mode" : ""}>
          <div className="text-center fixed bottom-4 right-4 p-5 bg-white rounded-lg shadow-2xl text-black animate-popIn speech-bubble border-2">
            <p className="text-lg md:text-xl">Need some help?</p>
            <button
              onClick={openModal}
              className="mt-6 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-gray focus:outline-none focus:ring focus:ring-gray focus:ring-opacity-50 animate-growShrink"
            >
              Find out more
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HelpPopup;
