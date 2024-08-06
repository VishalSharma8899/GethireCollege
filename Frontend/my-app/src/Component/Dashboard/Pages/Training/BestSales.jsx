import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../../Images/course3.jpeg";

function BestSales() {
  const [bestCourses, setBestCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:3000/college/TopCoursesTraining");
        const data = await response.json();
        console.log("Fetched courses data:", data); // Log the fetched data
        setBestCourses(data.topCourses || []); // Access the correct property
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const handleBuyNow = (id) => {
    navigate(`/training/all-courses/course/${id}`);
  };
  const baseUrl = 'http://localhost:3000';
  return (
    <div className="w-full h-full bg-gray-50 mt-4">
      <div className="w-full p-4">
        <div className="mb-3">
          <h1 className="text-xl font-bold">Best Courses</h1>
        </div>
        {bestCourses.length > 0 ? (
          bestCourses.slice(0, 3).map((data) => (
            <div
              key={data._id}
              className="w-full h-24 mb-2 bg-white rounded p-3 flex justify-between gap-2"
            >
              <div className="ml-4 flex gap-4 justify-center items-center">
              <img src={data.courseImage ? `${baseUrl}/${data.courseImage}` : img1} alt="" className="w-16 h-16" />
                <div className="flex flex-col">
                  <h1 className="text-xl text-blue-500">{data.title}</h1>
                  <p>{data.price}</p>
                </div>
              </div>
              <div className="flex flex-col font-thin text-gray-600 justify-center items-center">
                <button
                  onClick={() => handleBuyNow(data._id)}
                  className="bg-green-100 w-24 h-10 flex items-center rounded justify-center p-2"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No best courses available.</p>
        )}
      </div>
    </div>
  );
}

export default BestSales;
