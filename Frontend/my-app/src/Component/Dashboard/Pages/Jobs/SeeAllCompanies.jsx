import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../../Images/yt.png";
import img2 from "../../../Images/deltax.jpeg"
import img3 from "../../../Images/Helios.png"
import { CiLocationOn, CiUser } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";

function SeeAllCompanies() {
  const [sortOption, setSortOption] = useState("Name");
  const [companies, setCompanies] = useState([
    {
      name: "Microsoft",
      img: img1,
      location: "Delhi",
      profile: "UI/UX Designer",
      ctc: "₹10,00,000",
      time: "Full Time",
      totalCandidate: "151",
      process: "Active",
      status: { applied: 20, shortlisted: 7, interview: 10, evaluation: 5, offer: 4, hired: 3 },
    },
    {
      name: "Amazon",
      img: img2,
      location: "Mumbai",
      profile: "Web Developer",
      ctc: "₹5,00,000",
      time: "Full Time",
      totalCandidate: "151",
      process: "Active",
      status: { applied: 20, shortlisted: 7, interview: 10, evaluation: 5, offer: 4, hired: 3 },
    },
   
    {
      name: "Flipkart",
      img: img3,
      location: "Pune",
      profile: "Web Developer",
      ctc: "₹2,00,000",
      time: "Full Time",
      totalCandidate: "151",
      process: "Active",
      status: { applied: 20, shortlisted: 7, interview: 10, evaluation: 5, offer: 4, hired: 3 },
    },
    {
      name: "Flipkart",
      img: img1,
      location: "Pune",
      profile: "Web Developer",
      ctc: "₹2,00,000",
      time: "Full Time",
      totalCandidate: "151",
      process: "Active",
      status: { applied: 20, shortlisted: 7, interview: 10, evaluation: 5, offer: 4, hired: 3 },
    },
    {
      name: "Flipkart",
      img: img1,
      location: "Pune",
      profile: "Web Developer",
      ctc: "₹2,00,000",
      time: "Full Time",
      totalCandidate: "151",
      process: "Active",
      status: { applied: 20, shortlisted: 7, interview: 10, evaluation: 5, offer: 4, hired: 3 },
    },
  ]);

  const navigate = useNavigate();

  const handleSortChange = (event) => {
    const sortBy = event.target.value;
    setSortOption(sortBy);
    sortCompanies(sortBy);
  };

  const sortCompanies = (key) => {
    const sortedCompanies = [...companies].sort((a, b) => {
      if (key === "ctc") {
        return (
          parseInt(a.ctc.replace(/[^0-9]/g, "")) -
          parseInt(b.ctc.replace(/[^0-9]/g, ""))
        );
      }
      return a[key].localeCompare(b[key]);
    });
    setCompanies(sortedCompanies);
  };

  const handleRowClick = (companyName) => {
    navigate(`/jobs/student-details/${companyName}`);
  };

  const statusColors = {
    applied: "bg-blue-100",
    shortlisted: "bg-yellow-100",
    interview: "bg-green-100",
    evaluation: "bg-purple-100",
    offer: "bg-orange-100",
    hired: "bg-teal-100"
  };

  return (
    <div className="p-4 md:p-6 bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 md:mb-0 bg-gray-300 text-gray-800 rounded-md px-4 py-2 hover:bg-gray-400 transition-colors"
        >
          Back
        </button>
        <h1 className="font-bold text-xl md:text-2xl">Bulk Hiring Companies</h1>
        <div className="relative mt-4 md:mt-0">
          <select
            value={sortOption}
            onChange={handleSortChange}
            className="border rounded-md py-1 px-2 bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-300"
          >
            <option value="name">Sort by Name</option>
            <option value="type">Sort by Type</option>
            <option value="ctc">Sort by CTC</option>
            <option value="status">Sort by Status</option>
          </select>
        </div>
      </div>

      <div className="space-y-3">
        {companies.map((company, index) => (
          <div
            key={index}
            className=" rounded-lg shadow-md hover:shadow-lg flex gap-80 transition-shadow cursor-pointer"
            onClick={() => handleRowClick(company.name)}
          >
            <div className="flex items-center gap-5 mt-4">
              <div className="w-12 h-12 ml-2 rounded-full p-3 flex items-center justify-center bg-white shadow-sm">
                <img
                  src={company.img}
                  alt={company.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex flex-col">
                  <div className="flex flex-row gap-1">
                    <div className="text-sm font-bold">{company.profile} |</div>
                    <div className="text-sm font-bold">{company.name}</div>
                  </div>
                  <div className="flex flex-col">
                    <div>
                      <p className="text-sm text-gray-400">{company.time}</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex gap-1 items-center">
                        <CiLocationOn style={{ color: "blue" }} />
                         {company.location}
                      </div>
                      <div className="flex gap-1 items-center">
                        <CiUser style={{ color: "blue" }} />
                         {company.totalCandidate}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-lg text-green-400">{company.process}</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center mt-2">
              <div className="flex items-center space-x-1 gap-8">
                {Object.entries(company.status).map(([key, value]) => (
                  <div key={key} className="flex items-center space-x-1">
                    <div
                      className={`p-1 rounded-md flex flex-col items-center ${statusColors[key]}`}
                    >
                      <div className="p-2 flex flex-col items-center">
                      <div className="text-xs font-bold">{value}</div>
                      <div className="text-xxs text-gray-500 capitalize">{key}</div>
                      </div>
                    </div>
                    <FaArrowRightLong className="text-gray-500 ml-3" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SeeAllCompanies;