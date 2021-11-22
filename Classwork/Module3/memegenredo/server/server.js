const express = require('express');
const app = express();
require('dotenv').config();
const morgan = require('morgan');
const mongoose = require('mongoose');

const port = 8000

app.use(express.json());
app.use(morgan('dev'));

mongoose.connect(
    'mongoose://localhost:27017/memeGen',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log('Connected to the meme DB')
)

app.use('/db', require('./routes/memeRouter.js'));

app.listen(port, () => {
    console.log(`Server is running on local port ${port}`)
})