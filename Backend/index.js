const express = require('express');
const multer = require('multer');
 
const mongoose = require('mongoose');
const studentRoutes = require('./routes/student');

const  connection = require('./Models/dbConnection');


const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
//database
connection();

app.use('/api/students',studentRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });