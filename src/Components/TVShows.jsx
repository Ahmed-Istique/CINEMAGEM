import React from 'react';
import { useSelector } from 'react-redux';
import ExplorePages from './ExplorePages';
import useFetchData from '../hooks/useFetchData';

export default function TVShows() {
  const { data, loading, handleScroll } = useFetchData('/discover/tv'); // Use custom hook
  const ImageURL = useSelector((state) => state.movieData.ImageURL);

  return (
    <div className="lg:mt-64 mt-28 p-2">
      <h1 className="text-white lg:text-5xl text-2xl uppercase">Epic <span>TV Shows</span>, Endless Fun</h1>
      <p className='text-white lg:mt-10 mt-5 text-base lg:text-xl'>Dive into captivating stories, thrilling adventures, and unforgettable characters. Your next binge-watching marathon awaits.</p>
      <div style={{ boxShadow: '0px -30px 60px rgba(0, 0, 0, 0.2)' }}>
        <ExplorePages data={data} handleScroll={handleScroll} loading={loading} mediaType={"tvshows"} />
      </div>
    </div>
  );
}
