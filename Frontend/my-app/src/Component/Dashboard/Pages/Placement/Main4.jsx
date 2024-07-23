import React from 'react'
import BarGraph from "./BarGraph"
function Main4() {
  return (
    <div className='w-full h-full m-2 flex flex-col bg-white rounded-xl relative mt-3'>
      <div className='p-2'>
        <h1 className='text-green-400 text-lg'>Top Companies</h1>
      </div>
      <div className='flex justify-center items-center'>
        <BarGraph/>
      </div>
    </div>
  )
}

export default Main4

