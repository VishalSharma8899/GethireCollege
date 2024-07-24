import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import img from "../../../Images/userimg.png";
import clgImg from "../../../Images/clgimg.jpg";
import ClgCult from "../../../Images/ClgDance.jfif";
import ClgHr from "../../../Images/ClgHr.avif";
import ClgSport from "../../../Images/ClgSports.jpg";
import ClgWork from "../../../Images/ClgWorkshop.jpg";
import clglogo from "../../../Images/ClgLogo.webp";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Events from "./Events";
import Card from "./Card";

function College() {
  const [ClgImg, SetClgImg] = useState(clgImg);
  const [ClgLogo, SetClgLogo] = useState(clglogo);
  const [ClgName, SetClgName] = useState("PIEMR");
  const [ClgFullName, SetClgFullName] = useState(
    "Prestige Institute of Enginnering Management & Research"
  );
  const [ClgLoc, setClgLoc] = useState(
    " Sector-D, Scheme No 74C, Vijay Nagar, Indore, Madhya Pradesh 452010"
  );
  const [iconLinks] = useState({
    google: "https://www.google.com",
    facebook: "https://www.facebook.com",
    linkedin: "https://www.linkedin.com",
    whatsapp: "https://www.whatsapp.com",
    mail: "mailto:someone@example.com",
  });

  const [clgDetails, setClgDetails] = useState(
    "Welcome to PIEMR, Indore.PIEMR was established in 2008, under the patronage of Dr. N.N. Jain, Chairman & Founder of the Prestige Education Foundation (PEF). Approved by the All India Council for Technical Education (AICTE), New Delhi & the DTE, Govt. Of Madhya Pradesh, promising high regard to qualitative education.Our affiliation with the Rajiv Gandhi Technical University (RGTU), Bhopal, complements our existing degree of autonomy in teaching, learning, and research. Nestled in the heart of the financial capital of Madhya Pradesh, it is popularly described as one of the best engineering institutes in Central India.In the journey of 15 years, Prestige Institute of Engineering Management & Research, Indore has achieved various milestones in teaching, learning, and research. Not long ago, we collaborated with NITI Aayog in launching our venture the ‘Prestige Drone Tech’, to provide agricultural services in the Malwa and the Gird region."
  );
  const [events] = useState([
    {
      id: 1,
      image: ClgCult,
      title: "Cultural Events",
      description: "Conducted Various Cultural Events",
    },
    {
      id: 2,
      image: ClgWork,
      title: "Workshop",
      description: "Workshops Conducted by Students",
    },
    {
      id: 3,
      image: ClgSport,
      title: "Sports Events",
      description: "Various Games Conducted for Students",
    },
    {
      id: 4,
      image: ClgHr,
      title: "HR Meet",
      description: "HR Meet help to make connections",
    },
  ]);
  const [map, setMap] = useState(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.1401983938745!2d75.88307947513238!3d22.76017777935854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963037e2dac9413%3A0x17126ae4be0e2398!2sPRESTIGE%20Vihar%2C%20Admin%20Block!5e0!3m2!1sen!2sin!4v1721711082421!5m2!1sen!2sin"
  );

  return (
    <div>
      <div className="w-full h-screen">
        {/* Search */}
        <div className="container mx-auto px-4 py-2">
          <Navbar className="bg-body-tertiary flex flex-row justify-between items-center">
            <Form className="flex items-center">
              <IoSearch className="text-lg mr-2" />
              <Form.Control
                type="text"
                placeholder="Search"
                className="w-48 rounded-xl text-sm px-2 py-1"
              />
            </Form>
            <div className="flex items-center gap-2 mr-5">
              <IoNotificationsOutline className="text-lg" />
              <div className="bg-black rounded-full w-8 h-8">
                <img
                  src={img}
                  alt="profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="bg-blue-400 text-white rounded w-10 h-5 text-xs flex items-center justify-center">
                John
              </div>
            </div>
          </Navbar>
        </div>

        {/* Main-Container */}
        <div className="container w-full bg-grey-50 mt-3 h-screen">
          {/* ImageClg */}
          <div className="container mx-auto px-4 py-4">
            <div className="relative w-full h-48 md:h-64 lg:h-72">
              <img src={ClgImg} alt="" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <img
                  src={clglogo}
                  className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-4 border-white"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center mt-16 px-4">
              <div className="text-center md:text-left">
                <div className="font-bold text-lg md:text-xl lg:text-2xl">
                  {ClgName}
                </div>
                <div className="text-gray-500 text-xs md:text-sm lg:text-base">
                  {ClgFullName}
                </div>
                <div className="flex items-center justify-center md:justify-start gap-1 text-xs md:text-sm lg:text-base">
                  <IoLocationSharp />
                  <p>{ClgLoc}</p>
                </div>
              </div>
              <div className="flex gap-2 mt-4 md:mt-0">
                <a
                  href={iconLinks.google}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FcGoogle className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                </a>
                <a
                  href={iconLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                </a>
                <a
                  href={iconLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CiLinkedin className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                </a>
                <a
                  href={iconLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                </a>
                <a
                  href={iconLinks.mail}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineMail className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                </a>
              </div>
            </div>
          </div>

          {/* About */}
          <div className="w-full h-auto font-robo py-8 text-xs">
            <div className="container mx-auto px-4 font-sans rounded-lg">
              <div>
                <h1 className="text-2xl font-bold ">About Us</h1>
              </div>
              <div className="bg-white text-gray-800 text-xs md:text-sm lg:text-base w-full mt-3 border rounded-md border-gray-300 p-4 shadow-inner">
                <div className="leading-relaxed">{clgDetails}</div>
              </div>
            </div>
          </div>

          <div className="w-full h-48">
            {/* Cultural */}
            <div className="container mx-auto w-full p-4 md:p-6 lg:p-8 mt-5 rounded-lg bg-white">
              <div className="mb-4">
                <h1 className="text-2xl font-bold text-black">
                  Cultural Showcase
                </h1>
              </div>
              <div className="text-sm w-full shadow-inner border border-gray-300 rounded-md">
                <div className="p-2">
                  <p className="mb-3">
                    We celebrate diversity and cultural richness through a
                    vibrant array of events throughout the academic year. These
                    events not only showcase the talents and traditions of our
                    diverse student body but also foster an inclusive community
                    where everyone can learn and grow together.
                  </p>
                  <p>
                    We encourage students, faculty, and staff to participate in
                    these cultural celebrations. Whether you're showcasing your
                    talents, volunteering, or simply attending, these events are
                    opportunities to connect with others and embrace our diverse
                    community.
                  </p>
                </div>
              </div>
            </div>

            {/* Events */}
            <div className="container mx-auto p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {events.map((event) => {
                  console.log(event);
                  return (
                    <div
                      key={event.id}
                      className="bg-white shadow-md rounded-lg overflow-hidden"
                    >
                      <Events img={event.image}>
                        <h3 className="text-xl font-bold mb-2">
                          {event.title}
                        </h3>
                        <p>{event.description}</p>
                        <div className="mt-4">
                          <button className="bg-black text-white px-4 py-2 rounded">
                            Know More
                          </button>
                        </div>
                      </Events>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Top PLacement */}

            <div className="w-full container">
              <div>
                <p className="text-2xl mb-5 font-bold text-black">Top Placements</p>
              </div>
              <Card />
            </div>

            {/* map */}
            <div
              style={{
                // marginTop:"30px",
                overflow: "hidden",
                height: "0px",
                paddingBottom: "30%",
                position: "relative",
              }}
            >
              <iframe
                style={{
                  border: "0px",
                  height: "100%",
                  width: "100%",
                  left: "0px",
                  top: "0px",
                  position: "absolute",
                }}
                src={map}
                width="600"
                height="450"
                allowFullScreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default College;
