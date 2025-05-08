const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const notesRoutes = require('./routes/notesRoutes');
const questionPaperRoutes = require("./routes/questionPaperRoutes");
const syllabusRoutes = require("./routes/syllabusRoutes");
const announcementRoutes = require("./routes/announcement");
const adminRoutes = require("./routes/admin");
const semesterRoutes = require("./routes/semester");
const subjectRoutes = require("./routes/subject");

const app = express();

//require('dotenv').config();
connectDB();


app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/api/notes', notesRoutes);
app.use("/api/question-papers", questionPaperRoutes);
app.use("/api/syllabus", syllabusRoutes);
app.use("/api/announcements", announcementRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/semesters", semesterRoutes);
app.use("/api/subjects", subjectRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
