import React, { useState } from 'react'
import AddMovieForm from './AddMovieForm'


export default function Movie(props){

    const [ editToggle, setEditToggle ] = useState(false)
    const { title, genre, _id } = props

    return(
        <div className='movie'>
            { !editToggle ? 
                <>
                    <h1 style={{color: 'black'}}> Title: { title } </h1>
                    <p style={{backgroundColor: 'antiquewhite'}}> Genre: { genre } </p>
                    <button 
                    // sends movie's _id back to deleteMovie function
                        onClick={() => props.deleteMovie(_id)} 
                        className='delete-btn'> 
                        Delete 
                    </button>
                    <button 
                        className='edit-btn'
                    // toggles state to opposite of whatever edit toggle was set to
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}> 
                        Edit Button 
                    </button>
                </>
                :
                <>
                    <AddMovieForm
                        title={title}
                        genre={genre}
                        _id={_id}
                        btnText='Submit Edit'
                    // adds edit functionality to button w/ props.editMovie sent from app.js
                        submit={props.editMovie}
                        setEditToggle={setEditToggle}
                    />
                    <button
                    // toggles state to opposite of whatever edit toggle was set to
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Close
                    </button>
                </>
            }
        </div>
    )
}
