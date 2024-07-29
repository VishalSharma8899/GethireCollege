import React from "react";
import BarGraph from "./BarGraph";

function Main4() {
  return (

    <div className='w-full h-full m-2 bg-white rounded-xl flex flex-col relative mt-3 p-4 sm:p-6 md:p-8 lg:p-10'>
      <div className='mb-4'>
        <h1 className='text-green-400 text-base sm:text-lg md:text-xl font-semibold'>Top Companies</h1>
      </div>
      <div className='flex justify-center items-center w-full h-64 sm:h-80 md:h-96 lg:h-[400px]'>
        <BarGraph />
        </div>
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
    </div>
  );
}

export default Main4;
