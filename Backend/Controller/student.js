const Student = require("../Models/studentdata");
const xlsx = require("xlsx");
const path = require("path");
const fs = require("fs");
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

// uplod api for data
 
exports.uploadStudentData = async (req, res) => {
  try {
    const filePath = req.file.path;
    const token = req.headers.authorization.split(' ')[1];

    console.log('Token received:', token);

    let objId;
    const secretKey = process.env.JWT_SECRET_KEY;
    console.log('Secret Key:', secretKey);

    if (token) {
      try {
        console.log('Verifying token...');
        const decoded = jwt.verify(token, secretKey);
        objId = decoded.objId;
        console.log('Decoded Token:', decoded);
      } catch (err) {
        console.error('Token verification failed:', err.message);
        return res.status(401).json({ msg: 'Token is not valid' });
      }
    } else {
      console.error('No token provided');
      return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    console.log('UserId from token:', objId);

    const workbook = xlsx.readFile(filePath);
    const sheet_name_list = workbook.SheetNames;
    const studentData = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

    for (const student of studentData) {
      student.isPlaced = Boolean(student.isPlaced && student.isPlaced.toString().toLowerCase() === 'true');
      student.PlacementRequired = Boolean(student.PlacementRequired && student.PlacementRequired.toString().toLowerCase() === 'true');
      student.internshipRequired = Boolean(student.internshipRequired && student.internshipRequired.toString().toLowerCase() === 'true'); // Corrected spelling

      const contactInformation = {
        phone: student.phone,
        email: student.email
      };

      const updatedStudent = {
        userId: objId, // Ensure this is the correct userId
        studentId: student.studentId,
        name: student.name,
        dob: new Date(student.dob), // Ensure the date is properly formatted
        gender: student.gender,
        contactInformation: contactInformation,
        address: student.address,
        department: student.department,
        yearOfStudy: student.yearOfStudy,
        cgpa: student.cgpa,
        isPlaced: student.isPlaced,
        companyName: student.companyName || null,
        jobTitle: student.jobTitle || null,
        salary: student.salary || null,
        PlacementRequired: student.PlacementRequired,
        internshipRequired: student.internshipRequired
      };

      await Student.findOneAndUpdate(
        { studentId: student.studentId },
        updatedStudent,
        { upsert: true, new: true }
      );
      console.log('Updating student record:', updatedStudent);
    }

    res.status(200).json({ msg: 'Student data uploaded successfully' });
  } catch (error) {
    console.error('Error uploading student data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


 
// fatch api all data

exports.GetAllUser = async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];

    console.log('Token received:', token);

    let objId;
    const secretKey = process.env.JWT_SECRET_KEY;
    console.log('Secret Key:', secretKey);

    if (token) {
      try {
        console.log('Verifying token...');
        const decoded = jwt.verify(token, secretKey);
        objId = decoded.objId;
        console.log('Decoded Token:', decoded);
      } catch (err) {
        console.error('Token verification failed:', err.message);
        return res.status(401).json({ msg: 'Token is not valid' });
      }
    } else {
      console.error('No token provided');
      return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    console.log('UserId from token:', objId);
    const students = await Student.find({userId : objId});
    const count = students.length;
 console.log('Students:', students);
    res.status(200).json({
      count : count,
      students : students
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

 //fitter
exports.filter = async (req, res) => {
  const { department, isPlaced, internshipRequired, PlacementRequired, yearOfStudy } = req.body;

  try {
    const token = req.headers.authorization.split(' ')[1];

    console.log('Token received:', token);

    let objId;
    const secretKey = process.env.JWT_SECRET_KEY;
    console.log('Secret Key:', secretKey);

    if (token) {
      try {
        console.log('Verifying token...');
        const decoded = jwt.verify(token, secretKey);
        objId = decoded.objId;
        console.log('Decoded Token:', decoded);
      } catch (err) {
        console.error('Token verification failed:', err.message);
        return res.status(401).json({ msg: 'Token is not valid' });
      }
    } else {
      console.error('No token provided');
      return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    console.log('UserId from token:', objId);
    const filters = { userId: objId };

    if (department) filters.department = department;
    if (isPlaced) filters.isPlaced = isPlaced === 'true';
    if (internshipRequired) filters.internshipRequired = internshipRequired === 'true';
    if (PlacementRequired) filters.PlacementRequired = PlacementRequired === 'true';
    if (yearOfStudy) filters.yearOfStudy = parseInt(yearOfStudy, 10);

    const students = await Student.find(filters);
    console.log(students)
    res.send(students);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};


// get by user
 

exports.GetByName = async (req, res) => {
  const { name } = req.body;

  try {
    const token = req.headers.authorization.split(' ')[1];

    console.log('Token received:', token);

    let objId;
    const secretKey = process.env.JWT_SECRET_KEY;
    console.log('Secret Key:', secretKey);

    if (token) {
      try {
        console.log('Verifying token...');
        const decoded = jwt.verify(token, secretKey);
        objId = decoded.objId;
        console.log('Decoded Token:', decoded);
      } catch (err) {
        console.error('Token verification failed:', err.message);
        return res.status(401).json({ msg: 'Token is not valid' });
      }
    } else {
      console.error('No token provided');
      return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    console.log('UserId from token:', objId);

    if (!name) {
      return res.status(400).json({ message: "Name query parameter is required" });
    }

    let query = { userId: objId };

    if (name.length == 1) {
      query.name = new RegExp(name, "i");
    } else {
      const startsWithPattern = new RegExp(`^${name}`, "i");
      const exactPattern = new RegExp(`^${name}$`, "i");

      query = {
        userId: objId,
        $or: [{ name: startsWithPattern }, { name: exactPattern }],
      };
    }

    const students = await Student.find(query).lean();

    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.updateStudent = async (req, res) => {
  const { studentId } = req.body;
  const studentData = req.body;

  console.log("Received studentId:", studentId);
  console.log("Data to update:", studentData);

  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      console.error('No token provided');
      return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    const token = authHeader.split(' ')[1];
    console.log('Token received:', token);

    const secretKey = process.env.JWT_SECRET_KEY;
    console.log('Secret Key:', secretKey);

    let objId;
    try {
      console.log('Verifying token...');
      const decoded = jwt.verify(token, secretKey);
      objId = decoded.objId;
      console.log('Decoded Token:', decoded);
    } catch (err) {
      console.error('Token verification failed:', err.message);
      return res.status(401).json({ msg: 'Token is not valid' });
    }

    console.log('UserId from token:', objId);

    const student = await Student.findOne({ studentId: studentId, userId: objId });
    console.log("Student from DB:", student);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    Object.assign(student, studentData);

    const updatedStudent = await student.save();

    res.status(200).json(updatedStudent);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: err.message });
  }
};

exports.deleteStudentData = async (req, res) => {
  try {
    const studentId = req.body.id; // Corrected: should be `id`
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      console.error('No token provided');
      return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    const token = authHeader.split(' ')[1];
    console.log('Token received:', token);

    const secretKey = process.env.JWT_SECRET_KEY;
    console.log('Secret Key:', secretKey);

    let objId;
    try {
      console.log('Verifying token...');
      const decoded = jwt.verify(token, secretKey);
      objId = decoded.objId;
      console.log('Decoded Token:', decoded);
    } catch (err) {
      console.error('Token verification failed:', err.message);
      return res.status(401).json({ msg: 'Token is not valid' });
    }

    console.log('UserId from token:', objId);

    const deletestudent = await Student.deleteOne({ studentId: studentId, userId: objId });
    if (deletestudent.deletedCount > 0) {
      console.log("deletestudent:", deletestudent);
      res.status(200).json({ message: "Student deleted successfully" });
    } else {
      res.status(404).json({ message: "Student not found" });
    }

  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: err.message });
  }
};



 
exports.GetPlacedUser = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      console.error('No token provided');
      return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    const token = authHeader.split(' ')[1];
    console.log('Token received:', token);

    const secretKey = process.env.JWT_SECRET_KEY;
    console.log('Secret Key:', secretKey);

    let objId;
    try {
      console.log('Verifying token...');
      const decoded = jwt.verify(token, secretKey);
      objId = decoded.objId;
      console.log('Decoded Token:', decoded);
    } catch (err) {
      console.error('Token verification failed:', err.message);
      return res.status(401).json({ msg: 'Token is not valid' });
    }

    console.log('UserId from token:', objId);
    // Retrieve all placed students
    const PlacedStudent = await Student.find({ isPlaced: true }).lean();
    // Calculate the count of placed students
    const count = PlacedStudent.length;

    // Send response with both count and student list
    res.status(200).json({
      count: count,
      students: PlacedStudent,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// // unplaced student
// exports.GetUnPlacedUser = async (req, res) => {
//   try {
//     const PlacedStudent = await Student.find({ isPlaced: false }).lean();
//     const count = PlacedStudent.length;
//     res.status(200).json({
//       count: count,
//       students: PlacedStudent,
//     });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };
// // unplaced student
 
// // depaatment fetch

// exports.GetByDepartment = async (req, res) => {
//   try {
//     const department = req.query.department;
//     console.log("Department Query:", department); // Log the department query parameter
//     if (!department) {
//       return res.status(400).send({ message: "Please provide a department" });
//     }
//     const students = await Student.find({
//       department: { $regex: new RegExp(`^${department.trim()}$`, "i") },
//     }).lean();
//     console.log("Students Found:", students); // Log the students found
//     res.status(200).json(students);
//   } catch (err) {
//     console.error("Error:", err); // Log the error
//     res.status(500).json({ message: err.message });
//   }
// };

// //year wise
// exports.GetByYear = async (req, res) => {
//   try {
//     const yearOfStudy = parseInt(req.query.yearOfStudy, 10);
//     console.log("Year :", yearOfStudy);
//     if (isNaN(yearOfStudy)) {
//       return res
//         .status(400)
//         .send({ message: "Please provide a valid year of study" });
//     }
//     const students = await Student.find({ yearOfStudy: yearOfStudy }).lean();
//     console.log("Students Found:", students);
//     res.status(200).json(students);
//   } catch (err) {
//     console.error("Error:", err); // Log the error
//     res.status(500).json({ message: err.message });
//   }
// };

// // get by placement detaills by intership requirement
// exports.GetByIntership = async (req, res) => {
//   try {
//     const internshipStudents = await Student.find({
//       "PlacementDetails.intershipRequired": true,
//     }).lean();
//     console.log("internshipStudents:", internshipStudents);
//     res.status(200).json(internshipStudents);
//   } catch (err) {
//     console.error("Error:", err);
//     res.status(500).json({ message: err.message });
//   }
// };

// // get not intrested student for intership
// exports.GetByNotRequiredIntership = async (req, res) => {
//   try {
//     const internshipStudents = await Student.find({
//       "PlacementDetails.intershipRequired": false,
//     }).lean();
//     console.log("internshipStudents:", internshipStudents);
//     res.status(200).json(internshipStudents);
//   } catch (err) {
//     console.error("Error:", err);
//     res.status(500).json({ message: err.message });
//   }
// };

// // get by placement required
// exports.GetByPlacementRequired = async (req, res) => {
//   try {
//     const Students = await Student.find({
//       "PlacementDetails.PlacementRequired": true,
//     }).lean();
//     console.log("Students:", Students);
//     res.status(200).json(Students);
//   } catch (err) {
//     console.error("Error:", err);
//     res.status(500).json({ message: err.message });
//   }
// };

// // get by not required placement
// exports.GetByNotRequiredPlacement = async (req, res) => {
//   try {
//     const Students = await Student.find({
//       "PlacementDetails.PlacementRequired": false,
//     }).lean();
//     console.log("Students:", Students);
//     res.status(200).json(Students);
//   } catch (err) {
//     console.error("Error:", err);
//     res.status(500).json({ message: err.message });
//   }
// };
//update
 
 




   
