import React from 'react';
import './Favorites.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

function Favorites()  {
    const [listName, setListName] = useState('')
    const {saved} = useSelector(state => state)
    const dispatch = useDispatch()
    console.log(listName)
    const handleCheck = (e) => {
        setListName(e.target.value)
    }
    const deleteElement = (id) => {
        dispatch({type: 'DELETE', payload: id})
    }
    console.log(saved);
        return (
            <div className="favorites">
                <input value={listName}  className="favorites__name" onChange={handleCheck}  />
                <ul className="favorites__list">
                    {saved.map((item,key) => {
                        return (
                        <li key={key}> {item.Title} ({item.Year}) <button onClick={() => deleteElement(item.imdbID)}>X</button> </li>
                        
                        );
                    })}
                </ul> 
                <button type="button"  className="favorites__save" disabled={!listName}>Сохранить список</button>
            </div>
        );
    
}
 
export default Favorites;