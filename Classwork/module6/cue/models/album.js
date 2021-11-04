// this model should be saved into db when user saves track
// can be used for EP and compilation
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// https://mongoosejs.com/docs/populate.html#:~:text=All%20_id%20s%20we%20store,good%20reason%20for%20doing%20so.
// review this ^ to potentially implement populate artist names: populates artist as Object

const albumSchema = new Schema({
    artist: {
        type: Schema.Types.ObjectId,
        ref: "Artist",
        required: true
    },
    title: {
        type: String,
        required: true
    },
    track: [{
        // pull from Spotify DB
        albumNum: Number,
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
            type: Schema.Types.ObjectId,
            ref: "Track",
            required: true
        }
    }]
    ,
    releaseDate: {
        type: String,
        required: true
    },
    genres: {
        type: String,
        required: true
    },
    // ** might not work: pull in from Spotify **
    _id: {
        type: String,
        required: true
    }
    //  ** **
})

module.exports = mongoose.model("Album", albumSchema)