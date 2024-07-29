const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  CourseName: {
    type: String,
    required: true
  },
  CourseCode: {
    type: String,
    
  },
  CourseDescription: {
    type: String,
    required: true
  },
  CourseDuration: {
    type: String,
    required: true
  },
  CourseFee: {
    type: Number,
    required: true
  },
  CourseImage: {
    type: String,
    required: true
  },
  Incharge:{
    type: String,
    },
  
  courseDemoVideo: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Course', courseSchema);
