// import React from 'react'
// import { TiTick } from "react-icons/ti";

// function Learn() {
//   return (
//     <div className='w-8/12 bg-gray-50 h-3/5 p-14 mx-7 my-7'>
//        <div>
//         <h1>What You Learn</h1>
//        </div>
//        <div className='flex gap-2'>
//         <TiTick/>
//         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis nulla voluptatibus iste blanditiis laborum voluptas? Cumque, ex impedit. Necessitatibus, officia.</p>
//        </div>
//        <div className='flex gap-2'>
//         <TiTick/>
//         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis nulla voluptatibus iste blanditiis laborum voluptas? Cumque, ex impedit. Necessitatibus, officia.</p>
//        </div>
//        <div className='flex gap-2'>
//         <TiTick/>
//         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis nulla voluptatibus iste blanditiis laborum voluptas? Cumque, ex impedit. Necessitatibus, officia.</p>
//        </div>
//        <div className='flex gap-2'>
//         <TiTick/>
//         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis nulla voluptatibus iste blanditiis laborum voluptas? Cumque, ex impedit. Necessitatibus, officia.</p>
//        </div>
//        <div className='flex gap-2'>
//         <TiTick/>
//         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis nulla voluptatibus iste blanditiis laborum voluptas? Cumque, ex impedit. Necessitatibus, officia.</p>
//        </div>
//        <div className='flex gap-2'>
//         <TiTick/>
//         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis nulla voluptatibus iste blanditiis laborum voluptas? Cumque, ex impedit. Necessitatibus, officia.</p>
//        </div>
//     </div>
//   )
// }

// export default Learn
import React from 'react';
import { TiTick } from "react-icons/ti";

function Learn({ whatYouWillLearn }) {
  return (
    <div className='w-8/12 bg-gray-50 h-3/5 p-14 mx-7 my-7'>
      <div>
        <h1>What You Will Learn</h1>
      </div>
     
      {whatYouWillLearn.map((item, index) => (
        <div key={index} className='flex gap-2'>
          <TiTick />
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
}

export default Learn;
