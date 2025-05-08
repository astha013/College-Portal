const Syllabus = require("../models/Syllabus");

exports.uploadSyllabus = async (req, res) => {
  try {
    const { semester, subject, fileUrl } = req.body;
    const syllabus = new Syllabus({ semester, subject, fileUrl });
    await syllabus.save();
    res.status(201).json({ message: "Syllabus uploaded successfully", syllabus });
  } catch (err) {
    res.status(500).json({ error: "Failed to upload syllabus", err });
  }
};

exports.getSyllabus = async (req, res) => {
  try {
    const syllabusList = await Syllabus.find();
    res.json(syllabusList);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch syllabus", err });
  }
};
