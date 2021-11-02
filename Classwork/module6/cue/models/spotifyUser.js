const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const bcrypt = require('bcrypt');

const spotifyUser = new Schema({
    spotifyID : {
        type: String
    },
    displayName: {
        type: String
    },
    email: {
        type: String
    },
    accessToken: {
        type: String
    },
    refreshToken: {
        type: String
    },
    country: {
        type: String
    },
    accountType: {
        type: String
    }
})

// pre-save hook to encrypt user tokens on signup
// spotifyUser.pre("save", function(next){
//     const user = this
//     if(!user.isModified("accessToken")) return next()
//     bcrypt.hash(user.accessToken, 10, (err, hash) => {
//         if(err) return next(err)
//         user.accessToken = hash
//         next()
//     })
// })

// // // method to remove user's password for token/sending the response
// userSchema.methods.withoutPassword = function(){
//     const user = this.toObject()
//     delete user.password
//     return user
// }

module.exports = mongoose.model("SpotifyUser", spotifyUser)