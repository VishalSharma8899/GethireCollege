import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  PieChart  from './Piecharts';
import { IoIosNotifications } from "react-icons/io";
function Main2() {
  return (
    <div style={{background: "rgba(246, 249, 254, 1)"}} className='w-full h-screen xs={12} md={8} mt-3 rounded-lg gap-3'>
     <Container className='bg-white rounded-lg'>
     <Col  xs={2} md={4} lg={6}>
        <Row className='w-full h-96'>
          <p className='font-bold mt-3'>Placement Status</p>
          
          <div className='flex gap-12 ml-6'>
            <div>Placed</div>
            <div>Unplaced</div>
            <div>Remaining</div>
          </div>
          <  PieChart className="mt-1" ></PieChart>
          </Row>
        {/* <Row>
          <div className="notification bg-slate-900 mt-10 w-full h-56">

          </div>
        </Row> */}
      </Col>
     </Container>
     <div className="w-full bg-white rounded-lg h-96 mt-3">
     <Container className="">
      <div className='flex-col'>
      <p className='font-bold '>Notification</p>
         <div className=" flex heading mt-6 text-2xl text-blue-600 bg-blue-200 p-2 rounded-xl gap-2">
         <IoIosNotifications />
         <p className='text-sm font-semibold '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed beatae rem fugit!</p>
         </div>
      </div>
      </Container>
      </div>
    </div>
  )
}

export default Main2