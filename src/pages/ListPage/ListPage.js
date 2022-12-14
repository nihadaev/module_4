import React from 'react';
import { useSelector } from 'react-redux';
import './ListPage.css';

function ListPage ()  {
    const {lists} = useSelector( state => state)
        return (
            <div className="list-page">
                <h1 className="list-page__title">Мой список</h1>
                <ul>
                    { lists.favorite_list &&  lists.favorite_list.map((item) => {
                        return (
                            <li key={item.imdbID}>
                                <a href={`https://www.imdb.com/title/${item.imdbID}`} target="_blank">{item.Title} ({item.Year})</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
}
 
export default ListPage;