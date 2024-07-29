const ActiveProcess = require('../Models/CorporateData');

exports.ActiveProcessData = async (req, res) => {
  try {
    const { companyId, companyName, jobRole } = req.body;

    // Validate input data
    if (!companyId || !companyName || !jobRole || !Array.isArray(jobRole)) {
      return res.status(400).json({ error: 'Company ID, Company Name, and Job Roles are required' });
    }

    // Check if company ID already exists
    const existingProcess = await ActiveProcess.findOne({ companyId });
    
    if (existingProcess) {
      // If company ID exists, process job roles
      jobRole.forEach((role) => {
        const existingJobRole = existingProcess.jobRole.find((r) => r.jobTitle === role.jobTitle);
        if (existingJobRole) {
          // If job title exists, update the existing job role
          existingJobRole.vacancies = role.vacancies;
        } else {
          // If job title does not exist, add a new job role to the array
          existingProcess.jobRole.push(role);
        }
      });
      // Update the existing process
      await existingProcess.save();
      return res.json(existingProcess);
    } else {
      // If company ID does not exist, create a new active process
      const newProcess = new ActiveProcess({
        companyId,
        companyName,
        jobRole: jobRole,
      });
      // Save the new process to the database
      await newProcess.save();
      return res.json(newProcess);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
