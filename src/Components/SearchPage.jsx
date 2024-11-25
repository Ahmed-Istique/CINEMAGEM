import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Card from './Card/Card';
import SearchBar from '../assets/MainComponents/Navbar/SearchBar';

export default function SearchPage() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');
  const [data, setData] = useState([]); // Store combined search results
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch search results from both endpoints
  const fetchSearchResults = async () => {
    if (!query) return; // Do not fetch if query is empty
    setLoading(true);
    setError(null); // Reset error state

    try {
      // Fetch data from both movie and TV show endpoints
      const [movieResponse, tvResponse] = await Promise.all([
        axios.get('/search/movie', { params: { query } }),
        axios.get('/search/tv', { params: { query } }),
      ]);

      // Combine the results from both responses
      const combinedResults = [
        ...(movieResponse.data.results || []),
        ...(tvResponse.data.results || []),
      ];
      setData(combinedResults); // Set combined results to state
      console.log('Combined Results:', combinedResults); // Debugging output
    } catch (err) {
      console.error('Error fetching search results:', err);
      setError('Failed to fetch search results. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Trigger fetch on query change
  useEffect(() => {
    fetchSearchResults();
  }, [query]);

  return (
    <div>
      <div className="lg:mt-64 mt-24 p-2">
        <h1 className="text-white lg:text-5xl text-[5vw] my-10 uppercase">
          Search Results for "{query}"
        </h1>

        {/* Show SearchBar only for small devices */}
        <div className="mb-10">
          <SearchBar />
        </div>

        {loading && <p className="text-gray-400">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !error && data.length === 0 && query && (
          <p className="text-gray-400">No results found for "{query}".</p>
        )}
        <div className="flex flex-wrap lg:gap-10 gap-5 h-fit no-scrollbar justify-center">
          {data.map((item, index) => (
            <Card key={index} data={item} /> // Use the reusable Card component
          ))}
        </div>
      </div>
    </div>
  );
}
