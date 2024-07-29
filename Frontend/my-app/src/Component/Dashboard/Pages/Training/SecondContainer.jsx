import React from "react";
import Courses from "./Courses";
import Industry from "./Industry";
import Course1 from "../../../Images/course1.png";
import Course2 from "../../../Images/course2.png";
import Course3 from "../../../Images/course3.png";
import Course4 from "../../../Images/course4.jfif";
import industry1 from "../../../Images/industry1.jfif";
import industry2 from "../../../Images/industry2.jfif";
import industry3 from "../../../Images/industry3.jfif";
import industry4 from "../../../Images/industry4.jfif";
import Progress from "./Progress"
import BestSales from "./BestSales"
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function CoursesContainer() {
  const courses = [
    { id: 1, name: "Course Name 1", img: Course1 },
    { id: 2, name: "Course Name 2", img: Course2 },
    { id: 3, name: "Course Name 3", img: Course3 },
    { id: 4, name: "Course Name 4", img: Course4 },
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

  return (
    <div className="w-full h-full flex flex-col lg:flex-row gap-4 lg:gap-6 p-4 lg:p-6">
      {/* Courses/Industry */}
      <div className="flex flex-col lg:w-3/5 p-4 lg:p-6">
      {/* Courses Section */}
      <div className="w-full mb-4">
        <h1 className="text-xl lg:text-2xl font-semibold">Courses</h1>
        <div className="w-full flex flex-wrap gap-6 lg:gap-6 mt-2">
          {
            courses.map((data)=>{
              return(
                <div
              key={data.id}
              className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
            >
              <Card className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                <Card.Img
                  variant="top"
                  src={data.img}
                  className="object-cover w-full"
                  style={{ height: '8rem' }} // Reduced height for the image
                />
                <Card.Body>
                  <Card.Title className="text-center text-sm sm:text-base md:text-lg lg:text-xl">
                    {data.name}
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
              )
            })
          }
        </div>
      </div>

      {/* Industry Talk Section */}
      <div className="w-full">
        <h1 className="text-xl lg:text-2xl font-semibold">Industry Talk</h1>
        <div className="w-full flex flex-wrap gap-4 lg:gap-6 mt-2">
          {industryData.map((data) => (
            <div
              key={data.id}
              className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
            >
              <Industry name={data.name} img={data.img} topic={data.topic} />
            </div>
          ))}
        </div>
      </div>
    </div>

      {/* Progress Section */}
      {/* <div className='w-full lg:w-2/5 bg-gray-50 h-full rounded-lg p-4 lg:p-6'>
        <Progress />
        <BestSales />
      </div> */}
    </div>
  );
}

export default CoursesContainer;
