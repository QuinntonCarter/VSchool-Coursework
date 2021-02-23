const express = require('express')
const app = express()

const morgan = require('morgan')


app.use(express.json())

app.use('/targets', require('./routes/targetRouter.js'))
app.use(morgan('dev'))

app.listen(9000, () => {
    console.log("the server is running on port 8500. Over 9000!")
})