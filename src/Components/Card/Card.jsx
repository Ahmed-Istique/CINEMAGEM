import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Reloader from '../reUseLoader/Reloader';

export default function Card({ data, media_type, name, title }) {
    const [imageLoading, setImageLoading] = useState(true); // Track if the image is loading
    const ImageURL = useSelector(state => state.movieData.ImageURL);

    // Handle image load event
    const handleImageLoad = () => {
        setImageLoading(false); // Image has loaded, set imageLoading to false
    };

    // Debug: Log the data being passed to Link
    // console.log("Data being passed to Link:", data);

    return (
        <Link 
            to={`/${media_type? media_type: "tv"}/${data?.name || data?.title}`} // Dynamic URL based on media_type and id
            state={{ data }} // Explicitly passing data as state
            className='w-32 lg:w-60 lg:h-80 h-52 overflow-hidden rounded-xl hover:rounded-none translate-x-0 relative group flex-shrink-0'
        >
            {/* Image with loading state */}
            <div className="h-full w-full relative object-center overflow-hidden">
                {imageLoading && <Reloader />} {/* Show loader while image is loading */}
                <img
                    src={ImageURL + data.poster_path}
                    className={`absolute top-0 left-0 h-full w-full object-cover object-center transition-opacity duration-300 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
                    alt={data.title || "No Image Found"}
                    onLoad={handleImageLoad}
                />
            </div>

            {/* Shadow effect */}
            <div className='absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

            {/* Details displayed on hover */}
            <div className='w-full absolute bottom-0 flex flex-col text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 lg:p-4 lg:gap-5 gap-2'>
                <h3 className='lg:text-xl text-base uppercase text-left'>{data?.title || data?.name}</h3>
                <div className='flex justify-between items-center'>
                    <p>{moment(data.release_date).format("MMM Do YY")}</p>
                    <p>{Number(data.vote_average).toFixed(1)}</p>
                </div>
            </div>
        </Link>
    );
}
