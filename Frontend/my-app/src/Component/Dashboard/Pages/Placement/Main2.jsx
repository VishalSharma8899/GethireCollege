import React from "react";
import { Table } from "antd";
import img1 from "../../../Images/microsof.webp";
import img2 from "../../../Images/meesho.png";
import img3 from "../../../Images/walmart.png";

const { Column } = Table;

const data = [
  {
    key: "1",
    Name: "Google Drive",
    img: img1,
    date: "20-8-25",
  },
  {
    key: "2",
    Name: "Amazon Drive",
    img: img2,
    date: "20-8-25",
  },
  {
    key: "3",
    Name: "Microsoft Drive",
    img: img3,
    date: "20-8-25",
  },
  {
    key: "4",
    Name: "Deloite",
    img: img1,
    date: "20-8-25",
  },
  {
    key: "5",
    Name: "Delta-X",
    img: img2,
    date: "20-8-25",
  },
  {
    key: "6",
    Name: "Microsoft",
    img: img3,
    date: "20-8-25",
  },
  {
    key: "7",
    Name: "Black Grapes",
    img: img1,
    date: "20-8-25",
  },
  {
    key: "8",
    Name: "Amazon Drive",
    img: img2,
    date: "20-8-25",
  },
  {
    key: "9",
    Name: "Microsoft Drive",
    img: img3,
    date: "20-8-25",
  },
];

function Main2() {
  return (
    <div className="w-full p-4 bg-blue-50">
      <div className="shadow-lg overflow-x-auto rounded-xl bg-white">
        <Table
          dataSource={data}
          pagination={{
            pageSize: 4,
            responsive: true,
            // Adjust pagination page size based on screen width
            pageSizeOptions: ["4", "3", "2", "1"],
          }}
          size="middle"
          className="table-auto w-full text-black"
          scroll={{ x: "max-content" }}
        >
          <Column
            title={
              <span className="block py-2 px-4 rounded text-center text-sm md:text-base lg:text-lg">
                Name
              </span>
            }
            dataIndex="Name"
            key="Name"
            className="bg-blue-100 p-2 md:p-4 text-center text-sm md:text-base"
            render={(text, record) => (
              <div className="flex items-center justify-center space-x-2 group">
                <img
                  src={record.img}
                  alt={text}
                  className="w-8 h-8 md:w-12 md:h-12 rounded-full"
                />
                <span className="text-blue-900 group-hover:text-black text-sm md:text-base">
                  {text}
                </span>
              </div>
            )}
          />
          <Column
            title={
              <span className="block py-2 px-4 rounded text-center text-sm md:text-base lg:text-lg">
                Date
              </span>
            }
            dataIndex="date"
            key="date"
            className="bg-blue-100 p-2 md:p-4 text-center text-sm md:text-base"
            render={(date) => (
              <span className="text-blue-900 group-hover:text-black text-sm md:text-base">
                {date}
              </span>
            )}
          />
          <Column
            key="action"
            className="bg-blue-100 p-2 md:p-4 text-center text-sm md:text-base"
            render={() => (
              <div className="text-center">
                <button className="bg-blue-400 text-white font-semibold py-1 px-2 md:py-1 md:px-3 rounded hover:bg-blue-300 transition duration-300 text-xs md:text-sm">
                  View
                </button>
              </div>
            )}
          />
        </Table>
      </div>
    </div>
  );
}

export default Main2;
