import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RxCross2 } from "react-icons/rx";
import man1 from '../../../Images/man1.png';
import { BsCloudDownload } from "react-icons/bs";
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const EachStudent = ({ student, onClose }) => {
  const [activeTab, setActiveTab] = useState("details");
  const [rating, setRating] = useState(0);


  // Function to handle star rating change
  const handleStarClick = (value) => {
    setRating(value);
  };

  return (
    <>
      <div className="fixed inset-0 flex justify-end items-start z-50 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out">
        <div className="w-full md:w-3/5 lg:w-2/5 bg-white shadow-lg h-full p-4 overflow-y-auto transform transition-transform duration-300 ease-in-out translate-x-full md:translate-x-0">
          <p
            onClick={onClose}
            className="absolute top-4 right-4 text-black hover:text-gray-700 cursor-pointer"
          >
            <RxCross2 size={24} />
          </p>
          <h2 className="text-xl font-semibold mb-4">Student Details</h2>
          <div style={{ background: "rgba(243, 246, 249, 1)" }}>
            <Container>
              <Row className="flex flex-col md:flex-row">
                <Col md="auto" className="flex items-center mb-4 md:mb-0">
                  <img src={man1} alt="Student" className="w-24 h-24 rounded-full" />
                </Col>
                <Col className="flex-col md:ml-4">
                  <p className="text-2xl font-semibold">{student.name}</p>
                  <p className="text-sm text-gray-600">Student</p>
                  <p
                    className={`text-lg font-medium ${
                      student.status === 'Selected' ? 'text-green-800' :
                      student.status === 'Pending' ? 'text-yellow-800' :
                      student.status === 'Rejected' ? 'text-red-800' :
                      'text-blue-800'
                    }`}
                  >
                    {student.status}
                  </p>
                </Col>
                <Col className="text-end mt-4 md:mt-0">
                  <button className="bg-white text-black hover:bg-black hover:text-white border border-black rounded px-4 py-2 transition duration-300">
                    Send Email
                  </button>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="flex flex-col md:flex-row gap-4 mt-3">
            <p
              className={`cursor-pointer ${activeTab === 'details' ? 'font-bold' : ''}`}
              onClick={() => setActiveTab('details')}
            >
              Details
            </p>
            <p
              className={`cursor-pointer ${activeTab === 'resume' ? 'font-bold' : ''}`}
              onClick={() => setActiveTab('resume')}
            >
              Resume
            </p>
            <p
              className={`cursor-pointer ${activeTab === 'feedback' ? 'font-bold' : ''}`}
              onClick={() => setActiveTab('feedback')}
            >
              Feedback
            </p>
          </div>
          <hr className="my-3" />
          {activeTab === "details" ? (
            <div className="details mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aliquam repellendus totam ut rem debitis beatae illum fugiat qui earum quis voluptates dolor quaerat, voluptate aspernatur sequi! Labore cupiditate ipsum corporis eos deserunt? Minima dolor in ex quos unde dolorum velit expedita porro facilis quasi reprehenderit itaque, similique cupiditate aspernatur?
            </div>
          ) : activeTab === "resume" ? (
            <div className="resume mt-3 bg-slate-100 flex items-center justify-between p-3 rounded-lg">
              <p className="text-xl">Download Resume</p>
              <button className="p-2">
                <BsCloudDownload className="text-lg" />
              </button>
            </div>
          ) : (
            <div className="feedback mt-3">
              <h3 className="text-xl font-semibold mb-2">Feedback</h3>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={`cursor-pointer ${rating >= index + 1 ? 'text-yellow-400' : 'text-gray-300'}`}
                    size={24}
                    onClick={() => handleStarClick(index + 1)}
                  />
                ))}
                <FaStarHalfAlt
                  className={`cursor-pointer ${rating > Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                  size={24}
                  onClick={() => handleStarClick(Math.ceil(rating))}
                />
              </div>
            
            </div>
          )}
        </div>
        <div className="" onClick={onClose}></div>
      </div>
    </>
  );
};

export default EachStudent;
