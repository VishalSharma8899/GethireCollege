import React, { useState } from 'react';
import NotificationCard from './NotificationCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cards from './Cards'

// function Notification() {
//   const [notifications, setNotifications] = useState([]);

//   const handlePushNotification = (notification) => {
//     setNotifications([...notifications, notification]);
//   };
  function Notification() {
    const handlePushNotification = () => {
      toast('This is a notification!');
    };
    {/* {notifications.map((notification, index) => (
<NotificationCard key={index} notification={notification} />
))} */}
  return (
    <div>
  <div style={{ background: "rgba(247, 249, 254, 1)" }} className='w-full h-screen p-4'>
    <div className='bg-white w-full h-4/5 rounded-xl justify-center'>
    <div className='w-full h-12  flex flex-row justify-between items-center'>
  <p className='ml-2 font-bold text-lg'>Notification</p>
  <button style={{background:" rgba(89, 86, 233, 1)"}} onClick={handlePushNotification} className=''>Push Notification</button>
  <ToastContainer />
</div>

    </div>
  
  </div>
</div>

  )
}

export default Notification