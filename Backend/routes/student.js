const express = require('express');

const { uploadStudentData } = require('../Controller/student.js');

const multer = require('multer');
 const router = express.Router();

 const upload = multer({ dest: 'uploads/' });
 router.post('/upload', upload.single('file'), uploadStudentData);


 module.exports = router;
