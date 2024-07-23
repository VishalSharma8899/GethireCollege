const express = require('express');
const multer = require('multer');
 
const mongoose = require('mongoose');
const studentRoutes = require('./routes/student');
const UserRoutes = require('./routes/User');
const  connection = require('./Models/dbConnection');
const cookieParser = require('cookie-parser');
 
const cors = require('cors');
 

 
const app = express();
app.use(cors());
app.use(cookieParser());
const PORT = process.env.PORT || 3000;
app.use(express.json());
//database
connection();
// api path for uplod data
app.use('/students',studentRoutes);

app.use('/college',UserRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });