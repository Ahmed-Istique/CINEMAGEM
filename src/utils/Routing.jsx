import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Components/Home';
import About from '../Components/About/About';
import Movies from '../Components/Movies';
import SearchPage from '../Components/SearchPage';
import TVShows from '../Components/TVShows';
import User from '../Components/UserAll/User';
import Details from '../Components/Details';
import LogIn from '../Components/UserAll/LogIn';

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/tvshows" element={<TVShows />} />
      <Route path="/searchpage" element={<SearchPage />} />
      {/* Add the Details route here */}
      <Route path="/:media_type/:name" element={<Details />} />  {/* Dynamic route for movie/tv details */}
      <Route path="/logIn" element={<User />} />
      <Route path="/logIn" element={<LogIn />} />
    </Routes>
  );
}
