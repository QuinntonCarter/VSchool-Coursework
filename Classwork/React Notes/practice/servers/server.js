    // First express server
const express = require('express')
const app = express()


    // Middleware (for every request) //
app.use(express.json()) // looks for a request body, and turns it into 'req.body'

    // Routes //
app.use('/movies', require('./routes/movieRouter.js'))
app.use('/tvshows', require('./routes/tvshowRouter.js'))

    // Server Listen //
        // arg1. port arg2. callback function (CB)
app.listen(9000, () => {
    console.log("the server is running on port 9000")
})