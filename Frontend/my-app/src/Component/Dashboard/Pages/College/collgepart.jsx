import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import img from "../../../Images/userimg.png";
import clgImg from "../../../Images/ClgImg.png";
import clglogo from "../../../Images/piemrlogo.jpeg";
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
    "Welcome to PIEMR, Indore.PIEMR was established in 2008, under the patronage of Dr. N.N. Jain, Chairman & Founder of the Prestige Education Foundation (PEF). Approved by the All India Council for Technical Education (AICTE), New Delhi & the DTE, Govt. Of Madhya Pradesh, promising high regard to qualitative education.Our affiliation with the Rajiv Gandhi Technical University (RGTU), Bhopal, complements our existing degree of autonomy in teaching, learning, and research. Nestled in the heart of the financial capital of Madhya Pradesh, it is popularly described as one of the best engineering institutes in Central India.In the journey of 15 years, Prestige Institute of Engineering Management & Research, Indore has achieved various milestones in teaching, learning, and research. Not long ago, we collaborated with NITI Aayog in launching our venture the ‘Prestige Drone Tech’, to provide agricultural services in the Malwa and the Gird region. Our innovative and creative educational experiments have set us apart from other engineering colleges in the city as well as the region.PIEMR has the honor of being a core collaborator with SAE India, for establishing its collegiate club right at the institute. From time to time for the encouragement of our students and staff members, we frequently invite popular engineers and successful entrepreneurs and conduct as well as send them for quality training. We have also collaborated with some of India’s most prestigious education institutions. Recently, we had the honor of being designated as the Nodal Center for Virtual Labs of IIT Delhi.We are poised and prompt for the growth of our family of students, teachers, and all the staff members."
  );
  const [map, setMap] = useState(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.1401983938745!2d75.88307947513238!3d22.76017777935854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963037e2dac9413%3A0x17126ae4be0e2398!2sPRESTIGE%20Vihar%2C%20Admin%20Block!5e0!3m2!1sen!2sin!4v1721711082421!5m2!1sen!2sin"
  );

  return (
    <div>
      <div className="w-full h-screen">
        {/* Search */}
        <div className="m-2">
          <Navbar className="bg-body-tertiary flex flex-row justify-between">
            <Form inline>
              <div className="flex align-middle items-center gap-2 pl-2">
                <div className="">
                  <IoSearch />
                </div>
                <Row>
                  <Col xs="auto">
                    <Form.Control
                      type="text"
                      placeholder="Search"
                      className=" mr-sm-2"
                    />
                  </Col>
                </Row>
              </div>
            </Form>
            <Form inline>
              <div className="flex gap-3 justify-center items-center">
                <div>
                  <IoNotificationsOutline />
                </div>
                <div className="bg-black rounded-xl w-10">
                  <img src={img} />
                </div>
                <div>John</div>
                <div></div>
                <MdArrowDropDown />
              </div>
            </Form>
          </Navbar>
        </div>

        {/* Main-Container */}
        <div className="container w-full bg-grey-50 mt-3 h-screen w-full">
          {/* ImageClg */}
          <div>
            <div className="w-full container h-30">
              <div className="relative">
                <img src={ClgImg} alt="" className="w-full h-30" />
              </div>
              <div className="w-24 h-24 absolute -mt-10">
                <img src={clglogo} className="rounded" alt="" />
              </div>
            </div>
            <div className="w-full container flex gap-80 ml-32 h-28">
              <div className="">
                <div className="font-bold ">{ClgName}</div>
                <div className="text-grey-500 text-xs">{ClgFullName}</div>
                <div className="flex items-center text-xs justify-center gap-1">
                  <IoLocationSharp />
                  <p>{ClgLoc}</p>
                </div>
              </div>
              <div className="flex mt-3 gap-2 ml-80">
                <div>
                  <a
                    href={iconLinks.google}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FcGoogle className="w-5 h-5" />
                  </a>
                </div>
                <div>
                  <a
                    href={iconLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="w-5 h-5" />
                  </a>
                </div>
                <div>
                  <a
                    href={iconLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CiLinkedin className="w-5 h-5" />
                  </a>
                </div>
                <div>
                  <a
                    href={iconLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                  </a>
                </div>
                <div>
                  <a
                    href={iconLinks.mail}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiOutlineMail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* About */}
          <div className="w-full h-48">
            <div className="container w-full h-full font-sans rounded">
              <div>
                <p className="text-blue-500 mb-1">About Us</p>
              </div>
              <div className="text-sm w-full mt-3 border rounded-md border-black-800 p-2">
                <div className="p-2">{clgDetails}</div>
              </div>
            </div>
          </div>

          <div className="w-full h-48">
          {/* Cultural */}
            <div className="container mt-5 w-full h-full mt-5 rounded">
              <div>
                <p className="text-blue-500 mb-1">Cultural Showcase</p>
                <hr className="w-36" />
              </div>
              <div className="text-sm w-full p-2">
                <div className="p-2">
                  <p>
                    We celebrate diversity and cultural richness through a
                    vibrant array of events throughout the academic year. These
                    events not only showcase the talents and traditions of our
                    diverse student body but also foster an inclusive community
                    where everyone can learn and grow together
                  </p>
                  <p className="mt-3">
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
            <div style={{ backgroundColor: "#FAFBFF" }} className="p-2 rounded">
              <Events/>
            </div>

            {/* Top PLacement */}

            <div className="w-full container">
            <div>
            <p className="text-blue-500">Top Placements</p>
            <hr className="w-36 mt-1" />
            </div>
              <Card/>
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
