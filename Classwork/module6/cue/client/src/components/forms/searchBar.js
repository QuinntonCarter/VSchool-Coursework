import React, { useState, useContext } from 'react';

import { AppContext } from '../context/appContext.js';

export default function SearchBar(){
    const [ inputs, setInputs ] = useState({ artist: '' })
    const { search } = useContext(AppContext)

    function handleChange(e){
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        search(inputs)
        setInputs({ artist: '' })
    }

    return(
        <div className='searchBarWrapper'>
            <form onSubmit={handleSubmit}>
                {/* <input type='checkbox' value='byArtist'/>
                <input type='checkbox' value='byArtistAndSong'/> */}
                    <input type='text' name='artist' value={inputs.artist} onChange={handleChange} placeholder='artist name' required/>
                    {/* <input type='text' name='song' value={inputs.song} onChange={handleChange} placeholder='track name' required/> */}
                
                <button style={{cursor: 'pointer'}} className='searchBtn'> search </button>
            </form>
        </div>
    )
}
// should include search input and functions
// and search functions will need utilize app context provider