const express = require('express');
const app = express();
require('dotenv').config();
const morgan = require('morgan');
const mongoose = require('mongoose');
const axios = require('axios');

const port = 9000

app.use(express.json());
app.use(morgan('dev'));

mongoose.connect(
    'mongodb://localhost:27017/memeGen',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log('Connected to the meme DB')
)

app.use('/db', require('./routes/memeRouter.js'));

app.get('/resources', (req, res, next) => {
    axios({
        method: 'GET',
        url: 'https://api.imgflip.com/get_memes',
        headers: {
            // 'Access-Control-Allow-Origin': 'http://localhost:9000, http://localhost:9000/memes, http://localhost:9000/db, http://localhost:9000/resources',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Request-With, Content-Type, Accept'
        },
    })
    .then(response => res.send(response.data))
    .catch(err => console.log(err))
})

app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }   
    return res.send({errMsg: err.message})
})

app.listen(port, () => {
    console.log(`Server is running on local port ${port}`)
})