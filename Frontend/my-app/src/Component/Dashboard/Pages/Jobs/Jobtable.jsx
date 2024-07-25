import React from 'react';
import { Table } from 'antd';
const columns = [
  {
    title: 'Company',
    dataIndex: 'company',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Category 1',
        value: 'Category 1',
      },
      {
        text: 'Category 2',
        value: 'Category 2',
      },
    ],
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value, record) => record.name.startsWith(value),
    width: '30%',
  },
  {
    title: 'CTC',
    dataIndex: 'age',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'No of Students',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    onFilter: (value, record) => record.address.startsWith(value),
    filterSearch: true,
    width: '40%',
  },
];
const data = [
  {
    key: '1',
    company: 'Amazon',
    age: 32,
    address: '5.5K',
  },
  {
    key: '2',
    company: 'Flipkart',
    age: 42,
    address: '4.6K',
  },
  {
    key: '3',
    company: 'Microsoft',
    age: 32,
    address: '3K',
  },
  {
    key: '4',
    company: 'JP Morgan',
    age: 32,
    address: '2K',
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};
const Jobtable = () => <Table columns={columns} dataSource={data} onChange={onChange} />;
export default Jobtable;