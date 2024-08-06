import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Update to useNavigate
import EachStudent from './EachStudent';
import ReactPaginate from 'react-paginate';
import { FaArrowLeft } from 'react-icons/fa'; // Import the back icon

function StudentDetails() {
  const { name } = useParams();
  const navigate = useNavigate(); // Initialize useNavigate
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [jobTypeFilter, setJobTypeFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const students = [
    { name: 'John Doe', jobType: 'Full-time', clearedRounds: 3, status: 'Selected' },
    { name: 'Jane Smith', jobType: 'Part-time', clearedRounds: 1, status: 'Pending' },
    { name: 'Alice Johnson', jobType: 'Internship', clearedRounds: 2, status: 'Rejected' },
    { name: 'Bob Brown', jobType: 'Full-time', clearedRounds: 0, status: 'Not Appeared' },
    { name: 'Emily Davis', jobType: 'Full-time', clearedRounds: 4, status: 'Selected' },
    { name: 'Michael Clark', jobType: 'Part-time', clearedRounds: 2, status: 'Pending' },
    { name: 'Sarah Wilson', jobType: 'Internship', clearedRounds: 1, status: 'Rejected' },
    { name: 'David Martinez', jobType: 'Full-time', clearedRounds: 5, status: 'Selected' },
    { name: 'Laura Brown', jobType: 'Part-time', clearedRounds: 0, status: 'Not Appeared' },
    { name: 'James Taylor', jobType: 'Full-time', clearedRounds: 3, status: 'Selected' },
    { name: 'Olivia Harris', jobType: 'Internship', clearedRounds: 2, status: 'Pending' },
    { name: 'William Lee', jobType: 'Part-time', clearedRounds: 4, status: 'Rejected' },
  ];

  const studentsPerPage = 12;
  const pageCount = Math.ceil(students.length / studentsPerPage);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const handleStudentClick = (student) => {
    setSelectedStudent(student);
  };

  const handleCloseDrawer = () => {
    setSelectedStudent(null);
  };

  const handleBackClick = () => {
    navigate(-1); // Navigate back
  };

  const filteredStudents = students.filter((student) => {
    return (
      (jobTypeFilter === '' || student.jobType === jobTypeFilter) &&
      (statusFilter === '' || student.status === statusFilter)
    );
  });

  const currentStudents = filteredStudents.slice(
    currentPage * studentsPerPage,
    (currentPage + 1) * studentsPerPage
  );

  return (
    <div className="p-4 md:p-6 bg-white rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 space-y-4 md:space-y-0">
        <div className="flex items-center">
          <FaArrowLeft 
            onClick={handleBackClick} 
            className="text-2xl cursor-pointer mr-4" 
          />
          <h2 className="text-xl md:text-2xl font-bold">
            Student Details of: {name}
          </h2>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <div className="flex flex-col">
            <label htmlFor="jobType" className="text-sm font-medium text-gray-700">
              Job Type
            </label>
            <select
              id="jobType"
              value={jobTypeFilter}
              onChange={(e) => setJobTypeFilter(e.target.value)}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="">All</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="status" className="text-sm font-medium text-gray-700">
              Status
            </label>
            <select
              id="status"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="">All</option>
              <option value="Selected">Selected</option>
              <option value="Pending">Pending</option>
              <option value="Rejected">Rejected</option>
              <option value="Not Appeared">Not Appeared</option>
            </select>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="py-2 px-2 sm:px-4 text-left text-xs sm:text-sm font-medium">Student Name</th>
              <th className="py-2 px-2 sm:px-4 text-left text-xs sm:text-sm font-medium">Job Type</th>
              <th className="py-2 px-2 sm:px-4 text-left text-xs sm:text-sm font-medium">Cleared Rounds</th>
              <th className="py-2 px-2 sm:px-4 text-left text-xs sm:text-sm font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentStudents.map((student, index) => (
              <tr
                key={index}
                className="hover:bg-gray-100 transition-transform transform cursor-pointer"
                onClick={() => handleStudentClick(student)}
              >
                <td className="py-2 px-2 sm:px-4 text-xs sm:text-sm">{student.name}</td>
                <td className="py-2 px-2 sm:px-4 text-xs sm:text-sm">{student.jobType}</td>
                <td className="py-2 px-2 sm:px-4 text-xs sm:text-sm">{student.clearedRounds}</td>
                <td className="py-2 px-2 sm:px-4 text-xs sm:text-sm flex items-center">
                  <span
                    className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 mr-2 ${
                      student.status === 'Selected' ? 'bg-green-500 border-green-400' :
                      student.status === 'Pending' ? 'bg-yellow-500 border-yellow-400' :
                      student.status === 'Rejected' ? 'bg-red-500 border-red-400' :
                      'bg-gray-500 border-gray-400'
                    }`}
                  ></span>
                  <span
                    className={`text-xs sm:text-sm font-medium ${
                      student.status === 'Selected' ? 'text-green-800' :
                      student.status === 'Pending' ? 'text-yellow-800' :
                      student.status === 'Rejected' ? 'text-red-800' :
                      'text-gray-800'
                    }`}
                  >
                    {student.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedStudent && (
        <EachStudent student={selectedStudent} onClose={handleCloseDrawer} />
      )}

      {/* Pagination */}
      <div className="mt-4 flex justify-center">
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'flex list-style-none space-x-2'}
          pageClassName={'flex items-center justify-center w-8 h-8 border border-gray-300 rounded-md'}
          pageLinkClassName={'text-xs sm:text-sm font-medium text-gray-600'}
          previousClassName={'flex items-center justify-center w-20 h-8 border border-gray-300 rounded-md'}
          nextClassName={'flex items-center justify-center w-20 h-8 border border-gray-300 rounded-md'}
          disabledClassName={'opacity-50 cursor-not-allowed'}
          activeClassName={'bg-blue-500 text-white'}
        />
      </div>
    </div>
  );
}

export default StudentDetails;
