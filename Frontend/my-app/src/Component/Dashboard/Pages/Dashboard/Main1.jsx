 
import graph from "../../../Images/Graph.png";
import graphdown from "../../../Images/Graphdown.png";
import { MdOutlineSettingsApplications } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { IoIosContact } from "react-icons/io";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router";


function Main1() {
   const navigate = useNavigate();
   const handleStudent= () =>{
    navigate('/student')
   }
   const handleCompany = ()=>{
    navigate('/jobs/see-all-companies')
   }
   const handlePlacement = ()=>{
    navigate('/placement')
   }
  const handleHiring = () =>{
    navigate('/jobs')
  }
  const [hoveredIcon, setHoveredIcon] = useState(null);
  // no of student
  const [count, setCount] = useState(0);
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
    <div className=" w-full min-h-screen mt-2 rounded-lg">
      <div className="bg-[rgba(246, 249, 254, 1)] w-full min-h-screen mt-1 rounded-lg">
        <div className="container mx-auto p-4 -mt-16">
          <div className="flex flex-wrap justify-center md:justify-between">
            <div onClick={handleStudent} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
              <div className="bg-white shadow-md p-3 rounded-lg flex items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <div className="flex flex-col">
                  <p className="text-xs mb-2 font-bold">No. of Students</p>
                  <p className="text-gray-600 mb-2 font-bold">{count}+</p>
                  <p className="text-green-500 font-bold">+2.5%</p>
                </div>
                <img className="w-11 mt-1 ml-auto" src={graph} alt="Graph" />
              </div>
            </div>
            <div onClick={handleCompany} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
              <div className="bg-white shadow-md p-3 rounded-lg flex items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <div className="flex flex-col">
                  <p className="text-xs mb-2 font-bold">No. of Companies</p>
                  <p className="text-gray-600 mb-2 font-bold">150+</p>
                  <p className="text-red-500 font-bold">-5.5%</p>
                </div>
                <img className="w-11 mt-1 ml-auto" src={graphdown} alt="Graph" />
              </div>
            </div>
            <div onClick={handlePlacement} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 md:mt-0">
              <div className="bg-white shadow-md p-3 rounded-lg flex items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <div className="flex flex-col">
                  <p className="text-xs mb-2 font-bold">No. of Placements</p>
                  <p className="text-gray-600 mb-2 font-bold">{placedcount}+</p>
                  <p className="text-red-500 font-bold">-4.4%</p>
                </div>
                <img className="w-11 mt-1 ml-auto" src={graphdown} alt="Graph" />
              </div>
            </div>
            <div onClick={handleHiring} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 md:mt-0">
              <div className="bg-white shadow-md p-3 rounded-lg flex items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <div className="flex flex-col">
                  <p className="text-xs mb-2 font-bold">No of Hiring</p>
                  <p className="text-gray-600 mb-2 font-bold">5 Yr.</p>
                  <p className="text-green-500 font-bold">+6.5%</p>
                </div>
                <img className="w-11 mt-1 ml-auto" src={graph} alt="Graph" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg h-auto mt-3 p-4 shadow-md">
  <div className="flex justify-between items-center mb-4">
    <p className="text-lg font-semibold">Top Placements</p>
    <button className="px-4 py-2 text-sm font-medium text-white bg-violet-500 rounded-md shadow-sm transition-colors duration-150 hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500">
      See all
    </button>
  </div>
  <div className="bg-[rgba(237, 244, 251, 1)] grid grid-cols-1 md:grid-cols-4 gap-4 rounded-md p-2 text-center">
    <p className="hidden md:block">Rank</p>
    <p className="hidden md:block">Name</p>
    <p className="hidden md:block">Company</p>
    <p className="hidden md:block">Package</p>
  </div>
  {placedData.map((placeddata, index) => (
    <div
      key={index}
      className="grid grid-cols-1 md:grid-cols-4 gap-4 p-2 border-b border-gray-200 text-center"
    >
      <p className="md:col-span-1">#{index + 1}</p>
      <p className="md:col-span-1">{placeddata.name}</p>
      <p className="md:col-span-1">{placeddata.companyName}</p>
      <p className="md:col-span-1">{placeddata.salary}</p>
    </div>
  ))}
</div>


        </div>
      </div>
    </div>
  );
}

export default Main1;
