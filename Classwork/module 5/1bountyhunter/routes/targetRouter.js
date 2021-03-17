const express = require('express')
const targetRouter = express.Router()
const Target = require('../models/Target.js')

// const targets = [
//     {firstName: 'Obi-Wan', lastName: 'Kenobi', status: 'Alive', affiliation: 'Jedi'},
//     {firstName: 'Darth', lastName: 'Vader', status: 'Alive', affiliation: 'Sith'},
//     {firstName: 'Mace', lastName: 'Windu', status: 'Alive', affiliation: 'Jedi'},
//     {firstName: 'Minch', lastName: 'Yoda', status: 'Alive', affiliation: 'Jedi'}
// ]

// get all bounties
targetRouter.route('/')
    .get((req, res, next) => {
        Targets.find((err, targets) => {
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
        const newTarget = req.body
        Targets.save((err, savedTarget)=> {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(newTarget)
        })
    })
    
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
    Targets.findOneAndUpdate({id: req.params.targetId},
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
targetRouter.delete('/:targetId', (req,res) => {
    Target.findOneAndDelete({id: req.params.targetId}, (err, deletedTarget) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedTarget.firstName} ${deletedTarget}.`)
    })
})


module.exports = targetRouter