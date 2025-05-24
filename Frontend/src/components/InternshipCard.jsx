import React from 'react';

const InternshipCard = ({ data }) => {
  return (
    <div className="w-full overflow-x-auto py-4">
      <div className="flex space-x-4 px-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="min-w-[300px] bg-white border border-gray-200 rounded-lg shadow p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-lg font-semibold text-blue-700 mb-1">{item.Name}</h2>
            <p className="text-sm text-gray-600 mb-1">
              <span className="font-medium">Company:</span> {item["Company name"]}
            </p>
            <p className="text-sm text-gray-600 mb-1">
              <span className="font-medium">Duration:</span> {item.Duration}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-medium">Stipend:</span> {item.Stipend}
            </p>
            <a
              href={item.Link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white bg-blue-600 hover:bg-blue-700 px-4 py-1 text-sm rounded"
            >
              Apply Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternshipCard;
