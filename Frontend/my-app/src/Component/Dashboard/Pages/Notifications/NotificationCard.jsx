import React from 'react';

function NotificationCard({ notification }) {
  return (
    <div style={{
       border:"1px solid #ccc" , padding:"10px", marginBottom:"10px" }} className="notification-card ">
      {/* Display notification content here */}
      <p>{notification.title}</p>
      <p>{notification.message}</p>
      <p>{notification.timestamp}</p>
    </div>
  );
}

export default NotificationCard;
