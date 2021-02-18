# Intro to Express

    # Initialize a new node project
        - npm init -y
        
        - npm install <dependencies>

        - ** if run into issues w/ nodemon, remember (in package.json) to change "main" : (to) "server.js" (or whatever is filename where server is held) AND "start": "nodemon" . check port number as well! **

# Vocabulary

    # Route
        * An event listener for http requests

    # Endpoint
        * '/item' '/user'

    # Port (keep between 3000((create react app is on 3000)) - 6000)
        * localhost:9000/

# Nodemon (-g install globally, install once)
    * npm install -g nodemon

---- Rest API Architecture ----

# Intro Rest API Architecture

    # Rest - Representational State Transfer

    # Resource - Single item (object) in a database
        example : /user

    # Collection - A collection of similar items
        example : /users

    # Base (root) URL - example : http://google.com/ 
                                : https://amazon.com/

    # API Endpoint - example : http://amazon.com/movies
                    example single item: http://amazon.com/movies/f34359fj490

    # Parameters - example : /movies/:movieId

    # Query (query string) - example: /movies?genre=action&year=1999

    # Client - Frontend

    # Server - Intermediary

    # Request Method - CRUD - GET POST PUT DELETE

---- Request Body ----

# Middleware - a function that fires on the inbetween

# Request Body (req.body)

# UUID creates unique IDs (for use in practice, not necessary in real instances of ID creation)
    - npm install uuid

# Express Router - enables us to modularize our routes in express

# Modular File Organization

# URL Parameters

    # Parts of a URL
        * Base - ex: http://amazon.com
        * Endpoint - ex: http://amazon.com/images
        * Parameter - ex: http://amazon.com/images/F7489f5
        * Query

    # Parameters (req.params) - GET one

# URL Queries

        # Query Strings - (typically to filter results)
            * Begins with ?
            * Built of key=value pairs
            * Multiple queries separated by the "&" ampersand

# Middleware

    # What is it?
        * app.use()
        ((arguments))
        1. (optional) - Mount Path ( endpoint )
        2. Callback function - receives the request, response objects, also the "next" function

    # The "next" function
        * Moves on to the next middleware in line on our server
