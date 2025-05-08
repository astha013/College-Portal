const express = require("express");
const router = express.Router();
const { uploadSyllabus, getSyllabus } = require("../controllers/syllabusController");

router.post("/upload", uploadSyllabus);
router.get("/", getSyllabus);

module.exports = router;
