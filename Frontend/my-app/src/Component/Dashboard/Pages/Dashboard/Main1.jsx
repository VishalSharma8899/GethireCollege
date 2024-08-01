import React, { useState } from "react";
import graph from "../../../Images/Graph.png";
import graphdown from "../../../Images/Graphdown.png";
import { MdOutlineSettingsApplications } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { IoIosContact } from "react-icons/io";

function Main1() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleMouseEnter = (icon) => {
    setHoveredIcon(icon);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  const placements = [
    {
      rank: "#1",
      name: "John",
      branch: "CSE",
      company: "Google",
      package: "56LPA",
    },
    {
      rank: "#2",
      name: "Mark",
      branch: "CSE",
      company: "Microsoft",
      package: "45LPA",
    },
    {
      rank: "#3",
      name: "Bark",
      branch: "ITB",
      company: "Walmart",
      package: "36LPA",
    },
    {
      rank: "#4",
      name: "Alexa",
      branch: "ECE",
      company: "Deloitte",
      package: "30LPA",
    },
  ];

  return (
    <div className="bg-white w-full min-h-screen mt-3 rounded-lg">
      <div className="bg-[rgba(246, 249, 254, 1)] w-full min-h-screen mt-3 rounded-lg">
        <div className="container mx-auto p-4">
          <div className="flex flex-wrap justify-center md:justify-between">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
              <div className="bg-[#b6fdb6] p-3 rounded-lg flex items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <div className="flex flex-col">
                  <p className="text-xs mb-2 font-bold">No. of Students</p>
                  <p className="text-gray-600 mb-2 font-bold">1800+</p>
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
                  <p className="text-gray-600 mb-2 font-bold">500+</p>
                  <p className="text-red-500 font-bold">-4.4%</p>
                </div>
                <img className="w-11 mt-1 ml-auto" src={graphdown} alt="Graph" />
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 md:mt-0">
              <div className="bg-[#f4e4e6] p-3 rounded-lg flex items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <div className="flex flex-col">
                  <p className="text-xs mb-2 font-bold">No of Hiring</p>
                  <p className="text-gray-600 mb-2 font-bold">5 Years</p>
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
              <div className="bg-[rgba(237, 244, 251, 1)] grid grid-cols-1 sm:grid-cols-6 p-2 rounded-md mb-2 text-center">
                <p className="hidden sm:block w-1/6">Rank</p>
                <p className="hidden sm:block w-1/6">Name</p>
                <p className="hidden sm:block w-1/6">Branch</p>
                <p className="hidden sm:block w-1/6">Company</p>
                <p className="hidden sm:block w-1/6">Package</p>
                <p className="hidden sm:block w-1/6">Action</p>
              </div>
              {placements.map((placement, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 sm:grid-cols-6 p-2 rounded-md mb-2 bg-gray-100 text-center gap-2"
                >
                  <div className="sm:hidden font-bold text-left">Rank:</div>
                  <p className="w-full sm:w-1/6">{placement.rank}</p>
                  <div className="sm:hidden font-bold text-left">Name:</div>
                  <p className="w-full sm:w-1/6">{placement.name}</p>
                  <div className="sm:hidden font-bold text-left">Branch:</div>
                  <p className="w-full sm:w-1/6">{placement.branch}</p>
                  <div className="sm:hidden font-bold text-left">Company:</div>
                  <p className="w-full sm:w-1/6">{placement.company}</p>
                  <div className="sm:hidden font-bold text-left">Package:</div>
                  <p className="w-full sm:w-1/6">{placement.package}</p>
                  <div className="sm:hidden font-bold text-left">Action:</div>
                  <div className="flex gap-1">
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
                          Contact
                        </div>
                      )}
                    </div>
                  </div>
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
