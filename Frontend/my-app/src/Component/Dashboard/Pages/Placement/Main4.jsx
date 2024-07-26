import React from 'react';
import BarGraph from './BarGraph';

function Main4() {
  return (
    <div className='w-full h-full m-2 bg-white rounded-xl flex flex-col relative mt-3 p-4'>
      <div className='mb-4'>
        <h1 className='text-green-400 text-lg font-semibold'>Top Companies</h1>
      </div>
      <div className='flex justify-center items-center w-full h-full'>
        <BarGraph />
      </div>
    </div>
  );
}

export default Main4;
