// import React from 'react';
// import Card from 'react-bootstrap/Card';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { IoMdTime } from "react-icons/io";

// function Courses({ id, img, name,text,duration }) {
//   return (
//     <div
//     key={id}
//     className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
//   >
//     <Card className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
//       <Card.Img
//         variant="top"
//         src={img}
//         className="object-cover w-full"
//         style={{ height: '8rem' }} // Reduced height for the image
//       />
//       <Card.Body className='bg-gray-50'>
//         <Card.Text className="text-xm h-8">
//           {name}
//         </Card.Text>
//        <Card.Text>
//          <p className='text-xs h-10'>{text}</p>
//           <div className='flex gap-1'>
//           <IoMdTime/>
//           <p>{duration}</p>
//           </div>
//        </Card.Text>
//       </Card.Body>
//     </Card>
//   </div>
//   );
// }

// export default Courses;


import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoMdTime } from "react-icons/io";

function Courses({ id, img, name, text, duration, onClick }) {
  return (
    <div
      onClick={() => onClick(id)}
      className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 cursor-pointer"
    >
      <Card className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        <Card.Img
          variant="top"
          src={img}
          className="object-cover w-full"
          style={{ height: '10rem' }}
        />
        <Card.Body className="bg-gray-50">
          <Card.Title className="text-lg font-semibold">{name}</Card.Title>
          <Card.Text className="text-sm mb-2">{text}</Card.Text>
          <div className="flex items-center gap-1 text-xs text-gray-600">
            <IoMdTime />
            <p>{duration}</p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Courses;
