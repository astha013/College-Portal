import React from 'react';

const InternshipCard = ({ internship }) => {
  return (
    <div className="w-full bg-white shadow-md px-6 py-5 rounded-md border border-gray-200">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{internship.Name}</h3>
      <p className="text-gray-600 mb-1"><strong>Company:</strong> {internship["Company name"]}</p>
      <p className="text-gray-600 mb-1"><strong>Duration:</strong> {internship.Duration}</p>
      <p className="text-gray-600 mb-4"><strong>Stipend:</strong> {internship.Stipend}</p>
      <div className="w-full flex justify-center">
      <div className="flex flex-wrap gap-4">
        <a
          href={internship["Link "]?.trim()}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Apply
        </a>
        <a
          href={internship["Link "]?.trim()}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          View Details
        </a>
      </div>
      </div>
    </div>
    
  );
};

export default InternshipCard;
