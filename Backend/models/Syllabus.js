const mongoose = require("mongoose");

const syllabusSchema = new mongoose.Schema({
  semester: {
    type: Number,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  fileUrl: {
    type: String,
    required: true,
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Syllabus", syllabusSchema);
