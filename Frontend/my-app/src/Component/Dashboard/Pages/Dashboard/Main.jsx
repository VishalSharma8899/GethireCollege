import React from 'react';
import Main1 from './Main1';
import Main2 from './Main2';
import Search from "./Search";

function Main() {
  return (
    <div>
      <Search />
      <div className='w-full h-screen rounded-lg'>
        <div className='w-full p-3 ml-2 text-xl'>
          <p className='font-bold'>Overview</p>
        </div>
        <div className='container bg-[rgba(246, 249, 254, 1)]'>
          <div className='flex flex-wrap'>
            <div className='w-full md:w-1/2 p-2'>
              <Main1 />
            </div>
            <div className='w-full md:w-1/2 p-2'>
              <Main2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
