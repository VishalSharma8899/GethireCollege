import  { useState, useEffect } from "react";
import { Card, Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function AllIndustry() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [industry, setIndustry] = useState([]);

  const showModal = (data) => {
    setSelectedData(data);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchtalk = async () => {
      try {
        const response = await fetch("http://localhost:3000/college/getAllIndustryTalk");
        const data = await response.json();
        setIndustry(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchtalk();
  }, []);

  console.log("industry", industry);
  const baseUrl = 'http://localhost:3000';
  return (
    <div className="w-full">
      <div className="mt-3 container font-bold text-xl">All Sessions</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {industry.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer flex flex-col"
            onClick={() => showModal(item)}
          >
            <Card className="w-full h-full flex flex-col">
              <div className="relative w-full h-48">
                <Card.Img
                  variant="top"
                  src={`${baseUrl}/${item.photo}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              <Card.Body className="bg-gray-50 flex flex-col justify-between">
                <Card.Text className="text-sm font-semibold">
                  {item.name}
                </Card.Text>
                <Card.Text className="text-sm -mt-3 text-gray-500">
                  {item.specializationWith}
                </Card.Text>
                <Card.Text className="text-xs flex-grow">
                  {item.title}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      <Modal show={isModalOpen} onHide={handleCancel}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedData?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedData?.video && (
            <video controls autoPlay muted className="w-full h-48 mt-4">
              <source src={`${baseUrl}/${selectedData.video}`} type="video/mp4" />
            </video>
          )}
          <p>{selectedData?.title}</p>
          <p>{selectedData?.text}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Close
          </Button>
          <Button variant="primary" onClick={handleOk}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AllIndustry;
