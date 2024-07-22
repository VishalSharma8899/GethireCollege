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

        fs.unlinkSync(filePath);  
        res.status(200).send(studentData );
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
      // Retrieve all placed students
      const PlacedStudent = await Student.find({ isPlaced: true }).lean();
      // Calculate the count of placed students
      const count = PlacedStudent.length;
      
      // Send response with both count and student list
      res.status(200).json({
        count: count,
        students: PlacedStudent
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
// unplaced student
exports.GetUnPlacedUser = async (req, res) => {
  try {
      const  PlacedStudent  = await Student.find({isPlaced: false }).lean();
      const count = PlacedStudent.length;
      res.status(200).json( { 
        count: count,
        students: PlacedStudent});
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
};
// unplaced student
exports.GetByName = async (req, res) => {
      
    const { name  } = req.body;

    try {
      if (!name) {
        return res.status(400).json({ message: 'Name query parameter is required' });
      }
  
      let query = {};
      
       if(name.length ==1){
        query.name = new RegExp(name, 'i');
       }else {
        const startsWithPattern = new RegExp(`^${name}`, 'i');
        const exactPattern = new RegExp(`^${name}$`, 'i');
       
       query = {
        $or: [
          { name: startsWithPattern },
          { name: exactPattern }
        ]

      };
    }
    

      
      const students = await Student.find(query).lean();

      res.status(200).json(students);
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

// get by placement detaills by intership requirement
exports.GetByIntership = async (req ,res)=>{
    try {
        const internshipStudents = await Student.find({'PlacementDetails.intershipRequired': true }).lean();
        console.log('internshipStudents:', internshipStudents);
        res.status(200).json(internshipStudents);
      } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ message: err.message });
      }
};

// get not intrested student for intership
exports.GetByNotRequiredIntership = async (req ,res)=>{
    try {
        const internshipStudents = await Student.find({'PlacementDetails.intershipRequired': false }).lean();
        console.log('internshipStudents:', internshipStudents);
        res.status(200).json(internshipStudents);
      } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ message: err.message });
      }
};

// get by placement required
exports.GetByPlacementRequired = async (req ,res)=>{
    try {
        const Students = await Student.find({'PlacementDetails.PlacementRequired': true }).lean();
        console.log('Students:',  Students);
        res.status(200).json(Students);
      } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ message: err.message });
      }
};

// get by not required placement
exports.GetByNotRequiredPlacement = async (req ,res)=>{
    try {
        const Students = await Student.find({'PlacementDetails.PlacementRequired': false }).lean();
        console.log('Students:',  Students);
        res.status(200).json(Students);
      } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ message: err.message });
      }
;}
//update
 

exports.updateStudent = async (req, res) => {
    const { studentId } = req.body;  
    const studentdata = req.body;

    console.log('Received studentid:',  studentId);
    console.log('Data to update:', studentdata);

    try {
         
        const student = await Student.findOne({  studentId:  studentId });
        console.log('Student from DB:', student);

        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
 
        Object.assign(student, studentdata);
 
        const updatedStudent = await student.save();

        res.status(200).json(updatedStudent);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ message: err.message });
    }
};



exports.deleteStudentData = async (req , res) => {
    try {
        
        const studentId = req.body.id; 
        const deletestudent = await Student.deleteOne({studentId});
        if (deletestudent) {
            console.log('deletestudent:', deletestudent);
            res.status(200).json({ message: 'Student deleted successfully' });
          } else {
            res.status(404).json({ message: 'Student not found' });
          }
        }
       
       
    catch {
      console.error('Error:', err);
      res.status(500).json({message: err.message});
    }
  };



  exports.filter = async (req, res) => {
    console.log(req.body);
    const { department, isPlaced, internshipRequired, PlacementRequired, yearOfStudy } = req.body;

    console.log({department, isPlaced, internshipRequired, PlacementRequired, yearOfStudy});
    const filters = {};
  
    if (department) filters.department = department;
    if (isPlaced) filters.isPlaced = isPlaced === 'true';
    if (internshipRequired) filters['placementDetails.internshipRequired'] = internshipRequired === 'true';
    if (PlacementRequired) filters['placementDetails.PlacementRequired'] = placementRequired === 'true';
    if (yearOfStudy) filters.yearOfStudy = parseInt(yearOfStudy, 10);
  
    try {
        const students = await Student.find(filters);
        res.send(students);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

  