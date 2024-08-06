import React from "react";
import { useNavigate } from 'react-router-dom';
import Jobtable from "./Jobtable";

function TopPerformers() {
  const navigate = useNavigate();

  const handleSeeAllClick = () => {
    navigate("/jobs/see-all-companies");
  };

  return (
    <div className="">
      <div className="flex justify-between">
        <p className="font-bold text-lg ml-3">Top performers</p>
        <p className="hover:text-violet-400 cursor-pointer" onClick={handleSeeAllClick}>See all</p>
      </div>
      <div className="flex-col">
        <div>
          <Jobtable className="w-12 h-12" />
        </div>
        {/* <div style={{ background: "rgba(247, 249, 254, 1)" }} className="bg-gradient-to-r from-violet-300 to-violet-100 w-full rounded-md h-40 m-3">
        </div> */}
      </div>
    </div>
  );
}

export default TopPerformers;
