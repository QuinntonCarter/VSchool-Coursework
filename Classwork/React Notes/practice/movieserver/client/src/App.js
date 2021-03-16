import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Movie from './components/Movie.js'
import AddMovieForm from './components/AddMovieForm.js'


export default function App(){
    const [movies, setMovies] = useState([])
    // const [error, setErr] = useState()
    // BETA for setting up alert message about error

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
        }

    // receives arg as movieId from Movie component
    function deleteMovie(movieId){
        // finds movie with matching ids route
        axios.delete(`/movies/:${movieId}`)
            .then(res => {
                // filters out movie marked for deletion from list of movies and sets in state w setMovies
                setMovies(prevMovies => prevMovies.filter(movie => movie._id !== movieId))
            })
            .catch(err => console.log(err.response.data.errMsg))
        }

        // receives two arguments, updates and movieId
    function editMovie(updates, movieId){
        axios.put(`/movies/${movieId}`, updates)
            .then(res => {
                setMovies(prevMovies => prevMovies.map(movie => movie._id !== movieId ? movie : res.data))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function handleFilter(e){
        if(e.target.value === 'reset'){
            getMovies()
        } else {
        axios.get(`/movies/search/genre?genre=${e.target.value}`)
            .then(res => setMovies(res.data))
            .catch(err => console.log(err))
        }
    }

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <>
            <div className='movie-container'>
                <AddMovieForm
                // sent add movie function via 'submit' prop
                addMovie={addMovie}
                btnText='Add Movie'
                />

                <h4 className='filter-form'> Filter By Genre </h4>
                <select className='filter-form' onChange={handleFilter}>
                    <option value='reset'> - All Movies - </option>
                    <option value='action'> Action </option>
                    <option value='animation'> Animation </option>
                    <option value='drama'> Drama </option>
                    <option value='fantasy'> Fantasy </option>
                    <option value='horror'> Horror </option>
                    <option value='romance'> Romance </option>
                </select>

                { movies.map(movie => 
                    <Movie 
                    {...movie} 
                    deleteMovie={deleteMovie}
                    editMovie={editMovie}
                    key={movie._id}/>
                )}
            </div>
        </>
    )
}