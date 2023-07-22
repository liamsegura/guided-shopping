// HelpPopup.js
import React from 'react';
import { useState, useEffect } from 'react';
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
          <div className="bg-white p-6 rounded-lg shadow-lg mx-4 ">
            <GuidedShoppingForm />

            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-indigo-500 text-white font-bold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              Close
            </button>
          </div>
        </div>

      ): ( <div className=" fixed text-center bottom-4 right-4 p-8 bg-indigo-500 rounded-lg shadow-lg text-white animate-popIn ">
      <p className='text-xl'>Need some help?</p>
      <button
        onClick={openModal}
        className="mt-8 px-4 py-2 bg-white text-indigo-500 font-bold rounded-lg hover:bg-gray focus:outline-none focus:ring focus:ring-gray focus:ring-opacity-50 animate-growShrink"
      >
        Find out more
      </button>
    </div>)}
      </>
  );
  
};

export default HelpPopup;
