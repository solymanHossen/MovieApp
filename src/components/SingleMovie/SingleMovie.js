import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { API_URL } from "../Context"
import { useState, useEffect } from 'react';

const SingleMovie = () => {
    const { id } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState("");

    const getMovie = async (url) => {
        try {
            const res = await fetch(url)
            const data = await res.json()


            if (data.Response === "True") {
                setIsLoading(false)

                setMovie(data)


            }

        }

        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        let timerOut = setTimeout(() => {
            getMovie(`${API_URL}&i=${id}`);
        }, 2000);
        return () => clearTimeout(timerOut);

    }, [id]); 
    if (isLoading) {
        return (
            <div>
                <div className="loading">
                    Looding...
                </div>
            </div>
        )
    }
    console.log(movie);
    return (
        <div>
            <section className="movi_section">
                <div className="movie_card">

                    <img src={movie.Poster} alt="" />
                    <h1>{movie.Title}</h1>
                    <h2>{movie.Year}</h2>
                    <h3>{movie.Released}</h3>
                    <h1>{movie.Runtime}</h1>

                </div>
                <NavLink to="/">Back</NavLink>

            </section>
        </div>
    );
};

export default SingleMovie;