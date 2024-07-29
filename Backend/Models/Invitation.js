const mongoose = require('mongoose');

const invitationSchema = new mongoose.Schema({
  collegeName: { type: String, required: true },
  location: { type: String, required: true },
  numberOfStudents: { type: Number, required: true },
  branch: { type: String, required: true },
  position: { type: String, required: true },
  batch: { type: String, required: true },
  description: { type: String, required: true }
});

const InvitationSch = mongoose.model('Invitation', invitationSchema);

module.exports = InvitationSch;