const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subjectCode: {
    type: String,
    required: true,
    unique: true,
  },
  semester: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Semester",
    required: true,
  },
});

module.exports = mongoose.model("Subject", subjectSchema);
