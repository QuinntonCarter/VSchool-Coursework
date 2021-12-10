todo next
    first:
    -   play with passing query to backend. returns undefined currently: appcontext and userrouter,
    everything else:
        - create account needs to save spotify id to user model to block creation of multiple accounts by users
          + also save spotify username to user model
        - results view
        + before and after searching
        + send position information to backend to save oraganization
        X create consts gets for search in spotify.js
        X implement routing between pages at certain endpoints
        X fix searchbar and import to main view
        X routing between views
        X implement GET functions into appContext
        X edit AuthForm and associated so there's no username error in props pass
        X   create const axios.create => mongoDB
    
    styles:
        - fix cue banner. add padding or margins, ternary for spotify icon or cue text depending on token(s) status
            +   consider setting to grid display a la rockTheVote

Notes to self:
    + go back and change localStorage saving to cookie saving before prod deploy
    + when you move files or otherwise restructor the module, check import syntax across files
    + check dependency installs and versions if running into unexpected problems
    + *** populate: https://mongoosejs.com/docs/populate.html#:~:text=All%20_id%20s%20we%20store,good%20reason%20for%20doing%20so.
      ++  for adding album, artist etc to models more easily ***

** REVIEW ** :
    - logout and auto logout if tokens are missing

* future implementations * :
    - able to utilize multiple streaming services by signing into accounts
    - ability to get top played music information based on user account
    - compare results between friends whose data is stored in mongoDB
    - ability to login through various streaming services and stream from within app
    - ability to converse about music on said platforms via the app