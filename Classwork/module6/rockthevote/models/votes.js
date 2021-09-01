const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const voteSchema = new Schema({
    upvote: {
        type: Number,
        default: 0
    },
    downvote: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model("Votes", voteSchema)