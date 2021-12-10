const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// yearly view of selection (tracks or artists)
const list = new Schema({
    // artist or tracks
    selection: [{
        type: String,
        required: true
    }],
    created: {
        type: Date,
        default: Date.now
    },
    mood: {
        type: String,
        required: true
    },
    cueUser: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = mongoose.model("List", list)