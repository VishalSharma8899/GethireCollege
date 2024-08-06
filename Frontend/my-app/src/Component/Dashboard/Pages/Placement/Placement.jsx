import React from 'react';
import Search from './Search';
import Main1 from './Main1';
import Main2 from './Main2';
import Main3 from './Main3';
import Main4 from './Main4';

function Placement() {
  return (
    <div className="w-full min-h-screen p-4">
    

      {/* First-Container */}
      <div className="container mx-auto bg-blue-50 rounded p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <Main1 />
          </div>
          <div className="md:col-span-1">
            <Main2 />
          </div>
        </div>
      </div>
      <div className="container mx-auto bg-blue-50 mt-2 rounded p-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <div className="flex justify-center items-center h-full w-full bg-white rounded shadow-md p-6">
      <Main3 />
    </div>
    <div className="flex justify-center items-center h-full w-full bg-white rounded shadow-md p-6">
      <Main4 />
    </div>
  </div>
</div>

    </div>
  );
}

export default Placement;


