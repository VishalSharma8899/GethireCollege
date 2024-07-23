import React from "react";
import Slider from "./Slider";

import CardActive from "./CardActive";

function ActiveProcess({ data }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };
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
