import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim() !== '') {
      navigate(`/searchpage?query=${encodeURIComponent(searchInput)}`); // Navigate with query parameter
      setSearchInput('');
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        className="p-2 lg:p-4 lg:w-[15vw] rounded outline-none lg:text-xl text-sm"
        type="text"
        placeholder="Search here"
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput}
      />
      <button
        className="lg:text-xl text-sm ml-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded py-2 lg:py-4 px-6"
      >
        Search
      </button>
    </form>
  );
}
