import React from 'react'
import { useSelector } from 'react-redux';
import Card from './Card';
import '../Card/Card.css'
import { Link } from 'react-router-dom';


export default function Cards({ data = [], heading, media_type, name, title }) {
    // const trandingMovies = useSelector(state => state.movieData.bannerData);
    return (
        <div className='w-full lg:px-3 px-3 no-scrollbar mt-20 mb-20 '>
            <div className='flex items-center justify-between'>
                <h1 className='lg:text-5xl text-[5vw] font-bold uppercase lg:mb-8 mb-3 text-left text-white px-5' >{heading}</h1>
                <Link to="/your-link-here">
                    <h1 className="lg:text-2xl text-[2.8vw] lg:mb-8 mb-3 text-left text-white px-5">
                        More {heading}</h1>
                </Link>
            </div>
            <div className='flex cards-container lg:gap-10 gap-3 lg:px-5 lg:p-2 h-fit overflow-x-scroll'>
                {
                    data.map((data, index) => {
                        return (
                            <Card key={data.id + "headingName" + index} data={data} index={index + 1} Popular={true} media_type={media_type} name={name} title={title}></Card>
                        )
                    })
                }
            </div>
        </div>
    )
}
