// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Component/Dashboard/Sidebar.jsx';
import Dashboard from './Component/Dashboard/Pages/Dashboard/Main.jsx';
import Collgepart from './Component/Dashboard/Pages/College/collgepart.jsx';
import Jobs from './Component/Dashboard/Pages/Jobs/Jobs.jsx';
import StudentData from './Component/Dashboard/Pages/StudentData/StudentData.jsx';
import Placement from './Component/Dashboard/Pages/Placement/Placement.jsx';
import Notification from './Component/Dashboard/Pages/Notifications/Notification.jsx';
import Training from './Component/Dashboard/Pages/Training/Training.jsx';
import Feedback from './Component/Dashboard/Pages/Feedback/Feedback.jsx';
import Report from './Component/Dashboard/Pages/Report/Report.jsx';
import Form from './Component/Profile/Form.jsx';
import CollegePage from './Component/Profile/CollegePage.jsx';
import UpdateForm from './Component/Profile/UpdateFrom.jsx';
import PlacementForm from './Component/Profile/PlacementForm.jsx';
import EventsAddForm from './Component/Profile/EventsAddForm.jsx';
import Login from './Component/Login/Login.jsx';
import Signup from './Component/Login/Signup.jsx';
import TopPerformers from './Component/Dashboard/Pages/Jobs/TopPerformers.jsx';
import SeeAllCompanies from './Component/Dashboard/Pages/Jobs/SeeAllCompanies.jsx';
import AllCourses from './Component/Dashboard/Pages/Training/AllCourses.jsx';
import StudentDetails from './Component/Dashboard/Pages/Jobs/StudentDetails.jsx';
import ParticularCourse from './Component/Dashboard/Pages/Training/ParticularCourse/ParticularCourse.jsx';
import AllIndustry from './Component/Dashboard/Pages/Training/AllIndustry.jsx';
import ParticularIndustry from './Component/Dashboard/Pages/Training/ParticularIndustry.jsx';
// import ProtectedRoute from './Component/Login/ProtectedRoute.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/demo" element={<Form />} />
        <Route path="/collegePage" element={<CollegePage />} />
        <Route path="/updateForm" element={<UpdateForm />} />
        <Route path="/placementForm" element={<PlacementForm />} />
        <Route path="/eventAddForm" element={<EventsAddForm />} />

        <Route path="/" element={<Sidebar><Dashboard /></Sidebar>} />
        <Route path="/dashboard" element={<Sidebar><Dashboard /></Sidebar>} />
        <Route path="/college" element={<Sidebar><Collgepart /></Sidebar>} />
        <Route path="/jobs" element={<Sidebar><Jobs /></Sidebar>} />
        <Route path="/student" element={<Sidebar><StudentData /></Sidebar>} />
        <Route path="/placement" element={<Sidebar><Placement /></Sidebar>} />
        <Route path="/notification" element={<Sidebar><Notification /></Sidebar>} />
        <Route path="/training" element={<Sidebar><Training /></Sidebar>} />
        <Route path="/report" element={<Sidebar><Report /></Sidebar>} />
        <Route path="/feedback" element={<Sidebar><Feedback /></Sidebar>} />
        <Route path="/jobs/top-performers" element={<Sidebar><TopPerformers /></Sidebar>} />
        <Route path="/jobs/see-all-companies" element={<Sidebar><SeeAllCompanies /></Sidebar>} />
        <Route path="/jobs/student-details/:name" element={<Sidebar><StudentDetails /></Sidebar>} />
        <Route path="/training/all-courses" element={<Sidebar><AllCourses/></Sidebar>} />
        <Route path="/training/all-courses/course/:id" element={<Sidebar><ParticularCourse/></Sidebar>} />
        <Route path="/training/all-industry" element={<Sidebar><AllIndustry/></Sidebar>} />
        <Route path="/training/all-industry/industry/:id" element={<Sidebar><ParticularIndustry/></Sidebar>} />
      </Routes>
    </Router>
  );
};

export default App;