/* eslint-disable react/prop-types */
// ServiceCard.jsx
import React, { useState } from "react";

const ServiceCard = ({ title, description, details, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-gray-200 shadow-md rounded-lg p-6 transition duration-300 transform hover:scale-105">
      <div className="flex items-center space-x-4">
        <div className="text-4xl">{icon}</div>
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
      </div>
      <p className="text-gray-600 mt-4">{description}</p>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mt-4 inline-flex items-center text-green-700 font-medium hover:text-green-800 focus:outline-none"
      >
        {isOpen ? "Show Less" : "Show More"}
      </button>
      {isOpen && (
        <div className="mt-4 text-gray-700 border-t border-gray-200 pt-4">
          {details}
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
