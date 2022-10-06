
import React, {useState} from 'react';
import {useEffect} from "react";
import {useParams} from "react-router-dom";

const MovieDetails = () => {
    const [movie, setMovie] = useState();
    const [loaded,setLoaded] =useState(false);
    const {id} = useParams();
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/" + id + "?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU")
            .then(res => res.json())
            .then(data => {
                setMovie(data);
                setLoaded(true);
            });
    }, [id]);

    return (
        <div>
            {
                (loaded && movie) ?
                    <div className="flex-column">
                        <div className="flex-row">
                            <div>
                                <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt=""/>
                            </div>
                            <div>
                                <h2>{movie.title}</h2>
                                <p>Tagline: {movie.tagline}</p>
                                <p>Release Date: {movie.release_date}</p>
                                <p>Genres: {movie.genres.map((genre) => <li key={genre.id}>{genre.name}</li>)}</p>
                                <p>Rating: {movie.vote_average}</p>
                            </div>
                        </div>
                        <div>
                            <p>Описание: {movie.overview}</p>
                        </div>
                    </div>

                    : <h3>loading...</h3>
            }
        </div>
    );
};

export default MovieDetails;