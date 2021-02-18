const express = require('express')
const app = express()

app.use(express.json())

app.use('/todo', require('./routes/todoRouter.js'))

app.listen(8500, () => {
    console.log("< server running on 8500 >")
})