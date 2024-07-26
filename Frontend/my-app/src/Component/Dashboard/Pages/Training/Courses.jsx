import Card from 'react-bootstrap/Card';

function Courses({id,img,name}) {
  return (
    <Card style={{ width: '18rem' ,height:"15rem"}}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default Courses;