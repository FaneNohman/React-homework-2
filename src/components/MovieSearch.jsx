import React, {useState} from 'react';
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import MovieItem from "./MovieItem";

const SearchMovie = () => {
    const {query} = useParams();
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/search/movie?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU&query=" + query + "&page=1")
            .then(res => res.json())
            .then(data => {
                setMovies(data.results);
            })
    }, [query]);
    return (
        <div>
            <div className="movie-list">
                {
                    movies.map((movie) =>
                    <MovieItem key={movie.id} movie={movie}/>)
                }
            </div>
        </div>
    );
};

export default SearchMovie;