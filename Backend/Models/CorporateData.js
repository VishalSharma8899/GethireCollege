const mongoose = require('mongoose');

const activeProcessSchema = new mongoose.Schema({
    companyId: {
        type: String,
        required: true,
        trim: true,
        unique: true, // Ensure companyId is unique
      },
  companyName: {
    type: String,
    required: true,
    trim: true,
    unique:true,
  },
  jobRole:[{
        jobTitle: {
          type: String,
          required: true,
          trim: true,
        },
        vacancies: {
          type: Number,
          required: true,
          min: 1,
        },
  }],
}, {
  timestamps: true,
});

const ActiveProcess = mongoose.model('ActiveProcess', activeProcessSchema);
activeProcessSchema.index({ companyId: 1 }, { unique: true });
activeProcessSchema.index({ jobRole: 1 }, { unique: true });

module.exports = ActiveProcess;
