// src/components/SeeAllCompanies.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SeeAllCompanies() {
  const [sortOption, setSortOption] = useState('Name');
  const [companies, setCompanies] = useState([
    { name: 'Microsoft', type: 'Full-time', ctc: '₹10,00,000', status: 'Active' },
    { name: 'Amazon', type: 'Part-time', ctc: '₹5,00,000', status: 'Inactive' },
    { name: 'Flipkart', type: 'Internship', ctc: '₹2,00,000', status: 'Active' },
    // Add more companies as needed
  ]);

  const navigate = useNavigate();

  const handleSortChange = (event) => {
    const sortBy = event.target.value;
    setSortOption(sortBy);
    sortCompanies(sortBy);
  };

  const sortCompanies = (key) => {
    const sortedCompanies = [...companies].sort((a, b) => {
      if (key === 'ctc') {
        return parseInt(a.ctc.replace(/[^0-9]/g, '')) - parseInt(b.ctc.replace(/[^0-9]/g, ''));
      }
      return a[key].localeCompare(b[key]);
    });
    setCompanies(sortedCompanies);
  };

  const handleRowClick = (companyName) => {
    navigate(`/jobs/student-details/${companyName}`);
  };

  return (
    <div className="p-4 md:p-6 bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
        <h1 className="font-bold text-xl md:text-2xl">Bulk Hiring Companies</h1>
        <div className="relative mt-4 md:mt-0">
          <select
            value={sortOption}
            onChange={handleSortChange}
            className="border rounded-md py-1 px-2 bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-300"
          >
            <option value="name">Sort by Name</option>
            <option value="type">Sort by Type</option>
            <option value="ctc">Sort by CTC</option>
            <option value="status">Sort by Status</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="py-3 px-4 text-left text-sm font-medium">Company Name</th>
              <th className="py-3 px-4 text-left text-sm font-medium">Type</th>
              <th className="py-3 px-4 text-left text-sm font-medium">CTC</th>
              <th className="py-3 px-4 text-left text-sm font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {companies.map((company, index) => (
              <tr
                key={index}
                className="hover:bg-gray-100 transition-transform transform cursor-pointer"
                style={{ transition: 'transform 0.3s ease' }}
                onClick={() => handleRowClick(company.name)}
              >
                <td className="py-3 px-4 text-sm">{company.name}</td>
                <td className="py-3 px-4 text-sm">{company.type}</td>
                <td className="py-3 px-4 text-sm">{company.ctc}</td>
                <td className="py-3 px-4 text-sm flex items-center space-x-2">
                  <span
                    className={`w-4 h-4 rounded-full border-2 ${
                      company.status === 'Active' ? 'bg-green-500 border-green-400' : 'bg-red-500 border-red-400'
                    }`}
                  ></span>
                  <span
                    className={`text-sm font-medium ${
                      company.status === 'Active' ? 'text-green-800' : 'text-red-800'
                    }`}
                  >
                    {company.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SeeAllCompanies;
