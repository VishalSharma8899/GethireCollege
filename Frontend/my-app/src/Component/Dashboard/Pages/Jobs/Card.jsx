import React from 'react';
import ProgressBar from "react-bootstrap/ProgressBar";

function Card({ image, company, position, progress, percentage }) {
  return (
    <div onClick={onclick} className="bg-white w-56 md:w-56 h-auto rounded-xl mx-auto md:ml-4 flex flex-col gap-1 p-4 hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
      {/* Image Section */}
      <div className="flex-shrink-0">
        <img
          className="w-full h-32 object-cover rounded-lg transition-transform duration-300 hover:scale-110"
          src={image}
          alt={company}
        />
      </div>
      
      {/* Details Section */}
      <div className="text-black flex-grow flex flex-col justify-between">
        <div>
          <p className="font-bold text-base md:text-base mb-1">{company}</p>
          <p className="font-semibold text-sm md:text-sm mb-2">{position}</p>
          <ProgressBar
            style={{ backgroundColor: "rgba(89, 86, 233, 0.1)", height: '6px' }}
            className="w-full rounded-xl"
            now={progress}
          />
        </div>
        
        {/* Percentage Button */}
        <div className="flex items-center mt-2">
          <button
            style={{ background: "rgba(89, 86, 233, 1)" }}
            className="rounded-2xl font-semibold px-3 py-1 text-center text-white text-xs"
          >
            {percentage}%
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
