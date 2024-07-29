const InvitationSch = require('../Models/Invitation');


exports.Invitation = async (req, res) => {
    try {
      const {
        collegeName,
        location,
        numberOfStudents,
        branch,
        position,
        batch,
        description
      } = req.body;
  
      const invitation = new InvitationSch({
        collegeName,
        location,
        numberOfStudents,
        branch,
        position,
        batch,
        description
      });
  
      await invitation.save();
  
      res.status(201).json({
        message: 'Invitation created successfully',
        invitation
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error creating invitation' });
    }
  };