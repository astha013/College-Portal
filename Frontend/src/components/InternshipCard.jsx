import React from 'react';
import { useState } from "react";
import ApplyFormModal from "./ApplyFormModal";

const InternshipCard = ({ internship }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-white shadow-lg p-6 rounded-md w-full mb-6">
      <h3 className="text-lg font-semibold mb-2">{internship.Name}</h3>
      <p><strong>Company:</strong> {internship["Company name"]}</p>
      <p><strong>Duration:</strong> {internship.Duration}</p>
      <p><strong>Stipend:</strong> {internship.Stipend}</p>
      <div className="flex justify-center mt-4">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800"
          onClick={() => setShowModal(true)}
        >
          Apply Now
        </button>
      </div>
      {showModal && (
        <ApplyFormModal
          internshipData={internship}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default InternshipCard;
