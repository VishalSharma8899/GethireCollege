 
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    studentId: { 
        type: String, required: true, unique: true
     },
    name: { 
        type: String, required: true 
    },
    dob: {
         type: Date, required: true
         },
    gender: { 
        type: String, required: true
     },
    contactInformation: {
        phone: { type: String, required: true },
        email: { type: String, required: true },
    },
    address: { 
        type: String, required: true
     },
    department: {
         type: String, required: true 
        },
    yearOfStudy: {
         type: String, required: true
         },
    cgpa: {
         type: Number, required: true
         },
});

const Student = mongoose.model('StudentData', studentSchema);

module.exports = Student;
