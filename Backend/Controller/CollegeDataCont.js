const {CollegeData} = require('../Models/CollegeData');
const jwt = require('jsonwebtoken');
// for uploading images
// const multer = require('multer');
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });


// for upload th ecollege data
    exports.CollegeData = async (req, res) => {
        const { id, college_logo_name, college_name, college_address, college_website, college_facebook_id, college_linkedin_id, college_whatsapp_num, college_gmail_id, college_info, college_cultural_events, college_top_placements, college_location } = req.body;
    
        const college_img = req.files['college_img'] ? req.files['college_img'][0] : null;
        const college_logo = req.files['college_logo'] ? req.files['college_logo'][0] : null;
    
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
            const college = new CollegeData({
                userId: objId,
                id,
                college_img: college_img ? college_img.buffer.toString('base64') : undefined,
                college_logo: college_logo ? college_logo.buffer.toString('base64') : undefined,
                college_logo_name,
                college_name,
                college_address,
                college_website,
                college_facebook_id,
                college_linkedin_id,
                college_whatsapp_num,
                college_gmail_id,
                college_info,
                college_location
            });
    
            await college.save();
           
            res.status(200).send({ Status: "Data saved successfully" });
        } catch (error) {
            console.error("Error while saving data: " + error);
            res.status(500).send({ Status: "Error while saving data" });
        }
  };
 
// for get that college data
  exports.CollegeDataGet = async (req, res) => {
  
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

    
        const collegeData = await CollegeData.find({userId : objId});
        
        if (!collegeData) {
            return res.status(404).send({ Status: "CollegeData not found" });
        }
        console.log('UserId from token:', collegeData);
          res.status(200).send(collegeData);
      } catch (error) {
          console.error("Error while retrieving data: " + error);
          res.status(500).send({ Status: "Error while retrieving data" });
      }
   }

   exports.CollegeDataUpdate = async (req, res) => {
    // const collegeId = parseInt(req.params.id, 10); // Convert to Number
    const updateData = req.body;

    // Handle file uploads
    let college_img = null;
    let college_logo = null;

    if (req.files) {
        college_img = req.files['college_img'] ? req.files['college_img'][0] : null;
        college_logo = req.files['college_logo'] ? req.files['college_logo'][0] : null;
    }

    try {
        // Handle JSON parsing with error checking
        if (updateData.college_cultural_events) {
            if (typeof updateData.college_cultural_events === 'string') {
                try {
                    updateData.college_cultural_events = JSON.parse(updateData.college_cultural_events);
                } catch (jsonError) {
                    return res.status(400).send({ Status: "Invalid JSON for college_cultural_events" });
                }
            }
        }
        if (updateData.college_top_placements) {
            if (typeof updateData.college_top_placements === 'string') {
                try {
                    updateData.college_top_placements = JSON.parse(updateData.college_top_placements);
                } catch (jsonError) {
                    return res.status(400).send({ Status: "Invalid JSON for college_top_placements" });
                }
            }
        }
        
        // -------------------
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
        // console.log('UserId from token:', objId);

    
        // const collegeData = await CollegeData.find({userId : objId});
        const existingCollege = await CollegeData.find({userId : objId});
         
        // console.log("Colleg data is "+collegeData);
        
        // Find the existing college document
        // const existingCollege = await CollegeData.findOne({ id: collegeData });
        // console.log("Existind data is Colleg data is "+ existingCollege);
        
        if (!existingCollege) {
            return res.status(404).send({ Status: "CollegeData not found" });
        }

        // Preserve existing images if not updated
        if (college_img) {
            updateData.college_img = college_img.buffer.toString('base64');
        } else {
            updateData.college_img = existingCollege.college_img; // Keep existing image if not updated
        }
 
        if (college_logo) {
            updateData.college_logo = college_logo.buffer.toString('base64');
        } else {
            updateData.college_logo = existingCollege.college_logo; // Keep existing logo if not updated
        }

        // Find the college by id and update only the fields provided in req.body
        const updatedCollege = await CollegeData.findOneAndUpdate(
            { userId:objId },          // Search criteria
            { $set: updateData },       // Fields to update
            { new: true,                // Return the updated document
              runValidators: true       // Validate the updated data
            }
        );

        res.status(200).send(updatedCollege);
    } catch (error) {
        console.error("Error while updating data: " + error);
        res.status(500).send({ Status: "Error while updating data" });
    }
};  

//    for add on the placement data
  exports.CollegeDataPlacementAdd = async (req, res) => {
        // const collegeId = parseInt(req.params.id, 10); // Convert to Number
          const { placements } = req.body; // Extract placements array from request body

          if (!Array.isArray(placements) || placements.length === 0) {
              return res.status(400).send({ Status: "placements array is required and should not be empty" });
          }

          // Validate each placement object
          for (const placement of placements) {
              if (!placement.placementCompany || !placement.studentName || !placement.ctc || !placement.location ) {
                  return res.status(400).send({ Status: "Each placement object must contain placementCompany, name , ctc and location" });
              }
          }

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
            // console.log('UserId from token:', objId);
    
        
            // const collegeData = await CollegeData.find({userId : objId});
              // Find the college by id and add new placements to the college_top_placements array
              const updatedCollege = await CollegeData.findOneAndUpdate(
                  { userId: objId },                            // Search criteria
                  { $push: { college_top_placements: { $each: placements } } }, // Add new placements
                  { new: true,                                 // Return the updated document
                    runValidators: true                        // Validate the updated data
                  }
              );

              if (!updatedCollege) {
                  return res.status(404).send({ Status: "CollegeData not found" });
              }

              res.status(200).send(updatedCollege);
          } catch (error) {
              console.error("Error while adding top placements: " + error);
              res.status(500).send({ Status: "Error while adding top placements" });
          }
   }

// for update the college data that needed
//   exports.CollegeDataUpdate = async (req, res) => {
//     const collegeId = parseInt(req.params.id, 10); // Convert to Number
//       const updateData = req.body;
    
//       try {
//           // Find the college by id and update only the fields provided in req.body
//           const updatedCollege = await CollegeData.findOneAndUpdate(
//               { id: collegeId },          // Search criteria
//               updateData,                 // Fields to update
//               { new: true,                // Return the updated document
//                 runValidators: true       // Validate the updated data
//               }
//           );
    
//           if (!updatedCollege) {
//               return res.status(404).send({ Status: "CollegeData not found" });
//           }
    
//           res.status(200).send(updatedCollege);
//       } catch (error) {
//           console.error("Error while updating data: " + error);
//           res.status(500).send({ Status: "Error while updating data" });
//       }
//    }


// for add up of events
//   exports.CollegeDataEventAdd = async (req, res) => {
//       const collegeId = parseInt(req.params.id, 10); // Convert to Number
//       const { events } = req.body; // Extract events array from request body

//       if (!Array.isArray(events) || events.length === 0) {
//           return res.status(400).send({ Status: "events array is required and should not be empty" });
//       }

//       // Validate each event object
//       for (const event of events) {
//           if (!event.eventName || !event.eventDate || !event.description) {
//               return res.status(400).send({ Status: "Each event object must contain eventName, eventDate, and description" });
//           }
//       }

//       try {
//           // Find the college by id and add new events to the college_cultural_events array
//           const updatedCollege = await CollegeData.findOneAndUpdate(
//               { id: collegeId },                            // Search criteria
//               { $push: { college_cultural_events: { $each: events } } }, // Add new events
//               { new: true,                                 // Return the updated document
//                 runValidators: true                        // Validate the updated data
//               }
//           );

//           if (!updatedCollege) {
//               return res.status(404).send({ Status: "CollegeData not found" });
//           }

//           res.status(200).send(updatedCollege);
//       } catch (error) {
//           console.error("Error while adding cultural events: " + error);
//           res.status(500).send({ Status: "Error while adding cultural events" });
//       }
//    }


// for upload image to database
// const express = require('express');
// const app = express();
// const multer = require('multer');
// const path = require('path');


// Serve static files from the "uploads" directory
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Set up multer for file uploads
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/'); // Directory where images will be stored
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname)); // Add a timestamp to avoid name collisions
//     }
// });

// const upload = multer({ storage: storage });

// Express route handler to add cultural events
// exports.CollegeDataEventAdd = async (req, res) => {
//     const collegeId = parseInt(req.params.id, 10); // Convert to Number

//     // Handle file uploads using multer
//     upload.array('images')(req, res, async (err) => {
//         if (err) {
//             return res.status(400).send({ Status: "Error uploading images" });
//         }

//         let events;
//         try {
//             // Extract and parse events from the body
//             events = JSON.parse(req.body.events);
//         } catch (parseError) {
//             return res.status(400).send({ Status: "Invalid JSON for events" });
//         }

//         if (!Array.isArray(events) || events.length === 0) {
//             return res.status(400).send({ Status: "events array is required and should not be empty" });
//         }

//         // Validate each event object
//         for (const event of events) {
//             if (!event.eventName || !event.eventDate || !event.description) {
//                 return res.status(400).send({ Status: "Each event object must contain eventName, eventDate, and description" });
//             }
            
//             // Add image path if provided
//             if (req.files && req.files.length > 0) {
//                 const eventImage = req.files.find(file => file.fieldname === 'images');
//                 if (eventImage) {
//                     event.image = eventImage.path; // Store the path of the uploaded image
//                 }
//             }
//         }

//         try {
//             // Find the college by id and add new events to the college_cultural_events array
//             const updatedCollege = await CollegeData.findOneAndUpdate(
//                 { id: collegeId },                            // Search criteria
//                 { $push: { college_cultural_events: { $each: events } } }, // Add new events
//                 { new: true,                                 // Return the updated document
//                   runValidators: true                        // Validate the updated data
//                 }
//             );

//             if (!updatedCollege) {
//                 return res.status(404).send({ Status: "CollegeData not found" });
//             }

//             res.status(200).send(updatedCollege);
//         } catch (error) {
//             console.error("Error while adding cultural events: " + error);
//             res.status(500).send({ Status: "Error while adding cultural events" });
//         }
//     });
// };


const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Set up multer for file uploads
const storage = multer.memoryStorage(); // Use memory storage to handle files as buffers
const upload = multer({ storage: storage });

exports.CollegeDataEventAdd = async (req, res) => {
    // const collegeId = parseInt(req.params.id, 10); // Convert to Number

    // Handle file uploads using multer
    upload.array('images')(req, res, async (err) => {
        if (err) {
            return res.status(400).send({ Status: "Error uploading images" });
        }

        let events;
        try {
            // Extract and parse events from the body
            events = JSON.parse(req.body.events);
        } catch (parseError) {
            return res.status(400).send({ Status: "Invalid JSON for events" });
        }

        if (!Array.isArray(events) || events.length === 0) {
            return res.status(400).send({ Status: "events array is required and should not be empty" });
        }

        // Validate and process each event object
        for (const event of events) {
            if (!event.eventName || !event.eventDate || !event.description) {
                return res.status(400).send({ Status: "Each event object must contain eventName, eventDate, and description" });
            }
            
            // Add image data if provided
            if (req.files && req.files.length > 0) {
                const eventImageFile = req.files.find(file => file.fieldname === 'images');
                if (eventImageFile) {
                    // Convert image to base64
                    event.image = eventImageFile.buffer.toString('base64');
                }
            }
        }

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
            // console.log('UserId from token:', objId);
            // Find the college by id and add new events to the college_cultural_events array
            const updatedCollege = await CollegeData.findOneAndUpdate(
                { userId: objId },                          // Search criteria
                { $push: { college_cultural_events: { $each: events } } }, // Add new events
                { new: true,                                 // Return the updated document
                  runValidators: true                        // Validate the updated data
                }
            );

            if (!updatedCollege) {
                return res.status(404).send({ Status: "CollegeData not found" });
            }

            res.status(200).send(updatedCollege);
        } catch (error) {
            console.error("Error while adding cultural events: " + error);
            res.status(500).send({ Status: "Error while adding cultural events" });
        }
    });
};


 