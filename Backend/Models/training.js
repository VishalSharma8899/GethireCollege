const mongoose = require('mongoose');

const lectureSchema = new mongoose.Schema({
  title: { type: String, },
  duration: { type: String, },
  preview: { type: Boolean,  },
 
});

const sectionSchema = new mongoose.Schema({
  title: { type: String,  },
   
  lectures: [lectureSchema]
});

const courseSchema = new mongoose.Schema({
  title: { type: String,  },
  courseImage: { type: String },
  demoVideo: { type: String },
  Videos: { type: String },
  instructor: { type: String,  },
  description: { type: String,  },
  lastUpdated: { type: String,  },
  languages: { type: [String],  },
  price: { type: Number,  },
  originalPrice: { type: Number,  },
  discount: { type: Number,  },
  couponCode: { type: String,  },
  ratings: {
    stars: { type: Number,  },
  },
  students: { type: Number,  },
  includes: {
    hoursOnDemandVideo: { type: Number,  },
    Exercises: { type: Number,  },
    articles: { type: Number,  },
    downloadableResources: { type: Number,  },
    accessOnMobileAndTV: { type: Boolean,  },
    fullLifetimeAccess: { type: Boolean,  },
    certificateOfCompletion: { type: Boolean,  }
  },
  whatYouWillLearn: { type: [String],  },
  content: {
    ContentTilte: { type: String },
    
    Section: [sectionSchema],
  },
  payment:{
  type : Boolean,
  default : false,
  }
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
