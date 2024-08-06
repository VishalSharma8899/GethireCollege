import React from "react";
import CardActive from "./CardActive";


function ActiveProcess({ data }) {
   
  return (
    <div className="mt-3">
      <p className="font-bold text-lg ">Active Process</p>
      <div className="mt-3">
        <CardActive />
      </div>
    </div>
  );
}

export default ActiveProcess;
