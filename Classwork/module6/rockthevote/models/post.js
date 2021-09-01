const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    votes: {
        type: [Schema.Types.ObjectId],
        ref: "Votes"
    },
    imgSrc: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    comment: {
        type: [Schema.Types.ObjectId],
        ref: "Comment"
    },
    posted: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Post", postSchema)