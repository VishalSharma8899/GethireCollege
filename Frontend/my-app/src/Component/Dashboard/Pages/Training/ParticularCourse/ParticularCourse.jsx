import React from "react";
import { useParams } from "react-router-dom";
import { useCourses } from "../Context/CoursesContext";
import CourseDetail1 from "./CourseDetail1";
import CourseDetail2 from "./CourseDetail2";
import Learn from "./Learn";
import Benefits from "./Benefits";

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
  let price = course.price;

  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row lg:relative">
      {/* First-Container */}
      <div className="w-full h-ful flex flex-col gap-2">
        <CourseDetail1
          img={img}
          name={name}
          text={text}
          duration={duration}
          creater={creater}
          lang={lang}
        />
      
        <Learn/>
        <Benefits/>
      </div>

      {/* Second-Container */}
      <div className="w-full lg:w-1/4 bg-gray-50 p-4 lg:p-14 lg:absolute lg:top-6 lg:right-10">
        <CourseDetail2 img={img} price={price} />
      </div>

    </div>
  );
}

export default ParticularCourse;
