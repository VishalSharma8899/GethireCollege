import React from 'react'
import Search from '../Jobs/Search'
import Toprecruiters from './ActiveProcess'
import Post from './Post'
function Jobs() {
  return (
    <>
    <div className='flex-col '>
    <Post/>
    <Toprecruiters/>
    </div>
    </>
  )
}

export default Jobs