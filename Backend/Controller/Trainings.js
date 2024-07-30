const Course = require('../Models/training');
const mongoose = require('mongoose');
exports.uploadCourse = async (req, res) => {
  const courseData = req.body;

  // Ensure req.files is defined and not null
  if (req.files) {
    if (req.files.courseImage) {
      courseData.courseImage = req.files.courseImage[0].path;
    }

    if (req.files.demoVideo) {
      courseData.demoVideo = req.files.demoVideo[0].path;
    }

    if (req.files.Videos) {
      courseData.Videos = req.files.Videos[0].path;
    }

       
  }

  const course = new Course(courseData);

  try {
    const savedCourse = await course.save();
    res.status(201).json(savedCourse);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getCourse = async(req , res) =>{
    try{
        const courses = await Course.find().sort({ _id: -1 }).limit();
    console.log(courses);
        res.status(200).json(courses);
    }catch{
        res.status(500).json({error:'Internal server error'})
    }

};

exports.deletecourse = async (req, res) => {
  const id = req.params.id; // Ensure the parameter name is `id`

  try {
    // Validate the ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ msg: `Invalid course ID ${id}` });
    }

    // Delete the course by ID
    const deleteResult = await Course.deleteOne({ _id: id });

    // Check if any document was deleted
    if (deleteResult.deletedCount > 0) {
      console.log("Deleted course:", deleteResult);
      res.status(200).json({ message: "Course deleted successfully" });
    } else {
      res.status(404).json({ message: "Course not found" });
    }

  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: err.message });
  }
};


exports.updateCourse = async (req, res) => {
  const courseId = req.params.id; // Get course ID from URL parameters
  const courseData = req.body;

  // Initialize content if it's not defined
  if (!courseData.content) {
    courseData.content = {};
  }

  // Ensure req.files is defined and not null
  if (req.files) {
    if (req.files.courseImage) {
      courseData.courseImage = req.files.courseImage[0].path;
    }

    if (req.files.demoVideo) {
      courseData.demoVideo = req.files.demoVideo[0].path;
    }

    if (req.files.Videos) {
      // Initialize content.Videos as an array if it doesn't exist
      if (!courseData.content.Videos) {
        courseData.content.Videos = [];
      }
      courseData.content.Videos = req.files.Videos.map(file => file.path);
    }
  }

  try {
    // Validate the ID format
    if (!mongoose.Types.ObjectId.isValid(courseId)) {
      return res.status(400).json({ msg: `Invalid course ID ${courseId}` });
    }

    // Find the existing course by ID
    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({ msg: 'Course not found' });
    }

    // Update course with new data
    Object.assign(course, courseData);

    // Save the updated course
    const updatedCourse = await course.save();

    res.status(200).json(updatedCourse);
  } catch (error) {
    console.error('Error updating course:', error);
    res.status(400).send(error);
  }
};