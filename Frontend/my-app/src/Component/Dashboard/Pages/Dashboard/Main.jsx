import React from 'react';
import Main1 from './Main1';
import Main2 from './Main2';
import Search from "./Search";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Main() {
  return (
    <div>
      <Search />
      <div className='container' style={{ backgroundColor: "rgba(246, 249, 254, 1)" }}>
        <Container fluid>  {/* Ensures responsiveness across viewports */}
          <Row>
            <Col xs={12} md={6}>  {/* Adjust column sizes as needed */}
              <Main1 />
            </Col>
            <Col xs={12} md={6}>
              <Main2 />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Main;
