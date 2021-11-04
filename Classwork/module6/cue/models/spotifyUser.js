const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const spotifyUser = new Schema({
    spotifyID : {
        // pull from Spotify
        type: String,
        required: true
    },
    email: {
    // pull from Spotify
        type: String
    },
    country: {
        type: String
    },
    accountType: {
        type: String
    },
    cueAcc: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = mongoose.model("SpotifyUser", spotifyUser)