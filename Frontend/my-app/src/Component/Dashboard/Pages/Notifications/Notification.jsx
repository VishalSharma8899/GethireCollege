import React, { useState, useCallback } from "react";
import { FaToggleOn } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import tcs from "../../../Images/tcs.jpeg";
import wipro from '../../../Images/wipro1.png'
import flipkart from '../../../Images/flipkart1.jpg'
import meesho from '../../../Images/messho.png'
import deltax from '../../../Images/deltax1.jpg'
const initialData = [
  {
    id: 1,
    img: tcs,
    name: "TCS",
    desc: "It is a part of the Tata Group and operates in  across 46 countries.",
  },
  {
    id: 2,
    img: wipro,
    name: "Wipro",
    desc: "Wipro's technology and IT consulting services enable enterprises to build innovative solutions",
  },
  {
    id: 3,
    img: flipkart,
    name: "Flipkart",
    desc: "Flipkart Private Limited is an Indian e-commerce company, and incorporated in Singapore as a private limited company.",
  },
  {
    id: 4,
    img: meesho,
    name: "Meesho",
    desc: "Meesho is an online shopping platform owned by the Indian company Fashnear Technologies Private Limited.",
  },
  {
    id: 5,
    img: deltax,
    name :"Deltax",
    desc : "Unleash Your Ad Potential with AI-driven Advertising from DeltaX - Empowering Insights, Delightful Personalised Creatives, and Accurate "
  }
];

const Notification = () => {
  const [notifications, setNotifications] = useState(initialData);

  const handlePushNotification = useCallback(() => {
    toast("This is a notification!");
  }, []);

  const handleDecline = useCallback((id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
    toast.success("Successfully declined!");
  }, []);

  return (
    <div className="bg-gray-100 w-full h-screen p-4">
      <div className="bg-white w-full h-full rounded-xl p-4">
        <Header onPushNotification={handlePushNotification} />
        <ToastContainer />
        <NotificationContent data={notifications} onDecline={handleDecline} />
      </div>
    </div>
  );
};

const Header = ({ onPushNotification }) => (
  <div className="w-full flex flex-col sm:flex-row justify-between items-center mb-4">
    <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 sm:mb-0">
      Notification
    </p>
    <button
      style={{ background: "rgba(89, 86, 233, 1)" }}
      onClick={onPushNotification}
      className="flex gap-2 p-2 sm:p-3 md:p-4 lg:p-5 mb-2 sm:mb-0 text-white rounded"
    >
      <FaToggleOn className="mt-1" />
      <span className="text-sm sm:text-base md:text-lg lg:text-xl">
        Push Notification
      </span>
    </button>
  </div>
);

const NotificationContent = ({ data, onDecline }) => (
  <Container fluid>
    <Row className="g-4">
      {data.map((item) => (
        <Col key={item.id} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
          <NotificationBox item={item} onDecline={onDecline} />
        </Col>
      ))}
    </Row>
  </Container>
);

const NotificationBox = ({ item, onDecline }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => setIsExpanded(!isExpanded);

  return (
    <Container
      fluid="md"
      className="p-4 bg-white rounded border shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between h-auto"
    >
      <Row className="align-items-center g-3">
        <Col xs="auto" className="d-flex justify-content-center">
          <img
            src={item.img}
            alt=""
            className="rounded-full"
            style={{ width: "100px", height: "100px",  }}
          />
        </Col>
        <Col className="d-flex flex-column justify-between">
          <h5 className="font-bold text-base sm:text-lg mb-1">{item.name}</h5>
          <p className={`text-muted text-sm sm:text-base mb-2 ${isExpanded ? 'line-clamp-none' : 'line-clamp-3'}`}>
            {item.desc}
          </p>
          <Button
            variant="link"
            onClick={toggleReadMore}
            className="text-blue-500 hover:underline"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </Button>
          <div className="d-flex gap-2 flex-wrap mt-2">
            <Button
              style={{ background: "rgba(89, 86, 233, 1)" }}
              variant="primary"
              size="sm"
              className="w-auto mb-1 transition-transform transform active:scale-95 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Accept
            </Button>
            <Button
              variant="secondary"
              size="sm"
              className="w-auto mb-1 bg-red-400 hover:bg-red-500 text-white transition-transform transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-500"
              onClick={() => onDecline(item.id)}
            >
              Decline
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Notification;
