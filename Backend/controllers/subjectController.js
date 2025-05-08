const Subject = require("../models/Subject");

exports.addSubject = async (req, res) => {
  try {
    const { name, subjectCode, semester } = req.body;
    const subject = new Subject({ name, subjectCode, semester });
    await subject.save();
    res.status(201).json({ message: "Subject added", subject });
  } catch (error) {
    res.status(500).json({ error: "Failed to add subject" });
  }
};

exports.getSubjectsBySemester = async (req, res) => {
  try {
    const { semesterId } = req.params;
    const subjects = await Subject.find({ semester: semesterId });
    res.json(subjects);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch subjects" });
  }
};
