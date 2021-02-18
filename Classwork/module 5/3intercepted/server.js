const express = require('express')
const app = express()


app.use(express.json())

app.use('/', (req, res, next) => {
    console.log('running first use')
    next()
})

app.use('/', (req, res, next) => {
    console.log('running get')
    req.body = {title: "h3ll0 w0rld!"}
    next()
})

app.use('/greeting', require('./routes/middlewareRouter.js'))

app.use('/', () => {
    console.log('finished')
})


app.listen(8000, () => {
    console.log('middleware test server is running on port 8000!')
})