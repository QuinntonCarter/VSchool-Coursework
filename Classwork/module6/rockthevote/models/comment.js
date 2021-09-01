const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    votes: {
        type: [Schema.Types.ObjectId],
        ref: "Votes"
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: "Post",
        required: true
    }
})

module.exports = mongoose.model("Comment", commentSchema)