import React from 'react'
import Search from './Search'
import Main1 from './Main1'
import Main2 from './Main2'
import Main3 from './Main3'
import Main4 from './Main4'

function Placement() {
  return (
    <div className='w-full h-screen'>
      {/* Search */}
      <div>
        <Search/>
      </div>

      {/* First-Container */}
      <div className='container w-full bg-blue-50 rounded'>
      <div class="row w-full h-full">
       <div class="col-8"><Main1/></div>
       <div class="col-4"><Main2/></div>
       </div>
      </div>

      {/* Second-Container */}
      <div className='container w-full bg-blue-50 mt-5 rounded h-1/2'>
          <div class="row w-full h-full">
      <div class="col-4"><Main3/></div>
       <div class="col-8"><Main4/></div>
       </div>
      </div>
    </div>
  )
}

export default Placement