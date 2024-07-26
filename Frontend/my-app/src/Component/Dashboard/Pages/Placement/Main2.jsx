import React from 'react';
import { Table } from 'antd';
import img1 from '../../../Images/microsof.webp';
import img2 from '../../../Images/meesho.png';
import img3 from '../../../Images/walmart.png';

const { Column } = Table;

const data = [
  {
    key: '1',
    Name: 'Google Drive',
    img: img1,
  },
  {
    key: '2',
    Name: 'Amazon Drive',
    img: img2,
  },
  {
    key: '3',
    Name: 'Microsoft Drive',
    img: img3,
  },
  {
    key: '4',
    Name: 'Deloite',
    img: img1,
  },
  {
    key: '5',
    Name: 'Delta-X',
    img: img2,
  },
  {
    key: '6',
    Name: 'Microsoft',
    img: img3,
  },
  {
    key: '7',
    Name: 'Black Grapes',
    img: img1,
  },
  {
    key: '8',
    Name: 'Amazon Drive',
    img: img2,
  },
  {
    key: '9',
    Name: 'Microsoft Drive',
    img: img3,
  },
];

function Main2() {
  return (
    <div className='w-full p-4 bg-blue-50'>
      <div className='shadow-lg overflow-x-auto rounded-xl bg-white'>
        <Table
          dataSource={data}
          pagination={{ pageSize: 3 }}
          size='middle'
          className='table-auto w-full text-black'
        >
          <Column
            title={<span className='bg-blue-50 py-2 px-4 rounded block text-center'>Upcoming Companies</span>}
            dataIndex='Name'
            key='Name'
            className='bg-blue-900 p-4 text-center'
            render={(text, record) => (
              <div
                className='flex items-center justify-center space-x-2'
                style={{ transition: 'color 0.3s' }}
                onMouseEnter={(e) => e.currentTarget.querySelector('span').style.color = 'black'}
                onMouseLeave={(e) => e.currentTarget.querySelector('span').style.color = 'white'}
              >
                <img src={record.img} alt={text} className='w-12 h-12 md:w-8 md:h-8 rounded-full' />
                <span>{text}</span>
              </div>
            )}
          />
        </Table>
      </div>
    </div>
  );
}

export default Main2;
