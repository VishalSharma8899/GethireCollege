import React from 'react'
import Courses from './Courses'
function SecondContainer() {
  return (
    <div className='h-full gap-2 flex'>
      {/* Courses/Industy */}
      <div className='w-3/5 h-full bg-red-50 '>
          <Courses/>
      </div>

      {/* Progress */}
      <div className='w-2/5 h-full bg-blue-600 rounded'>

      </div>

    </div>
  )
}

export default SecondContainer