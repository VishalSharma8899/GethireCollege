import React from 'react'
import { CiSearch } from "react-icons/ci";

import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Search() {
  return (
    <Navbar className="bg-body-tertiary justify-cntent-between">
      <Form inline>
        <div className='position-relative'>
        <CiSearch className='position-absolute top-50  start-0'/>
        <Row className='relative'>
        <Col xs="auto" className="">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2 w-32 absolute mx-4"
            />
          </Col>
        </Row>
        </div>
      </Form>
      <Form inline>
      </Form>
    </Navbar>
  );
}

export default Search;