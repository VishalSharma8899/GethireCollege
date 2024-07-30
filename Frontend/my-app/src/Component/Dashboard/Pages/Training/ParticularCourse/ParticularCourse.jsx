import React from "react";
import { useParams } from "react-router-dom";
import { useCourses } from "../Context/CoursesContext";
import CourseDetail1 from "./CourseDetail1";

function ParticularCourse() {
  const { id } = useParams(); // Get the course ID from the URL
  const courses = useCourses();
  const course = courses.find(c => c.id == id)
  console.log(course);

  if (!course) {
    return <div>Course not found</div>; // Handle case where the course is not found
  }
  let name = course.name;
  let text = course.text;
  let img = course.img;
  let duration = course.duration;
  let creater = course.createdBy;
  let lang = course.language;

  return (
    <div className="w-full h-full">
      {/* First-Container */}
      <div className="w-full h-2/5 bg-gradient-to-r from-gray-800 via-gray-900 to-black">
        <CourseDetail1
          img={img}
          name={name}
          text={text}
          duration={duration}
          creater={creater}
          lang={lang}
        />
      </div>
    </div>
  );
}

export default ParticularCourse;


