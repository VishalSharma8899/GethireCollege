import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IoSearch } from "react-icons/io5";
import { LuImport } from "react-icons/lu";
import { FaArrowDownLong } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";


function StudentData() {

  return (
          <div className='m-2'>
            <div className='container w-full h-12 rounded-md mb-2 flex justify-between items-center'>
              <div>
                <p className='font-bold text-lg'>Student List</p>
              </div>
              <div className='flex gap-5'>
                <button className='bg-indigo-500 text-white hover:bg-indigo-400 p-1 w-24 rounded-md flex p-2'><LuImport className='mr-2 mt-1'/> Import</button>
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
  <option>Placed</option>
  <option value="1">Unplaced</option>
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
          <div>Status</div>
          <div>Department/Class</div>
          <div>
            
            </div>  
        </div>

        {/* mapdata */}
        <div className='w-full h-12 bg-white border-solid border-b-2 border-gray-300 rounded-md flex text-md gap-40 justify-center'>
           <div className='flex items-center gap-1 '>
           <div>#87878</div>
           </div>
          <div className='flex items-center gap-1'>
            <div>15 Jan 2024</div>
          </div>
          <div className='text-sm'>
            <div>John</div>
            <div className='text-gray text-xs'>John@gmail.com</div>
          </div>
          <div className='-ml-7 bg-green-200 rounded-md w-20 mt-2 flex justify-center items-center h-8'>Active</div>
          <div>
            <div className='text-sm'>B Tech</div>
            <div className='text-xs text-grey'>5th sem</div>
          </div>
          <div className='flex gap-3 justify-center items-center'>
            <FaRegEdit className='w-6 h-6'/>
             <MdDeleteOutline className='w-6 h-6'/>
            </div>  
        </div>
        <div className='w-full h-12 bg-white border-solid border-b-2 border-gray-300 rounded-md flex text-md gap-40 justify-center'>
           <div className='flex items-center gap-1 '>
           <div>#87878</div>
           </div>
          <div className='flex items-center gap-1'>
            <div>15 Jan 2024</div>
          </div>
          <div className='text-sm'>
            <div>John</div>
            <div className='text-gray text-xs'>John@gmail.com</div>
          </div>
          <div className='-ml-7 bg-green-200 rounded-md w-20 mt-2 flex justify-center items-center h-8'>Active</div>
          <div>
            <div className='text-sm'>B Tech</div>
            <div className='text-xs text-grey'>5th sem</div>
          </div>
          <div className='flex gap-3 justify-center items-center'>
            <FaRegEdit className='w-6 h-6'/>
             <MdDeleteOutline className='w-6 h-6'/>
            </div>  
        </div>
        <div className='w-full h-12 bg-white border-solid border-b-2 border-gray-300 rounded-md flex text-md gap-40 justify-center'>
           <div className='flex items-center gap-1 '>
           <div>#87878</div>
           </div>
          <div className='flex items-center gap-1'>
            <div>15 Jan 2024</div>
          </div>
          <div className='text-sm'>
            <div>John</div>
            <div className='text-gray text-xs'>John@gmail.com</div>
          </div>
          <div className='-ml-7 bg-green-200 rounded-md w-20 mt-2 flex justify-center items-center h-8'>Active</div>
          <div>
            <div className='text-sm'>B Tech</div>
            <div className='text-xs text-grey'>5th sem</div>
          </div>
          <div className='flex gap-3 justify-center items-center'>
            <FaRegEdit className='w-6 h-6'/>
             <MdDeleteOutline className='w-6 h-6'/>
            </div>  
        </div>
        <div className='w-full h-12 bg-white border-solid border-b-2 border-gray-300 rounded-md flex text-md gap-40 justify-center'>
           <div className='flex items-center gap-1 '>
           <div>#87878</div>
           </div>
          <div className='flex items-center gap-1'>
            <div>15 Jan 2024</div>
          </div>
          <div className='text-sm'>
            <div>John</div>
            <div className='text-gray text-xs'>John@gmail.com</div>
          </div>
          <div className='-ml-7 bg-green-200 rounded-md w-20 mt-2 flex justify-center items-center h-8'>Active</div>
          <div>
            <div className='text-sm'>B Tech</div>
            <div className='text-xs text-grey'>5th sem</div>
          </div>
          <div className='flex gap-3 justify-center items-center'>
            <FaRegEdit className='w-6 h-6'/>
             <MdDeleteOutline className='w-6 h-6'/>
            </div>  
        </div>
        <div className='w-full h-12 bg-white border-solid border-b-2 border-gray-300 rounded-md flex text-md gap-40 justify-center'>
           <div className='flex items-center gap-1 '>
           <div>#87878</div>
           </div>
          <div className='flex items-center gap-1'>
            <div>15 Jan 2024</div>
          </div>
          <div className='text-sm'>
            <div>John</div>
            <div className='text-gray text-xs'>John@gmail.com</div>
          </div>
          <div className='-ml-7 bg-green-200 rounded-md w-20 mt-2 flex justify-center items-center h-8'>Active</div>
          <div>
            <div className='text-sm'>B Tech</div>
            <div className='text-xs text-grey'>5th sem</div>
          </div>
          
          <div className='flex gap-3 justify-center items-center'>
            <FaRegEdit className='w-6 h-6'/>
             <MdDeleteOutline className='w-6 h-6'/>
            </div>  
        </div>
       </div>
     </div>
    </div>
  );
}

export default StudentData;