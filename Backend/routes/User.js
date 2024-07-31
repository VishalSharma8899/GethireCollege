const express = require('express');
 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const auth = require('../Middleware/Auth');
// const upload = require('../Middleware/Upload');
 

// @route    GET api/auth
//login -signup
const{ handleUserLogin  ,  handleUserRegistration   }  =  require('../Controller/User.js');
//traing
const {  uploadCourse,getCourse ,updateCourse,  deletecourse} = require('../Controller/Trainings.js');
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
//Notification
 
// traing
 
 router.get('/getcousre' , getCourse );
 router.post('/deletecourse/:id' ,  deletecourse );

 router.put('/editcourses/:id', upload.fields([
  { name: 'courseImage', maxCount: 1 },
  { name: 'demoVideo', maxCount: 1 },
  { name: 'Videos', maxCount: 10 } // Adjust as needed for multiple section videos
]), updateCourse);

 //coprative
router.post('/invite' , Invitation);
router.post('/activeProcess' , ActiveProcessData);
 router.get('/company-details', GetActiveProcessData )
 router.get('/topplaced' , GetTopPlacedUser);
 router.get('/hireplacement' , gethireplacment );


 //college profile

 // All college data apis / routes --------
 router.post('/college_data_upload', upload.fields([{ name: 'college_img', maxCount: 1 }, { name: 'college_logo', maxCount: 1 }]) ,CollegeData);
 router.get('/college_data_get', CollegeDataGet);
 router.post('/college_data_update', upload.fields([{ name: 'college_img', maxCount: 1 }, { name: 'college_logo', maxCount: 1 }]),CollegeDataUpdate);
 router.post('/college_top_placements_add', CollegeDataPlacementAdd);
 router.post('/college_cultural_events_add',CollegeDataEventAdd);
  
module.exports = router;