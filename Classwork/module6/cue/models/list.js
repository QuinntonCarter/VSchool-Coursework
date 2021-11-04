const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new Schema({
    listTitle: {
        type: String || Number,
        required: true
    },
    tracks: [{
        // will need to be associated with frontend, default=+1 whatever list total is
        listNum: {
            type: Number
        },
        artist: {
            type: Schema.Types.ObjectId,
            ref: "Artist"
        },
        title: String,
        album: {
            type: Schema.Types.ObjectId,
            ref: "Album"
        },
        key: String,
        bpm: Number,
        _id: {
            type: Schema.Types.ObjectId,
            ref: "Track"
        }
    }],
    created: {
        type: Date,
        default: Date.now,
        required: true
    },
    byUser: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    medianBPM: {
        type: Number,
        required: true
    },
    private: {
        type: Boolean,
        required: true
    },
    votes: {
        type: Number,
        default: 0,
        votedUsers: [{
            type: Schema.Types.ObjectId,
            ref: "User"
        }]
    }
})

module.exports = mongoose.model("List", listSchema)