import React from 'react'
// import Search from '../Jobs/Search'
import Toprecruiters from './ActiveProcess'
import Post from './Post'
import TopPerformers from './TopPerformers'
import Tranding from './Tranding'

function Jobs() {
  return (
    <>
    <div style={{background:" rgba(247, 249, 254, 1)"}} className='flex-col  '>
    <Post/>
    <Toprecruiters/>
    <div className='flex w-full h-full gap-3'>
      <div className='w-2/5  h-96'>
      <TopPerformers/>
      </div>
      <div className=' w-full'>
        <Tranding/>
      </div>
    </div>
    </div>
    </>
  )
}

export default Jobs