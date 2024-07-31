 import React from 'react'
import { IoMdTime } from "react-icons/io";


 function CourseDetail1({img,name,text,duration,creater,lang}) {
   return (
     <div className="w-full h-2/5 bg-gradient-to-r from-gray-800 via-gray-900 to-black flex flex-col">
       <div className="w-full h-full container text-white flex flex-col mt-2 gap-3 p-4 lg:p-0 bg-black-500 lg:bg-transparent order-2 lg:order-2">
         <h1 className="text-xl lg:text-3xl font-semibold">
           {name}
         </h1>
         <p className="text-sm lg:text-base">
           {text}
         </p>
         <div className="text-yellow-50 text-xs">4.7 ⭐⭐⭐⭐⭐</div>
         <div>
           <div className="flex gap-5">
             <p className=''>Created By : {creater}</p>
             <p className=''> Duration : {duration}</p>
           </div>
           <div className='flex gap-1 text-xs text-yellow-400'> 
             <IoMdTime className=''/>
             <p className='text-xs'>last Update : 7/3/24</p>
           </div>
         </div>
       </div>
     </div>
   );
 }
 
 export default CourseDetail1