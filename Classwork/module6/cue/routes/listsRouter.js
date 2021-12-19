const express = require('express');
const listsRouter = express.Router();
const List = require('../models/list.js');

// GET all lists
listsRouter.get(`/`, (req, res, next) => {
    List.find((err, lists) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(lists)
    })
});

// GET users' recent and all user's friends' lists
listsRouter.get('/', (req, res, next) => {
    if(req.query.type === 'friends'){
        List.find({ cueUser: { $in: req.user.friends }},
            (err, friendMood) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send(friendMood)
    })} else if(req.query.type === 'user') {
        // query current user's recent posts
        List.find({ cueUser: req.user._id },
            { isAdmin: 0, password: 0 },
            (err, friends) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(friends)
            })
    }
});

// POST your list to the db
listsRouter.post(`/`, (req, res, next) => {
    req.body.cueUser = req.user._id
    const newList = new List(req.body)
    newList.save((err, savedList) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedList)
    })
});

// ** revisit sending params and queries **
// GET all lists by user
// listsRouter.get("/search", (req, res, next) => {
//     List.find({ user: req.query.userLists },
//         (err, lists) => {
//         if(err){
//             res.status(500)
//             return next(err)
//         }
//         return res.status(200).send(lists)
//     })
// });

listsRouter.delete("/:listId", (req, res, next) => {
    List.findOneAndDelete(
        { _id: req.params.listId , user: req.user._id },
        (err, deletedList) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted list: ${deletedList._id}`)
        }
    )
});

module.exports = listsRouter