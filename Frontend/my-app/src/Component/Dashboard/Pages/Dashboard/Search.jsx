import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IoNotificationsOutline } from "react-icons/io5";
import { FcServiceMark } from "react-icons/fc";
import { MdArrowDropDown } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import img from "../../../Images/userimg.png";
import { Link } from "react-router-dom";

function Search() {
  return (
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
  );
}

export default Search;
