const express = require('express');
const listsRouter = express.Router();
const List = require('../models/list.js');

// GET all lists
listsRouter.get("/", (req, res, next) => {
    List.find((err, lists) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(lists)
    })
})

// ** revisit sending params and queries **
// GET all lists by user
listsRouter.get("/search/:userId", (req, res, next) => {
    List.find({ user: req.params.userId },
        (err, lists) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(lists)
    })
})

// // GET all lists by type (yearly, month, biannual)
// listsRouter.get("/lists/:type", (req, res, next) => {
//     res.send('get lists placeholder')
    
// })

// // POST your list to the db
// listsRouter.post("/", (req, res, next) => {
//     res.send('post placeholder')
// })

// listsRouter.delete("/:listId", (req, res, next) => {
//     List.findOneAndDelete(
//         {_id: req.params.listId , user: req.user._id},
//         (err, deletedList) => {
//             if(err){
//                 res.status(500)
//                 return next(err)
//             }
//             return res.status(200).send(`Successfully deleted list: ${deletedList._id}`)
//         }
//     )
// })

module.exports = listsRouter