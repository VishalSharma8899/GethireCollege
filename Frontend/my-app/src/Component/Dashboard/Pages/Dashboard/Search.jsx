import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import img from "../../../Images/userimg.png";

function Search() {
  return (
    <div className="container mx-auto px-4 py-2">
      <Navbar className="bg-body-tertiary flex flex-row justify-end items-center">
        {/* <Form className="flex items-center">
          <IoSearch className="text-lg mr-2" />
          <Form.Control
            type="text"
            placeholder="Search"
            className="w-48 rounded-xl text-sm px-2 py-1"
          />
        </Form> */}
        <div className="flex items-center gap-2 mr-5 ">
          <IoNotificationsOutline className="text-lg" />
          <div className="bg-black rounded-full w-8 h-8">
            <img
              src={img}
              alt="profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="bg-blue-400 text-white rounded w-10 h-5 text-xs flex items-center justify-center">John</div>
        </div>
      </Navbar>
    </div>
  );
}

export default Search;
