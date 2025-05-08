const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const adminExists = await Admin.findOne({ username });
    if (adminExists) return res.status(400).json({ message: "Admin already exists" });

    const admin = new Admin({ username, password });
    await admin.save();
    res.status(201).json({ message: "Admin registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Registration failed", error });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });
    if (!admin) return res.status(404).json({ message: "Admin not found" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: admin._id }, "secretkey", { expiresIn: "3d" });
    res.json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Login failed", error });
  }
};
