import React from 'react';
import ExplorePages from './ExplorePages';
import useFetchData from '../hooks/useFetchData';

export default function Movies() {
  const { data, loading, handleScroll } = useFetchData('/discover/movie'); // Use custom hook

  return (
    <div className="lg:mt-64 mt-28 p-2">
      <h1 className="text-white lg:text-5xl text-2xl uppercase">Movie Night, Anytime</h1>
      <p className='text-white lg:mt-10 mt-5 text-base lg:text-xl'>From classic cinema to modern masterpieces, explore a world of captivating stories and unforgettable characters.</p>
      <div style={{ boxShadow: '0px -30px 60px rgba(0, 0, 0, 0.2)' }}>
        <ExplorePages data={data} handleScroll={handleScroll} loading={loading} mediaType={"movies"} />
      </div>
    </div>
  );
}
