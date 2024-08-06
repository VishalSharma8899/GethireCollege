import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../Dashboard/Search';
import { FaFilter, FaFileImport } from 'react-icons/fa';
import { MdOutlineArrowDropDown } from "react-icons/md";

function StudentData({ onSearch }) {
  const [query, setQuery] = useState('');
  const [show] = useState(10);
  const [total] = useState(100);
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [selectedCandidates, setSelectedCandidates] = useState([]);
  const [filter, setFilter] = useState('All'); // New state for filter selection
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const filterRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  const toggleFilters = () => {
    setFiltersVisible(!filtersVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setFiltersVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCheckboxChange = (candidate) => {
    setSelectedCandidates((prev) => {
      if (prev.includes(candidate)) {
        return prev.filter((item) => item !== candidate);
      } else {
        return [...prev, candidate];
      }
    });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    console.log('Selected file:', file);
    // Handle file processing here
  };

  const getCircleStyle = (match) => {
    let borderColor = 'gray';
    if (match >= 75) {
      borderColor = 'green';
    } else if (match >= 50) {
      borderColor = 'orange';
    } else {
      borderColor = 'red';
    }
    return {
      width: '35px',
      height: '35px',
      borderRadius: '50%',
      border: `3px solid ${borderColor}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: borderColor,
      backgroundColor: 'white',
      fontSize: '12px'
    };
  };

  // Sample data
 const candidates = [
  { candidate: 'Jason Doyle', batch: 'B.Tech - CSE', position: 'Graphic Designer', match: 84, stage: 'Video-call Interview', status: 'Full-time', appliedDate: '26 Apr, 2023', recruiter: 'IBM', category: 'Active', imageUrl: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg' },
  { candidate: 'Leila Thompson', batch: 'B.Tech - ECE', position: 'UX Designer', match: 67, stage: 'On-site Interview', status: 'Part-time', appliedDate: '24 Apr, 2023', recruiter: 'Adobe', category: 'Active', imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
  { candidate: 'Ethan Hunt', batch: 'BCA - IT', position: 'Data Analyst', match: 75, stage: 'Final Interview', status: 'Contract', appliedDate: '01 May, 2023', recruiter: 'Jane Doe', category: 'Active', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s' },
  { candidate: 'Ava Smith', batch: 'B.Tech - Mechanical ', position: 'Front-end Developer', match: 82, stage: 'Tech Interview', status: 'Full-time', appliedDate: '15 Apr, 2023', recruiter: 'John Smith', category: 'New', imageUrl: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg' },
  { candidate: 'Olivia Johnson', batch: 'B.Tech - EE', position: 'Cloud Specialist', match: 90, stage: 'Offer Extended', status: 'Full-time', appliedDate: '20 Mar, 2023', recruiter: 'Gary White', category: 'Archive', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp57OH7-b1dARGc3vujs7992FaDDvo-2w9Rw&s' },
  { candidate: 'William Davis', batch: 'B.Tech - Civil', position: 'Database Engineer', match: 68, stage: 'Assessment', status: 'Part-time', appliedDate: '12 Jun, 2023', recruiter: 'Sarah Brown', category: 'Active', imageUrl: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg' },
  { candidate: 'Sophia Wilson', batch: 'B.Tech - CSE', position: 'Security Consultant', match: 77, stage: 'Background Check', status: 'Full-time', appliedDate: '09 Feb, 2023', recruiter: 'Richard Taylor', category: 'Active', imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
  { candidate: 'James Moore', batch: 'B.Tech - ECE', position: 'Mechanical Engineer', match: 85, stage: 'Initial Screening', status: 'Intern', appliedDate: '30 Jan, 2023', recruiter: 'Emma Jones', category: 'New', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s' }
];


  const filteredCandidates = candidates.filter((candidate) => {
    return filter === 'All' || candidate.category === filter;
  });

  return (
    <div className='relative'>
      <div>
        <Navbar />
      </div>
      <div className='mt-14 flex justify-between items-center'>
        <div>
          <h3>Candidates</h3>
          <p>Showing {show} of {total} candidates.</p>
        </div>
        <div className='flex items-center'>
          <form onSubmit={handleSearch} className="flex items-center mr-4">
            <input
              type="text"
              className="border rounded-l-lg p-2 w-full"
              placeholder="Search..."
              value={query}
              onChange={handleInputChange}
            />
          </form>
          <button onClick={toggleFilters} className="flex items-center border p-2 mx-2 rounded-lg bg-white text-blue-600 border-blue-600">
            <FaFilter className="mr-2" />
            Filter
            <MdOutlineArrowDropDown />
          </button>
          <button onClick={openModal} className="flex items-center border p-2 mx-2 rounded-lg bg-white text-blue-600 border-blue-600">
            <FaFileImport className='mr-2' />
            Import
          </button>
        </div>
      </div>
      {filtersVisible && (
        <div
          ref={filterRef}
          className='absolute top-20 right-0 mt-4 p-4 border rounded bg-white shadow-lg w-72'
        >
          <h4 className='font-semibold mb-2'>Filter by</h4>
          <div className='mb-2'>
            <label className='block mb-1'>Placement Status</label>
            <select className='border rounded p-2 w-full'>
              <option value="">All</option>
              <option value="placed">Placed</option>
              <option value="not-placed">Not Placed</option>
            </select>
          </div>
          <div className='mb-2'>
            <label className='block mb-1'>Year</label>
            <select className='border rounded p-2 w-full'>
              <option value="">All</option>
              <option value="2024">2nd year</option>
              <option value="2025">3rd year</option>
              <option value="2026">4th year</option>
            </select>
          </div>
          <div className='mb-2'>
            <label className='block mb-1'>Department</label>
            <select className='border rounded p-2 w-full'>
              <option value="">All</option>
              <option value="cs">Computer Science</option>
              <option value="it">Information Technology</option>
              <option value="ece">Electronics and Communication</option>
            </select>
          </div>
          <div className='mb-2'>
            <label className='block mb-1'>Placement Interest</label>
            <select className='border rounded p-2 w-full'>
              <option value="">All</option>
              <option value="interested">Interested</option>
              <option value="not-interested">Not Interested</option>
            </select>
          </div>
          <div className='mb-2'>
            <label className='block mb-1'>Internship Interest</label>
            <select className='border rounded p-2 w-full'>
              <option value="">All</option>
              <option value="interested">Interested</option>
              <option value="not-interested">Not Interested</option>
            </select>
          </div>
        </div>
      )}
      <div className='flex gap-5 font-semibold'>
        <p className={`cursor-pointer ${filter === 'All' ? 'text-blue-600' : ''}`} onClick={() => setFilter('All')}>
          All {total}
        </p>
        <p className={`cursor-pointer ${filter === 'New' ? 'text-blue-600' : ''}`} onClick={() => setFilter('New')}>
          New 2
        </p>
        <p className={`cursor-pointer ${filter === 'Active' ? 'text-blue-600' : ''}`} onClick={() => setFilter('Active')}>
          Active 3
        </p>
        <p className={`cursor-pointer ${filter === 'Archive' ? 'text-blue-600' : ''}`} onClick={() => setFilter('Archive')}>
          Archive 2
        </p>
      </div>
      <div className='m-2 border rounded-lg p-3'>
        <table className='min-w-full bg-white'>
          <thead>
            <tr className='font-bold'>
              <th className='py-2'></th>
              <th className='py-2'>Candidate</th>
              <th className='py-2'>Position</th>
              <th className='py-2'>
                Match
              </th>
              <th className='py-2'>Stage</th>
              <th className='py-2'>Applied Date</th>
              <th className='py-2'>Recruiter</th>
            </tr>
          </thead>
          <tbody>
  {filteredCandidates.map((candidate, index) => (
    <tr key={index} className='border-t text-gray-400' onClick={() => handleCheckboxChange(candidate)}>
      <td className='py-2'>
        <input
          type='checkbox'
          checked={selectedCandidates.includes(candidate)}
          onChange={() => handleCheckboxChange(candidate)}
          onClick={(e) => e.stopPropagation()} // Prevents checkbox click from toggling the checkbox state twice
        />
      </td>
      <td className='py-2'>
        <div className="flex items-center">
          <img src={candidate.imageUrl} alt="Candidate" style={{ width: '35px', height: '35px', borderRadius: '50%', marginRight: '10px' }} />
          <div>
            <div>{candidate.candidate}</div>
            <div className='text-sm text-gray-500'>{candidate.batch}</div>
          </div>
        </div>
      </td>
      <td className='py-2'>{candidate.position}</td>
      <td className='py-2'>
        <div style={getCircleStyle(candidate.match)}>
          {candidate.match}%
        </div>
      </td>
      <td className='py-2'>{candidate.stage}</td>
      <td className='py-2'>{candidate.appliedDate}</td>
      <td className='py-2'>{candidate.recruiter}</td>
    </tr>
  ))}
</tbody>

        </table>
      </div>
      {/* Import Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-1/3">
            <h3 className="text-lg font-semibold mb-4">Import File</h3>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              className="mb-4"
            />
            <div className="flex justify-end">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 text-white py-2 px-4 rounded"
                onClick={() => {
                  if (fileInputRef.current) {
                    console.log(fileInputRef.current.files[0]);
                    // You can process the selected file here
                  }
                  closeModal();
                }}
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentData;
