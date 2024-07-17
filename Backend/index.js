const express = require('express');
const multer = require('multer');
const xlsx = require('xlsx');
const mongoose = require('mongoose');
const Student = require('./Models/student');

const  connection = require('./Models/dbConnection');


const app = express();
const PORT = process.env.PORT || 3000;