import React from 'react'
import Courses from './Courses'
import Course1 from "../../../Images/course1.png"
import Course2 from "../../../Images/course2.png"
import Course3 from "../../../Images/course3.png"
import Course4 from "../../../Images/course4.jfif"
function SecondContainer() {
  const couses=[
    {
      id:1,
      name:'Course Name',
      img:Course1
    },
    {
      id:2,
      name:'Course Name',
      img:Course2
    },
    {
      id:3,
      name:'Course Name',
      img:Course3
    },
    {
      id:4,
      name:'Course Name',
      img:Course4
    },
    // {
    //   id:5,
    //   name:'Course Name',
    //   img:Course4
    // },
    // {
    //   id:6,
    //   name:'Course Name',
    //   img:Course4
    // }
  ]
  return (
    <div className='h-full gap-2 flex'>
      {/* Courses/Industy */}
     <div className='flex flex-col w-3/5'>
     <div className='h-full p-2'>
      <div className='p-3'>
        <h1 className='text-2xl'>Courses</h1>
      </div>
          <div className='w-full h-2/5 flex gap-5'>
          {
            couses.map((data)=>{
              return(
                <Courses key={data.id} img={data.img} name={data.name}/>
              )
            })
          }
          </div>
      </div>

      <div className='h-full p-2'>
      <div className='p-3'>
        <h1 className='text-2xl'>Idustry Talk</h1>
      </div>
          <div className='w-full h-2/5 flex gap-5'>
          {
            couses.map((data)=>{
              return(
                <Courses key={data.id} img={data.img} name={data.name}/>
              )
            })
          }
          </div>
      </div>
     </div>

      {/* Progress */}
      <div className='w-4/5 bg-gray-50 h-full rounded'>

      </div>

    </div>
  )
}

export default SecondContainer