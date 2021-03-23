const express = require('express');
const targetRouter = express.Router();
const Target = require('../models/TargetModel.js');

// GET by affiliation
targetRouter.get('/search/affiliation', (req, res, next) => {
    Target.find({affiliation: req.query.affiliation}, (err, targets) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(targets)
    })
})

// PUT(update) a target
targetRouter.put('/:targetId', (req, res, next) => {
    Target.findOneAndUpdate(
        {id: req.params.targetId},
        req.body,
        {new: true},
        (err, updatedItem) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedItem)
        }
    )
})

// DELETE target
targetRouter.delete('/:targetId', (req, res, next) => {
    Target.findOneAndDelete(
        {id: req.params.targetId}, (err, deletedItem) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted ${deletedItem.firstName} ${deletedItem.lastName} from the database.`)
        }
    )
})

targetRouter.route('/')
    .get((req, res, next) => {
        Target.find((err, targets) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(targets)
        })
    })

    .post((req, res, next) => {
        const newTarget = new Target(req.body)
        newTarget.save((err, savedTarget) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedTarget)
        })
    })

    module.exports = targetRouter