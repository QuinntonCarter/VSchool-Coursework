import React, { useState, useContext } from 'react';
import { AppContext } from '../context/appContext.js';

export const SearchBar = () => {
    const [ inputs, setInputs ] = useState('');
    const { searchUser } = useContext(AppContext);

    function handleSubmit(e){
        e.preventDefault()
        searchUser(inputs)
        // setInputs('')
    }

    return(
        <form className='grid' onSubmit={handleSubmit}>
            <span className='text-left'> Find a friend </span>
            <input className='text-indigo-900 p-1 rounded' type='text' value={inputs} onChange={e => setInputs(e.target.value)} placeholder={`what's their username?`} required/>
            <button className='bg-cyan-200 text-cyan-800 rounded p-1 m-2'> search </button> 
        </form>
    )
}