import React from 'react'
import FirstContainer from "./FirstContainer"
import SecondContainer from './SecondContainer'
function Training() {
  return (
    <>
     <div className='w-full h-dvh bg-blue-50 '>
      {/* First-Container */}
      <div className='w-full h-2/5 rounded bg-gradient-to-r from-blue-500 via-blue-900 to-blue-900'>
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

