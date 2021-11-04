const express = require('express');
const listsRouter = express.Router();
const Lists = require('../models/list.js');

// get all lists (if public)
listsRouter.get("/", (req, res, next) => {
    
})

// get all lists by user
listsRouter.get("/:userId", (req, res, next) => {
    
})

// get all lists featuring track
listsRouter.get("/:trackId", (req, res, next) => {
    
})


module.exports = listsRouter