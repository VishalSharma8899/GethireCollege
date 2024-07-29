import React from 'react';
import FirstContainer from './FirstContainer';
import SecondContainer from './SecondContainer';

function Training() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* First-Container */}
      <div className="w-full flex-shrink-0 min-h-[150px] md:min-h-[200px] lg:min-h-[300px] bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 flex items-center justify-center rounded">
        <FirstContainer />
      </div>

      {/* Second-Container */}
      <div className="w-full flex-grow p-4 mt-2 rounded-2xl bg-white flex items-center justify-center">
        <SecondContainer />
      </div>
    </div>
  );
}

export default Training;
