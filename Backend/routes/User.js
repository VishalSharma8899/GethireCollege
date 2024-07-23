const express = require('express');
 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const auth = require('../Middleware/Auth');

const User = require('../Models/User');

// @route    GET api/auth
const{ signup ,login ,getProfile}  =  require('../Controller/User.js');

const router = express.Router();

router.post('/login' , login);

router.post('/signup' ,    signup);
router.get('/profile', auth, getProfile);
module.exports = router;