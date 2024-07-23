import React, { useState } from "react";
import TableData from "./TableData";
import CountUp from 'react-countup';

function Main1() {
  const [totalStudents, setTotalStudents] = useState(50);
  const [placedStudents, setPlacedStudents] = useState(25);
  const [timeLeft, setTimeLeft] = useState(10);
  return (
    <div className="w-full h-full">
      <div className="flex flex-col w-full h-full">
        <div className="w-4/5 h-1/2">
        <div className="container w-full h-full mt-10 flex gap-12">
  <div className="w-38 h-20 bg-white rounded p-3 transform transition-transform duration-300 hover:scale-105 hover:bg-blue-50 hover:shadow-xl">
    <p className="font-bold">Total Students</p>
    <h1 className="text-blue-500 text-2xl font-bold">
      <CountUp start={0} end={totalStudents} delay={1}/>
    </h1>
  </div>
  <div className="w-38 h-20 bg-white rounded p-3 transform transition-transform duration-300 hover:scale-105 hover:bg-yellow-50 hover:shadow-xl">
    <p className="font-bold">Placed Students</p>
    <p className="text-yellow-500 text-2xl font-bold">
    <CountUp start={0} end={placedStudents} delay={1}/>
    </p>
  </div>
  <div className="w-36 h-20 bg-white rounded p-3 transform transition-transform duration-300 hover:scale-105 hover:bg-pink-50 hover:shadow-xl">
    <p className="font-bold">Time Left</p>
    <div className="flex gap-1 flex-row font-bold text-xl text-pink-500">
    <p>
    <CountUp start={0} end={timeLeft} delay={1}/>
    </p>
    <p>Days</p>
    </div>
  </div>
</div>

        </div>

        <div className="flex ml-5 mt-5 mb-5 bg-white rounded-xl flex-col w-3/4 h-full">
             <div>
                <p className="text-green-500 p-2">Recent Placements</p>
             </div>
             <div className="">
                <TableData/>
             </div>
        </div>
      </div>
    </div>
  );
}

export default Main1;
