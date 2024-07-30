
import React from 'react';
import img1 from '../../../Images/industryTalk.png';
import img2 from '../../../Images/courses.png';

function FirstContainer() {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row bg-blue-50 lg:bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500">
      {/* Single Image Section - Shown on small screens */}
      <div className="lg:hidden w-full flex justify-center items-center p-4 order-1">
        <img className="w-3/4 h-auto max-w-xs" src={img1} alt="Responsive Image" />
      </div>

      {/* Text Section - Always visible */}
      <div className="w-full lg:w-1/3 h-full text-white flex flex-col mt-5 gap-3 justify-center items-center p-4 lg:p-0 bg-blue-500 lg:bg-transparent order-2 lg:order-2">
        <h1 className="text-xl lg:text-2xl font-semibold text-center lg:text-center">Skillgenic Courses</h1>
        <p className="text-sm lg:text-base text-center lg:text-center">
          "Empowering you with practical skills for real-world success."
        </p>
        <button className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded mt-2">
          Learn More
        </button>
      </div>

      {/* Image Section (first image) - Shown on large screens */}
      <div className="hidden lg:flex lg:w-1/3 h-full justify-center lg:justify-start items-center p-4 lg:p-0 order-1">
        <img className="w-full h-auto max-w-xs lg:max-w-full" src={img2} alt="Courses" />
      </div>

      {/* Second Image Section - Shown on large screens, hidden on small screens */}
      <div className="hidden lg:flex lg:w-1/3 h-full justify-center mt-3 lg:justify-end items-center p-4 lg:p-0 order-3">
        <img className="w-3/4 h-auto max-w-xs lg:w-3/5 lg:h-auto" src={img1} alt="Industry Talk" />
      </div>
    </div>
  );
}

export default FirstContainer;


