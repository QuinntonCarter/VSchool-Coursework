const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    imgSrc: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Meme", memeSchema)