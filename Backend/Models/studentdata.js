 
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    studentId: { 
        type: String, required: true , unique: true 
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
        phone: { type: String },
        email: { type: String,   },
    },
    address: { 
        type: String, required: true
     },
    department: {
         type: String, required: true 
        },
    yearOfStudy: {
         type: Number, required: true
         },
    cgpa: {
         type: Number, required: true
         },
         isPlaced: { 
            type: Boolean, 
            required: true, 
            default: false 
          },
          
         PlacementDetails :{
           intershipRequired: { 
            type: Boolean, 
            required: true, 
            default:  true
          },
          PlacementRequired: { 
            type: Boolean, 
            required: true, 
            default: true
          }
        },
          portfolio: { 
            type: String,  
         },
});

const Student = mongoose.model('StudentData', studentSchema);

module.exports = Student;
//http://localhost:3000/api/students/upload