import React, { createContext, useState } from "react";
import Course1 from "../../../../Images/course1.jfif";
import Course2 from "../../../../Images/course2.jfif";
import Course3 from "../../../../Images/course3.jpeg";
import Course4 from "../../../../Images/course4.jfif";
import { useContext } from "react";
export const CoursesContext = createContext();
const CoursesProvider = ({ children }) => {
  const courses = [
    {
      id: 1,
      name: "Web Development",
      img: Course1,
      text: "Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text.",
      duration: "1hr",
      createdBy:"Colt Stealer",
      language:"English",
      price:"499"
    },
    {
      id: 2,
      name: "Data Analytics",
      img: Course2,
      text: "Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text.",
      duration: "1hr",
      createdBy:"Colt Stealer",
      language:"English",
      price:"599"
    },
    {
      id: 3,
      name: "Machine Learning",
      img: Course3,
      text: "Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text.",
      duration: "1hr",
      createdBy:"Colt Stealer",
      language:"English",
      price:"599"
    },
    {
      id: 4,
      name: "Python Course For Beginners 2024",
      img: Course4,
      text: "Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text.",
      duration: "1hr",
      createdBy:"Colt Stealer",
      language:"English",
      price:"599"
    },
    {
      id: 5,
      name: "Web Development",
      img: Course1,
      text: "Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text.",
      duration: "1hr",
      createdBy:"Colt Stealer",
      language:"English",
      price:"699"
    },
    {
      id: 6,
      name: "Data Analytics",
      img: Course2,
      text: "Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text.",
      duration: "1hr",
      createdBy:"Colt Stealer",
      language:"English",
      price:"899"
    },
    {
      id: 7,
      name: "Machine Learning",
      img: Course3,
      text: "Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text.",
      duration: "1hr",
      createdBy:"Colt Stealer",
      language:"English",
      price:"399"
    },
    {
      id: 8,
      name: "Python Course For Beginners 2024",
      img: Course4,
      text: "Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text.",
      duration: "1hr",
      createdBy:"Colt Stealer",
      language:"English",
      price:"799"
    },
    {
      id: 9,
      name: "Web Development",
      img: Course1,
      text: "Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text.",
      duration: "1hr",
      createdBy:"Colt Stealer",
      language:"English",
      price:"599"
    },
    {
      id:10,
      name: "Data Analytics",
      img: Course2,
      text: "Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text.",
      duration: "1hr",
      createdBy:"Colt Stealer",
      language:"English",
      price:"199"
    },
    {
      id: 11,
      name: "Machine Learning",
      img: Course3,
      text: "Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text.",
      duration: "1hr",
      createdBy:"Colt Stealer",
      language:"English",
      price:"599"
    },
    {
      id: 12,
      name: "Python Course For Beginners 2024",
      img: Course4,
      text: "Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text.",
      duration: "1hr",
      createdBy:"Colt Stealer",
      language:"English",
      price:"599"
    },
  ];

  return (
    <CoursesContext.Provider value={courses}>
      {children}
    </CoursesContext.Provider>
  );
};
export function useCourses() {
  return useContext(CoursesContext);
}

export default CoursesProvider;
