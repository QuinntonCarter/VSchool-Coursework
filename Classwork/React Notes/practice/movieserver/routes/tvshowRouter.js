const express = require('express')
const tvshowRouter = express.Router()
// const { v4: uuidv4 } = require('uuid')


const tvshows = [
    // {title: 'The Midnight Gospel', _id: uuidv4()},
    // {title: 'Euphoria', _id: uuidv4()},
    // {title: 'The Sopranos', _id: uuidv4()},
    // {title: 'My Hero Academia', _id: uuidv4()}
]

// tvshowRouter.get("/", (req,res) => { 
//     res.send(tvshows)
// })

// tvshowRouter.post("/", (req, res) => {
//     const newShow = req.body
//     newShow._id = uuidv4()
//     tvshows.push(newShow)
//     res.send(`Successfully added ${newShow.title} to the database!`)
// })

// * alt syntax : method chaining w .route() * //
    // get one show
tvshowRouter.get('/:tvshowId', (req,res) => {
    const tvshowId = req.params.tvshowId
    const foundshow = tvshows.find(show => show._id === tvshowId)
    res.send(foundshow)
})
    // Delete one show
.delete('/:tvshowId', (req,res) => {
    const tvshowId = req.params.tvshowId
    const tvshowIndex = tvshows.findIndex(show => show._id === tvshowId)
    tvshows.splice(tvshowIndex, 1)
    res.send('Successfully deleted tv show!')
})
    // Update one show
.put('/:tvshowId', (req,res) => {
    const tvshowId = req.params.tvshowId
    const tvshowIndex = tvshows.findIndex(show => show._id === tvshowId)
    const updatedtvShow = Object.assign(tvshows[tvshowIndex], req.body)
    res.send(updatedtvShow)
})

tvshowRouter.route('/')
    // get all shows
    .get((req,res) => { 
        res.send(tvshows)
    })
    // add tv show
    .post((req, res) => {
        const newShow = req.body
        newShow._id = uuidv4()
        tvshows.push(newShow)
        res.send(`Successfully added ${newShow.title} to the database!`)
    })

module.exports = tvshowRouter