const express = require('express');

const { uploadStudentData ,  GetAllUser ,GetPlacedUser ,GetUnPlacedUser , GetByDepartment , filter ,GetByYear , GetByIntership ,GetByNotRequiredIntership, GetByName, GetByPlacementRequired ,GetByNotRequiredPlacement ,updateStudent ,deleteStudentData} = require('../Controller/student.js');

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
//get by name 
router.post('/search',  GetByName);

// get by year
router.get('/year', GetByYear);
// get by intership
router.get('/intership',  GetByIntership);

// get not intrested student for intership

 router.get('/notrequiredintership',GetByNotRequiredIntership);

 // get by placement required
 router.get('/placementrequired', GetByPlacementRequired);

 // get by placement not required
 router.get('/notrequiredplacement', GetByNotRequiredPlacement);
 // update
 router.put('/update',   updateStudent );
 //delete student 
 router.delete('/delete/:id', deleteStudentData);

 //
 router.post('/filter',filter)

 module.exports = router;
