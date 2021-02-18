const express = require('express')
const todoRouter = express.Router()
const { v4: uuidv4 } = require('uuid')


const todos = [
{name: 'drink yerba mate',
description: 'wakwtfgo GLUG',
imageUrl: 'https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator-latam.com/article/2018/10/22/guayaki-eyes-yerba-mate-expansion-with-organic-and-sustainable-messaging/8748424-1-eng-GB/Guayaki-eyes-yerba-mate-expansion-with-organic-and-sustainable-messaging.jpg',
completed: true,
_id: '1337h4ck3rl0l'
}, 
{name: 'eat food',
description: 'something healthy without too much sugar',
imageUrl: 'https://californiaavocado.com/wp-content/uploads/2020/07/California-Avocado-Toast-Three-Ways.jpeg',
completed: true,
_id: '347f00dn00b'
}
]
    // get item by ID
todoRouter.get('/:todoId', (req, res) => {
    const todoId = req.params.todoId
    const foundTodo = todos.find(todo => todo._id === todoId)
    res.send(foundTodo)
})
    // delete by ID
todoRouter.delete('/:todoId', (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    todos.splice(todoIndex, 1)
    res.send('Successfully removed item')
})
    // update item by ID
todoRouter.put('/:todoId', (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(todos[todoIndex], req.body)
    res.send(`Successfully updated item, ${updatedTodo.name}!`)
})

todoRouter.route('/')
    .get((req, res) => {
        res.send(todos)
    })
    .post((req, res) => {
        const newTodo = req.body
        newTodo._id = uuidv4()
        todos.push(newTodo)
        res.send(`Successfully added ${newTodo.name} to the list!`)
    })


module.exports = todoRouter