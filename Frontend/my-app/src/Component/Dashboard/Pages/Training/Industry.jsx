 

// function Industry() {
//   const data = useIndustryData();
//   const navigate = useNavigate();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedData, setSelectedData] = useState(null);

//   const showModal = (data) => {
//     setSelectedData(data);
//     setIsModalOpen(true);
//   };

//   const handleOk = () => {
//     setIsModalOpen(false);
//   };

//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="w-full p-4">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {data.slice(0, 4).map((item) => (
//           <div
//             key={item.id}
//             className="cursor-pointer flex flex-col"
//             onClick={() => showModal(item)}
//           >
//             <Card className="w-full h-full flex flex-col">
//               <div className="relative w-full h-48">
//                 <Card.Img
//                   variant="top"
//                   src={item.img}
//                   className="absolute inset-0 w-full h-4/5 object-cover"
//                 />
//               </div>

//               <Card.Body className="bg-gray-50 flex flex-col justify-between">
//                 <Card.Text className="text-sm font-semibold">
//                   {item.name}
//                 </Card.Text>
//                 <Card.Text className="text-sm -mt-3 text-gray-500">
//                   {item.specializationWith}
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </div>
//         ))}
//       </div>
//       <div className="mt-4 flex">
//         <button
//           onClick={() => navigate("/training/all-industry")}
//           className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600"
//         >
//           All Event
//         </button>
//       </div>
//       <Modal show={isModalOpen} onHide={handleCancel}>
//         <Modal.Header closeButton>
//           <Modal.Title>{selectedData?.name}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {selectedData?.video && (
//             <video controls autoPlay muted className="w-full h-auto">
//               <source src={selectedData.video} type="video/mp4" />
//             </video>
//           )}
//           <p>{selectedData?.specializationWith}</p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCancel}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleOk}>
//             OK
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default Industry;

import React, { useState, useEffect } from "react";
import { Card, Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Industry() {
  const navigate = useNavigate();
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
    const fetchIndustry = async () => {
      try {
        const response = await fetch("http://localhost:3000/college/getAllIndustryTalk");
        const data = await response.json();
        setIndustry(data);
      } catch (error) {
        console.error("Error fetching industry talks:", error);
      }
    };

    fetchIndustry();
  }, []);

  const baseUrl = 'http://localhost:3000';

  return (
    <div className="w-full p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {industry.slice(0, 4).map((item) => (
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
                  className="absolute inset-0 w-full h-4/5 object-cover"
                />
              </div>

              <Card.Body className="bg-gray-50 flex flex-col justify-between">
                <Card.Text className="text-sm font-semibold">
                  {item.name}
                </Card.Text>
                <Card.Text className="text-sm -mt-3 text-gray-500">
                  {item.specializationWith}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <div className="mt-4 flex">
        <button
          onClick={() => navigate("/training/all-industry")}
          className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600"
        >
          All Events
        </button>
      </div>
      <Modal show={isModalOpen} onHide={handleCancel}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedData?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedData?.video && (
            <video controls autoPlay muted className="w-full h-auto">
              <source src={`${baseUrl}/${selectedData.video}`} type="video/mp4" />
            </video>
          )}
          <p>{selectedData?.specializationWith}</p>
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

export default Industry;

