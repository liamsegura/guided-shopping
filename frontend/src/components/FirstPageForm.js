import React from "react";

const FirstPageForm = ({ preferences, handleChange, nextPage }) => {
  return (
    <div>
      <h2>Page 1: Data Plan and Talk Time</h2>
      <form onSubmit={nextPage}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Budget in £:
          </label>
          <input
            type="number"
            className="w-full px-3 py-2 mt-1 rounded-lg border-gray-300 focus:border-white focus:ring focus:ring-white focus:ring-opacity-50"
            value={preferences.budget}
            onChange={handleChange}
            name="budget"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Colour:
          </label>
          <select
            className="w-full px-3 py-2 mt-1 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={preferences.color} // Make sure to use "color" property instead of "dataPlan" for color selection
            onChange={handleChange} // Use handleChange function to update the state for color selection
            name="color"
            required
          >
            <option value="metal">Metal</option>
            <option value="sky">Sky Blue</option>
            <option value="ming">Mint</option>
            <option value="pink">Pink</option>
            <option value="purple">Purple</option>
          </select>
        </div>

        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default FirstPageForm;
