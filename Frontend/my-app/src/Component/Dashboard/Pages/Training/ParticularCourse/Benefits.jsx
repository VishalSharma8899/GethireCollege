// import React from 'react'
// import { CiVideoOn } from "react-icons/ci";
// import { IoIosCode } from "react-icons/io";
// import { CiFileOn } from "react-icons/ci";
// import { IoIosInfinite } from "react-icons/io";
// import { AiOutlineSafetyCertificate } from "react-icons/ai";


// function Benefits() {
//   return (
//     <div className='w-8/12 h-64 mx-7 my-7 bg-gray-50 p-3'>
//       <div className='text-bold'>
//         <h4>This Course Includes</h4>
//       </div>
//        <div className='flex gap-10'>
//          <div className='flex flex-col'>
//          <div className='flex gap-2 text-xm'>
//         <CiVideoOn/>
//         <p>7.5 hours on demand video</p>
//       </div>
//       <div className='flex gap-2 text-xm'>
//         <IoIosCode/>
//         <p>62 coding questions</p>
//       </div>
//       <div className='flex gap-2 text-xm'>
//         <CiFileOn/>
//         <p>63 Articles</p>
//       </div>
//          </div>
//          <div className='flex flex-col'>
//          <div className='flex gap-2 text-xm'>
//         <IoIosInfinite/>
//         <p>Full Lifetime Access</p>
//       </div>
//       <div className='flex gap-2 text-xm'>
//         <AiOutlineSafetyCertificate/>
//         <p>Free Certificate</p>
//       </div>
//          </div>
//        </div>

//     </div>
//   )
// }

// export default Benefits
import React from 'react';
import { CiVideoOn } from "react-icons/ci";
import { IoIosCode } from "react-icons/io";
import { CiFileOn } from "react-icons/ci";
import { IoIosInfinite } from "react-icons/io";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

function Benefits({ includes }) {
  return (
    <div className='w-8/12 h-64 mx-7 my-7 bg-gray-50 p-3'>
      <div className='text-bold'>
        <h4>This Course Includes</h4>
      </div>
      <div className='flex gap-10'>
        <div className='flex flex-col'>
          <div className='flex gap-2 text-xm'>
            <CiVideoOn />
            <p>{includes.hoursOnDemandVideo} hours on demand video</p>
          </div>
          <div className='flex gap-2 text-xm'>
            <IoIosCode />
            <p>{includes.Exercises} Problems solved</p>
          </div>
          <div className='flex gap-2 text-xm'>
            <CiFileOn />
            <p>{includes.articles} Articles</p>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='flex gap-2 text-xm'>
            <IoIosInfinite />
            <p>{includes.fullLifetimeAccess ? 'Full Lifetime Access' : 'Limited Access'}</p>
          </div>
          <div className='flex gap-2 text-xm'>
            <AiOutlineSafetyCertificate />
            <p>{includes.certificateOfCompletion ? 'Free Certificate' : 'No Certificate'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
