import React from 'react';
import Toprecruiters from './ActiveProcess';
import Post from './Post';
import TopPerformers from './TopPerformers';
import Tranding from './Tranding';

function Jobs() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 md:p-8 lg:p-10">
        {/* Post Section */}
        <div className="mb-4">
          <Post />
        </div>
        
        {/* Top Recruiters Section */}
        <div className="mb-4">
          <Toprecruiters />
        </div>
        
        {/* Main Content Section */}
        <div className="flex flex-col gap-4 mt-4 sm:flex-row">
          {/* Top Performers */}
          <div className="w-full sm:w-1/2 lg:w-2/5">
            <TopPerformers />
          </div>
          
          {/* Trending */}
          <div className="w-full sm:w-1/2 lg:w-3/5">
            <Tranding />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Jobs;
