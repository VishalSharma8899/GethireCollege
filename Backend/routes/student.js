const express = require('express');

const { uploadStudentData ,  GetAllUser ,GetPlacedUser ,GetUnPlacedUser , GetByDepartment ,GetByYear} = require('../Controller/student.js');

const multer = require('multer');
 const router = express.Router();

 const upload = multer({ dest: 'uploads/' });

 // all user push
 router.post('/upload', upload.single('file'), uploadStudentData);


 //all user get
router.get('/alluser' , GetAllUser );

// all [placed user] user get 

router.get('/isplaced' , GetPlacedUser);

// all [unplaced ] user
router.get('/UnPlaced' , GetUnPlacedUser);

// all by deparment

router.get('/department', GetByDepartment);

// get by year
router.get('/year', GetByYear);

 module.exports = router;
