import React from 'react'
import ProgressBar from "react-bootstrap/ProgressBar";
function Card({ image, company, position, progress, percentage }) {
  return (
    <div className="bg-white w-64 h-28 rounded-xl mt-3 ml-14 flex gap-10 hover:translate-x-2 hover:shadow-2xl transition-transform duration-300">
    <div className="mt-0">
      <img className="w-28 h-28" src={image} alt="" />
    </div>
    <div className="details mt-3 text-black">
      <p className="font-bold">{company}</p>
      <p className="font-semibold">{position}</p>
      <ProgressBar
        style={{ color: "rgba(89, 86, 233, 1)" }}
        className="w-24 mt-2 h-1 ml-0"
        now={progress}
      />
      <div className='mt-2'>
    {/* //     style={{ background: "rgba(89, 86, 233, 1)" }}
    //     className="mt-2 w-10 rounded-xl"
    //   >
    //     <p className="ml-1 text-sm cursor-pointer">{percentage}%</p> */}
    <button style={{background:"rgba(89, 86, 233, 1)"}} className=' rounded-2xl font-semibold w-20 h-6 text-center p-0'>{percentage}%</button>
      </div>
    </div>
  </div>
  )
}

export default Card