import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card/Card';
import Hrlione2 from './horizontalLine/Hrlione2';

export default function SimilarMovies({ movieId }) {
    const [similarMovies, setSimilarMovies] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSimilarMovies = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await axios.get(`/movie/${movieId}/similar`);
                setSimilarMovies(response.data.results); // Extract the 'results' array
                console.log("Similar Movies:", response.data.results);
            } catch (error) {
                console.error("Error fetching similar movies:", error);
                setError('Enjoy & Chill');
            } finally {
                setLoading(false);
            }
        };

        if (movieId) {
            fetchSimilarMovies();
        }
    }, [movieId]);

    if (loading) {
        return <p>Loading similar movies...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!similarMovies || similarMovies.length === 0) {
        return <p>Enjoy & Chill</p>;
    }

    return (
        <div>
            <h1 className='lg:text-2xl my-5'>Similar Movies</h1>
            <Hrlione2></Hrlione2>
            <div
                className="flex lg:flex-row flex-col lg:flex-wrap lg:gap-7 gap-5 h-fit no-scrollbar items-center mt-7"
                style={{
                    overflowY: 'scroll',  // Allow vertical scroll
                    height: '100%',
                    width: '100%',  // Prevent horizontal overflow
                    scrollbarWidth: 'none',  // For Firefox
                    msOverflowStyle: 'none',  // For IE/Edge
                }}>
                {similarMovies.map((movie, index) => (
                    <Card
                        key={movie.id}
                        data={movie}
                        index={index + 1}
                        Popular={true}
                    />
                ))}
            </div>
        </div>
    );
}
