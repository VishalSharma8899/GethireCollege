import React from "react";


import CardActive from "./CardActive";

function ActiveProcess({ data }) {
 
  // console.log(data)
  return (
    <div className="h-56 mt-3 ">
      <p className="font-bold text-lg ml-2">Active Process</p>
      <div className="flex gap-4 ">
       <CardActive></CardActive>
     
      </div>
    </div>
  );
}

export default ActiveProcess;