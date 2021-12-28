const express = require('express');
const userRouter = express.Router();
const User = require('../models/user.js');
const List = require('../models/list.js');

// GET users or item via db query
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
    })}
    if(req.query.type === 'results'){
        List.findOne({ _id: req.query.id }, 
            (err, results) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send(results)
            })
        } else if(req.query.type === 'user'){
        User.findOne({ _id: req.query.id },
            { isAdmin: 0, password: 0 },
            (err, users) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send(users)
            })
        }
    });
    
    // follow status update
    userRouter.post(`/friends`, (req, res, next) => {
        if(req.body.params.type === 'follow'){
            if(req.user._id === req.body.params.id){
                res.status(500)
            return next(`You can't follow yourself`)
        } else {
            User.findByIdAndUpdate(req.user._id, {
                $push: { 
                    friends: [req.body.params.id]
                }
            },
            { new: true },
            (err, updatedFriends) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(updatedFriends)
            })}} else if(req.body.params.type === 'unfollow'){
                User.findByIdAndUpdate(req.user._id, {
                    $pull: { 
                        friends: { $in: [req.body.params.id] }
                    }
                },
                { new: true },
                (err, updatedFriends) => {
                    if(err){
                        res.status(500)
                        return next(err)
                    }
                    return res.status(201).send(updatedFriends)
                })}
            });

    userRouter.delete(`/removeAcc`, (req, res, next) => {
    User.findByIdAndDelete( req.user._id ,
        (err, found) => {
            if(err){
                res.status(500)
                return next(err)
            }
            console.log(found)
            // if(req.user._id === found){
            //     console.log(found)
            // }
        })
    });
            
module.exports = userRouter