import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PieChart from "./Piecharts";
import { IoIosNotifications } from "react-icons/io";

const legendData = [
  { color: "rgba(180, 223, 229, 1)", text: "Placed" },
  { color: "rgba(48, 60, 108, 1)", text: "Unplaced" },
  { color: "rgba(250, 151, 108, 1)", text: "Remaining" },
];

function Main2() {
  const [notifications, setNotifications] = useState([]);

  const renderLegend = () => {
    return legendData.map((item, index) => (
      <div key={index} className="flex gap-1">
        <div style={{ background: item.color }} className="w-2 h-2 mt-2"></div>
        <div>{item.text}</div>
      </div>
    ));
  };

  const renderNotifications = () => {
    return notifications.map((notification, index) => (
      <div
        key={index}
        className="flex heading mt-6 text-2xl text-blue-600 bg-blue-200 p-2 rounded-xl gap-2"
      >
        <IoIosNotifications />
        <p className="text-sm font-semibold">{notification.text}</p>
      </div>
    ));
  };

  return (
    <div
      style={{ background: "rgba(246, 249, 254, 1)" }}
      className="w-full h-screen xs={12} md={8} -mt-7 rounded-lg gap-3 "
    >
      {/* <Container className="bg-white rounded-lg">
        <Col xs={2} md={4} lg={6}>
          <Row className="w-full h-96">
            <p className="font-bold mt-3  text-sm md:text-lg ml-8">Placement Status</p>
            <div className="flex gap-12 ml-6">{renderLegend()}</div>
            <PieChart className="mt-1" />
          </Row>
        </Col>
      </Container> */}
      <Container className="bg-white rounded-lg p-4 mb-3">
        <Row className="w-full h-96">
          <Col xs={12}>
            <p className="font-bold text-sm md:text-lg mb-3">
              Placement Status
            </p>
          </Col>
          <Col xs={12} className="flex gap-12 mb-3">
            {renderLegend()}
          </Col>
          <Col xs={12} className="h-72">
            <PieChart />
          </Col>
        </Row>
      </Container>
      {/* notification */}
      
    <div className="w-full bg-white rounded-lg h-auto mt-3 p-4">
  <Container>
    <p className="font-bold text-sm md:text-lg mb-4">Notification</p>
    <div className="flex items-center bg-blue-200 p-2 rounded-xl gap-2 mb-2">
      <IoIosNotifications className="text-blue-600 text-lg md:text-xl" />
      <p className="text-xs md:text-sm font-semibold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
    {renderNotifications(notifications)}
  </Container>
</div>


    </div>
  );
}

export default Main2;