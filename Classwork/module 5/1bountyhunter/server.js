const express = require('express')
const app = express()

const morgan = require('morgan')
const mongoose = require('mongoose')


app.use(express.json())
app.use(morgan('dev'))

// Connect to databases //
mongoose.connect('mongodb://localhost:27017/targetdb',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
)
.then(console.log('Connected to the Target Database!'))
.catch(err => console.log(err))

    // Routes //
app.use('/targets', require('./routes/targetRouter.js'))

    // Error //
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log("the server is running on port 9000!!")
})