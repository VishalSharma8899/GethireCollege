const Course = require('../Models/training');
const Industry = require('../Models/CollegeData');
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


// for storing vidos and photos in industry talk -----------------------------
const multer = require('multer');
const path = require('path');
// Set storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the destination directory
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});
// Initialize upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000000 }, // Set file size limit to 1GB (in bytes)
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).fields([
  { name: 'photo', maxCount: 1 },
  { name: 'video', maxCount: 1 }
]);
// Check file type
function checkFileType(file, cb) {
  const filetypes = /jpeg|jpg|png|gif|mp4/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb(new Error('Error: Images and videos only!'));
  }
}
exports.industryTalk = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      console.error('Multer error:', err); // Log the error for debugging
      return res.status(400).send({ error: err.message });
    }

    try {
      const { name,title, specializationWith } = req.body;

      // Log files and body for debugging
      console.log('Uploaded files:', req.files);
      console.log('Request body:', req.body);

      // Check if files are uploaded
      if (!req.files || !req.files.photo || !req.files.video) {
        return res.status(400).send({ error: 'Photo and video are required' });
      }

      // Create a new media document
      const newMedia = new Industry({
        photo: req.files.photo[0].path,
        video: req.files.video[0].path,
        name,
        specializationWith,
        title
      });

      // Save the document to the database
      await newMedia.save();

      // Send success response
      res.status(201).send(newMedia);
    } catch (error) {
      // Handle errors
      res.status(500).send({ error: 'Failed to create media' });
    }
  });
};


const fs = require('fs'); // Import the 'fs' module
exports.deleteIndustryTalk = async (req, res) => {
  const { id } = req.params; // Get the ID from URL params

  try {
    // Find the document by ID
    const media = await Industry.findById(id);

    if (!media) {
      return res.status(404).send({ error: 'Document not found' });
    }

    // Delete files from disk
    const photoPath = path.join(__dirname, media.photo);
    const videoPath = path.join(__dirname, media.video);

    fs.unlink(photoPath, (err) => {
      if (err) console.error('Error deleting photo:', err);
    });

    fs.unlink(videoPath, (err) => {
      if (err) console.error('Error deleting video:', err);
    });

    // Remove the document from the database
    await Industry.findByIdAndDelete(id);

    // Send success response
    res.status(200).send({ message: 'Files and document deleted successfully' });
  } catch (error) {
    console.error('Error deleting files:', error);
    res.status(500).send({ error: 'Failed to delete files' });
  }
}

exports.getAllIndustryTalk = async (req , res) =>{
  try {
    // Find all documents in the collection
    const media = await Industry.find();

    // Send success response
    res.status(200).send(media);
  } catch (error) {
    console.error('Error fetching documents:', error);
    res.status(500).send({ error: 'Failed to fetch documents' });
  }
}
