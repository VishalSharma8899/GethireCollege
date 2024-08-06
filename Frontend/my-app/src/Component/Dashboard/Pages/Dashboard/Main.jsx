import React from 'react';
import Main1 from './Main1';
import Main2 from './Main2';
import Search from "./Search";

function Main() {
  return (
    <div className="bg-blue-50 overflow-hidden min-h-screen">
      <div className="p-4">
        <Search />
      </div>
      <div className="w-full min-h-screen rounded-lg bg-[rgba(246, 249, 254, 1)]">
        <div className="w-full p-4 md:p-6">
          <p className="font-bold text-base md:text-lg">Overview</p>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 p-2">
              <Main1 />
            </div>
            <div className="flex-1 p-2">
              <Main2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
