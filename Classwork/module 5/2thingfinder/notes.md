    + Choose a thing/noun of any kind, then write an express server with a GET route that sends back an array of that thing. X

    + Your GET endpoint should be able to check for any query parameters that may have been passed into the url of the request and filter the results based on those query parameters. X

# EXTRA CREDIT:

    - Write another route where an API user can filter by a maximum price AND a minimum price. You can make the maximum default to 1000000 and the minimum default to 0
    ?????

    - Consolidate the two end points you've already written.

# If you are stuck:

    USE THE LINES OF CODE BELOW AFTER ATTEMPTING TO WRITE THE CODE YOURSELF.

    This doesn't give you all the answers, but may help you on your way.

    app.get("/", (req, res)=>{
        console.log(req.query);
    });

    A really good method to filter out all of the items you need is the filter method.