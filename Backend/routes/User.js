const express = require('express');
 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const auth = require('../Middleware/Auth');
// const upload = require('../Middleware/Upload');
const User = require('../Models/User');

// @route    GET api/auth
const{ handleUserLogin  ,  handleUserRegistration   }  =  require('../Controller/User.js');
const {  uploadCourse,getCourse ,updateCourse,  deletecourse} = require('../Controller/Trainings.js');
const {ActiveProcessData , getCompanyDetails }= require('../Controller/CorporateConnects');

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
router.post('/activeProcess' , ActiveProcessData);
 router.get('/company-details',getCompanyDetails )

  
module.exports = router;