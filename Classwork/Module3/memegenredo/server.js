const express = require('express');
const app = express();
require('dotenv').config();
const morgan = require('morgan');
const mongoose = require('mongoose');
const axios = require('axios');

const {
    PORT,
    GET_URL,
    POST_URL,
    USERNAME,
    PASSWORD
} = process.env

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
        url: GET_URL,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Request-With, Content-Type, Accept'
        },
    })
    .then(response => res.send(response.data))
    .catch(err => console.log(err))
})

app.get('/create', (req, res, next) => {
    axios({
        method: 'POST',
        url: POST_URL,
        params: {
            username: USERNAME,
            password: PASSWORD,
            font: 'impact',
            text0: req.query.text0,
            text1: req.query.text1,
            template_id: req.query.template_id
        },
        headers: {
            // ** for dev **
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Request-With, Content-Type, Accept'
        }
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

app.listen(PORT, () => {
    console.log(`Server is running on local port ${PORT}`)
})