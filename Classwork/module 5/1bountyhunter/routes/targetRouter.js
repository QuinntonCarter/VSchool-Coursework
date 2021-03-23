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

// GET by status
targetRouter.get('/search/status', (req, res, next) => {
    Target.find({status: req.query.status}, (err, targets) => {
        if(err){
            res.status(500)
            return next(err)
        }
        res.status(200).send(targets)
    })
})

// PUT(update) a target
targetRouter.put('/:targetId', (req, res, next) => {
    Target.findOneAndUpdate(
        {_id: req.params.targetId},
        req.body,
        {new: true},
        (err, updatedTarget) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedTarget)
        }
    )
})

// DELETE target
targetRouter.delete('/:targetId', (req, res, next) => {
    Target.findOneAndDelete(
        {_id: req.params.targetId}, (err) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted target from the database.`)
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