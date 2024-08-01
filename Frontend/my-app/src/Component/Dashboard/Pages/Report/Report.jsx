import React, { useState } from 'react';
import Search from './Search.jsx';
import AllJobs from './AllJobs.jsx';
import ApplicationSource from './ApplicationSource.jsx';

function Report() {
  const [activeSection, setActiveSection] = useState('overview');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="h-full rounded-md bg-[rgba(246,249,254,1)] p-4">
      <Search />
      <span>
        <p className="text-lg md:text-xl mt-2 font-semibold ml-3 md:ml-5">Reports for All Jobs</p>
      </span>
      <div className="flex flex-wrap ml-3 md:ml-9 gap-2 md:gap-6 mt-3">
        <p
          className={`p-2 rounded-lg cursor-pointer ${activeSection === 'overview' ? 'bg-black text-white' : 'bg-white'}`}
          onClick={() => handleSectionChange('overview')}
        >
          Overview
        </p>
        <p
          className={`p-2 rounded-lg cursor-pointer ${activeSection === 'pipeline' ? 'bg-black text-white' : 'bg-white'}`}
          onClick={() => handleSectionChange('pipeline')}
        >
          Pipeline
        </p>
      </div>

      <div className="mt-4">
        {activeSection === 'overview' && (
          <>
            <AllJobs />
            <div className="mt-4">
              <p className="text-lg md:text-xl font-semibold ml-3 md:ml-5">Application Source</p>
              <ApplicationSource />
            </div>
          </>
        )}
        {activeSection === 'pipeline' && <div className="ml-3 md:ml-5 mt-5">No data available.</div>}
      </div>
    </div>
  );
}

export default Report;
