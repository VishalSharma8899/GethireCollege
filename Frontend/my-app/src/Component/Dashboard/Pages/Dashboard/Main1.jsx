import React from "react";
import graph from "../../../Images/Graph.png";
import graphdown from "../../../Images/Graphdown.png";

function Main1() {
  return (
    <div className="bg-white w-full h-screen mt-3 rounded-lg">
      <div className="bg-[rgba(246, 249, 254, 1)] w-full h-screen mt-3 rounded-lg">
        <div className="container mx-auto p-4">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 lg:w-1/4 p-2">
              <div className="bg-[#b6fdb6] p-3 rounded-lg flex items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <div className="flex flex-col">
                  <p className="text-xs mb-2 font-bold">No. of Students</p>
                  <p className="text-gray-600 mb-2 font-bold">1800+</p>
                  <p className="text-green-500 font-bold">+2.5%</p>
                </div>
                <img className="w-11 mt-1 ml-auto" src={graph} alt="Graph" />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 p-2">
              <div className="bg-[#cfcfe5] p-3 rounded-lg flex items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <div className="flex flex-col">
                  <p className="text-xs mb-2 font-bold">No. of Companies</p>
                  <p className="text-gray-600 mb-2 font-bold">150+</p>
                  <p className="text-red-500 font-bold">-5.5%</p>
                </div>
                <img className="w-11 mt-1 ml-auto" src={graphdown} alt="Graph" />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 p-2 mt-4 md:mt-0">
              <div className="bg-[#f5f5a4] p-3 rounded-lg flex items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <div className="flex flex-col">
                  <p className="text-xs mb-2 font-bold">No. of Placements</p>
                  <p className="text-gray-600 mb-2 font-bold">500+</p>
                  <p className="text-red-500 font-bold">-4.4%</p>
                </div>
                <img className="w-11 mt-1 ml-auto" src={graphdown} alt="Graph" />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 p-2 mt-4 md:mt-0">
              <div className="bg-[#f4e4e6] p-3 rounded-lg flex items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <div className="flex flex-col">
                  <p className="text-xs mb-2 font-bold">Record</p>
                  <p className="text-gray-600 mb-2 font-bold">5 Years</p>
                  <p className="text-green-500 font-bold">+6.5%</p>
                </div>
                <img className="w-11 mt-1 ml-auto" src={graph} alt="Graph" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg h-96 mt-3 p-4">
            <div className="flex justify-between items-center">
              <p className="font-bold">Top Placements</p>
              <button
                style={{
                  backgroundColor: "rgba(89, 86, 233, 1)",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "15px",
                  cursor: "pointer",
                  margin: "10px",
                }}
                className="inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-lg focus:bg-primary-600 focus:shadow-lg focus:outline-none active:bg-primary-700"
              >
                See all
              </button>
            </div>

            <div className="mt-4">
              <div className="bg-[rgba(237, 244, 251, 1)] flex justify-between p-2 rounded-md mb-2">
                <p>Rank</p>
                <p>Name</p>
                <p>Branch</p>
                <p>Company</p>
                <p>Package</p>
                <p>More</p>
              </div>
              {[
                { rank: "#1", name: "John", branch: "CSE", company: "Google", package: "56LPA" },
                { rank: "#2", name: "Mark", branch: "CSE", company: "Microsoft", package: "45LPA" },
                { rank: "#3", name: "Bark", branch: "ITB", company: "Walmart", package: "36LPA" },
                { rank: "#4", name: "Alexa", branch: "ECE", company: "Deloitte", package: "30LPA" },
              ].map((placement, index) => (
                <div key={index} className="flex justify-between p-2 rounded-md mb-2">
                  <p>{placement.rank}</p>
                  <p>{placement.name}</p>
                  <p>{placement.branch}</p>
                  <p>{placement.company}</p>
                  <p>{placement.package}</p>
                  <button
                    type="button"
                    className="bg-violet-500 text-white font-bold h-10 w-16 rounded-lg shadow-md hover:bg-violet-600"
                  >
                    Action
                  </button>
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
