
const xlsx = require('xlsx');
const Student = require('../Models/studentdata');

 // data uplod all
exports.uploadStudentData = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const filePath = req.file.path;

    // Use xlsx library to parse the Excel file
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const studentsData = xlsx.utils.sheet_to_json(worksheet);

    
    for (let student of studentsData) {
      // Create a new Student object using your Mongoose model
      const newStudent = new Student({
        studentId: student.studentId,
        name: student.name,
        dob: student.dob,
        gender: student.gender,
        contactInformation: {
          phone: student.phone,
          email: student.email
        },
        address: student.address,
        department: student.department,
        yearOfStudy: student.yearOfStudy,
        cgpa: student.cgpa,
        isPlaced: student.isPlaced
      });

     
      await newStudent.save();
    }

   
    res.status(200).json({ message: 'Student data uploaded successfully' });
  } catch (error) {
    console.error('Error uploading students data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
