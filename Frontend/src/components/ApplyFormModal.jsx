import React, { useState } from "react";

const ApplyFormModal = ({ internshipData, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [enrollment, setEnrollment] = useState("");
  const [branch, setBranch] = useState("");
  const [semester, setSemester] = useState("");
  const [showFinalButton, setShowFinalButton] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name,
      email,
      enrollment,
      branch,
      semester,
      internshipTitle: internshipData?.Name || "Unknown Internship",
    };

    try {
      const response = await fetch("http://127.0.0.1:5000/api/internship/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("You are successfully registered. Now you can apply for the internship.");
        setShowFinalButton(true);
      } else {
        const error = await response.json();
        alert("Failed to submit: " + error.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting the form.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-md">
        <h2 className="text-xl font-semibold mb-4">Apply for {internshipData?.Name}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          />
          <input
            type="text"
            placeholder="Enrollment Number"
            value={enrollment}
            onChange={(e) => setEnrollment(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          />

          {/* Dropdown for Branch */}
          <select
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          >
            <option value="" disabled>Select Branch</option>
            <option value="Computer Science">Computer Science Engineering</option>
            <option value="Information Technology">Information Technology Engineering</option>
            <option value="Mechanical">Mechanical Engineering</option>
            <option value="Civil">Civil Engineering</option>
            <option value="Electronics and Communication">Electronics and Communication Engineering</option>
            <option value="Electrical">Electrical Engineering</option>
            <option value="Automobile">Automobile Engineering</option>
            <option value="Petrochemical">Petrochemical Engineering</option>
          </select>

          {/* Dropdown for Semester */}
          <select
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          >
            <option value="" disabled>Select Semester</option>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
              <option key={sem} value={sem}>{sem}</option>
            ))}
          </select>

          <div className="flex justify-between items-center mt-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
            <button
              onClick={onClose}
              type="button"
              className="text-gray-500 hover:text-gray-700"
            >
              Cancel
            </button>
          </div>
        </form>

        {showFinalButton && internshipData?.link && (
          <div className="mt-4 text-center">
            <a
              href={internshipData.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-2 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                Apply Now
              </button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplyFormModal;
