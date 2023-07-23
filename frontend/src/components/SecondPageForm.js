import React from "react";

const SecondPageForm = ({ preferences, handleChange, handleSubmit }) => {
  return (
    <div>
      <h2>Page 2: Budget and Color</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Data Plan:
          </label>
          <select
            className="w-full px-3 py-2 mt-1 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={preferences.dataPlan}
            onChange={handleChange}
            name="dataPlan"
            required
          >
            <option value="">Select Data Plan</option>
            <option value="2000">2GB</option>
            <option value="5000">5GB</option>
            <option value="0">Unlimited</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Talk Time:
          </label>
          <select
            className="w-full px-3 py-2 mt-1 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={preferences.talkTime}
            onChange={handleChange}
            name="talkTime"
            required
          >
            <option value="">Select Talk Time</option>
            <option value="500">500 minutes</option>
            <option value="0">Unlimited</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SecondPageForm;
