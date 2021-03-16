const express = require('express');
const inventoryRouter = express.Router();
const Item = require('../models/item.js')


// GET by price
    // inventoryRouter.get('/search/price', (req, res, next) => {
    //     Item.find({price: req.query.price}, (err, items) => {
    //         if (err){
    //             res.status(500)
    //             return next(err)
    //         }
    //         return res.status(200).send(items)
    //     })
    // })

// GET by type
inventoryRouter.get('/search/dept', (req, res, next) => {
    Item.find({dept: req.query.dept}, (err, items) => {
        if (err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(items)
    })
})

// PUT(update) an item
    inventoryRouter.put('/:itemId', (req, res, next) => {
        Item.findOneAndUpdate(
            {_id: req.params.ItemId},
            req.body,
            {new: true},
            (err, updatedItem) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                res.status(201).send(updatedItem)
            }
        )
    })

// DELETE movie
    inventoryRouter.delete('/:itemId', (req, res, next) => {
        Item.findOneAndDelete({_id: req.params.itemId}, (err, deletedItem) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted ${deletedItem.name} from the database!`)
        })
    })


inventoryRouter.route('/')
// GET inventory of items
    .get((req, res, next)=> {
        Item.find((err, items) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(items)
        })
    })

// POST new item
    .post((req, res, next)=> {
        const newItem = new Item(req.body)
        newItem.save((err, savedItem) => {
            if(err){
            res.status(500)
            return next(err)
            }
            return res.status(201).send(savedItem)
        })
    })

module.exports = inventoryRouter