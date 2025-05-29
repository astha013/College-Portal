import React, { useEffect, useState } from 'react';
import InternshipCard from '../components/InternshipCard';
import SearchBar from '../components/SearchBar';
//import internshipData from './data.json'; 
const InternshipSection = () => {
  const [internships, setInternships] = useState([]);
  const [keyword, setKeyword] = useState("")
  const [filteredInternships, setFilteredInternships] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => setInternships(data))
      .catch((err) => console.error('Error fetching internships:', err));
  }, []);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setInternships(data);
        setFilteredInternships(data);
      })
      .catch((err) => console.error("Failed to load internships:", err));
  }, []);

  // Filter internships whenever keyword changes
  useEffect(() => {
    const filtered = internships.filter((item) =>
      item.Name.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredInternships(filtered);
  }, [keyword, internships]);


  return (
    <div className="bg-gray-100 py-10 min-h-screen px-4 md:px-20">
      <div className="px-4 max-w-7xl mx-auto">
        <SearchBar keyword={keyword} setKeyword={setKeyword} /> {/* 🔥 */}
        <div className="grid gap-6 mt-4">
          {filteredInternships.length ? (
            <>
              <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Available Internships</h2>
              <div className="flex flex-col gap-6 w-full">
                {filteredInternships.map((internship, index) => (
                  <InternshipCard key={index} internship={internship} />
                ))}
              </div>
            </>
          ) : null}
        </div>
        <div className="text-center mt-8">
          <a
            href="https://internship.aicte-india.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded">
              More Internships
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default InternshipSection;