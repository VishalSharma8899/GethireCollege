import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IoNotificationsOutline } from "react-icons/io5";
import { FcServiceMark } from "react-icons/fc";
import { MdArrowDropDown } from "react-icons/md";


function Search() {
  return (
   
          <div className='m-2'>
          <Navbar className="bg-body-tertiary flex flex-row justify-between">
      <Form inline>
      <div className='ml-7'>
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
     <div className="flex gap-3"> 
      <div>
        <IoNotificationsOutline/>
      </div>
      <div>
        <FcServiceMark/>
      </div>
      <div>
        Tisha
      </div>
      <div>
        <MdArrowDropDown/>
      </div>
     
      </div>
      </Form>
    </Navbar>
 
    </div>
  );
}

export default Search;