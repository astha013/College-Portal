const QuestionPaper = require("../models/QuestionPaper");

exports.uploadPaper = async (req, res) => {
  try {
    const { semester, subject, examType, fileUrl } = req.body;
    const paper = new QuestionPaper({ semester, subject, examType, fileUrl });
    await paper.save();
    res.status(201).json({ message: "Question paper uploaded successfully", paper });
  } catch (err) {
    res.status(500).json({ error: "Failed to upload question paper", err });
  }
};

exports.getPapers = async (req, res) => {
  try {
    const papers = await QuestionPaper.find();
    res.json(papers);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch question papers", err });
  }
};
