import React, { createContext, useState } from "react";
import industry1 from "../../../../Images/industry1.jfif";
import industry2 from "../../../../Images/industry2.jfif";
import industry3 from "../../../../Images/industry3.jfif";
import industry4 from "../../../../Images/industry4.jfif";

import { useContext } from "react";
export const IndustryContext = createContext();
const IndustryProvider = ({ children }) => {
 const industryData=[
    {
        id:1,
        img:industry1,
        title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        video:"https://www.youtube.com/watch?v=USxtwP__j0E&ab_channel=TEDxTalks",
        name:"Vishal Sharma",
        specializationWith:"Web Developement"
    },
    {
        id:2,
        img:industry2,
        title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        video:"https://www.youtube.com/watch?v=USxtwP__j0E&ab_channel=TEDxTalks",
        name:"Vishal Sharma",
        specializationWith:"Web Developement"
    }, {
        id:3,
        img:industry3,
        title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        video:"https://www.youtube.com/watch?v=USxtwP__j0E&ab_channel=TEDxTalks",
        name:"Vishal Sharma",
        specializationWith:"Web Developement"
    }, {
        id:4,
        img:industry4,
        title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        video:"https://www.youtube.com/watch?v=USxtwP__j0E&ab_channel=TEDxTalks",
        name:"Vishal Sharma",
        specializationWith:"Web Developement"
    },
    {
      id:5,
      img:industry1,
      title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      video:"https://www.youtube.com/watch?v=USxtwP__j0E&ab_channel=TEDxTalks",
      name:"Vishal Sharma",
      specializationWith:"Web Developement"
  },
  {
      id:6,
      img:industry2,
      title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      video:"https://www.youtube.com/watch?v=USxtwP__j0E&ab_channel=TEDxTalks",
      name:"Vishal Sharma",
      specializationWith:"Web Developement"
  }, {
      id:7,
      img:industry3,
      title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      video:"https://www.youtube.com/watch?v=USxtwP__j0E&ab_channel=TEDxTalks",
      name:"Vishal Sharma",
      specializationWith:"Web Developement"
  }, {
      id:8,
      img:industry4,
      title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      video:"https://www.youtube.com/watch?v=USxtwP__j0E&ab_channel=TEDxTalks",
      name:"Vishal Sharma",
      specializationWith:"Web Developement"
  },
 ]


  return (
    <IndustryContext.Provider value={industryData}>
      {children}
    </IndustryContext.Provider>
  );
};
export function useIndustryData() {
  return useContext(IndustryContext);
}

export default IndustryProvider;
