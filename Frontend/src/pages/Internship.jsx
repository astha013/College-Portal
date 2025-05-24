import React, { useEffect, useState } from 'react';
import InternshipCard from '../components/InternshipCard';

const InternshipSection = () => {
  const [internships, setInternships] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => setInternships(data))
      .catch((err) => console.error('Error fetching internships:', err));
  }, []);

  return (
    <div className="bg-gray-100 py-10 min-h-screen px-4 md:px-20">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Available Internships</h2>
      <div className="flex flex-col gap-6 w-full">
        {internships.map((internship, index) => (
          <InternshipCard key={index} internship={internship} />
        ))}
      </div>
    </div>
  );
};

export default InternshipSection;
