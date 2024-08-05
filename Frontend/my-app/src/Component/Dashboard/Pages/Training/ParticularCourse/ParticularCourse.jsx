// import React from "react";
// import { useParams } from "react-router-dom";
// import { useCourses } from "../Context/CoursesContext";
// import CourseDetail1 from "./CourseDetail1";
// import CourseDetail2 from "./CourseDetail2";
// import Learn from "./Learn";
// import Benefits from "./Benefits";

// function ParticularCourse() {
//   const { id } = useParams(); // Get the course ID from the URL
//   const courses = useCourses();
//   const course = courses.find(c => c.id == id)
//   console.log(course);

//   if (!course) {
//     return <div>Course not found</div>; // Handle case where the course is not found
//   }
//   let name = course.name;
//   let text = course.text;
//   let img = course.img;
//   let duration = course.duration;
//   let creater = course.createdBy;
//   let lang = course.language;
//   let price = course.price;

//   return (
//     <div className="w-full min-h-screen flex flex-col lg:flex-row lg:relative">
//       {/* First-Container */}
//       <div className="w-full h-ful flex flex-col gap-2">
//         <CourseDetail1
//           img={img}
//           name={name}
//           text={text}
//           duration={duration}
//           creater={creater}
//           lang={lang}
//         />
      
//         <Learn/>
//         <Benefits/>
//       </div>

//       {/* Second-Container */}
//       <div className="w-full lg:w-1/4 bg-gray-50 p-4 lg:p-14 lg:absolute lg:top-6 lg:right-10">
//         <CourseDetail2 img={img} price={price} />
//       </div>

//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import CourseDetail1 from "./CourseDetail1";
import CourseDetail2 from "./CourseDetail2";
import Learn from "./Learn";
import Benefits from "./Benefits";
import  CourseContent from "./Content";

function ParticularCourse() {
  const { id } = useParams(); // Get the course ID from the URL
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:3000/college/getCourse'); // Endpoint to fetch all courses
        
        setCourses(response.data);
        const foundCourse = response.data.find(c => c._id === id);
        setCourse(foundCourse);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
     

    fetchCourses();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; // Handle loading state
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Handle error state
  }
   
  if (!course) {
    return <div>No course available</div>; // Handle case where course is not found
  }
  console.log('Rendering course:', course);
  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row lg:relative">
      {/* First-Container */}
      <div className="w-full h-full flex flex-col gap-2">
        <CourseDetail1
          img={course.courseImage}
          name={course.title}
          text={course.description}
          duration={course.includes?.hoursOnDemandVideo}
          creator={course.instructor}
          lang={course.languages}
          stars = {course.ratings?.stars}
          students = {course.students}
          lastUpdated ={course.lastUpdated}
        />
     <div class="flex flex-row space-y-4">
  <Learn whatYouWillLearn={course.whatYouWillLearn} />
  <Benefits includes={course.includes} />
</div>

<div className="container mx-auto p-4">
      <CourseContent content={course.content } video = {course.Videos} />
    </div>
      </div>
 
      {/* Second-Container */}
      <div className="w-full lg:w-1/4 bg-gray-50 p-4 lg:p-14 lg:absolute lg:top-6 lg:right-10">
        <CourseDetail2  video = {course.demoVideo} price={course.price} discount = {course.discount}  originalPrice={course.originalPrice}/>
      </div>
    </div>
  );
}

export default ParticularCourse;
