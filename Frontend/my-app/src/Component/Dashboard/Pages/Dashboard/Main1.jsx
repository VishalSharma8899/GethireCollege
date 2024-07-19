import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import graph from "../../../Images/Graph.png";
import graphdown from "../../../Images/Graphdown.png"
function Main1() {
  return (
    <div className="bg-white w-full h-screen xs={12} md={8} mt-3 rounded-lg">
      <div
        style={{ background: "rgba(246, 249, 254, 1)" }}
        className=" w-full h-screen xs={12} md={8} mt-3 rounded-lg"
      >
        <Container>
          <Row className="justify-content-center">
            <Col xs={8} className="mt-2 ml-2">
              <Row className="gap-16 h-32">
                <Col className="bg-white p-3 rounded-lg w-24">
                <div className="flex ">
                  <div className=" flex-col">
                    <div>
                      <p className="text-xs w-28 mb-2 font-bold ">No. of Students</p>
                      <p style={{color: "rgba(102, 102, 102, 1)"}} className="mb-2 font-bold">1800+</p>
                    </div>
                    <p className="text-green-500 font-bold">+2.5%</p>
                  </div>
                  <div>
                    <img className="w-11  mt-1" src={graph} alt="" />
                  </div>
                </div>
                </Col>
                <Col className="bg-white p-3 rounded-lg w-24">
                <div className="flex ">
                  <div className=" flex-col">
                    <div>
                      <p className="text-xs w-28 mb-2 font-bold ">No. of Companies</p>
                      <p style={{color: "rgba(102, 102, 102, 1)"}} className="mb-2 font-bold">150+</p>
                    </div>
                    <p className="text-red-500 font-bold">-5.5%</p>
                  </div>
                  <div>
                    <img className="w-11  mt-1" src={graphdown} alt="" />
                  </div>
                </div>
                </Col>
              </Row>
              <Row className="gap-16 mt-10 h-32">
                <Col className="bg-white p-3 rounded-lg w-24">
                <div className="flex ">
                  <div className=" flex-col">
                    <div>
                      <p className="text-xs w-28 mb-2 font-bold ">No. of placement</p>
                      <p style={{color: "rgba(102, 102, 102, 1)"}} className="mb-2 font-bold">500+</p>
                    </div>
                    <p className="text-red-500 font-bold">-4.4%</p>
                  </div>
                  <div>
                    <img className="w-11  mt-1" src={graphdown} alt="" />
                  </div>
                </div></Col>
                <Col className="bg-white p-3 rounded-lg w-24">
                <div className="flex ">
                  <div className=" flex-col">
                    <div>
                      <p className="text-xs w-28 mb-2 font-bold ">Record</p>
                      <p style={{color: "rgba(102, 102, 102, 1)"}} className="mb-2 font-bold">5 Years</p>
                    </div>
                    <p className="text-green-500 font-bold">+6.5%</p>
                  </div>
                  <div>
                    <img className="w-11  mt-1" src={graph} alt="" />
                  </div>
                </div></Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <div className="w-full bg-white rounded-lg">
        <Container className="">
          <Col xs={2} md={4} lg={6}>
            <Row className=" h-96 mt-6">
              <div>
              <div className="details">
               <p>Top Placements</p>
               <button style={{
                  backgroundColor: "blue",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  margin: "10px" }}>See all</button>
              </div>
              <div className="data">

              </div>
              </div>
            </Row>
          </Col>
        </Container>
        </div>
      </div>
    </div>
  );
}

export default Main1;
