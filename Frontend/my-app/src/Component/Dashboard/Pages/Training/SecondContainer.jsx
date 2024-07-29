import React from "react";
import Courses from "./Courses";
import Industry from "./Industry";
import Course1 from "../../../Images/course1.jfif";
import Course2 from "../../../Images/course2.jfif";
import Course3 from "../../../Images/course3.jpeg";
import Course4 from "../../../Images/course4.jfif"
import industry1 from "../../../Images/industry1.jfif";
import industry2 from "../../../Images/industry2.jfif";
import industry3 from "../../../Images/industry3.jfif";
import industry4 from "../../../Images/industry4.jfif";
import Progress from "./Progress"
import BestSales from "./BestSales"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router";

function CoursesContainer() {
  const navigate=useNavigate();
  const courses = [
    { id: 1, name: "Web Development", img: Course1,text:"Lorem Ipsum is simply dummy text. " ,duration:"1hr" },
    { id: 2, name: "Data Analytics", img: Course2,text:"Lorem Ipsum is simply dummy text. ",duration:"1hr"  },
    { id: 3, name: "Machine Learning", img: Course3,text:"Lorem Ipsum is simply dummy text. ",duration:"1hr"},
    { id: 4, name: "Python", img: Course4, text:"Lorem Ipsum is simply dummy text. ",duration:"1hr"  },
  ];

  const industryData = [
    { id: 1, img: industry1, name: "John Abraham", topic: "Data Analytics" },
    { id: 2, img: industry2, name: "Jane Doe", topic: "Machine Learning" },
    { id: 3, img: industry3, name: "Alice Smith", topic: "Cybersecurity" },
    {
      id: 4,
      img: industry4,
      name: "Bob Johnson",
      topic: "Software Development",
    },
  ];
  const handleAllCourses=()=>{
    navigate("/training/all-courses")
  }
  return (
    <div className="w-full h-full flex flex-col lg:flex-row gap-4 lg:gap-6 p-4 lg:p-6">
      {/* Courses/Industry */}
      <div className="flex flex-col lg:w-3/5 p-4 lg:p-6">
        {/* Courses Section */}
        <div className="w-full mb-6">
          <h1 className="text-xl lg:text-2xl font-semibold mb-4">Courses</h1>
          <div className="w-full">
            <Courses />
          </div>
        </div>

        {/* Industry Talk Section */}
        <div className="w-full mb-4">
          <h1 className="text-xl lg:text-2xl font-semibold">Industry Talk</h1>
          <div className="w-full flex flex-wrap gap-6 lg:gap-6 mt-2">
            {industryData.map((data) => {
              return (
                <Industry
                  id={data.id}
                  name={data.name}
                  img={data.img}
                  topic={data.topic}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Progress Section */}
      <div className="w-full lg:w-2/5 bg-gray-50 h-full rounded-lg p-4 lg:p-6">
        <Progress />
        <BestSales />
      </div>
    </div>
  );
}

export default CoursesContainer;

