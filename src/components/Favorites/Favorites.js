import React from 'react';
import './Favorites.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Favorites()  {
    const [listName, setListName] = useState('')
    const [check,setCheck] = useState(true)
    const {saved, lists} = useSelector(state => state)
    const dispatch = useDispatch()


    const handleCheck = (e) => {
        setListName(e.target.value)
    }
    const deleteElement = (id) => {
        dispatch({type: 'DELETE', payload: id})
    }
    const gotoListpage = (e) => {
        e.preventDefault()
        setCheck(false)
        dispatch({type: 'ADD_LIST', payload: {
            id:1,
            name: listName,
            favorite_list : saved
        }})
    }
        return (
            <div className="favorites">
                <input value={listName}  className="favorites__name" onChange={handleCheck} disabled={!check} />
                <ul className="favorites__list">
                    { saved && saved.map((item) => {
                        return (
                        <li key={item.imdbID}> {item.Title} ({item.Year}) <button onClick={() => deleteElement(item.imdbID)}>X</button> </li>    
                        );
                    })}
                </ul> 
                { check ? 
                    <button type="button"  className="favorites__save" disabled={!listName} onClick={gotoListpage}>Сохранить список</button> 
                    :
                    <Link to={`/list/${lists.id}`}>Перейти к списку</Link>
                }
            </div>
        );
    
}
 
export default Favorites;