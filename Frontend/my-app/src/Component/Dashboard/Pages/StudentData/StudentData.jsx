//   // src/components/StudentData.jsx
 import React, { useState, useEffect } from 'react';
import axios from 'axios';
 


import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 
import { IoSearch } from "react-icons/io5";
 
import { LuImport } from "react-icons/lu";
import { FaRegEdit } from 'react-icons/fa'; // Import edit icon
import { MdDeleteOutline } from 'react-icons/md';
import { FaArrowDownLong } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";
 





function StudentData() {
    const [students, setStudents] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
    
      useEffect(() => {
        const fetchStudentsData = () => {
            axios.get('http://localhost:3000/students/alluser')
              .then(response => {
                setStudents(response.data);
                setLoading(false);
              })
              .catch(error => {
                console.error('Error fetching student data:', error);
                setError('Error fetching student data');
                setLoading(false);
              });

      }
      
      fetchStudentsData();
    }, []);
    
      if (loading) return <div>Loading...</div>;
      if (error) return <div>{error}</div>;
      function handleEdit(student) {
        
        console.log('Edit student:', student);
      }
    
      function handleDelete(student) {
        // Add your delete logic here
        console.log('Delete student:', student);
      }
    
  return (
   
          <div className='m-2'>
            <div className='container w-full h-12 rounded-md mb-2 flex justify-between items-center'>
              <div>
                <p className='font-bold text-lg'>Student List</p>
              </div>
              <div className='flex gap-5'>
                <button className='bg-indigo-500 text-white p-1 w-24 rounded-md flex p-2'><LuImport className='mr-2 mt-1'/> Import</button>
              </div>
            </div>

            {/* Searchbar */}
          <Navbar className="bg-body-tertiary flex justify-between items-center">
          <Form inline>
          <div className='flex gap-5 ml-5 items-center justify-center'>
          <div className='flex flex-row'> 
               <button className='bg-white h-10 w-20 flex justify-center rounded-md items-center '>All Users</button>
         </div>
        <div>
        <Form.Select aria-label="Default select example">
  <option>Placement </option>
  <option value="1">Placed</option>
  <option value="2">Unplaced</option>
   
         </Form.Select>
        </div>
        <div>
        <Form.Select aria-label="Default select example">
            <option>Department</option>
            <option value="1">CSE</option>
            <option value="2">EC</option>
            <option value="3">AIDS</option>
            <option value="4">Civil</option>
            <option value="5">Mechanical</option>
         </Form.Select>
        </div>
            <div>
        <Form.Select aria-label="Default select example">
            <option>Internship Interest</option>
            <option value="1">Yes</option>
            <option value="2">No</option>
         </Form.Select>
        </div>    
        <div>
        <Form.Select aria-label="Default select example">
            <option>Placement Interest</option>
            <option value="1">Yes</option>
            <option value="2">No</option>
         </Form.Select>
        </div>   
        <div>
        <Form.Select aria-label="Default select example">
            <option>Year</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="2">3</option>
            <option value="2">4</option>

         </Form.Select>
        </div> 
          </div>
          
      </Form>
      <div className='flex align-middle items-center gap-2 pl-2'>
        <div className=''>
            <IoSearch/>
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
         <div>
      </div>
         </div>
    </Navbar>
     <div className='container w-full h-screen p-2'>
       <div className='w-full p-2 bg-gray-50 h-4/5'>
        <div className='w-full h-12 bg-gray-200 rounded-md flex text-md gap-40 mb-2 justify-center items-center'>
           <div className='flex items-center gap-1'>
           <div>ID No</div>
           <FaArrowDownLong/>
           </div>
          <div className='flex items-center gap-1'>
            <div>Date</div>
            <FaArrowUp/>
          </div>
          <div>Student Name</div>
          <div>Placement Status</div>
          <div>Department</div>
          <div>Action</div>
          <div>
            
            </div>  
        </div>

        {/* mapdata */}
        {students.map((student, index) => (
            <div key={index} className='w-full h-12 bg-white border-solid border-b-2 border-gray-300 rounded-md flex text-md gap-40 justify-center'>
              <div>{student.studentId}</div>
              <div>{new Date(student.dob).toLocaleDateString()}</div>
              <div>{student.name}</div>
               
              <div className={`-ml-7 ${student.isPlaced ? 'bg-green-200' : 'bg-red-200'} rounded-md w-20 flex justify-center items-center h-8`}>
                {student.isPlaced ? 'Active' : 'Inactive'}
              </div>
              <div>
                <div className='text-sm'>{student.department}</div>
                 
              </div>
              <div className='flex gap-3 justify-center items-center'>
                <FaRegEdit className='w-6 h-6 cursor-pointer' onClick={() => handleEdit(student)} />
                <MdDeleteOutline className='w-6 h-6 cursor-pointer' onClick={() => handleDelete(student)} />
              </div>
            </div>
          ))}
       </div>
     </div>
    </div>
  );
}

export default StudentData;