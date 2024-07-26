const express = require('express');
 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const auth = require('../Middleware/Auth');

const User = require('../Models/User');

// @route    GET api/auth
const{ handleUserLogin  ,  handleUserRegistration,getProfile}  =  require('../Controller/User.js');

const router = express.Router();

router.post("/login", handleUserLogin);
router.post("/register", handleUserRegistration);
//Notification
 
 
module.exports = router;