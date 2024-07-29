import React from "react";
import BarGraph from "./BarGraph";

function Main4() {
  return (
    <div className="w-full h-full bg-white rounded-xl flex flex-col p-4 relative">
      <div className="mb-4">
        <h1 className="text-green-400 text-lg font-semibold">Top Companies</h1>
      </div>
      <div className="flex justify-center items-center w-full flex-grow">
        <div className="w-full h-full max-w-full max-h-full">
          <BarGraph />
        </div>
      </div>
    </div>
  );
}

export default Main4;
