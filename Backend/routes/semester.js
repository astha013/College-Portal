const express = require("express");
const router = express.Router();
const { addSemester, getAllSemesters } = require("../controllers/semesterController");

router.post("/add", addSemester);
router.get("/", getAllSemesters);

module.exports = router;
