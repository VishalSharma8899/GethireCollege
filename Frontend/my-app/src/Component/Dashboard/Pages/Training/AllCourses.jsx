import React from 'react';
import Courses from './Courses';
import Course1 from "../../../Images/course1.jfif";
import Course2 from "../../../Images/course2.jfif";
import Course3 from "../../../Images/course3.jpeg";
import Course4 from "../../../Images/course4.jfif";
import { useNavigate } from 'react-router-dom';

function AllCourses() {
  const navigate = useNavigate();

  const courses = [
    { id: 1, name: "Web Development", img: Course1, text: "Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text.", duration: "1hr" },
    { id: 2, name: "Data Analytics", img: Course2, text: "Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text.", duration: "1hr" },
    { id: 3, name: "Machine Learning", img: Course3, text: "Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text.", duration: "1hr" },
    { id: 4, name: "Python", img: Course4, text: "Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text.", duration: "1hr" },
    { id: 5, name: "Web Development", img: Course1, text: "Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text.", duration: "1hr" },
    { id: 6, name: "Data Analytics", img: Course2, text: "Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text.", duration: "1hr" },
    { id: 7, name: "Machine Learning", img: Course3, text: "Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text.", duration: "1hr" },
    { id: 8, name: "Python", img: Course4, text: "Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text.", duration: "1hr" },
  ];

  const handleCourseClick = (id) => {
    // Navigate to the course details page with the course ID as a parameter
    navigate(`/training/all-courses/course/${id}`);
  };

  return (
    <div className="w-full mb-6 flex justify-center flex-col ml-5">
      <h1 className="text-xl lg:text-2xl font-semibold mb-4">All Courses</h1>
      <div className="w-full flex flex-wrap gap-8 lg:gap-8">
        {courses.map((data) => (
          <Courses
            key={data.id}
            id={data.id}
            name={data.name}
            img={data.img}
            text={data.text}
            duration={data.duration}
            onClick={handleCourseClick}
          />
        ))}
      </div>
    </div>
  );
}

export default AllCourses;
