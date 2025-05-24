const Internship = require('../models/internshipModel');

// GET /api/internships
const getAllInternships = async (req, res) => {
  try {
    const internships = await Internship.find().sort({ createdAt: -1 });
    res.json(internships);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST /api/internships
const addInternship = async (req, res) => {
  const { title, companyName, duration, stipend, link } = req.body;
  try {
    const internship = new Internship({ title, companyName, duration, stipend, link });
    const saved = await internship.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE /api/internships/:id
const deleteInternship = async (req, res) => {
  try {
    const deleted = await Internship.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Internship not found" });
    res.json({ message: "Internship deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllInternships, addInternship, deleteInternship };
