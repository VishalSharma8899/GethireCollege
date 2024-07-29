import React from 'react';
import { useParams } from 'react-router-dom';
import CourseDetail1 from './CourseDetail1';

function ParticularCourse() {
  const { id } = useParams();
  return (
    <div className='w-full h-screen bg-blue-50'>
      {/* First-Container */}
      <div className="w-full flex-shrink-0 min-h-[150px] md:min-h-[200px] lg:min-h-[300px] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center rounded">
  <CourseDetail1 />
</div>


      {/* Second Container */}
      <div>

      </div>
    </div>
  );
}

export default ParticularCourse;
