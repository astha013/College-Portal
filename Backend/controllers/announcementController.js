const Announcement = require("../models/Announcement");

exports.createAnnouncement = async (req, res) => {
  try {
    const { title, message, postedBy } = req.body;
    const announcement = new Announcement({ title, message, postedBy });
    await announcement.save();
    res.status(201).json({ message: "Announcement created successfully", announcement });
  } catch (error) {
    res.status(500).json({ error: "Failed to create announcement", error });
  }
};

exports.getAllAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.find().sort({ createdAt: -1 });
    res.json(announcements);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch announcements", error });
  }
};

exports.deleteAnnouncement = async (req, res) => {
  try {
    const { id } = req.params;
    await Announcement.findByIdAndDelete(id);
    res.json({ message: "Announcement deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete announcement", error });
  }
};
