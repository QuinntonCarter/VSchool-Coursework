import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../context/appContext.js';

export const SearchBar = () => {
    const [ type, setType ] = useState('friend');
    const [ toggleMore, setToggleMore ] = useState(false);
    const [ moodLevel, setMoodLevel ] = useState(0);

    const [ inputs, setInputs ] = useState('');
    const { search } = useContext(AppContext);

    function handleSubmit(e){
        e.preventDefault()
        search(inputs, type)
        setInputs('')
    }

    return(
        <form className='grid' onSubmit={handleSubmit}>
            <span className='text-left grid grid-cols-4'>
                <select className='col-span-2 p-1 m-1 mb-2 text-navy-900 rounded' onChange={e => setType(e.target.value)}>
                    <option> friend </option>
                    <option> mood </option>
                </select> 
                {type === 'mood' ? 
                <>
                    <select className='col-span-2 p-1 m-1 text-indigo-600 bg-indigo-300 rounded' onChange={e => setType(e.target.value)}>
                        <option> - select - </option>
                        <option> placeholder </option>
                        <option> placeholder </option>
                        <option> placeholder </option>
                        <option> placeholder </option>
                    </select> 
                </>
                :
                    <input className='col-span-4 text-indigo-900 p-1 w-full rounded' type='text' value={inputs} onChange={e => setInputs(e.target.value)} placeholder={`${type === 'friend' ? `What's their username` : `What's the ${type}`}?`} required/>
                }
            </span>
            <button className='bg-cyan-200 text-cyan-800 rounded p-1 m-2'> find {type} </button> 
        </form>
    )
}