const express = require("express");
const postRouter = express.Router();
const Post = require("../models/post.js");

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

// GET post by user Id
postRouter.get("/user", (req, res, next) => {
    Post.find({ user: req.user._id }, (err, posts) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(posts)
    })
})

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

// ******** Comments CRUD
// post comment
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
postRouter.put("/:postId/upvote", (req, res, next) => {
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
postRouter.put("/:postId/downvote", (req, res, next) => {
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

module.exports = postRouter