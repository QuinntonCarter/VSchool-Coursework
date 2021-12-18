const express = require('express');
const userRouter = express.Router();
const User = require('../models/user.js');
const List = require('../models/list.js');
const MoodList = require('../models/moodList.js');

// GET all users via query
userRouter.get('/', (req, res, next) => {
if(req.query.type === 'friend'){
    // * can grab from query here but below is passed the same and grabbed as params... *
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
    } else if(req.query.type === 'user' ){
        User.findOne({ _id: req.query.id },
            { isAdmin: 0, password: 0 },
            (err, users) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send(users)
        })
    } else if(req.query.type === 'status'){
        // find users whose friend array contains the requesting user's _id **
        User.find({ friends: req.user._id },
            { isAdmin: 0, password: 0 },
            (err, friends) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(friends)
            })
    }
})

// userRouter.get('/findFriends', (req, res, next) => {
//     User.find({ friends: req.user._id },
        //     { isAdmin: 0, password: 0 },
        //     (err, friends) => {
        //         if(err){
        //             res.status(500)
        //             return next(err)
        //         }
        //         return friends.map(friend => 
        //             List.find({ cueUser: friend._id },
        //             (err, friendLists) => {
        //                 if(err){
        //                     res.status(500)
        //                     return next(err)
        //                 }
        //                 return MoodList.find({ cueUser: friend._id },
        //                     (err, moods) => {
        //                         if(err){
        //                             res.status(500)
        //                             return next(err)
        //                         }
        //                         return res.status(200).send(moods, friendLists)
        //                 })
        //             })
        //         )
        //     }
        // )
// })

// ** need to test **
userRouter.post(`/friends`, (req, res, next) => {
    // ** watch for problems. being sent as params here but not being sent as params in above and being grabbed as query in above
    if(req.body.params.type === 'follow'){
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
    })} else if(req.body.params.type === 'unfollow'){
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
    })
    }
});

module.exports = userRouter