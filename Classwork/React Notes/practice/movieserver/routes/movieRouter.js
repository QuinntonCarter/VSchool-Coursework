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
movieRouter.get('/:movieId', (req, res, next) => {
    const movieId = req.params.movieId
    const foundMovie = movies.find(movie => movie._id === movieId)
    if(!foundMovie){
        // * async syntax
        const error = new Error(`The movie with id ${movieId} was not found`)
        res.status(500)
        return next(error)
        // ** synchronous syntax
        // ** throw new Error(`No movie with matching id of ${movieId} was found.`)
        
    }
    res.status(200).send(foundMovie)
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
        res.status(201).send(updatedMovie)
    })

    // Get by genre
movieRouter.get('/search/genre', (req,res, next) => {
    const genre = req.query.genre
    const foundMovies = movies.filter(movie => movie.genre === genre)
    if(!genre){
        // * async syntax
        const error = new Error('Must provide a genre!')
        res.status(500)
        return next(error)
        // ** synchronous syntax
        // ** throw new Error('Must provide a genre!')
    }
    res.status(200).res.send(foundMovies)
})

movieRouter.route('/')
// Get all movies
    .get((req,res) => {
        res.status(200).send(movies)
    })
// Post one movie
    .post((req,res) => {
        const newMovie = req.body
        newMovie._id = uuidv4()
        movies.push(newMovie)
        res.status(201).send(newMovie)
    })

module.exports = movieRouter