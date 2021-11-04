// pull object id from spotify: use to associate to tracks and albums/eps

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artistSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    genres: {
        type: String,
        required: true
    },
    _id: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Artist", artistSchema);