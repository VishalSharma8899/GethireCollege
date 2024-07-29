import React from 'react'
import img1 from "../../../Images/course2.avif"

function BestSales() {
    const bestcourse=[
        {
            id:1,
            img:img1,
            title:"Web Developer",
            price:"$25"
        },
        {
            id:1,
            img:img1,
            title:"Web Developer",
            price:"$25"
        },
        {
            id:1,
            img:img1,
            title:"Web Developer",
            price:"$25"
        },
        {
            id:1,
            img:img1,
            title:"Web Developer",
            price:"$25"
        },
    ]
  return (
    <div className='w-full h-full bg-gray-50 mt-4'>
    <div className='w-full p-4'>
       <div className='mb-3'>
           <h1 className='text-xl font-bold'>Best Courses</h1>
       </div>
       {
           bestcourse.map((data)=>{
              return(
               <div className='w-full h-24 mb-2 bg-white rounded p-3 flex justify-between gap-2'>
               <div className='ml-4 flex gap-4 justify-center items-center'>
                 <img src={data.img} alt=""className='w-16 h-16'/>
                  <div className='flex flex-col'>
                 <h1 className='text-xl text-blue-500'>{data.title}</h1>
                  <p>{data.price}</p>
                  </div>
               </div>
               <div className='flex flex-col font-thin text-gray-600 justify-center items-center'>
                  <div className='bg-green-100 w-24 h-10 flex items-center rounded justify-center p-2'>
                    <button>Buy Now</button>
                  </div>
               </div>
             </div>
              )
           })
       }
   </div>
  </div>
  )
}

export default BestSales