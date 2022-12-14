import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieItem.css';

function MovieItem(props)  {
        const { Title, Year, Poster } = props;
        const dispatch = useDispatch()
        const saveItem = (e) => {
            e.preventDefault();
            dispatch({ type: 'SAVE', payload: props})
        }

        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={Poster} alt={Title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>
                    <button  type="button" className="movie-item__add-button" onClick={saveItem}>Добавить в список</button>
                </div>
            </article>
        );
}
 
export default MovieItem;