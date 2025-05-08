const Semester = require("../models/Semester");

exports.addSemester = async (req, res) => {
  try {
    const { name, code } = req.body;
    const semester = new Semester({ name, code });
    await semester.save();
    res.status(201).json({ message: "Semester added", semester });
  } catch (error) {
    res.status(500).json({ error: "Failed to add semester" });
  }
};

exports.getAllSemesters = async (req, res) => {
  try {
    const semesters = await Semester.find();
    res.json(semesters);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch semesters" });
  }
};
