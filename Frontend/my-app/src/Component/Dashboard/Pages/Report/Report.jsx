import React, { useState } from 'react';
import Search from './Search.jsx';
import AllJobs from './AllJobs.jsx';

function Report() {
  // State to track the active section
  const [activeSection, setActiveSection] = useState('overview');

  // Function to handle section change
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div style={{ background: 'rgba(246, 249, 254, 1)' }} className='h-full rounded-md'>
      <Search />
      <span>
        <p className='text-xl mt-2 font-semibold ml-5'>Reports for All Jobs</p>
      </span>
      <div className='flex ml-9 gap-6'>
        {/* On click, change the active section */}
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

      {/* Conditional rendering based on active section */}
      {activeSection === 'overview' && <AllJobs />}
      {activeSection === 'pipeline' && <div className='ml-5 mt-5'>No data available.</div>}
    </div>
  );
}

export default Report;
