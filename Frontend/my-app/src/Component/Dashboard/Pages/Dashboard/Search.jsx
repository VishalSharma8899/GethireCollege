import Navbar from "react-bootstrap/Navbar";
import { IoNotificationsOutline } from "react-icons/io5";
import img from "../../../Images/userimg.png";

function Search() {
  return (
    <div className="container  mx-auto px-4 py-2 bg-white rounded-lg shadow-md">
      <Navbar className=" p-0">
        <div className="flex justify-end items-center w-full">
          <div className="flex items-center gap-3">
            <IoNotificationsOutline className="text-lg " />
            <div className="bg-black rounded-full w-8 h-8 overflow-hidden">
              <img
                src={img}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-black text-sm font-medium">
              John
            </div>
          </div>
        </div>
      </Navbar>
    </div>
  );
}

export default Search;
