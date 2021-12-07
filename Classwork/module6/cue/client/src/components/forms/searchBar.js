import React, { useState, useContext } from 'react';

import { AppContext } from '../context/appContext.js';

export default function SearchBar(){
    const [ inputs, setInputs ] = useState('');
    const { searchByArtist } = useContext(AppContext);

    function handleSubmit(e){
        e.preventDefault()
        searchByArtist(inputs)
        setInputs('')
    }

    return(
        <div className='searchBarWrapper'>
            <form onSubmit={handleSubmit}>
                <input type='text' name='query' value={inputs} onChange={e => setInputs(e.target.value)} placeholder='Search for user' required/>
                <button className='searchBtn'> search </button>
            </form>
        </div>
    )
}