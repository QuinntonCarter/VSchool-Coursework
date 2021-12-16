const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// yearly view of selection (tracks or artists)
const list = new Schema({
    // artist or tracks
    selection: [{
        selectionName: String,
        genres: String,
        image: String,
        type: String,
        popularity: String,
        required: true
    }],
    title: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    },
    cueUser: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = mongoose.model("List", list)