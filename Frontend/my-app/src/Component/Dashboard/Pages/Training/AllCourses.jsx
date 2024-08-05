import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoMdTime } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Courses() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:3000/college/getCourse");
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const handleCardClick = (id) => {
    navigate(`/training/all-courses/course/${id}`);
  };
  const baseUrl = 'http://localhost:3000';
   
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {courses.map((course) => (
          <div
            key={course._id}
            className="cursor-pointer flex flex-col"
            onClick={() => handleCardClick(course._id)}
          >
            <Card className="w-full h-full flex flex-col">
              <div className="aspect-w-4 aspect-h-3">
                <Card.Img
                  variant="top"
                  src={`${baseUrl}/${course.courseImage}`}
                  className="object-cover w-full"
                  style={{ height: "8rem" }}
                />
              </div>

              <Card.Body className="bg-gray-50 flex flex-col justify-between">
                <Card.Text className="text-sm font-semibold">
                  {course.title}
                </Card.Text>
                <Card.Text className="text-xs flex-grow">
                  {course.description}
                </Card.Text>
                <div className="flex items-center gap-1 text-xs">
                  <IoMdTime />
                  <span>{course.includes?.hoursOnDemandVideo || 0} hours</span>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <button
          onClick={() => navigate("/training/all-courses")}
          className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600"
        >
          All Courses
        </button>
      </div>
    </div>
  );
}

export default Courses;
