import React, { useState } from 'react'
import {Circle } from 'rc-progress';
import CountUp from 'react-countup';


function Main3() {
    const[percent,setPercent]=useState("77");
  return (
    <div className='w-3/4 h-3/4 m-2 flex flex-col justify-center items-center relative mt-3'>
        <div>
            <h1 className='text-green-400 text-lg'>Placed Students</h1>
        </div>
     <div className='w-60 h-60 mt-3'>
     <Circle percent={percent} strokeWidth={7} trailWidth={5} strokeColor="#86efac" trailColor='#bae6fd' /> 
     <div className='absolute top-0 mt- ml-24'>
     <CountUp className='font-bold text-2xl' start={0} end={percent} delay={1}/>
     </div>
     </div>
    </div>
  )
}

export default Main3