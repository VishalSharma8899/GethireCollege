const express = require('express');
 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const auth = require('../Middleware/Auth');
const upload = require('../Middleware/Upload');
const User = require('../Models/User');

// @route    GET api/auth
const{ handleUserLogin  ,  handleUserRegistration   }  =  require('../Controller/User.js');
const {uploadCourse,getCourse } = require('../Controller/training')
const router = express.Router();

router.post("/login", handleUserLogin);
router.post("/register", handleUserRegistration);
//Notification
 
// traing
router.post('/CourseUpload',  upload, uploadCourse);
 router.get('/getcousre' , getCourse );
module.exports = router;