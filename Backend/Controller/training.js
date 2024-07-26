const Course = require('../Models/training'); // Adjust the path as necessary

 exports.uploadCourse = async (req, res) => {
  try {
    const {
      CourseName,
      CourseCode,
      CourseDescription,
      CourseDuration,
      CourseFee
    } = req.body;

    // Get file paths
    const CourseImage = req.files.CourseImage ? req.files.CourseImage[0].path : null;
    const courseDemoVideo = req.files.courseDemoVideo ? req.files.courseDemoVideo[0].path : null;

    // Create a new course instance
    const newCourse = new Course({
      CourseName,
      CourseCode,
      CourseDescription,
      CourseDuration,
      CourseFee,
      CourseImage,
      courseDemoVideo
    });

    // Save the course to the database
    await newCourse.save();

    res.status(200).json({ message: 'Course uploaded successfully', course: newCourse });
  } catch (error) {
    console.error('Error uploading course:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
exports.getCourse = async(req , res) =>{
    try{
        const courses = await Course.find().sort({ _id: -1 }).limit(4);
    console.log(courses);
        res.status(200).json(courses);
    }catch{
        res.status(500).json({error:'Internal server error'})
    }

}