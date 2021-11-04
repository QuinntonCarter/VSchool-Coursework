const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trackSchema = new Schema({
    artist: {
        type: Schema.Types.ObjectId,
        ref: "Artist"
    },
    album: {
        type: Schema.Types.ObjectId,
        ref: "Album"
    },
    title: {
        type: String,
        required: true
    },
    key: {
        type: String,
        required: true
    },
    bpm: {
        type: Number,
        required: true
    },
    // pull in from Spotify
    _id: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Track", trackSchema)