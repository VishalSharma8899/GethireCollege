const express = require('express');
 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const auth = require('../Middleware/Auth');
 
//login -signup
const{ handleUserLogin  ,  handleUserRegistration   }  =  require('../Controller/User.js');
//traing
const {    uploadCourse,
  getCourse,
  deleteCourse,
  updateCourse,
  industryTalk,
  deleteIndustryTalk,
  getAllIndustryTalk,
  UpcomingEventController,
  DeleteEvents,
  WantToJoinUpcomingEvents,
  RemoveStudentFromUpcomingEvent,
  TopCoursesTraining
}= require('../Controller/Trainings.js');
//coprate
 const {Invitation,ActiveProcessData  ,GetActiveProcessData , gethireplacment ,GetTopPlacedUser} = require('../Controller/Corporate');
//college
const {CollegeData ,CollegeDataGet, CollegeDataUpdate,CollegeDataPlacementAdd,CollegeDataEventAdd} = require('../Controller/CollegeDataCont')
 const multer = require('multer');
const router = express.Router();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // Directory where files will be uploaded
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });
  
  const upload = multer({ storage: storage });
  const path = require('path');
  // Define the route with multer handling
  router.post('/uploadCourse', upload.fields([
    { name: 'courseImage', maxCount: 1 },
    { name: 'demoVideo', maxCount: 1 },
    { name: 'Videos', maxCount: 10 } // Adjust as needed
  ]), uploadCourse);
  


router.post("/login", handleUserLogin);
router.post("/register", handleUserRegistration);

// All college data apis / routes --------
router.post('/college_data_upload', upload.fields([{ name: 'college_img', maxCount: 1 }, { name: 'college_logo', maxCount: 1 }]) ,CollegeData);
router.get('/college_data_get', CollegeDataGet);
router.post('/college_data_update', upload.fields([{ name: 'college_img', maxCount: 1 }, { name: 'college_logo', maxCount: 1 }]),CollegeDataUpdate);
router.post('/college_top_placements_add', CollegeDataPlacementAdd);
router.post('/college_cultural_events_add',CollegeDataEventAdd);
 

 //coprative
 router.post('/invite' , Invitation);
 router.post('/activeProcess' , ActiveProcessData);
  router.get('/company-details', GetActiveProcessData )
  router.get('/topplaced' , GetTopPlacedUser);
  router.get('/hireplacement' , gethireplacment );
 
  //student data from student .js

// traing

router.post('/uploadCourse', uploadCourse);
router.get('/getCourse', getCourse);
router.delete('/deleteCourse/:id', deleteCourse); 
router.put('/updateCourse/:id', updateCourse);

// Industry Talk Routes
router.post('/industryTalk', industryTalk);
router.delete('/deleteIndustryTalk/:id', deleteIndustryTalk);
router.get('/getAllIndustryTalk', getAllIndustryTalk);

// Upcoming Event Routes
router.post('/UpcomingEvent', UpcomingEventController);
router.delete('/DeleteEvents/:id', DeleteEvents);
router.post('/WantToJoinUpcomingEvents', WantToJoinUpcomingEvents);
router.post('/RemoveStudentFromUpcomingEvent', RemoveStudentFromUpcomingEvent);

// Top Courses Route
router.get('/TopCoursesTraining', TopCoursesTraining);

  
 


 //college profile
 

  
  
module.exports = router;