// import React from 'react'

//     function CourseDetail2({img,name,price}) {
//   return (
//     <div className='w-full h-full flex flex-col p-1'>
//         {/* img-container */}
//         <div className='w-full h-2/5 bg-pink-50 flex justify-center'>
//            <img src={img} alt="" />
//         </div>
//         <div className='flex p-2 gap-2'>
//             <p>₹{price}</p>
//             <p style={{textDecoration:"line-through",color:"gray"}}>₹ 1599</p>
//             <p className='text-red-400'>80% Off</p>
//         </div>
//         <div className='w-full p-3'>
//             <button className='w-full bg-violet-500 p-3'>Add to cart</button>
//             <p className='text-xs text-gray-400 text-center mt-1'>30 Days Money Back Guarantee</p>
//         </div>
//        <div className='w-full'>
//         <div>
//           <p>Apply Coupan</p>
//         </div>
//          <div className='border-dashed border-2 border-black flex '>
//             <input className='border-none outline-none bg-none shadow-none p-2 m-0 w-3/5' type="text" placeholder='Apply Here'/>
//             <button className='bg-black'>Apply</button>
//           </div>
//           <div className='flex justify-center '>
//           <hr className='w-3/5'/>
//           </div>
//           <div className='flex flex-col justify-center'> 
//             <p className='text-xl'>Subscribe Skillgenic Top Courses</p>
//             <button className='w-36'>Top Courses</button>
//           </div>
//        </div>
//     </div>
//   )
// }

// export default CourseDetail2
import React from 'react';

function CourseDetail2({ video, price ,discount,originalPrice }) {
  const baseUrl = 'http://localhost:3000';
  
  return (
    <div className='w-full h-full flex flex-col p-4'>
      {/* Course Image */}
      { video && (
        <div className="mb-6">
          <video
            className="w-full h-auto rounded-lg"
            controls
            src={`${baseUrl}/${video}`}
          />
        </div>
      )}

      {/* Price Information */}
      <div className='flex p-2 gap-2 items-center'>
        <p className='text-xl font-semibold'>₹{price}</p>
      <p className='text-gray-500 line-through'>₹ {originalPrice}</p>
        <p className='text-red-400 font-medium'>{discount}% Off</p>
      </div>

      {/* Call-to-Action */}
      <div className='w-full p-3'>
        <button className='w-full bg-violet-500 text-white p-3 rounded hover:bg-violet-600'>
          Add to Cart
        </button>
        <p className='text-xs text-gray-400 text-center mt-1'>30 Days Money Back Guarantee</p>
      </div>

      {/* Coupon Application */}
      <div className='w-full p-3'>
        <p className='text-lg font-semibold'>Apply Coupon</p>
        <div className='border-dashed border-2 border-black flex'>
          <input
            className='border-none outline-none bg-transparent p-2 flex-grow'
            type="text"
            placeholder='Enter coupon code'
          />
          <button className='bg-black text-white p-2'>Apply</button>
        </div>
        <div className='flex justify-center mt-2'>
          <hr className='w-3/5 border-gray-300' />
        </div>
        <div className='flex flex-col items-center mt-4'>
          <p className='text-xl font-semibold'>Subscribe to Skillgenic Top Courses</p>
          <button className='w-36 bg-violet-500 text-white p-2 rounded mt-2 hover:bg-violet-600'>
            Top Courses
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail2;
