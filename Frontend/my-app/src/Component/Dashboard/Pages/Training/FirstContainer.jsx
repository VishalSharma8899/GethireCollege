import React from 'react'
import img1 from "../../../Images/industryTalk.png"
import img2 from "../../../Images/courses.png"

function FirstContainer() {
  return (
    <div className='w-full h-full flex flex-row'>
        <div className='w-1/3 h-full'>
           <img className='w-full h-full' src={img2} alt="" />
        </div>
        <div className='w-1/3 h-full text-white flex flex-col gap-3 justify-center items-center'>
          <h1 className='text-2xl'>Skillgenic Courses</h1>
          <p>"Empowering you with practical skills for real-world success."</p>
          <button>Learn More</button>
        </div>
        <div className='w-1/3 flex justify-center items-center'>
            <img  className='w-3/5 h-3/5' src={img1} alt="" />
        </div>
    </div>
  )
}

export default FirstContainer