import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Component/Dashboard/Sidebar.jsx';
import Dashboard from './Component/Dashboard/Pages/Dashboard/Main.jsx';
import Collegepart from './Component/Dashboard/Pages/College/collgepart.jsx';
import Jobs from './Component/Dashboard/Pages/Jobs/Jobs.jsx';
import StudentData from './Component/Dashboard/Pages/StudentData/StudentData.jsx';
import Placement from './Component/Dashboard/Pages/Placement/Placement.jsx';
import Notification from './Component/Dashboard/Pages/Notifications/Notification.jsx';
import Training from './Component/Dashboard/Pages/Training/Training.jsx';
import Analysis from './Component/Dashboard/Pages/Anaysis/Analysis.jsx';
import IndustryTalks from './Component/Dashboard/Pages/IndustryTalks/IndustryTalks.jsx';
import Feedback from './Component/Dashboard/Pages/Feedback/Feedback.jsx';
import Login from './Component/Login/Login.jsx';
import Signup from './Component/Login/Signup.jsx';
 
const App = () => {
  return (
    <>
   
    <BrowserRouter>
      <Sidebar>
        <Routes>
       
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/college" element={<Collegepart/>} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/student" element={<StudentData />} />
          <Route path="/placement" element={<Placement/>} />
          <Route path="/Notification" element={<Notification/>} />
          <Route path="/Training" element={<Training/>} />
          <Route path="/Analysis" element={<Analysis/>} />
          <Route path="/industry" element={<IndustryTalks/>} />
          <Route path="/feedback" element={<Feedback/>} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
    </>
  );
};

export default App;