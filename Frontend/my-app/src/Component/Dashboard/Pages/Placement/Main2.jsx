import React from 'react';
import { Table } from 'antd';


const { Column } = Table;

const data = [
  {
    key: '1',
    Name: "Google Drive",
  },
  {
    key: '2',
    Name: "Amazon Placement Drive",
  },
  {
    key: '3',
    Name: "Microsoft Drive",
  },
  {
    key: '4',
    Name: "Deloite",
  },
  {
    key: '5',
    Name: "Delta-X",
  },
  {
    key: '6',
    Name: "Microsoft",
  },
  {
    key: '7',
    Name: "Black Grapes",
  },
  {
    key: '8',
    Name: "Amazon Placement Drive",
  },
  {
    key: '9',
    Name: "Microsoft Drive",
  },
];

function Main2() {
  return (
    <div className='w-3/4 h-3/4 m-5'>
      <div className="shadow-lg rounded-lg overflow-hidden">
        <Table dataSource={data} pagination={{ pageSize: 3 }} size="middle" className="table-auto w-full">
          <Column 
            title={<span className="bg-gray-100 py-2 px-4 block text-center">Up Coming Companies</span>} 
            dataIndex="Name" 
            key="Name" 
            className="p-4 text-center"
          />
        </Table>
      </div>
    </div>
  );
}

export default Main2;
