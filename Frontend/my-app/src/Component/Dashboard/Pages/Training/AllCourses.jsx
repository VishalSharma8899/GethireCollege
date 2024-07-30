import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoMdTime } from "react-icons/io";
import { useCourses } from "./Context/CoursesContext";
import { useNavigate } from "react-router-dom";

function AllCourses() {
  const courses = useCourses();
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/training/all-courses/course/${id}`); // Navigate to ParticularCourse page with course ID
  };

  return (
    <div className="w-full">
      <div className="mt-3 container font-bold text-xl">
        ALL Courses
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {courses.map((course) => (
          <div
            key={course.id}
            className="cursor-pointer flex flex-col"
            onClick={() => handleCardClick(course.id)}
          >
            <Card className="w-full h-full flex flex-col">
              <div className="aspect-w-4 aspect-h-3">
                <Card.Img
                  variant="top"
                  src={course.img}
                  className="object-cover w-full"
                  style={{ height: "8rem" }}
                />
              </div>

              <Card.Body className="bg-gray-50 flex flex-col justify-between">
                <Card.Text className="text-sm font-semibold">
                  {course.name}
                </Card.Text>
                <Card.Text className="text-xs flex-grow">
                  {course.text}
                </Card.Text>
                <div className="flex items-center gap-1 text-xs">
                  <IoMdTime className="mt-1" />
                  <span>{course.duration}</span>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllCourses;
