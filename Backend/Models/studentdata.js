const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'colleges'
  },
  studentId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, required: true },
  contactInformation: {
    phone: String,
    email: String
  },
  address: String,
  department: String,
  yearOfStudy: Number,
  cgpa: Number,
  isPlaced: Boolean,
  PlacementRequired: Boolean,
  intershipRequired: Boolean
});

const Student = mongoose.model('StudentDataBase', studentSchema);
module.exports = Student;
