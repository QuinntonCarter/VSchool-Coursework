const express = require('express')
const todoRouter = express.Router()
const { v4: uuidv4 } = require('uuid')


const todos = [

]

todoRouter.get('/:todoId', (req, res) => {
    const todoId = req.params.todoId
    const foundItem = todos.find(item => item._id === todoId)
    res.send(foundItem)
})



todoRouter.route('/')
    .get((req, res) => {
        res.send(todos)
    })
    .post((req, res) => {
        const newTodo = req.body
        newTodo._id = uuidv4()
        todos.push(newTodo)
        res.send(`Successfully added ${newTodo.name}!`)
    })

