import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IoIosPerson } from "react-icons/io";
import Hrlione2 from './horizontalLine/Hrlione2';

export default function MovieCredit({ movieId }) {
    const [credits, setCredits] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCredits = async () => {
            setLoading(true);
            setError(null);

            try {
                // Fetch the credits data from an API
                const response = await axios.get(`/movie/${movieId}/credits`);
                setCredits(response.data); // Assuming the API returns data in the format above
                console.log("response", response);
            } catch (err) {
                setError('');
            } finally {
                setLoading(false);
            }
        };

        if (movieId) {
            fetchCredits();
        }
    }, [movieId]);

    if (loading) {
        return <p>Loading credits...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!credits) {
        return <p></p>;
    }

    return (
        <div>
            <Hrlione2 />
            <h2 className='lg:text-2xl my-5'> Cast:</h2>
            <Hrlione2 />
            <div className='flex flex-wrap gap-10 text-left'>
                {credits.cast.length > 0 ? (
                    credits.cast.map((actor) => (
                        <div className='flex gap-5 lg:w-96 items-center ' key={actor.id}>
                            {actor.profile_path ? (
                                <div className='w-16 h-16 rounded-full overflow-hidden'>
                                    <img className='w-full h-full object-cover object-center' src={`https://www.themoviedb.org/t/p/w500${actor.profile_path}`} alt={actor.name} />
                                </div>
                            ) : (
                                <div className='bg-[#eef6fc] w-16 h-16 rounded-full overflow-hidden p-2 flex justify-center items-center'>
                                    <IoIosPerson className='w-16 h-16' style={{ color: '#243642' }} />
                                </div>
                            )}

                            <p className='lg:text-2xl'>{actor.name}  <br /> as - {actor.character || "Name here"}</p>
                        </div>
                    ))
                ) : (
                    <p>No cast data available</p>
                )}
            </div>
            <Hrlione2 />
            <h2 className='lg:text-2xl my-5'>Crew:</h2>
            <Hrlione2 />
            <div className='flex flex-wrap gap-10 '>
                {credits.crew.length > 0 ? (
                    credits.crew.map((member) => (
                        <div className='flex gap-5 lg:w-96 items-center ' key={member.id}>
                            {member.profile_path ? (
                                <div className='w-16 h-16 rounded-full overflow-hidden'>
                                    <img className='w-full h-full object-cover object-center' src={`https://www.themoviedb.org/t/p/w500${member.profile_path}`} alt={member.name} />
                                </div>
                            ) : (
                                <div className='bg-[#eef6fc] w-16 h-16 rounded-full overflow-hidden p-2 flex justify-center items-center'>
                                    <IoIosPerson className='w-16 h-16' style={{ color: '#243642' }} />
                                </div>
                            )}
                            <p className='lg:text-2xl'>{member.name}<br /> as - {member.job}</p>
                        </div>
                    ))
                ) : (
                    <p>Enjoy & Chill</p>
                )}
            </div>
        </div>
    );
}
