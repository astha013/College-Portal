const express = require("express");
const router = express.Router();
const { addSubject, getSubjectsBySemester } = require("../controllers/subjectController");

router.post("/add", addSubject);
router.get("/:semesterId", getSubjectsBySemester);

module.exports = router;
