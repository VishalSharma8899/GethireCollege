import { Avatar } from "@mui/material";
import React from "react";
import avatar from "../../../Images/avatar.png";
import Jobtable from "./Jobtable";

function TopPerformers() {
  const companies = [
    { id: 1, name: "TCS", data: "5K+" },
    { id: 2, name: "Dell", data: "3K" },
    { id: 3, name: "Persistence", data: "2k" },
    // ... more companies
  ];
  return (
    <div  className=" ">
      <p className="font-bold text-lg ml-3">Top performers</p>
      <div className="flex-col ">
        {/* bulk recruiters */}
        <div>
          <  Jobtable className="w-12 h-12" />
          </div>
        <div   style={{background:" rgba(247, 249, 254, 1)"}} className="bg-gradient-to-r from-violet-300 to-violet-100 w-full rounded-md h-40 m-3">

        </div>
      </div>
    </div>
  );
}

export default TopPerformers;
