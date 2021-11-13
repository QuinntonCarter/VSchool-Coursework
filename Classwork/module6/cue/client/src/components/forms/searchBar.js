import React, { useState, useContext } from 'react';

import { AppContext } from '../context/appContext.js';
import SearchView from '../../views/search.js';

export default function SearchBar(){
    const [ inputs, setInputs ] = useState({ artist: '', query: '', type: ''});
    const { searchByArtist } = useContext(AppContext);

    function handleChange(e){
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    };

    function handleSubmit(e){
        e.preventDefault()
        searchByArtist(inputs)
        setInputs({ artist: '' })
    }

    return(
        <div className='searchBarWrapper'>
            <form>
                <input type='radio' name='type' value='track' onChange={handleChange} required/>
                <input type='radio' name='type' value='album' onChange={handleChange} required/>
                <input type='text' name='artist' value={inputs.artist} onChange={handleChange} placeholder='artist name' required/>
                <input type='text' name='query' value={inputs.query} onChange={handleChange} placeholder='track name' required/>
                
                <button onClick={handleSubmit} className='searchBtn'> search </button>
            </form>
            <SearchView/>
        </div>
    )
}