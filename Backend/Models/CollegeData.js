const mongoose = require('mongoose');

// College Schema
const CollegeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'colleges',
  },
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  college_img: { 
    type: String,
    required: true,
  },
  college_logo: {
    type: String,
    required: true,
  },
  college_logo_name: {
    type: String,
    required: true,
  },
  college_name: {
    type: String,
    required: true,
  },
  college_address: {
    type: String,
    required: true,
  },
  college_website: {
    type: String,
    required: true,
  },
  college_facebook_id: {
    type: String,
    required: true,
  },
  college_linkedin_id: {
    type: String,
    required: true,
  },
  college_whatsapp_num: {
    type: Number,
    required: true,
  },
  college_gmail_id: {
    type: String,
    required: true,
  },
  college_info: {
    type: String,
    required: true,
  },
  college_location: {
    type: String,
    required: true,
  },
});

const CollegeData = mongoose.model('CollegeData', CollegeSchema);

module.exports = {
  CollegeData
};
