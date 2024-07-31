import React from 'react'

    function CourseDetail2({img,name,price}) {
  return (
    <div className='w-full h-full flex flex-col p-1'>
        {/* img-container */}
        <div className='w-full h-2/5 bg-pink-50 flex justify-center'>
           <img src={img} alt="" />
        </div>
        <div className='flex p-2 gap-2'>
            <p>₹{price}</p>
            <p style={{textDecoration:"line-through",color:"gray"}}>₹ 1599</p>
            <p className='text-red-400'>80% Off</p>
        </div>
        <div className='w-full p-3'>
            <button className='w-full bg-violet-500 p-3'>Add to cart</button>
            <p className='text-xs text-gray-400 text-center mt-1'>30 Days Money Back Guarantee</p>
        </div>
       <div className='w-full'>
        <div>
          <p>Apply Coupan</p>
        </div>
         <div className='border-dashed border-2 border-black flex '>
            <input className='border-none outline-none bg-none shadow-none p-2 m-0 w-3/5' type="text" placeholder='Apply Here'/>
            <button className='bg-black'>Apply</button>
          </div>
          <div className='flex justify-center '>
          <hr className='w-3/5'/>
          </div>
          <div className='flex flex-col justify-center'> 
            <p className='text-xl'>Subscribe Skillgenic Top Courses</p>
            <button className='w-36'>Top Courses</button>
          </div>
       </div>
    </div>
  )
}

export default CourseDetail2