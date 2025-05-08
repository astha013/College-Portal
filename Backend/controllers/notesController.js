const Note = require('../models/Note');

const addNote = async (req, res) => {
  const { subject, branch, semester } = req.body;
  const fileUrl = req.file ? req.file.path : null;

  try {
    const newNote = new Note({ subject, branch, semester, fileUrl });
    await newNote.save();
    res.status(201).json({ message: 'Note uploaded successfully', note: newNote });
  } catch (error) {
    res.status(500).json({ error: 'Failed to upload note' });
  }
};

const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({});
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch notes' });
  }
};

module.exports = { addNote, getNotes };
