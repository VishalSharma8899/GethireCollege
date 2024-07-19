import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import graph from "../../../Images/Graph.png";
import graphdown from "../../../Images/Graphdown.png";
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
                <Col style={{background:"#b6fdb6"}} className=" p-3 rounded-lg w-24">
                  <div className="flex ">
                    <div className=" flex-col">
                      <div>
                        <p className="text-xs w-28 mb-2 font-bold ">
                          No. of Students
                        </p>
                        <p
                          style={{ color: "rgba(102, 102, 102, 1)" }}
                          className="mb-2 font-bold"
                        >
                          1800+
                        </p>
                    <p className="text-green-500 font-bold">+2.5%</p>
                      </div>
                    </div>
                    <div>
                      <img className="w-11  mt-1" src={graph} alt="" />
                      </div>
                  </div>
                </Col>
                <Col style={{background:"#cfcfe5"}} className=" p-3 rounded-lg w-24">
                  <div className="flex ">
                    <div className=" flex-col">
                      <div>
                        <p className="text-xs w-28 mb-2 font-bold ">
                          No. of Companies
                        </p>
                        <p
                          style={{ color: "rgba(102, 102, 102, 1)" }}
                          className="mb-2 font-bold"
                        >
                          150+
                        </p>
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
                <Col style={{background:"#f5f5a4"}} className=" p-3 rounded-lg w-24">
                  <div className="flex ">
                    <div className=" flex-col">
                      <div>
                        <p className="text-xs w-28 mb-2 font-bold ">
                          No. of placement
                        </p>
                        <p
                          style={{ color: "rgba(102, 102, 102, 1)" }}
                          className="mb-2 font-bold"
                        >
                          500+
                        </p>
                      </div>
                      <p className="text-red-500 font-bold">-4.4%</p>
                    </div>
                    <div>
                      <img className="w-11  mt-1" src={graphdown} alt="" />
                    </div>
                  </div>
                </Col>
                <Col style={{background:"#f4e4e6"}} className=" p-3 rounded-lg w-24">
                  <div className="flex ">
                    <div className=" flex-col">
                      <div>
                        <p className="text-xs w-28 mb-2 font-bold ">Record</p>
                        <p
                          style={{ color: "rgba(102, 102, 102, 1)" }}
                          className="mb-2 font-bold"
                        >
                          5 Years
                        </p>
                      </div>
                      <p className="text-green-500 font-bold">+6.5%</p>
                    </div>
                    <div>
                      <img className="w-11  mt-1" src={graph} alt="" />
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <div className="w-full bg-white rounded-lg h-96 mt-3">
          <Container className="">
            <div className="flex-col">
              <div className="details flex w-full justify-between">
                <p className="font-bold text mt-3 ">Top Placements</p>
                <button
                  style={{
                    backgroundColor: "rgba(89, 86, 233, 1)",
                    color: "white",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "15px",
                    cursor: "pointer",
                    margin: "10px",
                  }}
                  className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  See all
                </button>
              </div>
              <div className="data flex-col">
                <div
                  style={{ background: "rgba(237, 244, 251, 1)" }}
                  className="heading flex justify-evenly mt-3 h-10 p-2 rounded-md"
                >
                  <p>Rank</p>
                  <p>Name</p>
                  <p>Branch</p>
                  <p>Company</p>
                  <p>Package</p>
                  <p>More</p>
                </div>
                <div className="heading flex justify-evenly mt-3 h-10 p-2 rounded-md">
                  <p>#1</p>
                  <p>John</p>
                  <p>CSE</p>
                  <p>Google</p>
                  <p>56LPA</p>
                  <button type="button" className="bg-violet-500 text-white font-bold h-10 w-16 rounded-lg shadow-md hover:bg-violet-600">Action</button>

                </div>
                <div className="heading flex justify-evenly mt-3 h-10 p-2 rounded-md">
                  <p>#2</p>
                  <p>Mark</p>
                  <p>CSE</p>
                  <p>Microsoft</p>
                  <p>45LPA</p>
                  <button type="button" className="bg-violet-500 text-white font-bold h-10 w-16 rounded-lg shadow-md hover:bg-violet-600">Action</button>
                </div>
                <div className="heading flex justify-evenly mt-3 h-10 p-2 rounded-md">
                  <p>#3</p>
                  <p>Bark</p>
                  <p>ITB</p>
                  <p>Walmart</p>
                  <p>36LPA</p>
                  <button type="button" className="bg-violet-500 text-white font-bold h-10 w-16 rounded-lg shadow-md hover:bg-violet-600">Action</button>
                </div>
                <div className="heading flex justify-evenly mt-3 h-10 p-2 rounded-md">
                  <p>#4</p>
                  <p>Alexa</p>
                  <p>ECE</p>
                  <p>Delloit</p>
                  <p>30LPA</p>
                  <button type="button" className="bg-violet-500 text-white font-bold h-10 w-16 rounded-lg shadow-md hover:bg-violet-600">Action</button>
                </div>
                <div className="heading flex justify-evenly mt-3 h-10 p-2 rounded-md">
                  <p>#5</p>
                  <p>Barry</p>
                  <p>AI&DS</p>
                  <p>Flipkart</p>
                  <p>28LPA</p>
                  <button type="button" className="bg-violet-500 text-white font-bold h-10 w-16 rounded-lg shadow-md hover:bg-violet-600">Action</button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Main1;
