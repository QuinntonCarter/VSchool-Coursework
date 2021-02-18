const express = require('express')
const middlewareRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const greeting = []

middlewareRouter.get('/', (req, res, next) => {
    const item = req.body
    item._id = uuidv4()
    greeting.push(item)
    // res.send('saved greeting')
    res.send(greeting)
    next()
})


module.exports = middlewareRouter