const mongoose = require("mongoose");

const questionPaperSchema = new mongoose.Schema({
  semester: {
    type: Number,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  examType: {
    type: String,
    enum: ["midsem", "endsem"],
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

module.exports = mongoose.model("QuestionPaper", questionPaperSchema);
