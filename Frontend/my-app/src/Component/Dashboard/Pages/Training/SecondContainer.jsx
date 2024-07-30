import React from "react";
import Courses from "./Courses";
import Industry from "./Industry";
import Progress from "./Progress"
import BestSales from "./BestSales"
import 'bootstrap/dist/css/bootstrap.min.css';


function CoursesContainer() {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row gap-4 lg:gap-6 p-4 lg:p-6">
      {/* Courses/Industry */}
      <div className="flex flex-col lg:w-3/5 p-4 lg:p-6">
        {/* Courses Section */}
        <div className="w-full mb-6">
          <h1 className="text-xl lg:text-2xl font-semibold mb-4">Courses</h1>
          <div className="w-full">
            <Courses />
          </div>
        </div>

        {/* Industry Talk Section */}
        <div className="w-full mb-6">
          <h1 className="text-xl lg:text-2xl font-semibold mb-4">Industry Talk</h1>
          <div className="w-full">
            <Industry/>
          </div>
        </div>
      </div>

      {/* Progress Section */}
      <div className="w-full lg:w-2/5 bg-gray-50 h-full rounded-lg p-4 lg:p-4">
        <Progress />
        <BestSales />
      </div>
    </div>
  );
}

export default CoursesContainer;

