import React, { useState, useContext } from 'react';
import { AppContext } from '../context/appContext.js';

export const SearchBar = () => {
    const [ type, setType ] = useState('friend')
    const [ inputs, setInputs ] = useState('');
    const { search } = useContext(AppContext);

    function handleSubmit(e){
        e.preventDefault()
        search(inputs, type)
        setInputs('')
    }

    return(
        <form className='grid' onSubmit={handleSubmit}>
            <span className='text-left'> Find a
                <select className='p-1 m-2 text-navy-900 rounded' onChange={e => setType(e.target.value)}>
                    <option> friend </option>
                    <option> mood </option>
                </select> 
            </span>
            <input className='text-indigo-900 p-1 rounded' type='text' value={inputs} onChange={e => setInputs(e.target.value)} placeholder={`${type === 'friend' ? `What's their username` : `What's the ${type}`}?`} required/>
            <button className='bg-cyan-200 text-cyan-800 rounded p-1 m-2'> search </button> 
        </form>
    )
}