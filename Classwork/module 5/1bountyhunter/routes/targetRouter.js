const express = require('express')
const targetRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const targets = [
    {firstName: 'Obi-Wan', lastName: 'Kenobi', living: 'Yes', affiliation: 'Jedi', _id: uuidv4()},
    {firstName: 'Darth', lastName: 'Vader', living: 'Yes', affiliation: 'Sith', _id: uuidv4()},
    {firstName: 'Mace', lastName: 'Windu', living: 'Yes', affiliation: 'Jedi', _id: uuidv4()},
    {firstName: 'Minch', lastName: 'Yoda', living: 'Yes', affiliation: 'Jedi', _id: uuidv4()}
]

// get all bounties
targetRouter.route('/')
    .get((req, res) => {
        res.send(targets)
    })
// add bounty target
    .post((req, res) => {
        const newTarget = req.body
        newTarget._id = uuidv4()
        targets.push(newTarget)
        res.send(`Successfully added ${newTarget.firstName+' '+newTarget.lastName} to the hit list!`)
    })
    
    // PART 2
// update target
targetRouter.put('/:targetId', (req, res) => {
    const targetId = req.params.targetId
    const targetIndex = targets.findIndex(targets => targets._id === targetId)
    const updatedTarget = Object.assign(targets[targetIndex], req.body)
    res.send(updatedTarget)
})
// delete single target
targetRouter.delete('/:targetId', (req,res) => {
    const targetId = req.params.targetId
    const targetIndex = targets.findIndex(targets => targets._id === targetId)
    targets.splice(targetIndex,1)
    res.send('Successfully deleted target')
})



module.exports = targetRouter