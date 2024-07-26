import React from 'react';
import Card from 'react-bootstrap/Card';

function Industry({ id, name, img, topic }) {
  return (
    <Card className="w-72 h-60">
      <Card.Img 
        variant="top" 
        src={img} 
        className="w-full h-36 object-cover" 
      />
      <Card.Body>
        <Card.Title className="text-lg font-semibold">{name}</Card.Title>
        <Card.Text className="text-sm text-gray-700">
          {topic}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Industry;
