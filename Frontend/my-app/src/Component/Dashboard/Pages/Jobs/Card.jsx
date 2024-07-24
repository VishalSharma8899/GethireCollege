import React from 'react'
import ProgressBar from "react-bootstrap/ProgressBar";
function Card({ image, company, position, progress, percentage }) {

  return (
    <div className="bg-gradient-to-r bg-white border w-64 h-28 rounded-xl mt-3 ml-14 flex gap-10 hover:translate-x-2 hover:shadow-2xl transition-transform duration-300">
    <div className="mt-2">
      <img className="w-20 h-20" src={image} alt="" />
    </div>
    <div className="details mt-3 text-black">
      <p className="font-bold">{company}</p>
      <p className="font-semibold">{position}</p>
      <ProgressBar
        style={{ color: "rgba(89, 86, 233, 1)" }}
        className="w-24 mt-2 h-1 ml-0"
        now={progress}
      />
       <div
      className="mt-1 w-20 rounded-md bg-blue-500 hover:bg-blue-700 shadow-md px-4 py-1"
    >
      <p className="text-sm text-white font-medium">{percentage}%</p>
    </div>
    </div>
  </div>
  )
}

export default Card