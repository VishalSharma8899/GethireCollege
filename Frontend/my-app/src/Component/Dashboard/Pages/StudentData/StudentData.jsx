



//   // src/components/StudentData.jsx
import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { IoSearch } from "react-icons/io5";
import { LuImport } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { Button, Modal, Table } from "antd";
import axios from "axios";
import moment from "moment";

const columns = [
  {
    title: "ID NO",
    dataIndex: "id",
  },
  {
    title: "Date",
    dataIndex: "date",
  },
  {
    title: "Student Name",
    dataIndex: "name",
  },
  {
    title: "Department",
    dataIndex: "dep",
  },
  {
    title: "Placement Status",
    dataIndex: "placement",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

function StudentData() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fileContent, setFileContent] = useState(null);

  const [filters, setFilters] = useState({
    department: "",
    isPlaced: "",
    internshipInterest: "",
    placementInterest: "",
    yearOfStudy: "",
  });
  function getCookie(userId) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${userId}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  
  const userId = getCookie('userId');
  

  useEffect(() => {
    fetchStudentData();
  }, []);

  useEffect(() => {
    fetchStudentDataByFilter();
  }, [filters]);

  const fetchStudentData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/students/alluser"
      );
      const data = response.data.map((item, index) => ({
        key: index,
        id: item.studentId,
        date: moment(item.dob).format("DD/MM/YYYY"),
        name: item.name,
        dep: item.department,
        placement: item.isPlaced ? "Placed" : "Unplaced",
        action: (
          <>
            <MdDeleteOutline
              onClick={() => handleDelete(item.studentId)}
              style={{ cursor: "pointer", marginRight: "10px" }}
            />
            <FaRegEdit
              onClick={() => handleEdit(item.studentId)}
              style={{ cursor: "pointer" }}
            />
          </>
        ),
      }));
      setDataSource(data);
      setFilteredData(data);
    } catch (error) {
      console.error("Error fetching student data:", error);
    }
  };

  const handleFetchAllUsers = () => {
    setFilters({
      department: "",
      isPlaced: "",
      internshipInterest: "",
      placementInterest: "",
      yearOfStudy: "",
    });
    fetchStudentData();
  };

  const fetchStudentDataByFilter = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/students/filter",
        filters
      );
      const data = response.data.map((item, index) => ({
        key: index,
        id: item.studentId,
        date: moment(item.dob).format("DD/MM/YYYY"),
        name: item.name,
        dep: item.department,
        placement: item.isPlaced ? "Placed" : "Unplaced",
        action: (
          <>
            <MdDeleteOutline
              onClick={() => handleDelete(item.studentId)}
              style={{ cursor: "pointer", marginRight: "10px" }}
            />
            <FaRegEdit
              onClick={() => handleEdit(item.studentId)}
              style={{ cursor: "pointer" }}
            />
          </>
        ),
      }));
      setFilteredData(data);
    } catch (error) {
      console.error("Error fetching filtered student data:", error);
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    if (file) {
      reader.onload = (e) => {
        setFileContent(e.target.result);
      };

      reader.readAsText(file);
    }
  };

  const handleOk = async () => {
    const userId = getCookie('userId');
    if (fileContent) {
      try {
        const formData = new FormData();
        formData.append("file", new Blob([fileContent], { type: "text/csv" }));
        formData.append("userId", userId); // Add userId to FormData
  
        await axios.post("http://localhost:3000/students/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          }
        });
  
        alert("File uploaded successfully");
      } catch (err) {
        console.error("There was an error uploading the file:", err);
        alert("There was an error uploading the file");
      }
    }
  
    setIsModalOpen(false);
  };
  


 
 


const handleDelete = async (id) => {
  try {
    await axios.delete(`http://localhost:3000/students/delete/${id}`);
    const newData = dataSource.filter((item) => item.id !== id);
    setDataSource(newData);
    setFilteredData(newData);
  } catch (error) {
    console.error("Error deleting student data:", error);
  }
};

const handleEdit = (id) => {
  console.log("Edit item with ID:", id);
};

const showModal = () => {
  setIsModalOpen(true);
};

const handleCancel = () => {
  setIsModalOpen(false);
};

const start = () => {
  setLoading(true);
  setTimeout(() => {
    setSelectedRowKeys([]);
    setLoading(false);
  }, 1000);
};

const onSelectChange = (newSelectedRowKeys) => {
  console.log("selectedRowKeys changed: ", newSelectedRowKeys);
  setSelectedRowKeys(newSelectedRowKeys);
};

const rowSelection = {
  selectedRowKeys,
  onChange: onSelectChange,
};

const hasSelected = selectedRowKeys.length > 0;

const handleFilterChange = (filterKey, value) => {
  setFilters((prevFilters) => ({
    ...prevFilters,
    [filterKey]: value,
  }));
};

const applyFilters = () => {
  fetchStudentDataByFilter();
};

return (
  <div className="m-2">
    <div className="container w-full h-12 rounded-md mb-2 flex justify-between items-center">
      <div>
        <p className="font-bold text-lg">Student List</p>
      </div>
      <div className="flex gap-5">
        <Button
          type="primary"
          className="bg-indigo-500 text-white w-24 rounded-md"
          onClick={showModal}
        >
          <LuImport /> Import
        </Button>
        <Modal
          title="Upload Excel File"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          className=""
        >
          <input
            type="file"
            onChange={handleFileUpload}
            className="mt-1 p-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 disabled:opacity-50 w-full"
          />
        </Modal>
      </div>
    </div>

    <Navbar className="bg-body-tertiary flex justify-between items-center">
      <Form inline>
        <div className="flex gap-5 ml-5 items-center justify-center">
          <div className="flex flex-row">
            <button
              className="bg-white h-10 w-20 flex justify-center rounded-md items-center"
              onClick={handleFetchAllUsers}
            >
              All Users
            </button>
          </div>
          <div>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => handleFilterChange("isPlaced", e.target.value)}
            >
              <option value="">Placement Status</option>
              <option value="true">Placed</option>
              <option value="false">Unplaced</option>
            </Form.Select>
          </div>
          <div>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => handleFilterChange("department", e.target.value)}
            >
              <option value="">Department</option>
              <option value="Computer Science">CSE</option>
              <option value="Biology">Bio</option>
              <option value="AIDS">AIDS</option>
              <option value="Civil">Civil</option>
              <option value="Mechanical">Mechanical</option>
            </Form.Select>
          </div>
          <div>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) =>
                handleFilterChange("internshipInterest", e.target.value)
              }
            >
              <option value="">Internship Interest</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </Form.Select>
          </div>
          <div>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) =>
                handleFilterChange("placementInterest", e.target.value)
              }
            >
              <option value="">Placement Interest</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </Form.Select>
          </div>
          <div>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) =>
                handleFilterChange("yearOfStudy", e.target.value)
              }
            >
              <option value="">Year</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </Form.Select>
          </div>
          <Button onClick={applyFilters}>Apply Filters</Button>
        </div>
      </Form>
      <div className="flex align-middle items-center gap-2 pl-2">
        <div>
          <IoSearch />
        </div>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
          </Col>
        </Row>
      </div>
    </Navbar>

    <div>
      <Button
        type="primary"
        onClick={start}
        disabled={!hasSelected}
        loading={loading}
      >
        Reload
      </Button>
      {hasSelected ? `Selected ${selectedRowKeys.length} items` : null}
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={filteredData}
      />
    </div>
  </div>
);
}

export default StudentData;
