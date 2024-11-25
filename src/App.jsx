import './App.css';
import Routing from './utils/Routing';
import Navbar from './assets/MainComponents/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import SmallNavbar from './assets/MainComponents/Navbar/SmallNavbar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setBannerData, setImageURL } from './Store/Reducers/movieSlices'; // Assuming correct path
import Footer from './assets/MainComponents/Footer/Footer';
import Hrlione2 from './Components/horizontalLine/Hrlione2';

function App() {
  const dispatch = useDispatch();

  const fetchTrendingData = async () => {
    try {
      const response = await axios.get('/trending/all/week');
      dispatch(setBannerData(response.data.results)); // Dispatch action
      // console.log(response.data.results)


    } catch (error) {
      console.error('Error fetching trending data:', error);
    }
  };


  // for configaration
  const fetchConfiguration = async () => {
    try {
      const response = await axios.get('/configuration');
      dispatch(setImageURL(response.data.images.secure_base_url + "original"))
      // console.log("configaration", response.data.images.secure_base_url + "original")
    } catch (error) {

    }
  }
  useEffect(() => {
    fetchTrendingData()
    fetchConfiguration()
  }, []); // Empty dependency array for initial fetch

  return (
    <div className=''>
      <Navbar />
      <Routing />
      <div className='pt-16'>
        <Outlet />
      </div>
      <Hrlione2 />
      <div className='flex justify-center items-center '>
        <Footer></Footer>
      </div>
      <SmallNavbar />
    </div>
  );
}

export default App;