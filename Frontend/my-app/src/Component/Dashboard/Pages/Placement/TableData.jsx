import React from 'react';
import { Table } from 'antd';

const { Column } = Table;

const data = [
  {
    key: '1',
    Name: "John",
    Department: "CSE",
    Company: "Amazon",
    CTC: "100000"
  },
  {
    key: '2',
    Name: "Doe",
    Department: "ECE",
    Company: "Google",
    CTC: "120000"
  },
  {
    key: '3',
    Name: "Alice",
    Department: "EEE",
    Company: "Facebook",
    CTC: "110000"
  },
  {
    key: '4',
    Name: "Bob",
    Department: "IT",
    Company: "Apple",
    CTC: "130000"
  },
  {
    key: '5',
    Name: "Charlie",
    Department: "ME",
    Company: "Microsoft",
    CTC: "90000"
  },
  {
    key: '6',
    Name: "Eve",
    Department: "CE",
    Company: "Tesla",
    CTC: "140000"
  }
];

const TableData = () => (
  <div className="table-container">
    <Table
      dataSource={data}
      pagination={{ pageSize: 4 }}
      size="small"
      scroll={{ x: 600 }}  // Adjusted width for horizontal scrolling
    >
      <Column title="Name" dataIndex="Name" key="Name" width={150} />
      <Column title="Department" dataIndex="Department" key="Department" width={150} />
      <Column title="Company" dataIndex="Company" key="Company" width={150} />
      <Column title="CTC" dataIndex="CTC" key="CTC" width={150} />
    </Table>
  </div>
);

export default TableData;
