const express = require('express')
const app = express()

app.use(express.json())

app.use('/targets', require('./routes/targetRouter.js'))

app.listen(9500, () => {
    console.log("the server is running on port 9500. Over 9000!")
})