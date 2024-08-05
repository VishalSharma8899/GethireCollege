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
import Login from './Component/Login/Login.jsx';
import Signup from './Component/Login/Signup.jsx';
import TopPerformers from './Component/Dashboard/Pages/Jobs/TopPerformers.jsx';
import SeeAllCompanies from './Component/Dashboard/Pages/Jobs/SeeAllCompanies.jsx';
import AllCourses from './Component/Dashboard/Pages/Training/AllCourses.jsx';
import StudentDetails from './Component/Dashboard/Pages/Jobs/StudentDetails.jsx';
import ParticularCourse from './Component/Dashboard/Pages/Training/ParticularCourse/ParticularCourse.jsx';
import AllIndustry from './Component/Dashboard/Pages/Training/AllIndustry.jsx';
import ParticularIndustry from './Component/Dashboard/Pages/Training/ParticularIndustry.jsx';
import ProtectedRoute from './Component/Login/ProtectedRoute.jsx';
// import ActiveButton from './Component/Dashboard/ActiveButton.jsx'; // Add your ActiveButton import

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/invite" element={<ActiveButton />} /> Add route for ActiveButton */}
        {/* <Route path="/college_info" element={<Form />} /> */}
        {/* <Route path="/updateForm" element={<UpdateForm />} /> */}
        {/* <Route path="/placementForm" element={<PlacementForm />} /> */}
        {/* <Route path="/eventAddForm" element={<EventsAddForm />} /> */}

        <Route path="/" element={<ProtectedRoute><Sidebar><Dashboard /></Sidebar></ProtectedRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><Sidebar><Dashboard /></Sidebar></ProtectedRoute>} />
        <Route path="/college" element={<ProtectedRoute><Sidebar><Collgepart /></Sidebar></ProtectedRoute>} />
        <Route path="/college/collegeinfo" element={<ProtectedRoute><Form/></ProtectedRoute>} />
        <Route path="/jobs" element={<ProtectedRoute><Sidebar><Jobs /></Sidebar></ProtectedRoute>} />
        <Route path="/student" element={<ProtectedRoute><Sidebar><StudentData /></Sidebar></ProtectedRoute>} />
        <Route path="/placement" element={<ProtectedRoute><Sidebar><Placement /></Sidebar></ProtectedRoute>} />
        <Route path="/notification" element={<ProtectedRoute><Sidebar><Notification /></Sidebar></ProtectedRoute>} />
        <Route path="/training" element={<ProtectedRoute><Sidebar><Training /></Sidebar></ProtectedRoute>} />
        <Route path="/report" element={<ProtectedRoute><Sidebar><Report /></Sidebar></ProtectedRoute>} />
        <Route path="/feedback" element={<ProtectedRoute><Sidebar><Feedback /></Sidebar></ProtectedRoute>} />
        <Route path="/jobs/top-performers" element={<ProtectedRoute><Sidebar><TopPerformers /></Sidebar></ProtectedRoute>} />
        <Route path="/jobs/see-all-companies" element={<ProtectedRoute><Sidebar><SeeAllCompanies /></Sidebar></ProtectedRoute>} />
        <Route path="/jobs/student-details/:name" element={<ProtectedRoute><Sidebar><StudentDetails /></Sidebar></ProtectedRoute>} />
        <Route path="/training/all-courses" element={<ProtectedRoute><Sidebar><AllCourses /></Sidebar></ProtectedRoute>} />
        <Route path="/training/all-courses/course/:id" element={<ProtectedRoute><Sidebar><ParticularCourse /></Sidebar></ProtectedRoute>} />
        <Route path="/training/all-industry" element={<ProtectedRoute><Sidebar><AllIndustry /></Sidebar></ProtectedRoute>} />
        <Route path="/training/all-industry/industry/:id" element={<ProtectedRoute><Sidebar><ParticularIndustry /></Sidebar></ProtectedRoute>} />
      </Routes>
    </Router>
  );
};

export default App;
