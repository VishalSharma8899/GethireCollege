import React from 'react'
import Micro from "../../../Images/microsoft.png";
import Google from '../../../Images/google.png'
import walmart from '../../../Images/walmart.png'
import meesho from '../../../Images/meesho.png'
import Card from './Card'
function CardActive() {
    const cardData = [
        { image: Micro, company: 'Microsoft', position: 'SDE-1', progress: 60, percentage: 50 },
        { image: Google, company: 'Google', position: 'SDE-2', progress: 40, percentage: 40 },
        { image: walmart, company: 'Walmart', position: 'Developer', progress: 60, percentage: 50 },
        {image:meesho, company:'Meesho',position:'Frontend', progress: 80, percentage:80 }
      ];
   
  return (
    // <div>
    //     <div className='flex'>
    //      <div className=" bg-gradient-to-r from-blue-300 to-blue-200 w-64 h-28 rounded-xl mt-3  ml-14 flex gap-10 hover:translate-x-2 hover:shadow-2xl transition-transform duration-300">
    //       <div className="mt-0">
    //         <img className="w-28 h-28" src={Micro} alt="" />
    //       </div>
    //       <div className="details mt-3 text-white">
    //         <p className="font-bold">Microsoft</p>
    //         <p className="font-semibold">SDE-1</p>
    //         <ProgressBar
    //           style={{ color: "rgba(89, 86, 233, 1)" }}
    //           className="w-24 mt-2 h-1 ml-0"
    //           now={60}
    //         />
    //         <div
    //           style={{ background: "rgba(89, 86, 233, 1)" }}
    //           className="mt-2 w-10 rounded-xl "
    //         >
    //           <p className="ml-1 text-sm cursor-pointer">50%</p>
    //         </div>
    //       </div>
    //     </div>
    //      <div className=" bg-gradient-to-r from-blue-300 to-blue-200 w-64 h-28 rounded-xl mt-3 ml-14 flex gap-10 hover:translate-x-2 hover:shadow-2xl transition-transform duration-300">
    //       <div className="mt-3">
    //         <img className="w-24 h-20" src={Google} alt="" />
    //       </div>
    //       <div className="details mt-3 text-white">
    //         <p className="font-bold">Google</p>
    //         <p className="font-semibold">SDE-2</p>
    //         <ProgressBar
    //           style={{ color: "rgba(89, 86, 233, 1)" }}
    //           className="w-24 mt-2 h-1 ml-0"
    //           now={40}
    //         />
    //         <div
    //           style={{ background: "rgba(89, 86, 233, 1)" }}
    //           className="mt-2 w-10 rounded-xl "
    //         >
    //           <p className="ml-1 text-sm cursor-pointer">40%</p>
    //         </div>
    //       </div>
    //     </div>
    //      <div className=" bg-gradient-to-r from-blue-300 to-blue-200 w-64 h-28 rounded-xl mt-3 ml-14 flex gap-10 hover:translate-x-2 hover:shadow-2xl transition-transform duration-300">
    //       <div className="mt-0">
    //         <img className="w-28 h-28" src={walmart} alt="" />
    //       </div>
    //       <div className="details mt-3 text-white">
    //         <p className="font-bold">Walmart</p>
    //         <p className="font-semibold">Developer</p>
    //         <ProgressBar
    //           style={{ color: "rgba(89, 86, 233, 1)" }}
    //           className="w-24 mt-2 h-1 ml-0"
    //           now={60}
    //         />
    //         <div
    //           style={{ background: "rgba(89, 86, 233, 1)" }}
    //           className="mt-2 w-10 rounded-xl "
    //         >
    //           <p className="ml-1 text-sm cursor-pointer">50%</p>
    //         </div>
    //       </div>
    //     </div>
        
    //     </div>
    // </div>

<div className="flex gap-11">
{cardData.map((card, index) => (
  <Card key={index} {...card} />
))}
</div>
  )
}

export default CardActive