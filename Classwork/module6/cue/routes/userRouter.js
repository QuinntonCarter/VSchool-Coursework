const express = require('express');
const userRouter = express.Router();
const User = require('../models/user.js');

// GET all users
userRouter.get('/', (req, res, next) => {
    console.log(req.query.username)
    // User.find((err, users) => {
    //     if(err){
    //         res.status(500)
    //         return next(err)
    //     }
    //     return res.status(200).send(users)
    // })
})

userRouter.get('/search/:username', (req, res, next) => {
    User.find({ username: req.params.username },
        (err, users) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(users)
        })
})

module.exports = userRouter