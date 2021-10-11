const express = require("express");
const postRouter = express.Router();
const Post = require("../models/post.js");


// ******** GETs for post retrieval
// GET All posts
postRouter.get("/", (req, res, next) => {
    Post.find((err, posts) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(posts)
    })
})

// GET posts by a user's Id
postRouter.get("/user/:userId", (req, res, next) => {
    Post.find({ user: req.params.userId }, (err, posts) => {
        if(err){
            res.status(500)
            return console.log(err)
        }
        return res.status(200).send(posts)
    })
})

// ******** Posts CRUD
// postRouter.get("/user?profile=:userId", (req, res, next) => {
//     Post.find({ user: req.params.userId }, (err, posts) => {
//         if(err){
//             res.status(500)
//             return next(err)
//         }
//         return res.status(200).send(posts)
//     })
// })

// POST new post
postRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id
    req.body.userString = req.user.username
    const newPost = new Post(req.body)
    newPost.save((err, savedPost) => {
        if(err){
            res.status(500)
            return next(err)
            }
        return res.status(201).send(savedPost)
    })
})

// ******** Comments CRUD ** 
// operations work top down, remember when debugging to consider this + the way you choose to order functions ********
// PUT comment
postRouter.put(`/:postId`, (req, res, next) => {
    Post.findByIdAndUpdate(
        { _id: req.params.postId },
        { $push:
            { comment: req.body }
        },
        { new: true },
        (err, postWComment) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(postWComment)
        }
    )
})

// DELETE post
postRouter.delete(`/:postId`, (req, res, next) => {
    Post.findOneAndDelete(
        { _id: req.params.postId, user: req.user._id },
        (err, deletedPost) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted post: ${deletedPost.title}`)
        }
    )
})

// increment vote
postRouter.put("/upvote/:postId", (req, res, next) => {
    Post.findOneAndUpdate({ _id: req.params.postId },
        { $inc: { votes: 1 }, 
        $push: { votedUsers: 
            { $each: [req.user.username]}
        }},
        { new: true },
        (err, updatedPost) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedPost)
        }
    )
})

// decrement vote
postRouter.put("/downvote/:postId", (req, res, next) => {
    Post.findOneAndUpdate({ _id: req.params.postId },
        { $inc: { votes: -1 }, 
        $push: { votedUsers: 
            { $each: [req.user.username] } 
        }},
        { new: true },
        (err, updatedPost) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedPost)
        }
        )
    })
    
// DELETE comment
postRouter.put(`/:postId/:comId`, (req, res, next) => {
    const delCom = req.params.comId
    Post.findOneAndUpdate(
        { _id: req.params.postId},
        { $pull: 
            { comment: { _id: delCom } }
        },
        (err, postNoComment) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(postNoComment)
        }
    )
})

module.exports = postRouter