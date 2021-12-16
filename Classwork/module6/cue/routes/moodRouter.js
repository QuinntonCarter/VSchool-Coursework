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
    const newMood = new MoodList({ items: req.body, cueUser: req.user._id })
    MoodList.findOne({cueUser: req.user._id},
        (err, found) => {
            if(err){
                res.sendStatus(500)
                return next(err)
            }
            if(found){
            return MoodList.findByIdAndDelete(found._id, 
                (err, found) => {
                    if(err){
                        res.sendStatus(500)
                        return next(err)
                    }
                    return newMood.save((err, mood) => {
                        if(err){
                            res.status(500)
                            return next(err)
                        }
                        return res.status(201).send(mood)
                    })
                })
        } else {
            // const newMood = new MoodList({ items: req.body, cueUser: req.user._id })
            // console.log(newMood)
            newMood.save((err, mood) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(mood)
            })
        }
    })
});

module.exports = moodRouter