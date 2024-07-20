const express = require('express');
const multer = require('multer');
 
const mongoose = require('mongoose');
const studentRoutes = require('./routes/student');

const  connection = require('./Models/dbConnection');

const cors = require('cors');
 

 
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;
app.use(express.json());
//database
connection();
// api path for uplod data
app.use('/students',studentRoutes);

 

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });