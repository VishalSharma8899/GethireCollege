import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoMdTime } from "react-icons/io";
import { useIndustryData } from "./Context/IndustryTalkContext";
import { useNavigate } from "react-router-dom";

function AllIndustry() {
  const data = useIndustryData();
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/training/all-industry/industry/${id}`); // Navigate to ParticularCourse page with course ID
  };

  return (
    <div className="w-full">
      <div className="mt-3 container font-bold text-xl">All Sessions</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {data.map((data) => (
          <div
            key={data.id}
            className="cursor-pointer flex flex-col"
            onClick={() => handleCardClick(data.id)}
          >
            <Card className="w-full h-full flex flex-col">
              <div className="relative w-full h-32">
                <Card.Img
                  variant="top"
                  src={data.img}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              <Card.Body className="bg-gray-50 flex flex-col justify-between">
                <Card.Text className="text-sm font-semibold">{data.name}</Card.Text>
                <Card.Text className="text-xs flex-grow">{data.text}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllIndustry;
