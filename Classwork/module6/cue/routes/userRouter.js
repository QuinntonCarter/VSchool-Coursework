const express = require('express');
const userRouter = express.Router();
const User = require('../models/user.js');
const List = require('../models/list.js');

// GET all users via query
userRouter.get('/', (req, res, next) => {
if(req.query.type === 'friend'){
    User.find({ username: req.query.inputs },
        { isAdmin: 0, password: 0 },
        (err, users) => {
            if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(users)
    })} else if(req.query.type === 'mood'){
        List.find({ mood: req.query.inputs },
            (err, lists) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send('lists will return here but how to sort them?')
                // return res.status(200).send(lists)
            })
    } else if (req.query.id){

    }
})

module.exports = userRouter