const express = require('express')
const todoRouter = express.Router()
const { v4: uuidv4 } = require('uuid')


const todos = [
{name: 'drink yerba mate',
description: 'wakwtfgo GLUG',
imageUrl: 'https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator-latam.com/article/2018/10/22/guayaki-eyes-yerba-mate-expansion-with-organic-and-sustainable-messaging/8748424-1-eng-GB/Guayaki-eyes-yerba-mate-expansion-with-organic-and-sustainable-messaging.jpg',
completed: true,
_id: uuidv4()
}, 
{name: 'eat food',
description: 'something healthy without too much sugar',
imageUrl: 'https://californiaavocado.com/wp-content/uploads/2020/07/California-Avocado-Toast-Three-Ways.jpeg',
completed: true,
_id: uuidv4()
}
]

    // get single todo item
todoRouter.get('/:todoId', (req, res) => {
    const todoId = req.params.todoId
    const foundItem = todos.find(todo => todo._id === todoId)
    res.send(foundItem)
})
// delete single item
    .delete('/:todoId', (req,res) => {
    const todoId = req.params.todoId
    const itemIndex = todos.findIndex(todo => todo._id === todoId)
    todos.splice(itemIndex, 1)
    res.send('Sucessfully removed item from the list!')
    })
// update single item
    .put('/:todoId', (req, res) => {
        const todoId = req.params.todoId
        const itemIndex = todos.findIndex(item => item._id === todoId)
        const updatedTodo = Object.Assign(todos[itemIndex], req.body)
        res.send(`Successfully updated ${updatedTodo.name}!`)
    })


todoRouter.route('/')
// get all todos
    .get((req, res) => {
        res.send(todos)
    })
// add new todo item
    .post((req, res) => {
        const newTodo = req.body
        newTodo._id = uuidv4()
        todos.push(newTodo)
        res.send(`Successfully added ${newTodo.name} to the list!!`)
    })

module.exports = todoRouter