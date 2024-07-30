const mongoose = require('mongoose');

const upcomingEventSchema = new mongoose.Schema({
  hostImage: { type: String, required: true },
  hostName: { type: String, required: true, trim: true },
  eventName: { type: String, required: true, trim: true },
  date: { type: String, required: true },
  time: { type: String, required: true } // Storing time as a string (e.g., '14:00')
});

const UpcomingEvent = mongoose.model('UpcomingEvent', upcomingEventSchema);
module.exports = UpcomingEvent;





// sutudents that want to join an upcoming event
const studentSchemas = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId, // Reference to the Student's ObjectId
    required: true,
    ref: 'Student' // Reference to the Student model (assuming you have one)
  },
  studentName: {
    type: String,
    required: true,
    trim: true
  }
});

const WantToJoinUpcomingEventSchema = new mongoose.Schema({
  adminId: {
    type: mongoose.Schema.Types.ObjectId, // Reference to the Admin's ObjectId
    required: true,
    ref: 'Admin' // Reference to the Admin model (assuming you have one)
  },
  students: [studentSchemas], // Array of student objects
  eventId: {
    type: mongoose.Schema.Types.ObjectId, // Reference to the Event's ObjectId
    required: true,
  }
});

const WantToJoinUpcomingEvent = mongoose.model('WantToJoinUpcomingEvent', WantToJoinUpcomingEventSchema);
module.exports = WantToJoinUpcomingEvent;
