import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CollegePage = () => {
  const [collegeData, setCollegeData] = useState(null);

  useEffect(() => {
    const id = 1; // You might want to make this dynamic or configurable
    const fetchCollegeData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/college_data_get/${id}`);
        setCollegeData(response.data);
      } catch (error) {
        console.error('Error fetching college data:', error);
      }
    };

    fetchCollegeData();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">College Information</h1>

      {collegeData ? (
        <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
          <div className="text-center mb-4">
            {collegeData.college_img && (
              <img
                src={`data:image/png;base64,${collegeData.college_img}`}
                alt="College"
                className="w-32 h-32 object-cover mx-auto"
              />
            )}
            {collegeData.college_logo && (
              <img
                src={`data:image/png;base64,${collegeData.college_logo}`}
                alt="College Logo"
                className="w-32 h-32 object-cover mx-auto mt-4"
              />
            )}
          </div>

          <div>
            <p><strong>College Logo Name:</strong> {collegeData.college_logo_name}</p>
            <p><strong>College Name:</strong> {collegeData.college_name}</p>
            <p><strong>College Address:</strong> {collegeData.college_address}</p>
            <p><strong>College Website:</strong> <a href={collegeData.college_website} className="text-blue-600 hover:underline">{collegeData.college_website}</a></p>
            <p><strong>College Facebook ID:</strong> {collegeData.college_facebook_id}</p>
            <p><strong>College LinkedIn ID:</strong> {collegeData.college_linkedin_id}</p>
            <p><strong>College WhatsApp Number:</strong> {collegeData.college_whatsapp_num}</p>
            <p><strong>College Gmail ID:</strong> <a href={`mailto:${collegeData.college_gmail_id}`} className="text-blue-600 hover:underline">{collegeData.college_gmail_id}</a></p>
            <p><strong>College Info:</strong> {collegeData.college_info}</p>
            <p><strong>College Location:</strong> {collegeData.college_location}</p>
          </div>

          {/* Display top placements if they exist */}
          {collegeData.college_top_placements && collegeData.college_top_placements.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mt-6 mb-4">Top Placements</h2>
              <ul className="space-y-4">
                {collegeData.college_top_placements.map((placement, index) => (
                  <li key={index} className="p-4 bg-gray-100 rounded-md">
                    <p><strong>Company:</strong> {placement.placementCompany}</p>
                    <p><strong>Student Name:</strong> {placement.studentName}</p>
                    <p><strong>CTC:</strong> {placement.ctc}</p>
                    <p><strong>Location:</strong> {placement.location}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Display cultural events if they exist */}
          {collegeData.college_cultural_events && collegeData.college_cultural_events.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mt-6 mb-4">Cultural Events</h2>
              <ul className="space-y-4">
                {collegeData.college_cultural_events.map((event, index) => (
                  <li key={index} className="p-4 bg-gray-100 rounded-md">
                    <h3 className="text-lg font-semibold">{event.eventName}</h3>
                    <p><strong>Date:</strong> {new Date(event.eventDate).toLocaleDateString()}</p>
                    <p><strong>Description:</strong> {event.description}</p>
                    {event.image && (
                      <img
                      src={`data:image/png;base64,${event.image}`}
                        alt={event.eventName}
                        className="w-full h-auto mt-2 rounded-md"
                        onError={(e) => console.error('Image load error:', e)}
                      />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <p className="text-center text-gray-500">Loading college data...</p>
      )}
    </div>
  );
};

export default CollegePage;
