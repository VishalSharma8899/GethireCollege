import React from 'react';
import Card from 'react-bootstrap/Card';

function Industry({ id, name, img, topic }) {
  return (
    <div
    key={id}
    className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
  >
    <Card className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
      <Card.Img
        variant="top"
        src={img}
        className="object-cover w-full"
        style={{ height: '8rem' }} // Reduced height for the image
      />
      <Card.Body>
        <Card.Title className="text-center text-xs sm:text-base md:text-xm lg:text-xm">
          {name}
        </Card.Title>
        <Card.Text className='text-xs'>
           {topic}
          </Card.Text>
      </Card.Body>
    </Card>
  </div>
  );
}

export default Industry;


