const Student = require('../Models/studentdata');
const xlsx = require('xlsx');
const path = require('path');
const fs = require('fs');
// uplod api for data
exports.uploadStudentData = async (req, res) => {
    try {
        const filePath = req.file.path;
        const workbook = xlsx.readFile(filePath);
        const sheet_name_list = workbook.SheetNames;
        const studentData = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

 
        for (const student of studentData) {
            student.isPlaced = student.isPlaced.toString().toLowerCase() === 'true';

            // Structure contactInformation field properly
            const contactInformation = {
                phone: student.phone,
                email: student.email
            };

            const updatedStudent = {
                studentId: student.studentId,
                name: student.name,
                dob: student.dob,
                gender: student.gender,
                contactInformation: contactInformation,
                address: student.address,
                department: student.department,
                yearOfStudy: student.yearOfStudy,
                cgpa: student.cgpa,
                isPlaced: student.isPlaced,
                PlacementRequired : student.PlacementRequired,
                intershipRequired : student.intershipRequired
            };

            // Upsert student data
            await Student.findOneAndUpdate(
                { studentId: student.studentId },
                updatedStudent,
                { upsert: true, new: true, setDefaultsOnInsert: true }
            );
        }

        fs.unlinkSync(filePath); // Delete the file after processing
        res.status(200).send('Student data uploaded successfully');
    } catch (err) {
        console.error('Error uploading students data:', err);
        res.status(500).send('Error uploading students data');
    }
};


// fatch api all data 

exports.GetAllUser = async (req, res) => {
  try {
      const students = await Student.find();
      res.status(200).json(students);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
};

// hire{placed student} student 
exports.GetPlacedUser = async (req, res) => {
  try {
      const PlacedStudent = await Student.find({isPlaced: true }).lean();
      res.status(200).json(PlacedStudent);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
};
// unplaced student
exports.GetUnPlacedUser = async (req, res) => {
  try {
      const PlacedStudent = await Student.find({isPlaced: false }).lean();
      res.status(200).json(PlacedStudent);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
};

// depaatment fetch 
 

exports.GetByDepartment = async (req, res) => {
    try {
        const department = req.query.department;
        console.log('Department Query:', department); // Log the department query parameter
        if (!department) {
            return res.status(400).send({ message: "Please provide a department" });
        }
        const students = await Student.find({ department: { $regex: new RegExp(`^${department.trim()}$`, 'i') } }).lean();
        console.log('Students Found:', students); // Log the students found
        res.status(200).json(students);
    } catch (err) {
        console.error('Error:', err); // Log the error
        res.status(500).json({ message: err.message });
    }
};


//year wise
exports.GetByYear = async (req, res) => {
    try {
        const yearOfStudy = parseInt(req.query.yearOfStudy, 10);
        console.log('Year :', yearOfStudy);  
        if (isNaN(yearOfStudy)) {
            return res.status(400).send({ message: "Please provide a valid year of study" });
        }
        const students = await Student.find({ yearOfStudy: yearOfStudy }).lean();
        console.log('Students Found:', students);  
        res.status(200).json(students);
    } catch (err) {
        console.error('Error:', err); // Log the error
        res.status(500).json({ message: err.message });
    }
};

