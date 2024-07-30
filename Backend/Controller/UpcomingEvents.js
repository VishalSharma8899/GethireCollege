// routes/upcomingEvents.js

const express = require('express');
const UpcomingEvent  = require('../Models/UpcomintEvents')
const mongoose = require('mongoose')
const WantToJoinUpcomingEventSchema = require('../Models/UpcomintEvents')
const Course = require('../Models/trainigCourse');
// middleware/upload.js

const multer = require('multer');
const path = require('path');

// Set up storage engine
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

// Check file type
function checkFileType(file, cb) {
  const filetypes = /jpeg|jpg|png|gif/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
}

// Init upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // Limit file size to 1MB
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  }
}).single('hostImage');

// module.exports = upload;


// POST request to add a new upcoming event
exports.UpcomingEventController = async (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
          return res.status(400).json({ error: err });
        }
        
        try {
          const { hostName, eventName, date, time } = req.body;
    
          // Validate required fields
          if (!hostName || !eventName || !date || !time) {
            return res.status(400).json({ error: 'All fields are required' });
          }
    
          // Create a new UpcomingEvent instance
          const newEvent = new UpcomingEvent({
            hostImage: req.file.path, // Save the file path
            hostName,
            eventName,
            date,
            time
          });
    
          // Save the event to the database
          await newEvent.save();
    
          res.status(201).json({ message: 'Event created successfully', event: newEvent });
        } catch (error) {
          console.error('Error creating event:', error);
          res.status(500).json({ error: 'Server error' });
        }
      });


    //   try {
//     const { hostImage, hostName, eventName, date, time } = req.body;

//     // Validate required fields
//     if (!hostImage || !hostName || !eventName || !date || !time) {
//       return res.status(400).json({ error: 'All fields are required' });
//     }

//     // Create a new UpcomingEvent instance
//     const newEvent = new UpcomingEvent({
//       hostImage,
//       hostName,
//       eventName,
//       date,
//       time
//     });

//     // Save the event to the database
//     await newEvent.save();

//     res.status(201).json({ message: 'Event created successfully', event: newEvent });
//   } catch (error) {
//     console.error('Error creating event:', error);
//     res.status(500).json({ error: 'Server error' });
//   }
};

exports.DeleteEvents = async (req, res) => {
    try {
        // the event id is the object id of that event
        const eventId = req.params.id;
    
        // Validate that the provided ID is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(eventId)) {
          return res.status(400).json({ error: 'Invalid event ID' });
        }
    
        // Find the event by ID and delete it
        const deletedEvent = await UpcomingEvent.findByIdAndDelete(eventId);
    
        if (!deletedEvent) {
          return res.status(404).json({ error: 'Event not found' });
        }
    
        res.status(200).json({ message: 'Event deleted successfully' });
      } catch (error) {
        console.error('Error deleting event:', error);
        res.status(500).json({ error: 'Server error' });
      }
}

exports.WantToJoinUpcomingEvents = async (req, res) => {
    try {
        const { adminId, students, eventId } = req.body;
    
        // Validate required fields
        if (!adminId || !students || !eventId) {
          return res.status(400).json({ error: 'adminId, students, and eventId are required' });
        }
    
        // Check if the entry exists for the given adminId and eventId
        let entry = await WantToJoinUpcomingEventSchema.findOne({ adminId, eventId });
    
        if (!entry) {
          return res.status(404).json({ error: 'Admin ID not found. No entry created.' });
        }
    
        // Check for duplicate studentId in the existing entry
        for (let student of students) {
          if (entry.students.some(existingStudent => existingStudent.studentId.equals(student.studentId))) {
            return res.status(400).json({ error: `Student with ID ${student.studentId} is already enrolled.` });
          }
        }
    
        // Update existing entry with new students
        entry.students = [...entry.students, ...students];
    
        // Save the updated entry to the database
        await entry.save();
    
        res.status(200).json({ message: 'Entry updated successfully', entry });
      } catch (error) {
        console.error('Error updating entry:', error);
        res.status(500).json({ error: 'Server error' });
      }
}

exports.RemoveStudentFromUpcomingEvent = async (req, res) => {
    try {
        const { adminId, studentId, eventId } = req.body;
    
        // Validate required fields
        if (!adminId || !studentId || !eventId) {
          return res.status(400).json({ error: 'adminId, studentId, and eventId are required' });
        }
    
        // Check if the entry exists for the given adminId and eventId
        let entry = await WantToJoinUpcomingEventSchema.findOne({ adminId, eventId });
    
        if (!entry) {
          return res.status(404).json({ error: 'Admin ID or Event ID not found. No entry exists.' });
        }
    
        // Check if the student is in the students array
        const studentIndex = entry.students.findIndex(existingStudent => existingStudent.studentId.equals(studentId));
        if (studentIndex === -1) {
          return res.status(404).json({ error: 'Student ID not found in the event.' });
        }
    
        // Remove the student from the array
        entry.students.splice(studentIndex, 1);
    
        // Save the updated entry to the database
        await entry.save();
    
        res.status(200).json({ message: 'Student removed successfully', entry });
      } catch (error) {
        console.error('Error removing student:', error);
        res.status(500).json({ error: 'Server error' });
      }
    
}

exports.TopCoursesTraining = async (req , res) =>{
    try {
        const topCourses = await Course.find()
          .sort({ rating: -1 })  // Sort by rating in descending order
          .limit(10)  // Limit the results to top 10
          .select('courseName price -_id');  // Select only courseName and price fields
    
        res.status(200).json({ topCourses });
      } catch (error) {
        console.error('Error retrieving top courses:', error);
        res.status(500).json({ error: 'Server error' });
      }
}