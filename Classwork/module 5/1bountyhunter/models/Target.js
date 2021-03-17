const mongoose = require('mongoose')
const Schema = mongoose.Schema

const targetSchema = new Schema({
    firstName : {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Dead', 'Alive', 'Missing'],
        required: true
    },
    affiliation: {
        type: String,
        enum: ['Sith', 'Jedi'],
        required: true
    }
})

module.exports = mongoose.model('Target', targetSchema);