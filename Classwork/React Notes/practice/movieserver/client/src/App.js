import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Movie from './components/Movie.js'
import AddMovieForm from './components/AddMovieForm.js'


export default function App(){
    const [movies, setMovies] = useState([])
    // BETA for setting up alert message about error
    // const [error, setErr] = useState()

    // pulls movie array from database and returns it as res.data
    function getMovies(){
        axios.get('/movies')
        // sets data w setMovies
            .then(res => setMovies(res.data))
            // console.logs errors
            .catch(err => console.log(err.response.data.errMsg))
    }

    // receives newMovie as arg
    function addMovie(newMovie){
        axios.post('/movies', newMovie)
        // prevMovies returns array which includes newMovie (res.data) and all prevMovies
            .then(res => {
                setMovies(prevMovies => [...prevMovies, res.data])
            })
            .catch(err => console.log(err))
            // BETA for setting alert about POST error
            //     setErr({errMsg: err})
            //     if(error){
            //         console.log(error.errMsg)
            //     }
            // })
    }

        // receives arg as movieId from Movie component
    function deleteMovie(movieId){
        // finds movie with matching ids route
        axios.delete(`/movies/:${movieId}`)
            .then(res => {
                // filters out movie marked for deletion from list of movies and sets in state w setMovies
                setMovies(prevMovies => prevMovies.filter(movie => movie._id !== movieId))
            })
            .catch(err => console.log(err))
        }

        // receives two arguments, updates and movieId
    function editMovie(updates, movieId){
        axios.put(`/movies/${movieId}`, updates)
            .then(res => {
                setMovies(prevMovies => prevMovies.map(movie => movie._id !== movieId ? movie : res.data))
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <>
            <div className='movie-container'>
                <AddMovieForm
                // sent add movie function via 'submit' prop
                submit={addMovie}
                btnText='Add Movie'
                />
                { movies.map(movie => 
                    <Movie 
                    {...movie} 
                    deleteMovie={deleteMovie}
                    editMovie={editMovie}
                    key={movie.title}/>
                )}
            </div>
        </>
    )
}