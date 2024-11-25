import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { CgPlayButtonO } from "react-icons/cg";
import axios from 'axios';
import Hrline from './horizontalLine/Hrline';
import MovieCredit from './MovieCredit';
import SimilarMovies from './SimilarMovies';
import Hrlione2 from './horizontalLine/Hrlione2';
import PlayVideo from './PlayVideo';

export default function Details() {
  const location = useLocation();
  const ImageURL = useSelector(state => state.movieData.ImageURL);
  const [detailedData, setDetailedData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showPlayVideo, setShowPlayVideo] = useState(false);
  const [showPlayVideoId, setShowPlayVideoId] = useState(false);

  // Data passed from the previous component
  const data = location.state?.data;

  const movieId = data?.id;
  const movieName = data?.name || data?.title;

  useEffect(() => {
    const fetchDetails = async () => {
      if (!movieId && !movieName) {
        setError("No movie ID or name provided.");
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        if (movieId) {
          const endpoint = data.media_type === "movie"
            ? `/movie/${movieId}?api_key=YOUR_API_KEY`
            : `/tv/${movieId}?api_key=YOUR_API_KEY`;

          const response = await axios.get(endpoint);
          setDetailedData(response.data);
          console.log("Response of God", response);
        } else {
          console.warn("API key is invalid or unavailable. Falling back to state data.");
          setDetailedData(null);
        }
      } catch (err) {
        console.error("Error fetching movie/series details:", err);
        setError("Failed to fetch additional data. Using fallback data.");
        setDetailedData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [movieId, data.media_type]);

  const combinedData = detailedData || data;

  const handlePlayVideo = (data) => {
    setShowPlayVideoId(data);
    setShowPlayVideo(true);
  };

  // Loading and error handling
  if (loading) {
    return <p className='text-white flex justify-center items-center mt-72'>Loading...</p>;
  }

  if (error) {
    console.warn(error);
  }

  if (!combinedData) {
    return (
      <div className='mt-40'>
        <p className='text-white'>No data found!</p>
      </div>
    );
  }

  return (
    <div className=''>
      <div className='flex justify-center absolute -z-10 overflow-hidden lg:mt-0 mt-20 lg:mb-[40vh] mb-[102vh] w-full'>
        <img
          src={ImageURL + combinedData.backdrop_path}
          className='lg:h-[35vw] h-[80vw] w-full object-cover object-center opacity-90'
          alt={combinedData.title || "Movie Banner"}
        />
      </div>

      <div className='flex justify-center '>
        <div className="relative lg:mt-[38vh] mt-64 w-[85vw] bg-[#243642] lg:h-fit h-fit lg:w-[70vw] flex lg:flex-row flex-col items-center lg:items-start lg:gap-8 gap-2  bg-opacity-90 lg:p-8 shadow-2xl rounded-xl p-4 lg:mb-10">
          <div className='flex flex-col gap-10 items-center'>
            {/* poster image */}
            <div className='w-70 lg:w-72 lg:h-[32.5vh] h-60 overflow-hidden rounded-xl hover:rounded-none relative group flex-shrink-0'>
              <img
                src={ImageURL + combinedData.poster_path}
                alt={combinedData.title || "No Image Found"}
              />
            </div>
            <div>
              <button onClick={() => handlePlayVideo(combinedData)} className='text-white lg:text-2xl font-bold px-4 lg:px-8 py-1 lg:py-3 rounded-md bg-gradient-to-r from-blue-500 to-purple-500 flex justify-center items-center gap-3 w-56 lg:w-72 hover:scale-105 transition-all'>
                <CgPlayButtonO /> Watch Now
              </button>
            </div>
          </div>

          <div className='text-left text-white lg:mb-0 mb-40'>
            {/* Main title */}
            <h1 className="lg:text-[3vw] text-[8vw] font-bold lg:mt-0 mt-6 text-center lg:text-left uppercase">
              {combinedData?.title || combinedData?.name}
            </h1>
            <p className='font-sans lg:my-0 my-5'>{combinedData.tagline}</p>

            <div className='lg:text-2xl text-base flex flex-col lg:gap-7 gap-5'>
              <Hrline />
              <p className='flex gap-2 leading-relaxed'>Overview:{" "}
                {combinedData.overview ? (
                  <span>{combinedData.overview}</span>
                ) : (
                  <span>No information available</span>
                )}
              </p>
              <Hrline />
              <div className='flex flex-col lg:flex-row justify-between gap-2 lg:gap-0 text-left'>
                <p className='flex gap-2'>Language:
                  {combinedData.original_language ? (
                    <span className='text-red-500 uppercase'>{combinedData.original_language}</span>
                  ) : (
                    <span className='text-red-500'>English</span>
                  )}
                </p>

                <p className='flex gap-2'>Rating:
                  <span className={`text-${combinedData.vote_average > 5 ? 'green-500' : 'red-500'}`}>
                    {Number(combinedData.vote_average).toFixed(1)}
                  </span>
                </p>

                <p className='flex gap-2'>Release Date:
                  {combinedData.release_date ? (
                    <span>{combinedData.release_date}</span>
                  ) : (
                    <span className='text-green-500'>This Year</span>
                  )}
                </p>
              </div>
              <Hrline />

              <p className='flex gap-2'>
                Production Country:{" "}
                {combinedData.production_countries?.length ? (
                  combinedData.production_countries.map((country, index) => (
                    <span key={index}>
                      {country.name}
                      {index < combinedData.production_countries.length - 1 && ", "}
                    
                    </span>
                  ))
                ) : (
                  <span>No data available</span>
                )}
              </p>

              <p>
                Production Company:{" "}
                {combinedData.production_companies?.length ? (
                  combinedData.production_companies.map((company, index) => (
                    <span key={index}>
                      {company.name}
                      {index < combinedData.production_companies.length - 1 && ", "}
                    </span>
                  ))
                ) : (
                  <span>No data available</span>
                )}
              </p>


              <p className='flex gap-2'>Status:
                <span className='text-green-500'>{combinedData.status || "Released"}</span>
              </p>

              <p>
                Genres:{" "}
                {combinedData.genres?.length ? (
                  combinedData.genres.map((genre, index) => (
                    <span key={index}>
                      {genre.name}
                      {index < combinedData.genres.length - 1 && ", "}
                    </span>
                  ))
                ) : (
                  <span>No data available</span>
                )}
              </p>

              {detailedData && (
                <p>Runtime: {detailedData.runtime} minutes</p>
              )}
            </div>

            <div className='mb-10'>
              <MovieCredit movieId={combinedData.id} />
              <Hrlione2 />
              <SimilarMovies movieId={combinedData.id} />
            </div>

            {showPlayVideo && (
              <PlayVideo data={showPlayVideoId} close={() => setShowPlayVideo(false)} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
