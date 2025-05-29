const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  enrollment: { type: String, required: true },
  branch: { type: String, required: true },
  semester: { type: String, required: true },
  internshipTitle: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Registration', registrationSchema);
