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
  college_cultural_events: {
    type: [
      {
        eventName: {
          type: String,
          required: true,
        },
        eventDate: {
          type: Date,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
        image: {
          type: String,
          required: true,
        },
      },
    ],
    required: true,
  },
  college_top_placements: {
    type: [
      {
        placementCompany: {
          type: String,
          required: true,
        },
        studentName: {
          type: String,
          required: true,
        },
        ctc: {
          type: String,
          required: true,
        },
        location: {
          type: String,
          required: true,
        },
      },
    ],
    required: true,
  },
  college_location: {
    type: String,
    required: true,
  },
});

const CollegeData = mongoose.model('CollegeData', CollegeSchema);

// Industry Schema
const industrySchema = new mongoose.Schema({
  photo: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  video: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  specializationWith: {
    type: String,
    required: true,
    trim: true,
  },
});

const Industry = mongoose.model('Media', industrySchema);

module.exports = {
  CollegeData,
  Industry,
};
