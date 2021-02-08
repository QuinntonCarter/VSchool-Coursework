const express = require('express')
const movieRouter = express.Router()
const { v4: uuidv4 } = require('uuid')


const movies = [
    {title: "Kill Bill Vol. 1", genre: "action", _id: uuidv4()},
    {title: "Kill Bill Vol. 2", genre: "action", _id: uuidv4()},
    {title: "Your Name", genre: "romance", _id: uuidv4()},
    {title: "Ghost World", genre: "comedy", _id: uuidv4()}
]

// movieRouter.get("/", (req,res) => { 
//     res.send(movies)
// })

// movieRouter.post("/", (req, res) => {
//     const newMovie = req.body
//     newMovie._id = uuidv4()
//     movies.push(newMovie)
//     res.send(`Successfully added ${newMovie.title} to the database!`)
// })

// * alt syntax : method chaining wih .route()  * //

    // Get one movie
movieRouter.get('/:movieId', (req, res) => {
    const movieId = req.params.movieId
    const foundMovie = movies.find(movie => movie._id === movieId)
    res.send(foundMovie)
})
// Delete one movie
    .delete('/:movieId', (req,res) => {
        const movieId = req.params.movieId
        const movieIndex = movies.findIndex(movie => movie._id === movieId)
        movies.splice(movieIndex, 1)
        res.send('Successfully deleted movie!')
    })
// Update One movie
    .put('/:movieId', (req, res) => {
        const movieId = req.params.movieId
        const movieIndex = movies.findIndex(movie => movie._id === movieId)
        const updatedMovie = Object.assign(movies[movieIndex], req.body)
        res.send(updatedMovie)
    })

    // Get by genre
movieRouter.get('/search/genre', (req,res) => {
    const genre = req.query.genre
    const foundMovies = movies.filter(movie => movie.genre === genre)
    res.send(foundMovies)
})

movieRouter.route('/')
// Get all movies
    .get((req,res) => {
        res.send(movies)
    })
// Post one movie
    .post((req,res) => {
        const newMovie = req.body
        newMovie._id = uuidv4()
        movies.push(newMovie)
        res.send(`Successfully added ${newMovie.title} to the database!`)
    })

module.exports = movieRouter