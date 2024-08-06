const { CollegeData , CollegeEvent } = require('../Models/CollegeData');
const path = require('path');
const mongoose = require('mongoose')

// // for image upload
// const multer = require('multer');
// const path = require('path');
// const fs = require('fs');


// Create a new college entry
const createCollege = async (req, res) => {
  try {
    const college = new CollegeData(req.body);

    // Handle file uploads
    if (req.files) {
      if (req.files.college_img) {
        college.college_img = req.files.college_img[0].path;
      }
      if (req.files.college_logo) {
        college.college_logo = req.files.college_logo[0].path;
      }
    }

    await college.save();
    res.status(201).json(college);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all colleges
// const getColleges = async (req, res) => {
//   try {
//     const colleges = await CollegeData.find();
//     res.status(200).json(colleges);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// Get a college by ID
const getColleges = async (req, res) => {
  try {
    const  userId  = req.params;
    console.log("user id is", userId);
    if (!userId) {
      return res.status(400).json({ error: 'userId parameter is required' });
    }
    
    const userObjectId = new mongoose.Types.ObjectId(userId);
    const colleges = await CollegeData.find({ userId: userObjectId });
    if (colleges.length === 0) {
      return res.status(404).json({ error: 'No colleges found for the given userId' });
    }
    
    res.status(200).json(colleges);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a college by ID
const updateCollegeById = async (req, res) => {
  try {
    const updates = req.body;

    // Handle file uploads
    if (req.files) {
      if (req.files.college_img) {
        updates.college_img = req.files.college_img[0].path;
      }
      if (req.files.college_logo) {
        updates.college_logo = req.files.college_logo[0].path;
      }
    }

    const college = await CollegeData.findByIdAndUpdate(req.params.id, updates, { new: true });
    if (!college) {
      return res.status(404).json({ error: 'College not found' });
    }
    res.status(200).json(college);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a college by ID
const deleteCollegeById = async (req, res) => {
  try {
    const college = await CollegeData.findByIdAndDelete(req.params.id);
    if (!college) {
      return res.status(404).json({ error: 'College not found' });
    }
    res.status(200).json({ message: 'College deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// // for upload events 
// const uploadDir = path.join(__dirname, 'uploads');
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir);
// }
// // Multer configuration for file uploads
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname)); // Appends the file extension
//   },
// });
// const upload = multer({ storage: storage });

const eventUpload = async (req, res) =>{
  const { id } = req.params;
  const { eventName, description, eventDate } = req.body;
  const files = req.files;

  if (!eventName || !description || !eventDate || !files || files.length === 0) {
    return res.status(400).json({ error: 'Invalid input data' });
  }
 
  try {
    const images = files.map(file => ({
      url: `/uploads/${file.filename}`,
    }));

    // Find the event by ID
    let event = await CollegeEvent.findById(id);

    if (event) {
      // If the event exists, update it
      event.eventName = eventName;
      event.description = description;
      event.eventDate = eventDate;
      event.images = images;
    } else {
      // If the event does not exist, create a new one
      event = new CollegeEvent({
        _id: id,
        eventName,
        description,
        eventDate,
        images,
      });
    }

    // Save the event
    await event.save();

    res.status(200).json({ message: 'College event saved successfully', event });
  } catch (error) {
    console.log(" error is ", error)
    res.status(500).json({ error: 'An error occurred while saving the event' });
  }

}

const getEventById = async (req, res) => {
  const { id } = req.params;

  try {
    const event = await CollegeEvent.findById(id);

    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the event' });
  }
};




module.exports = {
  createCollege,
  getColleges,
 
  updateCollegeById,
  deleteCollegeById,

  eventUpload,
  getEventById
};
