const express = require('express');
const targetRouter = express.Router();
const Target = require('../models/Target.js');

    
//GET by affiliation
    targetRouter.get('/search/affiliation', (req, res, next) => {
        Target.find({affiliation: req.query.affiliation}, (err, targets) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(targets)
        })
    })

// update target
targetRouter.put('/:targetId', (req, res, next) => {
    Target.findOneAndUpdate({id: req.params.targetId},
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

// delete single target
targetRouter.delete('/:targetId', (req, res, next) => {
    Target.findOneAndDelete({id: req.params.targetId}, (err, deletedTarget) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted target.`)
    })
})

// get all bounties
targetRouter.route('/')
    .get((req, res, next) => {
        Target.find((err, targets) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(targets)
        })
    }
)

// add bounty target
    .post((req, res, next) => {
        const newTarget = new Target(req.body)
        newTarget.save((err, savedTarget)=> {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedTarget)
        })
    })


module.exports = targetRouter