import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useIndustryData } from "./Context/IndustryTalkContext";
import { useNavigate } from "react-router-dom";

function Industry() {
  const data = useIndustryData();
  const navigate = useNavigate();
 console.log(data);
  const handleCardClick = (id) => {
    navigate(`/training/all-industry/industry/${id}`); // Navigate to ParticularCourse page with course ID
  };
  return (
    <div className="w-full">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {data.slice(0, 4).map((data) => (
        <div
          key={data.id}
          className="cursor-pointer flex flex-col"
          onClick={() => handleCardClick(data.id)}
        >
          <Card className="w-full h-full flex flex-col">
            <div className="aspect-w-4 aspect-h-3">
              <Card.Img
                variant="top"
                src={data.img}
                className="object-cover w-full"
                style={{ height: "8rem" }} 
              />
            </div>

            <Card.Body className="bg-gray-50 flex flex-col justify-between">
              <Card.Text className="text-sm font-semibold">
                {data.name}
              </Card.Text>
              <Card.Text className="text-xs flex-grow">
                {data.title}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
    <div className="mt-4">
      <button
        onClick={() => navigate('/training/all-industry')}
        className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600"
      >
         All Event
      </button>
    </div>
  </div>
  );
}

export default Industry;




