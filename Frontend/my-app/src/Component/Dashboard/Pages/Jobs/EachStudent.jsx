import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RxCross2 } from "react-icons/rx";
import man1 from '../../../Images/man1.png';
import { BsCloudDownload } from "react-icons/bs";

const EachStudent = ({ student, onClose }) => {
  const [activeTab, setActiveTab] = useState("details");

  return (
    <>
      <div className="fixed inset-0 flex justify-end z-50">
        <div className="w-2/5 bg-white shadow-lg h-full p-4 overflow-y-auto transform transition-transform duration-300 ease-in-out">
          <p
            onClick={onClose}
            className="absolute top-4 right-4 text-black hover:text-gray-700"
          >
            <RxCross2 size={24} />
          </p>
          <h2 className="text-xl font-semibold mb-4">Student Details</h2>
          <div style={{ background: "rgba(243, 246, 249, 1)" }}>
            <Container>
              <Row className="flex">
                <Col className="h-40 flex">
                  <div className="mt-5 flex gap-3">
                    <div>
                      <img src={man1} alt="Student" />
                    </div>
                    <div className="details">
                      <p className="text-2xl">{student.name}</p>
                      <p>Student</p>
                      <p
                        className={`text-lg font-medium ${
                          student.status === 'Selected' ? 'text-green-800' :
                          student.status === 'Pending' ? 'text-yellow-800' :
                          student.status === 'Rejected' ? 'text-red-800' :
                          'text-gray-800'
                        }`}
                      >
                        {student.status} 
                      </p>
                    </div>
                  </div>
                </Col>
                <Col className="text-end mt-5 mr-2">
                  <button className="bg-white text-black hover:bg-black hover:text-white border border-black rounded px-4 py-2 transition duration-300">
                    Send Email
                  </button>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="flex gap-16 p-3">
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
          </div>
          <hr />
          {activeTab === "details" ? (
            <div className="details mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aliquam repellendus totam ut rem debitis beatae illum fugiat qui earum quis voluptates dolor quaerat, voluptate aspernatur sequi! Labore cupiditate ipsum corporis eos deserunt? Minima dolor in ex quos unde dolorum velit expedita porro facilis quasi reprehenderit itaque, similique cupiditate aspernatur?
            </div>
          ) : (
            <div className="resume mt-3 bg-slate-100 flex justify-between">
             <p className="p-3  text-xl" >Download Resume </p>
             <button className="p-2 m-2">
             <BsCloudDownload className="text-lg m-3" />
             </button>
            </div>
          )}
        </div>
        <div className="" onClick={onClose}></div>
      </div>
    </>
  );
};

export default EachStudent;
