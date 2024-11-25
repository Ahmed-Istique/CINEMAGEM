import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Reloader from './reUseLoader/Reloader';


export default function HomeBanner() {
    const bannerData = useSelector(state => state.movieData.bannerData);
    // const bannersData = useSelector(state => state.movieData);
    const ImageURL = useSelector(state => state.movieData.ImageURL);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [loadingMessage, setLoadingMessage] = useState(false);


    // Check if the data is being fetched
    useEffect(() => {
        if (bannerData.length > 0) {
            setIsLoading(false); // Data is ready, stop loading
        }
    }, [bannerData]);


    const nextSlideHandle = () => {
        setLoadingMessage(true);
        setCurrentSlide((previousIndex) => {
            const newIndex = (previousIndex + 1) % bannerData.length;
            console.log("Next Slide Index:", newIndex);
            return newIndex;
        });
    };


    const previousSlideHandle = () => {
        setLoadingMessage(true);
        setCurrentSlide((previousIndex) => {
            const newIndex = (previousIndex - 1 + bannerData.length) % bannerData.length;
            console.log("Previous Slide Index:", newIndex);
            return newIndex;
        });
    };


    useEffect(() => {
        const timer = setTimeout(() => {
            setLoadingMessage(false); // Hide the loading message after 500ms
        }, 500);


        return () => clearTimeout(timer); // Cleanup timeout on unmount
    }, [currentSlide]);


    // Show loading if data is being fetched
    if (isLoading) {
        return (
            <div className="w-full h-full flex justify-center items-center">
                <Reloader></Reloader>
            </div>
        );
    }


    console.log("Banner Home", bannerData)
    // console.log("Banners Home", bannersData)
    return (
        <div className='w-full h-full overflow-hidden relative group '>
            <div className='flex  min-h-full max-h-[95vh] max-w-full overflow-hidden '>
                {
                    bannerData.map((data, index) => {
                        if (index === currentSlide) {
                            return (
                                <div key={index} className='min-w-full min-h-[450px] overflow-hidden relative'>
                                    <div className='w-full h-full'>
                                        <img
                                            src={ImageURL + data.backdrop_path}
                                            className='h-full w-full object-cover object-center'
                                            alt={data.title || "Movie Banner"}
                                            onLoad={() => setLoadingMessage(false)} // Hide loading message when image loads
                                        />
                                        <div className='absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent'></div>
                                    </div>
                                    <div className='lg:h-[45vh] md:h-[20vh] h-[90vw] absolute flex justify-center flex-col lg:gap-10 gap-4 inset-x-0 bottom-2 md:bottom-7 lg:bottom-24 px-4 lg:px-20 drop-shadow-2xl text-white lg:text-left lg:w-full'>
                                        <h2 className='lg:text-7xl text-xl font-bold uppercase'>
                                            {data.title ? data.title : data.name}
                                        </h2>
                                        <p className='md:h-[5vw] lg:h-[4vw] h-[30vw] lg:w-1/2 text-ellipsis lg:line-clamp-3 line-clamp-1 text-xs lg:text-2xl leading-relaxed'>
                                        {data.overview ? data.overview : "related Movie Overview"}
                                        </p>
                                        <div className='lg:h-fit text-xs lg:text-2xl flex justify-center lg:justify-start lg:w-1/4 gap-10'>
                                            <p>Rating: {Number(data.vote_average).toFixed(1)}+</p>
                                            <span> | </span>
                                            <p>Popularity: {Number(data.popularity).toFixed(0)}</p>
                                        </div>
                                        <div>
                                            <button className='text-white text-xs lg:text-2xl font-bold px-4 lg:px-8 py-1 lg:py-3 rounded-md bg-gradient-to-r from-blue-500 to-purple-500 hover:bg-gradient-to-r from-blue-400 to-purple-400'>View Details</button>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        return null; // Return null for non-current slides
                    })
                }
            </div>
            <div className='hidden group-hover:flex'>
                <button onClick={previousSlideHandle} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded-full w-8 h-8 lg:w-16 lg:h-16 flex justify-center items-center">
                    <h1 className='bold '> &#8249;</h1>
                </button>
                <button onClick={nextSlideHandle} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded-full w-8 h-8 lg:w-16 lg:h-16 flex justify-center items-center">
                    &#8250;
                </button>
            </div>


            {loadingMessage && (
                <div className='absolute inset-0 flex justify-center items-center'>
                    <p className='text-white text-xl '> <Reloader></Reloader> </p>
                </div>
            )}
        </div>
    );
}
