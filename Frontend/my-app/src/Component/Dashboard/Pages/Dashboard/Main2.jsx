import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Main2() {
  return (
    <div className='bg-red-300 w-full h-screen xs={12} md={8}'>
     <Container>
     <Col xs={2} md={4} lg={6}>
        <Row className='w-full h-96'>-96 of 2</Row>
        <Row>2 of 2</Row>
      </Col>
     </Container>
    </div>
  )
}

export default Main2