import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Main1() {
  return (
    <div className='bg-slate-400 w-full h-screen xs={12} md={8}'>
     <Container>
     <Col xs={2} md={4} lg={6}>
        <Row>
             <div className='row'>
             <div className='d-flex justify-center items-center'>
             <div className='d-flex' style={{gap:"15px",width:"100%",flexWrap:"wrap"}}>
               <div style={{width:"45%",height:"100px",background:"red"}}></div>
                <div style={{width:"45%",height:"100px",background:"red"}}></div>
                <div style={{width:"45%",height:"100px",background:"red"}}></div>
                <div style={{width:"45%",height:"100px",background:"red"}}></div>
               </div>
             </div>
               </div> 

        </Row>
        <Row>2 of 2</Row>
      </Col>
     </Container>
    </div>
  )
}

export default Main1



