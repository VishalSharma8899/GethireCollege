import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import EachStudent from './EachStudent';
import ReactPaginate from 'react-paginate';

function StudentDetails() {
  const { name } = useParams();
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

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

  const studentsPerPage = 8;
  const pageCount = Math.ceil(students.length / studentsPerPage);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const currentStudents = students.slice(
    currentPage * studentsPerPage,
    (currentPage + 1) * studentsPerPage
  );

  const handleStudentClick = (student) => {
    setSelectedStudent(student);
  };

  const handleCloseDrawer = () => {
    setSelectedStudent(null);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Student Details of : {name}</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="py-3 px-4 text-left text-sm font-medium">Student Name</th>
              <th className="py-3 px-4 text-left text-sm font-medium">Job Type</th>
              <th className="py-3 px-4 text-left text-sm font-medium">Cleared Rounds</th>
              <th className="py-3 px-4 text-left text-sm font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentStudents.map((student, index) => (
              <tr
                key={index}
                className="hover:bg-gray-100 transition-transform transform cursor-pointer"
                onClick={() => handleStudentClick(student)}
              >
                <td className="py-3 px-4 text-sm">{student.name}</td>
                <td className="py-3 px-4 text-sm">{student.jobType}</td>
                <td className="py-3 px-4 text-sm">{student.clearedRounds}</td>
                <td className="py-3 px-4 text-sm flex items-center">
                  <span
                    className={`w-4 h-4 rounded-full border-2 mr-2 ${
                      student.status === 'Selected' ? 'bg-green-500 border-green-400' :
                      student.status === 'Pending' ? 'bg-yellow-500 border-yellow-400' :
                      student.status === 'Rejected' ? 'bg-red-500 border-red-400' :
                      'bg-gray-500 border-gray-400'
                    }`}
                  ></span>
                  <span
                    className={`text-sm font-medium ${
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
          pageLinkClassName={'text-sm font-medium text-gray-600'}
          // previousClassName={'flex items-center justify-center w-8 h-8 border border-gray-300 rounded-md'}
          // nextClassName={'flex items-center justify-center w-8 h-8 border border-gray-300 rounded-md'}
          disabledClassName={'opacity-50 cursor-not-allowed'}
          activeClassName={'bg-blue-500 text-white'}
        />
      </div>
    </div>
  );
}

export default StudentDetails;
