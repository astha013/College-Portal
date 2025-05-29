const express = require("express");
const fs = require("fs");
const path = require("path");
const Registration = require("../models/registration"); // Mongoose model

const router = express.Router();

router.post("/apply", async (req, res) => {
  const { name, email, enrollment, branch, semester, internshipTitle } = req.body;

  // 1. Validate input
  if (!name || !email || !enrollment || !branch || !semester || !internshipTitle) {
    return res.status(400).json({ message: "All fields are required." });
  }

  // 2. Prepare log entry
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

  try {
    // 3. Log to file
    fs.appendFileSync(filePath, logEntry);

    // 4. Save to MongoDB
    const newRegistration = new Registration({
      name,
      email,
      enrollment,
      branch,
      semester,
      internshipTitle,
      submittedAt: new Date()
    });

    await newRegistration.save();

    res.status(201).json({ message: "Application saved to log file and database successfully" });
  } catch (error) {
    console.error("Error saving application:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
