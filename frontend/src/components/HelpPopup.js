// HelpPopup.js
import React from 'react';
import { useState } from 'react';
import GuidedShoppingForm from './GuidedShoppingForm';



const HelpPopup = ({}) => {


  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
   

      {/* Modal */}
      {isModalOpen ? (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <GuidedShoppingForm />

            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-indigo-500 text-white font-bold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              Close
            </button>
          </div>
        </div>

      ): ( <div className="fixed bottom-4 right-4 p-8 bg-indigo-500 rounded-lg shadow-lg text-white">
      <p>Need some help?</p>
      <button
        onClick={openModal}
        className="mt-2 px-4 py-2 bg-white text-indigo-500 font-bold rounded-lg hover:bg-gray focus:outline-none focus:ring focus:ring-gray focus:ring-opacity-50"
      >
        Find out more
      </button>
    </div>)}
      </>
  );
  
};

export default HelpPopup;
