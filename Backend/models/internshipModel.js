const mongoose = require('mongoose');

const internshipSchema = new mongoose.Schema({
  title: { type: String, required: true },
  companyName: { type: String, required: true },
  duration: { type: String, required: true },
  stipend: { type: String, required: true },
  link: { type: String, required: true },
}, {
  timestamps: true
});

const Internship = mongoose.model('Internship', internshipSchema);
module.exports = Internship;
