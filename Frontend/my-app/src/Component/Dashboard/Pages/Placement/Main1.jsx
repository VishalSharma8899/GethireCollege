import React, { useState } from "react";
import TableData from "./TableData";
import CountUp from 'react-countup';

function Main1() {
  const [totalStudents, setTotalStudents] = useState(50);
  const [placedStudents, setPlacedStudents] = useState(25);
  const [timeLeft, setTimeLeft] = useState(10);

  return (
    <div className="w-full h-full p-4">
      <div className="flex flex-col w-full h-full gap-4">
        {/* Cards Section */}
        <div className="w-full flex flex-wrap justify-between gap-4">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white rounded p-3 transform transition-transform duration-300 hover:scale-105 hover:bg-blue-50 hover:shadow-xl">
            <p className="font-bold">Total Students</p>
            <h1 className="text-blue-500 text-xl sm:text-2xl font-bold">
              <CountUp start={0} end={totalStudents} delay={1}/>
            </h1>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white rounded p-3 transform transition-transform duration-300 hover:scale-105 hover:bg-yellow-50 hover:shadow-xl">
            <p className="font-bold">Placed Students</p>
            <p className="text-yellow-500 text-xl sm:text-2xl font-bold">
              <CountUp start={0} end={placedStudents} delay={1}/>
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white rounded p-3 transform transition-transform duration-300 hover:scale-105 hover:bg-pink-50 hover:shadow-xl">
            <p className="font-bold">Time Left</p>
            <div className="flex gap-1 flex-row font-bold text-xl sm:text-2xl text-pink-500">
              <p>
                <CountUp start={0} end={timeLeft} delay={1}/>
              </p>
              <p>Days</p>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-xl p-4 flex flex-col w-full">
          <p className="text-green-500 mb-2">Recent Placements</p>
          <div>
            <TableData/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main1;
