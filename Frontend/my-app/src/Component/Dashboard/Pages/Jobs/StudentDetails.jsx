// src/components/CompanyDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

function StudentDetails() {
  const { name } = useParams();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Company Details</h2>
      <p>Details for: {name}</p>
      {/* Add more details or fetch data based on the company name */}
    </div>
  );
}

export default StudentDetails;
