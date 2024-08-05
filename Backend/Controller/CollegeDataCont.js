const { CollegeData } = require('../Models/CollegeData');
const path = require('path');
const mongoose = require('mongoose')

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

module.exports = {
  createCollege,
  getColleges,
 
  updateCollegeById,
  deleteCollegeById
};
