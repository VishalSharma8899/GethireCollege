const express = require('express');

const { uploadStudentData  ,   GetAllUser  , filter , GetByName ,updateStudent ,deleteStudentData} = require('../Controller/student.js');
const path = require('path');

const multer = require('multer');
 const router = express.Router();
 const auth = require('../Middleware/Auth');
 

 // all user push
 const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Directory where files will be uploaded
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });
  
  const upload = multer({ storage: storage });
 router.post('/upload',  upload.single('file'), uploadStudentData);


 //all user get
router.get('/alluser' , GetAllUser );

 
//get by name 
router.post('/search',  GetByName);
 
 // update
 router.put('/update',   updateStudent );
 //delete student 
 router.delete('/delete', deleteStudentData);

 //
 router.post('/filter',filter)

 module.exports = router;
