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
  app.post('/college_data_upload', upload.fields([{ name: 'college_img', maxCount: 1 }, { name: 'college_logo', maxCount: 1 }]) ,CollegeData);
  app.get('/college_data_get', CollegeDataGet);
  app.post('/college_data_update', upload.fields([{ name: 'college_img', maxCount: 1 }, { name: 'college_logo', maxCount: 1 }]),CollegeDataUpdate);
  app.post('/college_top_placements_add', CollegeDataPlacementAdd);
  app.post('/college_cultural_events_add',CollegeDataEventAdd);


  // This all below is for corporate section page
   

  // this is for invitation
   


  // this is for upcoming events
  app.post('/upcomingEvents' ,UpcomingEventController);
 // this is for deleting upcoming events in training section
 app.post('/deleteUpcomingEvents/:id' ,DeleteEvents);
//  this is for students wo want to jooin the sessions
 app.post('/wantToJoinUpcomingEvents',WantToJoinUpcomingEvents);
 app.post('/removeStudentFromUpcomingEvent',RemoveStudentFromUpcomingEvent);
 app.post('/topCoursesTraining',TopCoursesTraining);

  


 