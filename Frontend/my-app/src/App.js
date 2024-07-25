import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Component/Dashboard/Sidebar.jsx';
import Dashboard from './Component/Dashboard/Pages/Dashboard/Main.jsx';
import Collgepart from './Component/Dashboard/Pages/College/collgepart.jsx';
import Jobs from './Component/Dashboard/Pages/Jobs/Jobs.jsx';
import StudentData from './Component/Dashboard/Pages/StudentData/StudentData.jsx';
import Placement from './Component/Dashboard/Pages/Placement/Placement.jsx';
import Notification from './Component/Dashboard/Pages/Notifications/Notification.jsx';
import Training from './Component/Dashboard/Pages/Training/Training.jsx';
import Analysis from './Component/Dashboard/Pages/Anaysis/Analysis.jsx';
import IndustryTalks from './Component/Dashboard/Pages/IndustryTalks/IndustryTalks.jsx';
import Feedback from './Component/Dashboard/Pages/Feedback/Feedback.jsx';

// dummy import
import Form from './Demo/Form.js';
import CollegePage from './Demo/CollegePage.js';
import UpdateForm from './Demo/UpdateFrom.js';
import PlacementForm from './Demo/PlacementForm.js';
import EventsAddForm from './Demo/EventsAddForm.js';

 
const App = () => {
  return (
    <>
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> */}
   
    <BrowserRouter>
      <Sidebar>
        <Routes>
       
        {/* <Route element={<ProtectedRoute/>}> */}

          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/college" element={<Collgepart/>} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/student" element={<StudentData />} />
          <Route path="/placement" element={<Placement/>} />
          <Route path="/Notification" element={<Notification/>} />
          <Route path="/Training" element={<Training/>} />
          <Route path="/Analysis" element={<Analysis/>} />
          <Route path="/industry" element={<IndustryTalks/>} />
          <Route path="/feedback" element={<Feedback/>} />
        {/* </Route> */}
        {/* dummy route */}
        <Route path="/demo" element={<Form/>} />
        <Route path="/collegePage" element={<CollegePage/>} />
        <Route path="/updateForm" element={<UpdateForm/>} />
        <Route path="/placementForm" element={<PlacementForm/>} />
        <Route path="/eventAddForm" element={<EventsAddForm/>} />

        </Routes>
      </Sidebar>
    </BrowserRouter>
    </>
  );
};

export default App;