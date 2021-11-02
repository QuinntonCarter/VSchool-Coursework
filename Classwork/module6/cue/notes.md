todo next
    functionality:
        -   create const axios.create => mongoDB
        -   implement routing between pages at certain endpoints
            +   link to= syntax for lists and search buttons in navbar
        -   fix searchbar and import to main view
        -   implement GET functions into appContext
        -   edit AuthForm and associated so there's no username error in props pass
    
    styles:
        -   fix cue banner. add padding or margins.
            +   consider setting to grid display a la rockTheVote

Notes to self:
    +   when you move files or otherwise restructor the module, check import syntax across files
    +   check dependency installs and versions if running into unexpected problems

* future implementations * :
    -   ability to get top played music information based on user account
    -   compare results between friends whose data is stored in mongoDB
    -   ability to login through various streaming services and stream from within app
    -   ability to converse about music on said platforms via the app


    {
  "name": "cueapp",
  "version": "1.0.0",
  "description": "App for users to create and save private setlists utilizing the Spotify API.",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "concurrently --kill-others-on-fail \"npm run server\" \"npm run client\"",
    "server": "nodemon server.js",
    "client": "cd client && npm start",
    "postinstall": "cd client && npm install"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bcrypt": "^5.0.1",
    "concurrently": "^6.3.0",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "express-jwt": "^6.1.0",
    "jsonwebtoken": "^8.5.1",
    "mongodb": "^4.1.3",
    "mongoose": "^5.13.10",
    "morgan": "^1.10.0",
    "nodemon": "^2.0.14"
  }
}
