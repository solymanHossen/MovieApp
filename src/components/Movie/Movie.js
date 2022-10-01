import React from 'react';
import { useGolobalContext } from '../Context';
import { NavLink } from "react-router-dom"
import './Movie.css'

const Movie = () => {
    const { movie, isLoading } = useGolobalContext();

    if (isLoading) {
        return (
            <div className="movie-section">
                <div className="logading">
                    Loading...
                </div>
            </div>
        )
    }
    return (
        <>
            <section className="movi-page">

                <div className="grid ">

                    {
                        movie.map((curMovie) => {
                            const { imdbID, Title, Poster } = curMovie;
                            const movieName = Title.substring(0, 15)
                            return (
                                <NavLink to={`movie/${imdbID}`} key={imdbID}>
                                    <div className="card">
                                        <div className="card-info">
                                            <h2>{movieName.length >= 15 ? `${movieName}...` : movieName}</h2>
                                            <img src={Poster} alt="" />
                                        </div>
                                    </div>
                             </NavLink>
                            )
                        }
                        )
                    }
                </div>
            </section>
        </>
    );

};

export default Movie;