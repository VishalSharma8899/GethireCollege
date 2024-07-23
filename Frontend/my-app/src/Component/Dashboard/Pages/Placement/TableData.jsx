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
  <Table dataSource={data} pagination={{ pageSize: 4 }}  size="small"> 
    <Column title="Name" dataIndex="Name" key="Name" />
    <Column title="Department" dataIndex="Department" key="Department" />
    <Column title="Company" dataIndex="Company" key="Company" />
    <Column title="CTC" dataIndex="CTC" key="CTC" />
  </Table>
);

export default TableData;
