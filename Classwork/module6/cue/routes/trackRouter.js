const express = require('express');
const tracksRouter = express.Router();
const Tracks = require('../models/list.js');

// get all tracks saved by user
tracksRouter.get('/', (req, res, next) => {
    
})

// get all tracks by specific artist
tracksRouter.get('/:artistId', (req, res, next) => {

})


module.exports = tracksRouter