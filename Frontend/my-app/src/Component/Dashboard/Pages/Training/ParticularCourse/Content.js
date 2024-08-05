import React, { useState } from 'react';

const CourseContent = ({ content , video }   ) => {
  const [openSectionIndex, setOpenSectionIndex] = useState(null);

  if (!content || !content.sections) {
    return <div>Loading...</div>;
  }

  const toggleSection = (index) => {
    setOpenSectionIndex(openSectionIndex === index ? null : index);
  };
  const baseUrl = 'http://localhost:3000';

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">{content.ContentTitle}</h1>
      
      {/* Overall Course Video */}
      { video && (
        <div className="mb-6">
          <video
            className="w-full h-auto rounded-lg"
            controls
            src={`${baseUrl}/${video}`}
          />
        </div>
      )}

      {/* Sections */}
      {content.sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-4">
          <button
            className="w-full bg-gray-200 text-left px-4 py-2 rounded-t-lg flex justify-between items-center focus:outline-none"
            onClick={() => toggleSection(sectionIndex)}
          >
            <h2 className="text-xl font-semibold text-gray-700">{section.sectionTitle}</h2>
            <span className="text-lg text-gray-600">{openSectionIndex === sectionIndex ? '−' : '+'}</span>
          </button>
          {openSectionIndex === sectionIndex && (
            <div className="bg-white border border-gray-300 rounded-b-lg">
              <ul>
                {section.lectures.map((lecture, lectureIndex) => (
                  <li key={lectureIndex} className="flex justify-between items-center px-4 py-2 border-t border-gray-200">
                    <span className="text-gray-800">{lecture.title}</span>
                    <span className="text-gray-500">{lecture.duration}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CourseContent;
