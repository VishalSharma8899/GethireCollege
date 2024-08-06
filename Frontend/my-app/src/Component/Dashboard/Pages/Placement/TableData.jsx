import React from 'react';
import { Table } from 'antd';

const { Column } = Table;

const TableData = ({ data }) => (
  <div className="overflow-x-auto px-4 py-2">
    <Table
      dataSource={data}
      pagination={{ pageSize: 4 }}
      size="small"
      scroll={{ x: '100%' }} // Makes the table scroll horizontally if needed
      className="min-w-full" // Ensures the table takes full width
      rowKey="name" // Use a unique key for each row
    >
      <Column title="Name" dataIndex="name" key="name" width={150} />
      <Column title="Department" dataIndex="department" key="department" width={150} />
      <Column title="Company" dataIndex="companyName" key="companyName" width={150} />
      <Column title="Salary (CTC)" dataIndex="salary" key="salary" width={150} />
    </Table>
  </div>
);

export default TableData;
