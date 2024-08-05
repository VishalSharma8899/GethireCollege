import React from 'react';
import { AntDesignOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';

function ActiveButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/jobs/invite'); // Replace '/target-page' with the actual path you want to navigate to
  };

  return (
    <button
      onClick={handleClick}
      className="text-white px-4 py-2 rounded w-28 gap-2"
      style={{ backgroundColor: 'rgba(89, 86, 233, 1)' }}
    >
      <AntDesignOutlined />
      Invite
    </button>
  );
}

export default ActiveButton;
