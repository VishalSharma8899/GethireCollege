import React from 'react'

function collgepart() {

  return (
    <div>
       <div className='w-full h-screen'>
      {/* Search */}
         <div className='m-2'>
          <Navbar className="bg-body-tertiary flex flex-row justify-between">
      <Form inline>
      <div className='flex align-middle items-center gap-2 pl-2'>
        <div className=''>
            <IoSearch/>
        </div>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
        </Row>

      </div>
     
      </Form>
      <Form inline>
     <div className="flex gap-3 justify-center items-center"> 
      <div>
        <IoNotificationsOutline/>
      </div>
      <div className='bg-black rounded-xl w-10'>
        <img src={img}/>
      </div>
      <div>
        John
      </div>
      <div>
      </div>
         <MdArrowDropDown/>
      </div>
      </Form>
    </Navbar>
 
         </div>

         {/* main-container */}
         <div>
           <div></div>
         </div>
       </div>
       
       
    </div>
  )
}

export default collgepart