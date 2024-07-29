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
import Feedback from './Component/Dashboard/Pages/Feedback/Feedback.jsx';


// dummy import
import {CorporateActiveProcess} from './Demo/CorporateActiveProcess.js';


import Login from './Component/Login/Login.jsx'



 

// dummy import
// import Form from './Demo/Form.js';
// import CollegePage from './Demo/CollegePage.js';
// import UpdateForm from './Demo/UpdateFrom.js';
// import PlacementForm from './Demo/PlacementForm.js';
// import EventsAddForm from './Demo/EventsAddForm.js';

 
import Report from './Component/Dashboard/Pages/Report/Report.jsx'
import Form from './Component/Profile/Form.jsx';
import CollegePage from './Component/Profile/CollegePage.jsx';
import UpdateForm from './Component/Profile/UpdateFrom.jsx';
import PlacementForm from './Component/Profile/PlacementForm.jsx';
import EventsAddForm from './Component/Profile/EventsAddForm.jsx';
// import Login from './Component/Login/Login.jsx'


import Signup from './Component/Login/Signup.jsx'
 
import ProtectedRoute from './Component/Login/ProtectedRoute.jsx';
const App = () => {
  return (
    <>
    <BrowserRouter>

    {/* <Routes>
        <Route path="/" element={<Login/>} />
=======
    <Routes>
        <Route path="/login" element={<Login/>} />
>>>>>>> 2516f9dd64a13f07b160920df6a34775ac072c64
        <Route path="/signup" element={< Signup/>} />
          <Route path="/demo" element={<Form/>} />
        <Route path="/collegePage" element={<CollegePage/>} />
        <Route path="/updateForm" element={<UpdateForm/>} />
        <Route path="/placementForm" element={<PlacementForm/>} />
        <Route path="/eventAddForm" element={<EventsAddForm/>} />
        
    </Routes> */}
   
      <Sidebar>
        <Routes>
        {/* <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup />} /> */}
       
       
        <Route element={<ProtectedRoute/>}/>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/college" element={<Collgepart/>} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/student" element={<StudentData />} />
          <Route path="/placement" element={<Placement/>} />
          <Route path="/Notification" element={<Notification/>} />
          <Route path="/Training" element={<Training/>} />
          <Route path="/Report" element={<Report/>}/>
          <Route path="/feedback" element={<Feedback/>} />
        {/* </Route> */}

        {/* dummy route */}
        <Route path="/activeProcess" element={<CorporateActiveProcess/>} />


        </Routes>
      </Sidebar>
    </BrowserRouter>
    </>
  );
};

export default App;