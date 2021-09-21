//  might not need this, can use post router?

// const express = require("express");
// const commentRouter = express.Router();
// const Comment = require("../models/comment.js");


// // POST new comment
// postRouter.post(`/:postId/comments/:commentId`, (req, res, next) => {
//     req.body.user = req.user._id
//     const newComment = new Comment(req.body)
//     newComment.save((err, savedComment) => {
//         if(err){
//             res.status(500)
//             return next(err)
//             }
//             return res.status(201).send(savedComment)
//     })
// })

// // DELETE comment
// commentRouter.delete(`/:commentId`, (req, res, next) => {
//     Comment.findOneAndDelete(
//         { _id: req.params.commentId, user: req.user._id },
//         (err, deletedPost) => {
//         if(err){
//             res.status(500)
//             return next(err)
//         }
//         return res.status(200).send(`Successfully delete post: ${deletedPost.title}`)
//         }
//     )
// })
