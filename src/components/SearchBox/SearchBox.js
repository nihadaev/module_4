import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './SearchBox.css';

function SearchBox()  {
    const [searchLine, setSearchLine] = useState('')
  
    const dispatch = useDispatch()
    const searchLineChangeHandler = (e) => {
        setSearchLine(e.target.value);
    }
    const searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        fetch(`http://www.omdbapi.com/?s=${searchLine}&apikey=ea57defb`)
        .then(res => res.json())
        .then(data => {
            dispatch({type: 'ALL_DATA', payload : data.Search})
        })
    }

        return (
            <div className="search-box">
                <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
                    <label className="search-box__form-label">
                        Искать фильм по названию:
                        <input
                            value={searchLine}
                            type="text"
                            className="search-box__form-input"
                            placeholder="Например, Shawshank Redemption"
                            onChange={searchLineChangeHandler}
                        />
                    </label>
                    <button
                        type="submit"
                        className="search-box__form-submit"
                        disabled={!searchLine}
                    >
                        Искать
                    </button>
                </form>
            </div>
        );
    
}
 
export default SearchBox;