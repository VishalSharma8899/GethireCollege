import React from 'react'
import Google from '../../../Images/google.png'
function Tranding() {
    
  return (
    <div>
        <div>
            <div>
                <p className='font-bold text-xl ml-6 mt-3'>Tranding on Gethire</p>
            </div>
            <div className='m-3'>
                 <div className='bg-blue-300 w-23 h-20 rounded-md flex text-white gap-20'>
                      <div className="image w-36">
                        <img src={Google} alt="" />
                      </div>
                      <div className="details flex gap-32 p-3">

                      <div className="name">
                        <p className='font-bold'>Shweta Meena</p>
                        <p>SDE-1</p>
                      </div>
                      <div className="branches">
                        <p>CSE</p>
                        <p>2025</p>
                      </div>
                      <div className="package">
                        <p>45LPA</p>
                      </div>
                      <div className="More">
                        <button>Details</button>
                      </div>
                      </div>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Tranding