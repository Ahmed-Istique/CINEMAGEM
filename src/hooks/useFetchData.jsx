import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';

const useFetchData = (endpoint) => {
  const [data, setData] = useState([]); // Store fetched data
  const [loading, setLoading] = useState(false); // Loading state
  const [page, setPage] = useState(1); // Page number
  const [fetchThreshold, setFetchThreshold] = useState(40); // Fetch threshold

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms)); // Simulate delay

  const fetchData = useCallback(
    async (pagesToLoad = 10, initialLoad = false) => {
      if (loading) return; // Prevent multiple requests
      setLoading(true);

      try {
        if (!initialLoad && data.length >= fetchThreshold) {
          await delay(1500); // Delay for non-initial loads
        }

        // Fetch multiple pages
        const requests = Array.from({ length: pagesToLoad }, (_, i) =>
          axios.get(endpoint, { params: { page: page + i } })
        );

        const responses = await Promise.all(requests);
        const results = responses.flatMap((response) => response.data.results);

        setData((prevData) => [...prevData, ...results]);
        setPage((prevPage) => prevPage + pagesToLoad);
        console.log("responses in useFetchData",responses);
        console.log("results in useFetchData",results);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    },
    [endpoint, loading, page, data.length, fetchThreshold]
  );

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight + 50;
    if (bottom && !loading && data.length >= fetchThreshold) {
      setFetchThreshold((prev) => prev + 40);
      fetchData(40);
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchData(10, true);
  }, [fetchData]);

  return { data, loading, handleScroll };
};

export default useFetchData;
