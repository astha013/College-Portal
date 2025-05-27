const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const internshipRoutes = require("./routes/internshipRoutes");
dotenv.config();

const app = express();

//require('dotenv').config();
connectDB();


app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));


app.use("/api/internship", internshipRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
