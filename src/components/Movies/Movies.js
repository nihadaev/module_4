import React from 'react';
import { useSelector } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';

function Movies () {
    const {data} = useSelector(state => state)
    console.log(data)
        return ( 
            <ul className="movies">
                {data.map((movie) => (
                    
                    <li className="movies__item" key={movie.imdbID}>
                        <MovieItem {...movie} />
                    </li>
                ))}
            </ul>
        );
    
}
 
export default Movies;