 import React from 'react'
 import img1 from '../../../Images/industryTalk.png';
import img2 from '../../../Images/courses.png';
 function CourseDetail1() {
   return (
    <div className="w-full h-full flex flex-col lg:flex-row bg-black-50 lg:bg-gradient-to-r from-black-100 via-black-300 to-black-500">
    <div className="w-full lg:w-1/3 h-full text-white flex flex-col mt-5 gap-3 justify-center items-center p-4 lg:p-0 bg-black-500 lg:bg-transparent order-2 lg:order-2">
      <h1 className="text-xl lg:text-2xl font-semibold text-center lg:text-center">Skillgenic Courses</h1>
      <p className="text-sm lg:text-base text-center lg:text-center">
        "Empowering you with practical skills for real-world success."
      </p>
      <button className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded mt-2">
        Learn More
      </button>
    </div>
  </div>
   )
 }
 
 export default CourseDetail1