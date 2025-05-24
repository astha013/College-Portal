import React from "react";
import { useState } from "react";
import axios from "axios";

const AddInternship = () => {
  const [formData, setFormData] = useState({
    title: "",
    companyName: "",
    duration: "",
    stipend: "",
    link: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/internships", formData);
      alert("Internship added successfully!");
      setFormData({ title: "", companyName: "", duration: "", stipend: "", link: "" });
    } catch (err) {
      alert("Error adding internship");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Add New Internship</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="title" value={formData.title} onChange={handleChange} placeholder="Internship Title" required className="w-full border p-2 rounded" />
        <input name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Company Name" required className="w-full border p-2 rounded" />
        <input name="duration" value={formData.duration} onChange={handleChange} placeholder="Duration" required className="w-full border p-2 rounded" />
        <input name="stipend" value={formData.stipend} onChange={handleChange} placeholder="Stipend" required className="w-full border p-2 rounded" />
        <input name="link" value={formData.link} onChange={handleChange} placeholder="Application Link" required className="w-full border p-2 rounded" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add Internship</button>
      </form>
    </div>
  );
};

export default AddInternship;
