import React, { useState } from 'react';
import { MdOutlineDashboardCustomize , MdCorporateFare }from "react-icons/md";
import { PiStudent } from 'react-icons/pi';
import { NavLink } from 'react-router-dom';
import { BsDatabaseLock } from "react-icons/bs";
import { RiUserLocationFill } from "react-icons/ri";
import { IoMdNotificationsOff } from "react-icons/io";
import { MdOutlineModelTraining } from "react-icons/md";
import { IoAnalytics } from "react-icons/io5";
import { LiaIndustrySolid } from "react-icons/lia";
import { VscFeedback } from "react-icons/vsc";
import { MdOutlineFormatLineSpacing } from "react-icons/md";
// import Image from "../Images/settingLogo.png"

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<MdOutlineDashboardCustomize/>
        },
        {
            path:"/collge",
            name:"College",
            icon:<PiStudent/>
        },
        {
            path:"/jobs",
            name:"Jobs",
            icon:<MdCorporateFare />
        },
        {
            path:"/student",
            name:"Student Data",
            icon:<BsDatabaseLock />
        },
        {
            path:"/placement",
            name:"Placement",
            icon:<RiUserLocationFill />
        },
        {
            path:"/Notification",
            name:"Notification",
            icon:<IoMdNotificationsOff />
        },
        {
            path:"/Training",
            name:"Training",
            icon:<MdOutlineModelTraining />
        },
        {
            path:"/Analysis",
            name:"Analysis",
            icon:<IoAnalytics />
        },
        {
            path:"/industry",
            name:"Industry Talks",
            icon:<LiaIndustrySolid />
        },
        {
            path:"/feedback",
            name:"Feedback",
            icon:<VscFeedback />
        }
    ]
    return (
        <div className="font-Poppins ">
        <div style={{display:"flex"}}>

           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar shadow-gray-700">
               <div className="top_section">
                {/* <img style={{display: isOpen? "block": "none"}} src={Image} alt="Vector" /> */}
                   <p style={{display: isOpen ? "block" : "none"}} className="logo font-bold text-black">Logo</p>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <MdOutlineFormatLineSpacing  onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none", fontSize:"15px"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
        </div>
    );
};

export default Sidebar;