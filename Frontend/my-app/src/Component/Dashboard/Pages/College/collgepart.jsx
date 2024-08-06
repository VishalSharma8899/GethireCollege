import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { IoNotificationsOutline, IoLocationSharp, IoAdd } from 'react-icons/io5';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { CiLinkedin } from 'react-icons/ci';
import { AiOutlineMail } from 'react-icons/ai';
import { MdEdit } from 'react-icons/md';
import Events from './Events';
import Card from './Card';
import img from '../../../Images/userimg.png';
import clgImg from '../../../Images/clgimg.jpg';
import clglogo from '../../../Images/ClgLogo.webp';
import ClgCult from '../../../Images/ClgDance.jfif';
import ClgHr from '../../../Images/ClgHr.avif';
import ClgSport from '../../../Images/ClgSports.jpg';
import ClgWork from '../../../Images/ClgWorkshop.jpg';

function College() {
  const [collegeData, setCollegeData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCollegeData = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (!token) {
          console.error('No token found');
          return;
        }

        const decodedToken = jwtDecode(token);
        const userId = decodedToken.objId;
        console.log("id", userId);

        const response = await axios.get(`http://localhost:3000/college/colleges/${userId}`);
        console.log("data", response.data);
        
        // Assuming response.data is an array and you want the first item
        if (Array.isArray(response.data) && response.data.length > 0) {
          setCollegeData(response.data[0]);
        } else {
          console.error('Unexpected response format');
        }
      } catch (error) {
        console.error('Error fetching college data:', error);
      }
    };

    fetchCollegeData();
  }, []);

  const handleAdd = () => {
    navigate(`/college/collegeinfo`);
  };

  if (!collegeData) {
    return <div>Loading...</div>;
  }
  const baseUrl = 'http://localhost:3000';

  return (
    <div>
      
      <div className="w-full h-screen">
        <div className="container w-full bg-grey-50 mt-3 h-screen">
        <div className="flex justify-end gap-3 mb-4">
          <button className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleAdd}>
            <IoAdd className="mr-1" />
            Add
          </button>
          <button className="flex items-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            <MdEdit className="mr-1" />
            Edit
          </button>
        </div>
          <div className="container mx-auto px-4 py-4">
            <div className="relative w-full h-48 md:h-64 lg:h-72">
              <img   src={ `${baseUrl}/${collegeData.college_img}`} alt="" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <img src= { `${baseUrl}/${collegeData.college_logo}`}  className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-4 border-white" alt="" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center mt-16 px-4">
              <div className="text-center md:text-left">
                <div className="font-bold text-lg md:text-xl lg:text-2xl">{collegeData.college_name}</div>
                <div className="text-gray-500 text-xs md:text-sm lg:text-base">{collegeData.college_logo_name}</div>
                <div className="flex items-center justify-center md:justify-start gap-1 text-xs md:text-sm lg:text-base">
                  <IoLocationSharp />
                  <p>{collegeData.college_address}</p>
                </div>
              </div>
              <div className="flex gap-2 mt-4 md:mt-0">
                <a href={collegeData.college_website} target="_blank" rel="noopener noreferrer">
                  <FcGoogle className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                </a>
                <a href={collegeData.college_facebook_id} target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                </a>
                <a href={collegeData.college_linkedin_id} target="_blank" rel="noopener noreferrer">
                  <CiLinkedin className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                </a>
                <a href={`https://wa.me/${collegeData.college_whatsapp_num}`} target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                </a>
                <a href={`mailto:${collegeData.college_gmail_id}`} target="_blank" rel="noopener noreferrer">
                  <AiOutlineMail className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full h-auto font-robo py-8 text-xs">
            <div className="container mx-auto px-4 font-sans rounded-lg">
              <div>
                <h1 className="text-2xl font-bold">About Us</h1>
              </div>
              <div className="bg-white text-gray-800 text-xs md:text-sm lg:text-base w-full mt-3 border rounded-md border-gray-300 p-4 shadow-inner">
                <div className="leading-relaxed">{collegeData.college_info}</div>
              </div>
            </div>
          </div>
          <div className="w-full h-48">
            <div className="container mx-auto w-full p-4 md:p-6 lg:p-8 mt-5 rounded-lg bg-white">
              <div className="mb-4">
                <h1 className="text-2xl font-bold text-black">Cultural Showcase</h1>
              </div>
              <div className="text-sm w-full shadow-inner border border-gray-300 rounded-md">
                <div className="p-2">
                  <p className="mb-3">We celebrate diversity and cultural richness through a vibrant array of events throughout the academic year. These events not only showcase the talents and traditions of our diverse student body but also foster an inclusive community where everyone can learn and grow together.</p>
                  <p>We encourage students, faculty, and staff to participate in these cultural celebrations. Whether you're showcasing your talents, volunteering, or simply attending, these events are opportunities to connect with others and embrace our diverse community.</p>
                </div>
              </div>
            </div>
            <div className="container mx-auto p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                 {/* {collegeData.events.map((event) => (
                  <div key={event.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                    <Events img={event.image}>
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p>{event.description}</p>
                      <div className="mt-4">
                        <button className="bg-black text-white px-4 py-2 rounded">Know More</button>
                      </div>
                    </Events>
                  </div>
                ))}  */}
              </div>
            </div>
            <div className="w-full container">
              <div>
                <p className="text-2xl mb-5 font-bold text-black">Top Placements</p>
              </div>
              <Card />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-md" style={{ height: '0', paddingBottom: '56.25%' }}>
          <iframe
            style={{ border: '0', height: '70%', width: '100%', position: 'absolute', top: '0', left: '0' }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.1401983938745!2d75.88307947513238!3d22.76017777935854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963037e2dac9413%3A0x17126ae4be0e2398!2sPRESTIGE%20Vihar%2C%20Admin%20Block!5e0!3m2!1sen!2sin!4v1721711082421!5m2!1sen!2sin"
            title="Map"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default College;
