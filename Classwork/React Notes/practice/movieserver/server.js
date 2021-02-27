    // First express server
const express = require('express')
const app = express()
    // logger
const morgan = require('morgan')


    // Middleware (for every request) //
app.use(express.json()) // looks for a request body, and turns it into 'req.body'
app.use(morgan('dev')) // Logs requests to the console.

    // Routes //
app.use('/movies', require('./routes/movieRouter.js'))
app.use('/tvshows', require('./routes/tvshowRouter.js'))


    // Error //
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

    // Server Listen //
        // arg1. port arg2. callback function (CB)
app.listen(7000, () => {
    console.log("the server is running on port 7000")
})