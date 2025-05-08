const mongoose = require("mongoose");

const semesterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true, // e.g., "Semester 1"
  },
  code: {
    type: String,
    required: true,
    unique: true, // e.g., "sem1"
  }
});

module.exports = mongoose.model("Semester", semesterSchema);
