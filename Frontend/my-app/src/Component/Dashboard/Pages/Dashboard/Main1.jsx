 
import graph from "../../../Images/Graph.png";
import graphdown from "../../../Images/Graphdown.png";
import { MdOutlineSettingsApplications } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { IoIosContact } from "react-icons/io";
import { useEffect, useState } from 'react';

function Main1() {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  // no of student
  const [count, setCount] = useState(null);
  //no of placed student
  const [placedcount, setplacedCount] = useState(0);
  const [placedData, setPlacedData] = useState([]);
  const authToken = localStorage.getItem('authToken');
  console.log(authToken);
  async function fetchStudentCount() {
    if (!authToken) {
        console.error('No authToken found');
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/students/alluser', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.count;  
    } catch (error) {
        console.error('Error fetching student count:', error);
    }
}
async function fetchPlacedStudentCount() {
  if (!authToken) {
      console.error('No authToken found');
      return;
  }

  try {
      const response = await fetch('http://localhost:3000/students/placedStudent', {
          method: 'GET',
          headers: {
              'Authorization': `Bearer ${authToken}`
          }
      });
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      return data;  
  } catch (error) {
      console.error('Error fetching student count:', error);
  }
}
async function fetchPlacedStudentdata() {
  if (!authToken) {
      console.error('No authToken found');
      return;
  }

  try {
      const response = await fetch(' http://localhost:3000/college/topplaced', {
          method: 'GET',
          headers: {
              'Authorization': `Bearer ${authToken}`
          }
      });
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      return data;  
  } catch (error) {
      console.error('Error fetching student count:', error);
  }
}

  useEffect(() => {
    async function getCount() {
        const count = await fetchStudentCount();
        setCount(count);
    }
    async function getplacedCount() {
      const placedcount= await  fetchPlacedStudentCount();
      setplacedCount(placedcount.count);
  }
  async function getplaceddata() { //http://localhost:3000/students/topplaced
    const responseData = await fetchPlacedStudentdata();
    if (responseData && Array.isArray(responseData.students)) {
      setPlacedData(responseData.students);
    } else {
      setPlacedData([]);
    }
  }
    getCount();
    getplaceddata();
    getplacedCount(); 
}, []);
  const handleMouseEnter = (icon) => {
    setHoveredIcon(icon);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  
  return (
    <div className="bg-white w-full min-h-screen mt-2 rounded-lg">
      <div className="bg-[rgba(246, 249, 254, 1)] w-full min-h-screen mt-1 rounded-lg">
        <div className="container mx-auto p-4">
          <div className="flex flex-wrap justify-center md:justify-between">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
              <div className="bg-[#b6fdb6] p-3 rounded-lg flex items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <div className="flex flex-col">
                  <p className="text-xs mb-2 font-bold">No. of Students</p>
                  <p className="text-gray-600 mb-2 font-bold">{count}+</p>
                  <p className="text-green-500 font-bold">+2.5%</p>
                </div>
                <img className="w-11 mt-1 ml-auto" src={graph} alt="Graph" />
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
              <div className="bg-[#cfcfe5] p-3 rounded-lg flex items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <div className="flex flex-col">
                  <p className="text-xs mb-2 font-bold">No. of Companies</p>
                  <p className="text-gray-600 mb-2 font-bold">150+</p>
                  <p className="text-red-500 font-bold">-5.5%</p>
                </div>
                <img className="w-11 mt-1 ml-auto" src={graphdown} alt="Graph" />
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 md:mt-0">
              <div className="bg-[#f5f5a4] p-3 rounded-lg flex items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <div className="flex flex-col">
                  <p className="text-xs mb-2 font-bold">No. of Placements</p>
                  <p className="text-gray-600 mb-2 font-bold">{placedcount}+</p>
                  <p className="text-red-500 font-bold">-4.4%</p>
                </div>
                <img className="w-11 mt-1 ml-auto" src={graphdown} alt="Graph" />
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 md:mt-0">
              <div className="bg-[#f4e4e6] p-3 rounded-lg flex items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <div className="flex flex-col">
                  <p className="text-xs mb-2 font-bold">No of Hiring</p>
                  <p className="text-gray-600 mb-2 font-bold">5 Yr.</p>
                  <p className="text-green-500 font-bold">+6.5%</p>
                </div>
                <img className="w-11 mt-1 ml-auto" src={graph} alt="Graph" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg h-auto mt-3 p-4">
      <div className="flex justify-between items-center">
        <p className="font-bold text-sm md:text-lg">Top Placements</p>
        <button className="inline-block rounded px-4 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow transition duration-150 ease-in-out bg-violet-500 hover:bg-violet-600 focus:bg-violet-600 active:bg-violet-700">
          See all
        </button>
      </div>
      <div className="mt-4">
        <div className="bg-[rgba(237, 244, 251, 1)] grid grid-cols-1 sm:grid-cols-6 p-2 rounded-md mb-2 gap-24 text-center">
          <p className="hidden sm:block w-1/6">Rank</p>
          <p className="hidden sm:block w-1/6">Name</p>
          <p className="hidden sm:block w-1/6">Branch</p>
          <p className="hidden sm:block w-1/6">Company</p>
          <p className="hidden sm:block w-1/6">Package</p>
        </div>
        {placedData.map((placeddata, index) => (
          <div
            key={index}
            className="grid grid-cols-1 sm:grid-cols-6 p-2 rounded-md mb-2 bg-gray-100 text-center gap-24"
          >
            <p className="w-full sm:w-1/6">#{index + 1}</p>
            <p className="w-full sm:w-1/6">{placeddata.name}</p>
            <p className="w-full sm:w-1/6">{placeddata.department}</p>
            <p className="w-full sm:w-1/6">{placeddata.companyName}</p>
            <p className="w-full sm:w-1/6">{placeddata.salary}</p>
            {/* <div className="w-full sm:w-1/6">
              <div className="flex gap-1 justify-center">
                <div
                  className="relative flex flex-col items-center"
                  onMouseEnter={() => handleMouseEnter(`application-${index}`)}
                  onMouseLeave={handleMouseLeave}
                >
                  <MdOutlineSettingsApplications className="text-2xl cursor-pointer transition-transform duration-300 hover:scale-110" />
                  {hoveredIcon === `application-${index}` && (
                    <div className="absolute top-full mt-2 bg-gray-800 text-white text-xs rounded transition-opacity duration-300 p-1">
                      Application
                    </div>
                  )}
                </div>
                <div
                  className="relative flex flex-col items-center"
                  onMouseEnter={() => handleMouseEnter(`offer-${index}`)}
                  onMouseLeave={handleMouseLeave}
                >
                  <BiSolidOffer className="text-2xl cursor-pointer transition-transform duration-300 hover:scale-110" />
                  {hoveredIcon === `offer-${index}` && (
                    <div className="absolute top-full mt-2 bg-gray-800 text-white text-xs rounded transition-opacity duration-300 p-1">
                      Offers
                    </div>
                  )}
                </div>
                <div
                  className="relative flex flex-col items-center"
                  onMouseEnter={() => handleMouseEnter(`contact-${index}`)}
                  onMouseLeave={handleMouseLeave}
                >
                  <IoIosContact className="text-2xl cursor-pointer transition-transform duration-300 hover:scale-110" />
                  {hoveredIcon === `contact-${index}` && (
                    <div className="absolute top-full mt-2 bg-gray-800 text-white text-xs rounded transition-opacity duration-300 p-1">
                      {placeddata.contactInformation.email}<br />
                      {placeddata.contactInformation.phone}
                    </div>
                  )}
                </div>
              </div>
            </div> */}
          </div>
        ))}
      </div>
    </div>
        </div>
      </div>
    </div>
  );
}

export default Main1;
