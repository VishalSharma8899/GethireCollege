const express = require('express');

const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
 
const mongoose = require('mongoose');
const studentRoutes = require('./routes/student');
const UserRoutes = require('./routes/User');
// ----
// const CollegeRoutes = require('./routes/college');
// this is for college profile page
const {CollegeData ,CollegeDataGet, CollegeDataUpdate,CollegeDataPlacementAdd,CollegeDataEventAdd} = require('./Controller/CollegeDataCont')
// this is for Corporate active process 
const path = require('path');

// this is for invitation
 
// this is for UpcomingEvents data posting in training section
const {UpcomingEventController,DeleteEvents,WantToJoinUpcomingEvents,RemoveStudentFromUpcomingEvent,TopCoursesTraining} =require('./Controller/UpcomingEvents')
// this below is for deleting the Upcoming Events in training section
// const {DeleteEvents} = require('./Controller/UpcomingEvents')
// this is for industry talk 
const {industryTalk , deleteIndustryTalk,getAllIndustryTalk} = require('./Controller/Trainings')

const  connection = require('./Models/dbConnection');
const cookieParser = require('cookie-parser');
require('dotenv').config();
  
const cors = require('cors');
 
 
 
const app = express();
app.use(cors());
app.use(cookieParser());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
const PORT = process.env.PORT || 3000;
app.use(express.json());
//database
connection();
// api path for uplod data
app.use('/students',studentRoutes);

 
app.use('/college',UserRoutes);
 
 

// ----
// app.use('/college_data' , CollegeRoutes);

 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });


  // All college data apis / routes --------
  


  // This all below is for corporate section page
   

  // this is for invitation
  app.post('/invite' , Invitation);


//   this all routes are for Training page
  // this is for upcoming events
  app.post('/upcomingEvents' ,UpcomingEventController);
 // this is for deleting upcoming events in training section
 app.post('/deleteUpcomingEvents/:id' ,DeleteEvents);
//  this is for students wo want to jooin the sessions
 app.post('/wantToJoinUpcomingEvents',WantToJoinUpcomingEvents);
 app.post('/removeStudentFromUpcomingEvent',RemoveStudentFromUpcomingEvent);
 app.post('/topCoursesTraining',TopCoursesTraining);
// this below for Industry talk
app.post('/industryTalk' , industryTalk)
app.post('/deleteIndustryTalk/:id' , deleteIndustryTalk)
app.get('/getAllIndustryTalk' , getAllIndustryTalk)
  



 