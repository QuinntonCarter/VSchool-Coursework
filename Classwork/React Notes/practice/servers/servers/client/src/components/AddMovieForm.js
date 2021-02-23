import React, { useState } from 'react'

export default function AddMovieForm(props){
    const initInputs = { title: props.title || "", genre: props.genre || "" }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        // adds movie w addMovie to database via props.submit functionality sent from app.js
        // sends inputs and props._id to editMovie function in App.js
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }
    
    return (
        <form onSubmit={handleSubmit}>

            <input 
            type="text" 
            name="title" 
            value={inputs.title} 
            onChange={handleChange} 
            placeholder="Title">
            </input>

            <input 
            type="text" 
            name="genre" 
            value={inputs.genre} 
            onChange={handleChange} 
            placeholder="Genre">
            </input>
    {/* edits movie w props.submit from movie.js (this submit is props.editMovie sent from app.js to movie.js and finally landing here to be used) */}
            <button onClick={props.submit}> {props.btnText} </button>

        </form>
    )
}
