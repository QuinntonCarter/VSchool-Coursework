const express = require('express')
const app = express()

const morgan = require('morgan')
const mongoose = require('mongoose')


app.use(express.json())
app.use(morgan('dev'))

// Connect to databases
mongoose.connect('mongodb://localhost:27017/targetdb',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
)

app.use('/targets', require('./routes/targetRouter.js'))

app.listen(9000, () => {
    console.log("the server is running on port 9000!!")
})