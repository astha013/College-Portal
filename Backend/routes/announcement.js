const express = require("express");
const router = express.Router();
const {
  createAnnouncement,
  getAllAnnouncements,
  deleteAnnouncement,
} = require("../controllers/announcementController");

router.post("/create", createAnnouncement);
router.get("/", getAllAnnouncements);
router.delete("/:id", deleteAnnouncement);

module.exports = router;
