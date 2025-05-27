const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

router.post("/apply", (req, res) => {
  const { name, email, enrollment, branch, semester, internshipTitle } = req.body;

  if (!name || !email || !enrollment || !branch || !semester || !internshipTitle) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const logEntry = `
-------------------------
Timestamp: ${new Date().toISOString()}
Internship: ${internshipTitle}
Name: ${name}
Email: ${email}
Enrollment: ${enrollment}
Branch: ${branch}
Semester: ${semester}
-------------------------\n`;

  const filePath = path.join(__dirname, "../logs/applications.log");

  fs.appendFile(filePath, logEntry, (err) => {
    if (err) {
      console.error("Failed to save application log:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res.status(200).json({ message: "Application saved successfully" });
  });
});

module.exports = router;
