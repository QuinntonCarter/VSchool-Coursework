const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    imgSrc: {
        type: String,
        required: true
    },
    content: { 
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    userString: {
        type: String,
        required: true
    },
    comment: [{
        content: String,
        comAuth: String,
        date: String,
        comVotes: {
            type: Number,
            default: 0
        },
        comVotedUsers: [{
            type: String
        }]
    }],
    posted: {
        type: Date,
        default: Date.now
    },
    votes: {
        type: Number,
        default: 0
    },
    votedUsers: [{
        type: String
    }]
})

module.exports = mongoose.model("Post", postSchema)