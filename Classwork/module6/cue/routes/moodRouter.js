const express = require('express');
const moodRouter = express.Router();
const MoodList = require('../models/moodList.js');

// GET all users' friends
moodRouter.get('/', (req, res, next) => {
    MoodList.find({ friends: req.user._id},
        // find req.user's id in friends array
        (err, friends) => {
            if(err){
                res.sendStatus(500)
                return next(err)
            }
            return res.sendStatus(200).send(friends)
        })
});

// POST new mood and overwrite previous
moodRouter.post('/', (req, res, next) => {
    MoodList.find({cueUser: req.user._id},
        (err, found) => {
            if(err){
                res.sendStatus(500)
                return next(err)
            }
            return res.sendStatus(200).send(found)
        })
    })

module.exports = moodRouter