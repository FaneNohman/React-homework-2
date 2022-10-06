
import React from 'react';
import {Link} from "react-router-dom";

const MovieItem = ({movie}) => {
    return (
        <Link to={`/movies/${movie.id}`} >
            <div>
                <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt=""/>
                <h3>{movie.title}</h3>
            </div>
        </Link>
    );
};

export default MovieItem;