import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './ListPage.css';

function ListPage (props)  {
    const {saved} = useSelector( state => state)
 
    useEffect(() => {
        const id = props.match.params;
        console.log(id);
        // TODO: запрос к сервер на получение списка
        // TODO: запросы к серверу по всем imdbID
    }, [])
    console.log(saved)
        return (
            <div className="list-page">
                <h1 className="list-page__title">Мой список</h1>
                <ul>
                    {saved.map((item) => {
                        return (
                            <li key={item.imdbID}>
                                <Link to='/' target="_blank">{item.Title} ({item.year})</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    
}
 
export default ListPage;