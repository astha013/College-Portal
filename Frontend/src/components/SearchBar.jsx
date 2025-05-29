import React from "react";

const SearchBar = ({ keyword, setKeyword }) => {
  return (
    <div className="flex justify-center mt-6 mb-4 px-4">
      <input
        type="text"
        placeholder="Search internships by title, company, or keyword..."
        className="w-full max-w-3xl p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </div>
  )
}

export default SearchBar;
