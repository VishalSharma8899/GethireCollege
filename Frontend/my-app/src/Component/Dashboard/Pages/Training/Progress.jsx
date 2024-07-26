import React from 'react'
import img1 from "../../../Images/industry3.jfif"

function Progress() {
    const newEvent=[
        {
            id:1,
            img:img1,
            name:"Salman Kumar",
            date:'15/02/2025',
            time:"3:00 PM"
        },
        {
            id:1,
            img:img1,
            name:"Salman Kumar",
            date:'15/02/2025',
            time:"3:00 PM"
        },
        {
            id:1,
            img:img1,
            name:"Salman Kumar",
            date:'15/02/2025',
            time:"3:00 PM"
        },

    ]
  return (
   <div className='w-full h-full'>
     <div className='w-full p-4'>
        <div className='mb-3'>
            <h1 className='text-xl font-bold'>Upcoming Event</h1>
        </div>
        {
            newEvent.map((data)=>{
               return(
                <div className='w-full h-24 bg-blue-100 mb-2 rounded p-2 flex justify-between gap-2'>
                <div className='ml-4 flex gap-4 justify-center items-center'>
                  <img src={data.img} alt=""className='w-16 h-16 rounded-full'/>
                   <div className='flex flex-col'>
                <h1 className='text-xl text-blue-500'>{data.name}</h1>
                   <p>Data Analytics</p>
                   </div>
                </div>
                <div className='flex flex-col font-thin text-gray-600 justify-center items-center'>
                   <div>
                     <h1> Date: {data.date}</h1>
                     <p>
                      Time : {data.time}
                     </p>
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

export default Progress