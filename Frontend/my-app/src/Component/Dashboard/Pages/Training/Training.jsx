import React from 'react'
import FirstContainer from "./FirstContainer"
import SecondContainer from './SecondContainer'
function Training() {
  return (
    <>
     <div className='w-full h-screen'>
      {/* First-Container */}
      <div className='w-full h-2/5 rounded bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500'>
         <FirstContainer/>
        </div>

       {/* Second-Container */}
        <div className='w-full h-3/5 p-4 mt-2 rounded-2xl bg-white'>
          <SecondContainer/>
        </div>
     </div> 
    </>
  )
}

export default Training

