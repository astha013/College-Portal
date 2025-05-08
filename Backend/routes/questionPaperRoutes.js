const express = require("express");
const router = express.Router();
const { uploadPaper, getPapers } = require("../controllers/questionPaperController");

router.post("/upload", uploadPaper);
router.get("/", getPapers);

module.exports = router;
