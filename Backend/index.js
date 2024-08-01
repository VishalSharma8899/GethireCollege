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
 
// this is for Corporate active process 
const path = require('path');

// this is for invitation
 
// this is for UpcomingEvents data posting in training section
 
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
// api path for uplod data student
app.use('/students',studentRoutes);

 //college
app.use('/college',UserRoutes);
 
 

// ---- 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });

  
  



 