const mongoose = require('mongoose')
const Schema = mongoose.Schema


const targetSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    affiliation: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'Alive'
    }
})

module.exports = mongoose.model('Target', targetSchema)