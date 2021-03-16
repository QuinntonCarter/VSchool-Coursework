const express = require('express')
const movieRouter = express.Router()
const Movie = require('../models/movie.js')

// movieRouter.get("/", (req,res) => { 
//     res.send(movies)
// })

// movieRouter.post("/", (req, res) => {
//     const newMovie = req.body
//     newMovie._id = uuidv4()
//     movies.push(newMovie)
//     res.send(`Successfully added ${newMovie.title} to the database!`)
// })

// *** alt syntax : method chaining wih .route()  *** //

    // Get one movie
// movieRouter.get('/:movieId', (req, res, next) => {
//     const movieId = req.params.movieId
//     const foundMovie = movies.find(movie => movie._id === movieId)
//     if(!foundMovie){
//         // * async syntax
//         const error = new Error(`The movie with id ${movieId} was not found`)
//         res.status(500)
//         return next(error)
//         // ** synchronous syntax
//         // ** throw new Error(`No movie with matching id of ${movieId} was found.`)
        
//     }
//     res.status(200).send(foundMovie)
// })
// Delete one movie
    movieRouter.delete('/:movieId', (req,res, next) => {
        Movie.findOneAndDelete({_id: req.params.movieId}, (err, deletedItem) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted ${deletedItem.title} from the database!`)
        })
    })

// Update One movie
    movieRouter.put('/:movieId', (req, res, next) => {
        Movie.findOneAndUpdate(
            {_id: req.params.movieId}, // find this one to update
            req.body, // update the object with this data
            {new: true}, // send back the updated version of object
            (err, updatedItem) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                res.status(201).send(updatedItem)
            }
        )
    })

// Get by genre
    movieRouter.get('/search/genre', (req,res, next) => {
        Movie.find({ genre: req.query.genre}, (err, movies) => {
            if (err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(movies)
        })
    })

movieRouter.route('/')
// Get all movies
    .get((req, res, next) => {
        Movie.find((err, movies) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(movies)
        })
    })
// Post one movie
    .post((req,res, next) => {
        const newMovie = new Movie(req.body)
        newMovie.save((err, savedMovie) => {
            if (err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedMovie)
        })
    })

module.exports = movieRouter