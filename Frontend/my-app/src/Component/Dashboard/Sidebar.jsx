import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import Image from "../Images/settingLogo.png"

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/collge",
            name:"College",
            icon:<FaUserAlt/>
        },
        {
            path:"/jobs",
            name:"Jobs",
            icon:<FaRegChartBar/>
        },
        {
            path:"/student",
            name:"Student Data",
            icon:<FaCommentAlt/>
        },
        {
            path:"/placement",
            name:"Placement",
            icon:<FaShoppingBag/>
        },
        {
            path:"/Notification",
            name:"Notification",
            icon:<FaThList/>
        },
        {
            path:"/Training",
            name:"Training",
            icon:<FaThList/>
        },
        {
            path:"/Analysis",
            name:"Analysis",
            icon:<FaThList/>
        },
        {
            path:"/industry",
            name:"Industry Talks",
            icon:<FaThList/>
        },
        {
            path:"/feedback",
            name:"Feedback",
            icon:<FaThList/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                <img style={{display: isOpen? "block": "none"}} src={Image} alt="Vector" />
                   <p style={{display: isOpen ? "block" : "none"}} className="logo font-bold ">Logo</p>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;